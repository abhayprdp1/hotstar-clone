import React from "react";
const Hero = () => (
  <section
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "2rem 0",
      padding: "3rem 1rem 2rem 1rem",
      borderRadius: 24,
      background: "rgba(30,34,47,0.71)",
      boxShadow: "0 8px 48px 2px #0b13352a, 0 1.5px 4px #2bc6ff22",
      backdropFilter: "blur(5.5px)"
    }}>
    <h1 style={{
      fontSize: "2.5rem",
      fontWeight: 800,
      margin: 0,
      letterSpacing: "1.6px",
      textShadow: "1px 2px 8px #141a28cc"
    }}>
      Welcome to Hotstar Clone
    </h1>
    <p style={{
      fontSize: "1.12rem",
      color: "#e0fafe",
      margin: "1.05rem 0 0"
    }}>
      Watch Latest Movies, TV Shows & Live Sports
    </p>
  </section>
);
export default Hero;
