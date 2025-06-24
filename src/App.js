import React, { useEffect, useState } from "react";
import "./App.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import ThemeContext from "./theme/ThemeContext";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Experience from "./Components/Experience/Experience";
import RecentWork from "./Components/RecentWork/RecentWork";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "dark";
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <div className="container-fluid p-0">
          <Hero />
          <Experience />
          <RecentWork />
          <Skills />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
