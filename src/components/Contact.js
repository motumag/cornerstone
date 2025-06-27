import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaBolt, FaUser, FaBuilding } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const fadeInUp = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(50px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const slideInLeft = keyframes`
  0% { 
    opacity: 0; 
    transform: translateX(-50px); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
  }
`;

const slideInRight = keyframes`
  0% { 
    opacity: 0; 
    transform: translateX(50px); 
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
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

const pulseRing = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%, 50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.33);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ContactContainer = styled.section`
  padding: 8rem 5% 6rem;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 30% 30%, ${(props) => (props.theme.isDarkMode ? "rgba(139, 92, 246, 0.08)" : "rgba(59, 130, 246, 0.08)")} 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, ${(props) => (props.theme.isDarkMode ? "rgba(245, 158, 11, 0.08)" : "rgba(16, 185, 129, 0.08)")} 0%, transparent 50%);
    animation: ${energyFlow} 20s ease-in-out infinite;
  }
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContactHeader = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background: ${(props) => props.theme.colors.card};
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 25px 50px rgba(0, 0, 0, 0.2)" : "0 25px 50px rgba(0, 0, 0, 0.1)")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 1s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #8b5cf6, #f59e0b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 35px 70px rgba(139, 92, 246, 0.2)" : "0 35px 70px rgba(59, 130, 246, 0.15)")};
  }

  @media (max-width: 768px) {
    padding: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
    border-radius: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
  animation: ${slideInLeft} 1s ease-out;
  animation-delay: ${(props) => props.delay}s;
  animation-fill-mode: both;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#3b82f6")};
    background: ${(props) => props.theme.colors.card};
    transform: translateY(-2px);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 25px rgba(139, 92, 246, 0.2)" : "0 10px 25px rgba(59, 130, 246, 0.15)")};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.theme.isDarkMode ? "#8b5cf6" : "#3b82f6")};
    background: ${(props) => props.theme.colors.card};
    transform: translateY(-2px);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 10px 25px rgba(139, 92, 246, 0.2)" : "0 10px 25px rgba(59, 130, 246, 0.15)")};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed, #f59e0b);
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    background-position: 100% 100%;
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.6);

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${slideInRight} 1s ease-out;
`;

const ContactCard = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 2.5rem 2rem;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.1)" : "0 20px 40px rgba(0, 0, 0, 0.05)")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${pulseRing} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

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
    transform: translateY(-10px) scale(1.02);
    box-shadow: ${(props) => (props.theme.isDarkMode ? "0 30px 60px rgba(139, 92, 246, 0.2)" : "0 30px 60px rgba(59, 130, 246, 0.15)")};
    background: ${(props) => props.theme.colors.cardHover};
  }
`;

const ContactIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${(props) => props.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: white;
  box-shadow: ${(props) => (props.theme.isDarkMode ? "0 15px 30px rgba(139, 92, 246, 0.3)" : "0 15px 30px rgba(59, 130, 246, 0.2)")};
  animation: ${pulseRing} 2.5s ease-in-out infinite;
`;

const ContactTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.8rem;
`;

const ContactDetail = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const FloatingDecoration = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${(props) => props.color || "#8b5cf6"};
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.6;
  box-shadow: 0 0 20px ${(props) => props.color || "#8b5cf6"};

  &::before {
    content: "☀";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: white;
  }
`;

const Contact = () => {
  const { colors, isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "info@cornerstone-solar.com\n+1 (301) 704‑8571",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: 0,
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      detail: "+1 (301) 704‑8571\n+251 90 456 7428",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      delay: 0.2,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      detail: "123 Solar Street\nGreen Energy District\nClean City, CC 12345",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      delay: 0.4,
    },
  ];

  return (
    <ContactContainer id="contact" theme={{ colors, isDarkMode }}>
      {/* Floating Decorations */}
      <FloatingDecoration style={{ top: "10%", left: "5%" }} color="#8b5cf6" delay={0} />
      <FloatingDecoration style={{ top: "20%", right: "10%" }} color="#f59e0b" delay={1} />
      <FloatingDecoration style={{ bottom: "20%", left: "8%" }} color="#10b981" delay={2} />
      <FloatingDecoration style={{ bottom: "30%", right: "15%" }} color="#3b82f6" delay={1.5} />

      <ContactContent>
        <ContactHeader>
          <SectionTitle theme={{ isDarkMode }}>Get In Touch</SectionTitle>
          <SectionSubtitle theme={{ colors }}>Ready to power your future with clean energy? Let's discuss your solar project</SectionSubtitle>
        </ContactHeader>

        <ContactGrid>
          <ContactForm onSubmit={handleSubmit} theme={{ colors, isDarkMode }}>
            <FormGroup delay={0}>
              <Label theme={{ colors }}>
                <FaUser style={{ marginRight: "0.5rem" }} />
                Full Name
              </Label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required theme={{ colors, isDarkMode }} />
            </FormGroup>

            <FormGroup delay={0.1}>
              <Label theme={{ colors }}>
                <FaEnvelope style={{ marginRight: "0.5rem" }} />
                Email Address
              </Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required theme={{ colors, isDarkMode }} />
            </FormGroup>

            <FormGroup delay={0.2}>
              <Label theme={{ colors }}>
                <FaBuilding style={{ marginRight: "0.5rem" }} />
                Company/Organization
              </Label>
              <Input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" theme={{ colors, isDarkMode }} />
            </FormGroup>

            <FormGroup delay={0.3}>
              <Label theme={{ colors }}>
                <FaBolt style={{ marginRight: "0.5rem" }} />
                Project Details
              </Label>
              <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your solar project requirements..." required theme={{ colors, isDarkMode }} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting} theme={{ isDarkMode }}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            {contactCards.map((card, index) => (
              <ContactCard key={index} delay={card.delay} gradient={card.gradient} theme={{ colors, isDarkMode }}>
                <ContactIcon gradient={card.gradient} theme={{ isDarkMode }}>
                  {card.icon}
                </ContactIcon>
                <ContactTitle theme={{ colors }}>{card.title}</ContactTitle>
                <ContactDetail theme={{ colors }}>
                  {card.detail.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < card.detail.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </ContactDetail>
              </ContactCard>
            ))}
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
