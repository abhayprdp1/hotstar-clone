import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Sports from "./pages/Sports";
import Search from "./pages/Search";
import WatchPage from "./pages/WatchPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", background: "#181818" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
