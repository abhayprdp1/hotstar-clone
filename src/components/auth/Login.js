import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Login attempted for: ${email}`);
  };

  return (
    <div style={{ maxWidth: "380px", margin: "2rem auto" }}>
      <h2>Login</h2>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button style={{ width: "100%" }} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
