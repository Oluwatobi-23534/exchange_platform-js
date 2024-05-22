import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";
import MainContent from "./components/MainContent";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";
import "./App.css";
import Trading from "./components/Trading";
import { GlobalFonts } from "./components/fonts";

function App() {
  return (
    <Router>
      <GlobalFonts />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <OrderSection />
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trading" element={<Trading />} />
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
