import React from "react";
import { Link } from "react-router-dom";

const navTabs = [
  { name: "HOME", path: "/" },
  { name: "MOVIES", path: "/movies" },
  { name: "TV SHOWS", path: "/tvshows" },
  { name: "SPORTS", path: "/sports" },
  { name: "SEARCH", path: "/search" },
  { name: "PROFILE", path: "/profile" },
];

function Header() {
  return (
    <nav style={{
      display: "flex",
      gap: 30,
      alignItems: "center",
      padding: "1.2rem 2rem",
      background: "#191e23",
      color: "#fff",
      fontWeight: 600,
      fontSize: 16
    }}>
      {navTabs.map(tab => (
        <Link
          key={tab.name}
          to={tab.path}
          style={{ color: "#fff", textDecoration: "none", letterSpacing: "0.5px" }}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}

export default Header;
