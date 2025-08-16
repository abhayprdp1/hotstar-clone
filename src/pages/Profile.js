import React from "react";

function Profile() {
  return (
    <main style={{ padding: "2rem", minHeight: "80vh", background: "#181818", color: "#fff" }}>
      <h1 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>Profile</h1>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontWeight: 600, fontSize: "1.3rem" }}>User Information</h2>
        <p>Name: Abhay P</p>
        <p>Email: abhayprdp1@gmail.com</p>
        {/* Add more user details as needed */}
      </section>
      <section>
        <h2 style={{ fontWeight: 600, fontSize: "1.3rem" }}>Settings</h2>
        <p>Contact me : 9037162165</p>
        
        {/* Add settings options, toggles, etc. */}
      </section>
    </main>
  );
}

export default Profile;
