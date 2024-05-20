import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Markets from "./components/Markets";
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";
import MainContent from "./components/MainContent";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen">
        <Header />
        <div class="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/" element={<OrderSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
