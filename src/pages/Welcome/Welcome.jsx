import React from "react";
import { motion } from "framer-motion";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 0.8, ease: "easeOut" },
            y: { delay: 0.8, repeat: Infinity, duration: 3, ease: "easeInOut" },
          }}
        >
          <img src="/luna.png" alt="luna" />
        </motion.div>

        <div className="hero-content">
          <h1 className="hero-heading">Welcome to luna</h1>
          <p className="hero-para">
            For the days that feel heavy, unclear, or slow. You don’t need to
            fix everything right now. 🌸
          </p>
          <Link to="/check-in"><button className="hero-btn">Let's Begin</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
