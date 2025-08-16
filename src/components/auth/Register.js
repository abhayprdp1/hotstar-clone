import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Register attempted for: ${email}`);
  };

  return (
    <div style={{ maxWidth: "380px", margin: "2rem auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", marginBottom: "1rem" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={{ width: "100%", marginBottom: "1rem" }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          style={{ width: "100%", marginBottom: "1rem" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button style={{ width: "100%" }} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
