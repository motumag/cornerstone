import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Default theme values to prevent undefined errors
const getDefaultTheme = (isDarkMode) => ({
  isDarkMode,
  toggleTheme: () => {},
  colors: {
    // Primary colors
    primary: "#f59e0b",
    primaryDark: "#d97706",
    secondary: "#2563eb",
    secondaryDark: "#1d4ed8",
    accent: "#10b981",
    accentDark: "#059669",

    // Background colors
    background: isDarkMode ? "#0f172a" : "#ffffff",
    backgroundSecondary: isDarkMode ? "#1e293b" : "#f8fafc",
    backgroundTertiary: isDarkMode ? "#334155" : "#e2e8f0",

    // Text colors
    textPrimary: isDarkMode ? "#f8fafc" : "#1f2937",
    textSecondary: isDarkMode ? "#cbd5e1" : "#6b7280",
    textMuted: isDarkMode ? "#94a3b8" : "#9ca3af",

    // Border colors
    border: isDarkMode ? "#374151" : "#e5e7eb",
    borderLight: isDarkMode ? "#4b5563" : "#f3f4f6",

    // Card colors
    card: isDarkMode ? "#1e293b" : "#ffffff",
    cardHover: isDarkMode ? "#334155" : "#f9fafb",

    // Hero gradient
    heroGradient: isDarkMode
      ? "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #7c3aed 50%, #f59e0b 75%, #1e293b 100%)"
      : "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #8b5cf6 50%, #f59e0b 75%, #10b981 100%)",

    // Service gradients
    serviceGradient: isDarkMode ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
  },
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Set light theme as default
      setIsDarkMode(false);
    }
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Return default theme during initialization to prevent undefined errors
  if (!isInitialized) {
    return <ThemeContext.Provider value={getDefaultTheme(false)}>{children}</ThemeContext.Provider>;
  }

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Primary colors
      primary: "#f59e0b",
      primaryDark: "#d97706",
      secondary: "#2563eb",
      secondaryDark: "#1d4ed8",
      accent: "#10b981",
      accentDark: "#059669",

      // Background colors
      background: isDarkMode ? "#0f172a" : "#ffffff",
      backgroundSecondary: isDarkMode ? "#1e293b" : "#f8fafc",
      backgroundTertiary: isDarkMode ? "#334155" : "#e2e8f0",

      // Text colors
      textPrimary: isDarkMode ? "#f8fafc" : "#1f2937",
      textSecondary: isDarkMode ? "#cbd5e1" : "#6b7280",
      textMuted: isDarkMode ? "#94a3b8" : "#9ca3af",

      // Border colors
      border: isDarkMode ? "#374151" : "#e5e7eb",
      borderLight: isDarkMode ? "#4b5563" : "#f3f4f6",

      // Card colors
      card: isDarkMode ? "#1e293b" : "#ffffff",
      cardHover: isDarkMode ? "#334155" : "#f9fafb",

      // Hero gradient
      heroGradient: isDarkMode
        ? "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #7c3aed 50%, #f59e0b 75%, #1e293b 100%)"
        : "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #8b5cf6 50%, #f59e0b 75%, #10b981 100%)",

      // Service gradients
      serviceGradient: isDarkMode ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
    },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
