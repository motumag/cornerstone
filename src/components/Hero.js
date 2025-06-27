import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlay, FaBolt, FaSun, FaAtom, FaRocket } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const galaxyRotate = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`;

const energyRipple = keyframes`
  0% { 
    transform: scale(0);
    opacity: 1;
  }
  100% { 
    transform: scale(4);
    opacity: 0;
  }
`;

const cosmicPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(245, 158, 11, 0.3);
    filter: brightness(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(245, 158, 11, 0.6), 0 0 120px rgba(16, 185, 129, 0.4);
    filter: brightness(1.3);
  }
`;

const solarFlare = keyframes`
  0% { 
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    transform: scale(1);
  }
  25% { 
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    transform: scale(1.1);
  }
  50% { 
    background: linear-gradient(135deg, #f59e0b, #d97706);
    transform: scale(1.2);
  }
  75% { 
    background: linear-gradient(135deg, #10b981, #059669);
    transform: scale(1.1);
  }
  100% { 
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    transform: scale(1);
  }
`;

const energyFlow = keyframes`
  0% { 
    transform: translateX(-200px) rotate(0deg) scale(0);
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: translateX(-50px) rotate(180deg) scale(1);
  }
  70% {
    opacity: 1;
    transform: translateX(50px) rotate(270deg) scale(1.2);
  }
  100% { 
    transform: translateX(200px) rotate(360deg) scale(0);
    opacity: 0;
  }
`;

const stellarWave = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.heroGradient};
  background-size: 400% 400%;
  animation: ${stellarWave} 8s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25% 25%, ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(59, 130, 246, 0.2)")} 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, ${(props) => (props.theme.isDarkMode ? "rgba(245, 158, 11, 0.2)" : "rgba(16, 185, 129, 0.2)")} 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, ${(props) => (props.theme.isDarkMode ? "rgba(16, 185, 129, 0.1)" : "rgba(139, 92, 246, 0.1)")} 0%, transparent 70%);
    animation: ${galaxyRotate} 30s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='${(
      props
    ) => (props.theme.isDarkMode ? "0.05" : "0.1")}'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${float} 20s ease-in-out infinite;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} ${(props) => props.duration || 6}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  opacity: ${(props) => (props.theme.isDarkMode ? 0.6 : 0.4)};
  z-index: 0;

  &:nth-child(odd) {
    animation: ${galaxyRotate} ${(props) => props.duration * 2 || 12}s linear infinite;
  }
`;

const CosmicIcon = styled.div`
  font-size: ${(props) => props.size || "3rem"};
  color: ${(props) => props.color || "#8b5cf6"};
  filter: drop-shadow(0 0 20px ${(props) => props.color || "#8b5cf6"});
  animation: ${cosmicPulse} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 4%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 6%;
  }

  @media (max-width: 480px) {
    padding: 0 5%;
    gap: 1.5rem;
  }
`;

const HeroText = styled.div`
  color: ${(props) => (props.theme.isDarkMode ? "#f8fafc" : "#ffffff")};
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.2)")};
  backdrop-filter: blur(15px);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(255, 255, 255, 0.3)")};
  animation: ${cosmicPulse} 4s ease-in-out infinite;
  font-weight: 600;

  &::before {
    content: "🚀";
    margin-right: 0.5rem;
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #f8fafc 0%, #8b5cf6 50%, #f59e0b 100%)" : "linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #f8fafc 100%)")};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.5));

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #7c3aed, #f59e0b);
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    background-position: 100% 100%;
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.6);

    &::before {
      left: 100%;
    }

    &::after {
      width: 100px;
      height: 100px;
      animation: ${energyRipple} 0.6s ease-out;
    }
  }
`;

const SecondaryButton = styled.button`
  background: ${(props) => (props.theme.isDarkMode ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.1)")};
  color: white;
  border: 2px solid ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.5)" : "rgba(255, 255, 255, 0.4)")};
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    background: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.2)")};
    transform: translateY(-4px) scale(1.05);
    border-color: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.8)" : "rgba(255, 255, 255, 0.8)")};
    box-shadow: 0 15px 30px rgba(139, 92, 246, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
`;

const SolarPanelContainer = styled.div`
  position: relative;
  perspective: 1200px;
`;

const SolarPanel = styled.div`
  width: 450px;
  height: 350px;
  background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #0f172a, #1e293b, #334155)" : "linear-gradient(135deg, #1e293b, #334155, #475569)")};
  border-radius: 25px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: perspective(1200px) rotateY(-20deg) rotateX(20deg);
  animation: ${float} 8s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 3px;
    padding: 15px;
    animation: ${solarFlare} 6s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    background: ${(props) =>
      props.theme.isDarkMode
        ? "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(245, 158, 11, 0.2) 50%, transparent 100%)"
        : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%)"};
    border-radius: 15px;
    transform: translate(-50%, -50%);
    animation: ${cosmicPulse} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  }
`;

const EnergyParticle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background: ${(props) => props.color || "#8b5cf6"};
  border-radius: 50%;
  animation: ${energyFlow} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top}%;
  box-shadow: 0 0 20px ${(props) => props.color || "#8b5cf6"};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StatsContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
`;

const StatCard = styled.div`
  background: ${(props) => (props.theme.isDarkMode ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.95)")};
  backdrop-filter: blur(20px);
  padding: 1.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  border: 1px solid ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.2)")};

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 50px rgba(139, 92, 246, 0.3);
    background: ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 1)")};
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#7c3aed")};
    margin: 0;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => (props.theme.isDarkMode ? "#cbd5e1" : "#6b7280")};
    margin: 0.5rem 0 0 0;
    font-weight: 500;
  }
`;

const PowerIndicator = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${cosmicPulse} 2.5s ease-in-out infinite;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);

  &::before {
    content: "⚡";
    animation: ${energyRipple} 2s ease-in-out infinite;
  }
`;

const Hero = () => {
  const { colors, isDarkMode } = useTheme();
  const [energyLevel, setEnergyLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel((prev) => (prev + 1) % 101);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const particleColors = isDarkMode ? ["#8b5cf6", "#f59e0b", "#10b981", "#3b82f6"] : ["#7c3aed", "#d97706", "#059669", "#2563eb"];

  return (
    <HeroContainer theme={{ colors, isDarkMode }} id="hero">
      {/* Cosmic Floating Elements */}
      <FloatingElement style={{ top: "15%", left: "8%" }} duration={10} delay={0} theme={{ isDarkMode }}>
        <CosmicIcon size="4rem" color="#8b5cf6" delay={0}>
          <FaAtom />
        </CosmicIcon>
      </FloatingElement>
      <FloatingElement style={{ top: "25%", right: "12%" }} duration={12} delay={2} theme={{ isDarkMode }}>
        <CosmicIcon size="3rem" color="#f59e0b" delay={1}>
          <FaRocket />
        </CosmicIcon>
      </FloatingElement>
      <FloatingElement style={{ bottom: "25%", left: "10%" }} duration={8} delay={4} theme={{ isDarkMode }}>
        <CosmicIcon size="3.5rem" color="#10b981" delay={2}>
          <FaSun />
        </CosmicIcon>
      </FloatingElement>
      <FloatingElement style={{ top: "60%", right: "8%" }} duration={14} delay={3} theme={{ isDarkMode }}>
        <CosmicIcon size="2.5rem" color="#3b82f6" delay={1.5}>
          <FaBolt />
        </CosmicIcon>
      </FloatingElement>
      <FloatingElement style={{ bottom: "35%", right: "18%" }} duration={9} delay={1} theme={{ isDarkMode }}>
        <CosmicIcon size="2rem" color="#8b5cf6" delay={0.5}>
          <FaAtom />
        </CosmicIcon>
      </FloatingElement>

      <HeroContent>
        <HeroText theme={{ isDarkMode }}>
          <Badge theme={{ isDarkMode }}>Next-Generation Solar Technology</Badge>
          <HeroTitle theme={{ isDarkMode }}>
            Revolutionizing Energy
            <br />
            for Tomorrow's World
          </HeroTitle>
          <HeroSubtitle>
            Corner Stone leads the cosmic evolution of solar technology, delivering cutting-edge installations for governments and institutions worldwide. Experience the future of clean energy with
            our revolutionary solutions.
          </HeroSubtitle>
          <CTAButtons>
            <PrimaryButton onClick={scrollToContact}>
              Launch Project <FaRocket />
            </PrimaryButton>
            <SecondaryButton theme={{ isDarkMode }}>
              <FaPlay /> Explore Demo
            </SecondaryButton>
          </CTAButtons>
        </HeroText>

        <HeroVisual>
          <SolarPanelContainer>
            <SolarPanel theme={{ isDarkMode }} />
            <PowerIndicator>{energyLevel}% Cosmic Energy</PowerIndicator>

            {/* Enhanced Energy Flow Animation */}
            {[...Array(8)].map((_, i) => (
              <EnergyParticle key={i} delay={i * 0.4} top={25 + i * 6} color={particleColors[i % particleColors.length]} />
            ))}
          </SolarPanelContainer>

          <StatsContainer>
            <StatCard delay={0} theme={{ isDarkMode }}>
              <h3>500+</h3>
              <p>Cosmic Projects</p>
            </StatCard>
            <StatCard delay={0.5} theme={{ isDarkMode }}>
              <h3>15+</h3>
              <p>Years Innovation</p>
            </StatCard>
            <StatCard delay={1} theme={{ isDarkMode }}>
              <h3>50MW+</h3>
              <p>Energy Harvested</p>
            </StatCard>
          </StatsContainer>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
