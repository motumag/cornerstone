import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) => (props.isScrolled ? (props.theme.isDarkMode ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)") : "transparent")};
  backdrop-filter: blur(15px);
  border-bottom: ${(props) => (props.isScrolled ? (props.theme.isDarkMode ? "1px solid rgba(139, 92, 246, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)") : "none")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) => (props.isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none")};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #8b5cf6, #f59e0b)" : "linear-gradient(135deg, #3b82f6, #8b5cf6)")};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${(props) => (props.theme.isDarkMode ? "#f8fafc" : "#1f2937")};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #8b5cf6, #f59e0b)" : "linear-gradient(135deg, #3b82f6, #8b5cf6)")};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#7c3aed")};
    background: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.1)" : "rgba(59, 130, 246, 0.1)")};

    &::before {
      width: 80%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => (props.theme.isDarkMode ? "#f8fafc" : "#1f2937")};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#7c3aed")};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${(props) => (props.theme.isDarkMode ? "rgba(15, 23, 42, 0.98)" : "rgba(255, 255, 255, 0.98)")};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.1)" : "rgba(0, 0, 0, 0.1)")};
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5%;
  gap: 1rem;
`;

const MobileNavLink = styled.a`
  color: ${(props) => (props.theme.isDarkMode ? "#f8fafc" : "#1f2937")};
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background: ${(props) => (props.theme.isDarkMode ? "rgba(30, 41, 59, 0.5)" : "rgba(248, 250, 252, 0.5)")};
  border: 1px solid ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.1)" : "rgba(0, 0, 0, 0.05)")};

  &:hover {
    color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#7c3aed")};
    background: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(59, 130, 246, 0.1)")};
    transform: translateX(10px);
    border-color: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(59, 130, 246, 0.2)")};
  }
`;

const ThemeToggleContainer = styled.div`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Header = () => {
  const { colors, isDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled} theme={{ isDarkMode, colors }}>
        <HeaderContent>
          <Logo theme={{ isDarkMode }} onClick={() => scrollToSection("hero")}>
            Corner Stone
          </Logo>

          <Nav>
            <NavLinks>
              <NavLink theme={{ isDarkMode }} onClick={() => scrollToSection("hero")}>
                Home
              </NavLink>
              <NavLink theme={{ isDarkMode }} onClick={() => scrollToSection("services")}>
                Services
              </NavLink>
              <NavLink theme={{ isDarkMode }} onClick={() => scrollToSection("about")}>
                About
              </NavLink>
              <NavLink theme={{ isDarkMode }} onClick={() => scrollToSection("contact")}>
                Contact
              </NavLink>
            </NavLinks>
            <ThemeToggleContainer>
              <ThemeToggle />
            </ThemeToggleContainer>
          </Nav>

          <MobileMenuButton theme={{ isDarkMode }} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen} theme={{ isDarkMode }}>
        <MobileNavLinks>
          <MobileNavLink theme={{ isDarkMode }} onClick={() => scrollToSection("hero")}>
            Home
          </MobileNavLink>
          <MobileNavLink theme={{ isDarkMode }} onClick={() => scrollToSection("services")}>
            Services
          </MobileNavLink>
          <MobileNavLink theme={{ isDarkMode }} onClick={() => scrollToSection("about")}>
            About
          </MobileNavLink>
          <MobileNavLink theme={{ isDarkMode }} onClick={() => scrollToSection("contact")}>
            Contact
          </MobileNavLink>
          <ThemeToggleContainer>
            <ThemeToggle />
          </ThemeToggleContainer>
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};

export default Header;
