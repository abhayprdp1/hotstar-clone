import React from "react";

function Footer() {
  return (
    <footer style={{
      padding: "1rem",
      color: "#bbb",
      fontSize: 13,
      textAlign: "center",
      marginTop: "2rem"
    }}>
      &copy; {new Date().getFullYear()} Hotstar Clone – Educational Project
    </footer>
  );
}

export default Footer;
