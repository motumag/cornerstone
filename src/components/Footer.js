import React from "react";
import styled, { keyframes } from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSolarPanel, FaArrowUp } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.backgroundTertiary};
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #f59e0b, #10b981, #3b82f6);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  animation: ${float} 8s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const CompanyInfo = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #8b5cf6, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 20px rgba(139, 92, 246, 0.3)" : "0 10px 20px rgba(59, 130, 246, 0.2)")};
`;

const CompanyDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 15px 30px rgba(139, 92, 246, 0.3)" : "0 15px 30px rgba(59, 130, 246, 0.2)")};
    color: white;

    &::before {
      opacity: 1;
    }

    svg {
      position: relative;
      z-index: 1;
    }
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
  }
`;

const FooterLink = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
    padding-left: 20px;

    &::before {
      opacity: 1;
      left: 0;
    }
  }
`;

const ContactInfo = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
`;

const BackToTop = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #f59e0b);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 25px rgba(139, 92, 246, 0.4)" : "0 10px 25px rgba(59, 130, 246, 0.3)")};
  position: relative;
  overflow: hidden;

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

  &:hover {
    transform: translateY(-3px) rotate(360deg);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 20px 40px rgba(139, 92, 246, 0.6)" : "0 20px 40px rgba(59, 130, 246, 0.4)")};

    &::before {
      left: 100%;
    }
  }
`;

const Footer = () => {
  const { colors, isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Solar Installation", href: "#services" },
    { name: "Import/Export", href: "#services" },
    { name: "Maintenance", href: "#services" },
    { name: "Consultation", href: "#contact" },
  ];

  const socialMedia = [
    { icon: <FaFacebook />, href: "#", gradient: "linear-gradient(135deg, #1877f2, #4267b2)" },
    { icon: <FaTwitter />, href: "#", gradient: "linear-gradient(135deg, #1da1f2, #0077b5)" },
    { icon: <FaLinkedin />, href: "#", gradient: "linear-gradient(135deg, #0077b5, #004182)" },
    { icon: <FaInstagram />, href: "#", gradient: "linear-gradient(135deg, #e1306c, #fd1d1d)" },
  ];

  return (
    <FooterContainer theme={{ colors, isDarkMode }}>
      <FooterContent>
        <FooterGrid>
          <FooterSection delay={0}>
            <CompanyInfo>
              <Logo theme={{ colors }}>
                <LogoIcon theme={{ isDarkMode }}>
                  <FaSolarPanel />
                </LogoIcon>
                Corner Stone
              </Logo>
              <CompanyDescription theme={{ colors }}>
                Leading the renewable energy revolution with cutting-edge solar technology. Transforming governments and institutions worldwide with sustainable energy solutions.
              </CompanyDescription>
              <SocialLinks>
                {socialMedia.map((social, index) => (
                  <SocialLink key={index} href={social.href} gradient={social.gradient} theme={{ colors, isDarkMode }}>
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </CompanyInfo>
          </FooterSection>

          <FooterSection delay={0.2}>
            <FooterTitle theme={{ colors }}>Quick Links</FooterTitle>
            {quickLinks.map((link, index) => (
              <FooterLink key={index} href={link.href} theme={{ colors }}>
                {link.name}
              </FooterLink>
            ))}
          </FooterSection>

          <FooterSection delay={0.4}>
            <FooterTitle theme={{ colors }}>Our Services</FooterTitle>
            {services.map((service, index) => (
              <FooterLink key={index} href={service.href} theme={{ colors }}>
                {service.name}
              </FooterLink>
            ))}
          </FooterSection>

          <FooterSection delay={0.6}>
            <FooterTitle theme={{ colors }}>Contact Info</FooterTitle>
            <ContactInfo theme={{ colors }}>
              <p>📧 info@cornerstone-solar.com</p>
              <p>📞 +1 (301) 704‑8571</p>
              <p>
                📍 123 Solar Street
                <br />
                Green Energy District
                <br />
                Clean City, CC 12345
              </p>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom theme={{ colors }}>
          <Copyright theme={{ colors }}>© 2024 Corner Stone. All rights reserved. | Powering the future with clean energy.</Copyright>
          <BackToTop onClick={scrollToTop} theme={{ isDarkMode }}>
            <FaArrowUp />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
