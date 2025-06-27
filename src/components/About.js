import React from "react";
import styled, { keyframes } from "styled-components";
import { FaAward, FaLeaf, FaUsers } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const energyPulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 0.8;
  }
  50% { 
    transform: scale(1.1);
    opacity: 1;
  }
`;

const AboutContainer = styled.section`
  padding: 8rem 5% 6rem;
  background: ${(props) => props.theme.colors.background};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 50%, ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.05)" : "rgba(59, 130, 246, 0.05)")} 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${(props) => (props.theme.isDarkMode ? "rgba(245, 158, 11, 0.05)" : "rgba(16, 185, 129, 0.05)")} 0%, transparent 50%);
    animation: ${float} 20s ease-in-out infinite;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #8b5cf6, #f59e0b)" : "linear-gradient(135deg, #1e3a8a, #7c3aed)")};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const AboutVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const SolarPanelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  perspective: 1200px;
`;

const MiniSolarPanel = styled.div`
  width: 120px;
  height: 90px;
  background: ${(props) => (props.theme.isDarkMode ? "linear-gradient(135deg, #0f172a, #1e293b)" : "linear-gradient(135deg, #1e293b, #334155)")};
  border-radius: 12px;
  position: relative;
  transform: perspective(800px) rotateX(${(props) => props.rotateX || 0}deg) rotateY(${(props) => props.rotateY || 0}deg);
  animation: ${float} ${(props) => props.duration || 6}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 15px 30px rgba(139, 92, 246, 0.2)" : "0 15px 30px rgba(59, 130, 246, 0.15)")};

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background: ${(props) => props.gradient};
    border-radius: 8px;
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    background: ${(props) =>
      props.theme.isDarkMode ? "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)" : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"};
    border-radius: 8px;
    transform: translate(-50%, -50%);
    animation: ${energyPulse} 3s ease-in-out infinite;
  }
`;

const StatsSection = styled.div`
  margin-bottom: 6rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.1)" : "0 20px 40px rgba(0, 0, 0, 0.05)")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.gradient};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 30px 60px rgba(139, 92, 246, 0.2)" : "0 30px 60px rgba(59, 130, 246, 0.15)")};
    background: ${(props) => props.theme.colors.cardHover};
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  background: ${(props) => props.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 600;
  margin: 0;
`;

const ValuesSection = styled.div``;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 20px 40px rgba(139, 92, 246, 0.15)" : "0 20px 40px rgba(59, 130, 246, 0.1)")};
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 20px rgba(139, 92, 246, 0.3)" : "0 10px 20px rgba(59, 130, 246, 0.2)")};
`;

const ValueTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

const About = () => {
  const { colors, isDarkMode } = useTheme();

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      delay: 0,
    },
    {
      number: "15+",
      label: "Years Experience",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: 0.2,
    },
    {
      number: "50MW+",
      label: "Total Capacity",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      delay: 0.4,
    },
    {
      number: "25+",
      label: "Countries Served",
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      delay: 0.6,
    },
  ];

  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We strive for the highest quality in every project, ensuring superior performance and reliability.",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description: "Committed to environmental protection through clean energy solutions and sustainable practices.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      icon: <FaUsers />,
      title: "Partnership",
      description: "Building long-term relationships with clients through trust, transparency, and exceptional service.",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
  ];

  const panelConfigs = [
    { rotateX: 20, rotateY: -15, delay: 0, duration: 8, gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
    { rotateX: -10, rotateY: 20, delay: 1, duration: 7, gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
    { rotateX: 15, rotateY: 10, delay: 2, duration: 9, gradient: "linear-gradient(135deg, #10b981, #059669)" },
    { rotateX: -20, rotateY: -10, delay: 0.5, duration: 6, gradient: "linear-gradient(135deg, #3b82f6, #2563eb)" },
    { rotateX: 10, rotateY: -20, delay: 1.5, duration: 8, gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
    { rotateX: -15, rotateY: 15, delay: 2.5, duration: 7, gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
  ];

  return (
    <AboutContainer id="about" theme={{ colors, isDarkMode }}>
      <AboutContent>
        <AboutHeader>
          <SectionTitle theme={{ isDarkMode }}>About Corner Stone</SectionTitle>
          <SectionSubtitle theme={{ colors }}>Leading the renewable energy revolution with cutting-edge solar technology</SectionSubtitle>
        </AboutHeader>

        <AboutGrid>
          <AboutText theme={{ colors, isDarkMode }}>
            <AboutDescription theme={{ colors }}>
              Corner Stone has been at the forefront of solar energy innovation for over 15 years. We specialize in large-scale solar installations for governments and institutions, combining advanced
              technology with comprehensive import/export services.
            </AboutDescription>
            <AboutDescription theme={{ colors }}>
              Our commitment to excellence has made us a trusted partner in the global transition to clean energy. From design to implementation, we deliver solutions that exceed expectations and
              drive sustainable growth.
            </AboutDescription>
          </AboutText>

          <AboutVisual>
            <SolarPanelGrid>
              {panelConfigs.map((config, index) => (
                <MiniSolarPanel key={index} rotateX={config.rotateX} rotateY={config.rotateY} delay={config.delay} duration={config.duration} gradient={config.gradient} theme={{ isDarkMode }} />
              ))}
            </SolarPanelGrid>
          </AboutVisual>
        </AboutGrid>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index} delay={stat.delay} gradient={stat.gradient} theme={{ colors, isDarkMode }}>
                <StatNumber gradient={stat.gradient}>{stat.number}</StatNumber>
                <StatLabel theme={{ colors }}>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsSection>

        <ValuesSection>
          <AboutHeader>
            <SectionTitle theme={{ isDarkMode }}>Our Core Values</SectionTitle>
            <SectionSubtitle theme={{ colors }}>The principles that guide our mission to transform the energy landscape</SectionSubtitle>
          </AboutHeader>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index} theme={{ colors, isDarkMode }}>
                <ValueIcon gradient={value.gradient} theme={{ isDarkMode }}>
                  {value.icon}
                </ValueIcon>
                <ValueTitle theme={{ colors }}>{value.title}</ValueTitle>
                <ValueDescription theme={{ colors }}>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
