import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import "./CheckIn.css";

const feelings = ["A little lost", "Tired", "Heavy", "Unclear", "Okay"];

const CheckIn = ({ setChoosedFeeling }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SEO
        title=" Luna — How Are You Feeling Right Now? | 2 Minute Check-In"
        description="Take a gentle 2-minute check-in with yourself. Luna helps you pause, reflect, and find clarity when you feel stressed, lost, or overwhelmed. Free, no signup."
        content="daily check-in, how am I feeling, stress check, 
          mental health check-in, feeling overwhelmed, feeling lost, 
          anxiety relief, emotional check-in, free mental wellness, 
          2 minute reflection, self awareness, gratitude check-in"
      />

      <div className="check-in" id="check-in">
        <div className="check-in-wrapper">
          <h2 className="check-heading">"How are you feeling right now?"</h2>

          <div className="choice-list">
            {feelings.map((feeling) => (
              <label
                key={feeling}
                className={`choice-card ${selected === feeling ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name="feeling"
                  value={feeling}
                  hidden
                  onChange={() => setSelected(feeling)}
                  onClick={() => setChoosedFeeling(feeling)}
                />
                <div className="choice-title">{feeling}</div>
              </label>
            ))}
          </div>
          <Link to="/reflect">
            <button className="btn-con" disabled={!selected}>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckIn;
