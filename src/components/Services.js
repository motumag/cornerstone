import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSolarPanel, FaShieldAlt, FaChartLine, FaUsers, FaBolt, FaShip, FaTools, FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const slideInRight = keyframes`
  0% { 
    opacity: 0; 
    transform: translateX(100px); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
  }
`;

const energyPulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const rotateIcon = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ServicesContainer = styled.section`
  padding: 8rem 5% 6rem;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  transition: all 0.3s ease;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${float} 8s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.2)" : "0 20px 40px rgba(0, 0, 0, 0.1)")};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) => props.gradient};
    border-radius: 24px 24px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${(props) =>
      props.theme.isDarkMode ? "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)" : "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"};
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 30px 60px rgba(139, 92, 246, 0.2)" : "0 30px 60px rgba(59, 130, 246, 0.15)")};
    background: ${(props) => props.theme.colors.cardHover};

    &::after {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 90px;
  height: 90px;
  background: ${(props) => props.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 15px 30px rgba(139, 92, 246, 0.3)" : "0 15px 30px rgba(59, 130, 246, 0.2)")};
  animation: ${rotateIcon} 8s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;

  svg {
    color: ${(props) => (props.theme.isDarkMode ? "#10b981" : "#059669")};
    margin-right: 0.8rem;
    font-size: 1.1rem;
    animation: ${energyPulse} 2s ease-in-out infinite;
  }

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
    transform: translateX(5px);
    transition: all 0.3s ease;
  }
`;

const FeatureSection = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 30px rgba(0, 0, 0, 0.2)" : "0 10px 30px rgba(0, 0, 0, 0.1)")};
  position: relative;
  overflow: hidden;
  animation: ${slideInRight} 1s ease-out;
  animation-delay: 1s;
  animation-fill-mode: both;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.theme.isDarkMode
        ? "linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(245, 158, 11, 0.05), rgba(16, 185, 129, 0.05))"
        : "linear-gradient(45deg, rgba(37, 99, 235, 0.05), rgba(245, 158, 11, 0.05), rgba(16, 185, 129, 0.05))"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textPrimary};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      color: white;
      animation: ${float} 2s ease-in-out infinite;
    }
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 1rem;

  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(37, 99, 235, 0.3));
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const FeatureDesc = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  transition: opacity 0.3s ease;

  ${FeatureItem}:hover & {
    opacity: 1;
  }
`;

const SolarBackground = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 100px;
  height: 100px;
  opacity: 0.1;
  animation: ${float} 8s ease-in-out infinite;

  svg {
    width: 100%;
    height: 100%;
    color: #f59e0b;
  }
`;

const Services = () => {
  const { colors, isDarkMode } = useTheme();

  const services = [
    {
      icon: <FaSolarPanel />,
      title: "Solar Installation",
      description: "Advanced solar panel installations for governments and large institutions with cutting-edge technology and maximum efficiency.",
      features: ["Government-grade solar panels", "Large-scale installation projects", "Advanced monitoring systems", "24/7 technical support", "Performance optimization"],
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      delay: 0,
    },
    {
      icon: <FaShip />,
      title: "Import/Export Services",
      description: "Comprehensive international trade solutions for solar equipment and renewable energy components across global markets.",
      features: ["Global supply chain management", "Custom clearance assistance", "Quality assurance protocols", "Logistics coordination", "International partnerships"],
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      delay: 0.2,
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services ensuring optimal performance and longevity of your solar energy systems.",
      features: ["Preventive maintenance programs", "Emergency repair services", "Performance monitoring", "System upgrades", "Remote diagnostics"],
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      delay: 0.4,
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description: "ISO certified processes",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Tracking",
      description: "Real-time monitoring",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "15+ years experience",
    },
  ];

  return (
    <ServicesContainer id="services" theme={{ colors }}>
      <SolarBackground>
        <FaBolt />
      </SolarBackground>

      <ServicesContent>
        <SectionHeader>
          <SectionTitle theme={{ isDarkMode }}>Our Revolutionary Services</SectionTitle>
          <SectionSubtitle theme={{ colors }}>Delivering cutting-edge solar solutions with unmatched expertise and global reach</SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} delay={service.delay} gradient={service.gradient} theme={{ colors, isDarkMode }}>
              <ServiceIcon gradient={service.gradient} theme={{ isDarkMode }}>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle theme={{ colors }}>{service.title}</ServiceTitle>
              <ServiceDescription theme={{ colors }}>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex} theme={{ colors, isDarkMode }}>
                    <FaCheckCircle />
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <FeatureSection theme={{ colors, isDarkMode }}>
          <SectionHeader>
            <SectionTitle theme={{ isDarkMode }}>Why Choose Corner Stone?</SectionTitle>
            <SectionSubtitle theme={{ colors }}>We combine expertise, innovation, and reliability to deliver exceptional solar solutions.</SectionSubtitle>
          </SectionHeader>

          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureItem key={index} theme={{ colors, isDarkMode }}>
                <FeatureIcon theme={{ colors, isDarkMode }}>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDesc>{feature.description}</FeatureDesc>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </FeatureSection>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
