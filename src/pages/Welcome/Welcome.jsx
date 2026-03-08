import React from "react";
import { motion } from "framer-motion";
import "./Welcome.css";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const Welcome = () => {
  return (
    <>
      <SEO
        title=" Luna — Find Clarity in 2 Minutes When You Feel Stressed or Lost"
        description="Luna is a free 2-minute guided reflection for people feeling overwhelmed, anxious, or lost. No signup. No pressure. Just clarity."
        content="stress relief, feeling lost, 
        anxiety help, gratitude journal, mental clarity, 
        overwhelmed, free meditation tool, 2 minute reflection"
      />

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
              y: {
                delay: 0.8,
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
            }}
          >
            <img src="/luna.png" alt="luna" />
          </motion.div>

          <div className="hero-content">
            <h1 className="hero-heading">Welcome to luna</h1>
            <p className="hero-para">
              Luna gives you 2 quiet minutes to breathe, reflect, and find a
              little clarity — even on your hardest days. 🌸
            </p>
            <Link to="/check-in">
              <button className="hero-btn">Let's Begin</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
