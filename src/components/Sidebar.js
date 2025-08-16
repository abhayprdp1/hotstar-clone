import React from "react";

const menu = [
  { icon: "🏠", label: "Home" },
  { icon: "👑", label: "VIP" },
  { icon: "📺", label: "TV" },
  { icon: "🎬", label: "Movies" },
  { icon: "⚽", label: "Sports" }
];

function Sidebar() {
  return (
    <aside style={{
      width: 72,
      background: "#141414",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "1rem",
      gap: "2rem"
    }}>
      <div style={{ fontWeight: "bold", color: "#fff", fontSize: 22, marginBottom: "2rem" }}>★</div>
      {menu.map((item, idx) => (
        <div key={idx}
          style={{ color: "#fff", fontSize: 26, marginBottom: 18, cursor: "pointer" }}
          title={item.label}
        >{item.icon}</div>
      ))}
      <button style={{
        marginTop: "auto",
        marginBottom: "2rem",
        color: "#fff",
        background: "#1f80e0",
        border: "none",
        borderRadius: 6,
        padding: "0.6rem 1.1rem",
        fontWeight: 600,
        cursor: "pointer"
      }}>Subscribe</button>
    </aside>
  );
}

export default Sidebar;
