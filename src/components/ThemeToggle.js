import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
`;

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${(props) => (props.isDarkMode ? "linear-gradient(135deg, #1e293b, #334155)" : "linear-gradient(135deg, #3b82f6, #2563eb)")};
  box-shadow: ${(props) => (props.isDarkMode ? "0 4px 14px 0 rgba(31, 41, 55, 0.4)" : "0 4px 14px 0 rgba(37, 99, 235, 0.4)")};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) => (props.isDarkMode ? "0 6px 20px 0 rgba(31, 41, 55, 0.6)" : "0 6px 20px 0 rgba(37, 99, 235, 0.6)")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ToggleSwitch = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isDarkMode ? "32px" : "2px")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 0.8rem;
    color: ${(props) => (props.isDarkMode ? "#1e293b" : "#f59e0b")};
    animation: ${(props) => (props.isToggling ? rotate : "none")} 0.5s ease-in-out;
  }
`;

const Stars = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.isDarkMode ? "8px" : "45px")};
  transform: translateY(-50%);
  opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
  transition: opacity 0.3s ease;

  &::before,
  &::after {
    content: "✦";
    position: absolute;
    color: #f59e0b;
    font-size: 8px;
    animation: ${bounce} 2s infinite;
  }

  &::before {
    top: -3px;
    left: 0;
  }

  &::after {
    bottom: -3px;
    right: 0;
    animation-delay: 0.5s;
  }
`;

const SunRays = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.isDarkMode ? "45px" : "8px")};
  transform: translateY(-50%);
  opacity: ${(props) => (props.isDarkMode ? 0 : 1)};
  transition: opacity 0.3s ease;

  &::before,
  &::after {
    content: "☀";
    position: absolute;
    color: #fbbf24;
    font-size: 8px;
    animation: ${rotate} 3s linear infinite;
  }

  &::before {
    top: -2px;
    left: 0;
  }

  &::after {
    bottom: -2px;
    right: 0;
    animation-direction: reverse;
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isToggling, setIsToggling] = React.useState(false);

  const handleToggle = () => {
    setIsToggling(true);
    toggleTheme();
    setTimeout(() => setIsToggling(false), 500);
  };

  return (
    <ToggleContainer>
      <ToggleButton onClick={handleToggle} isDarkMode={isDarkMode} aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
        <Stars isDarkMode={isDarkMode} />
        <SunRays isDarkMode={isDarkMode} />
        <ToggleSwitch isDarkMode={isDarkMode} isToggling={isToggling}>
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </ToggleSwitch>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
