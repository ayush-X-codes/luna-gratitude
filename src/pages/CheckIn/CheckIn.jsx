import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckIn.css";

const feelings = ["A little lost", "Tired", "Heavy", "Unclear", "Okay"];

const CheckIn = () => {
  const [selected, setSelected] = useState(null);

  return (
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
              />
              <div className="choice-title">{feeling}</div>
            </label>
          ))}
        </div>
        <Link to="/reflect"><button className="btn-con" disabled={!selected}>
          Continue
        </button></Link>
      </div>
    </div>
  );
};

export default CheckIn;
