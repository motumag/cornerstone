import React from "react";
import styled from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.background};
  color: ${(props) => props.textColor};
  transition: all 0.3s ease;
`;

const AppContent = () => {
  const { colors } = useTheme();

  return (
    <AppContainer background={colors.background} textColor={colors.textPrimary}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
