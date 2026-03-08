import React, { useState } from "react";
import "./Journal.css";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";

const prompts = {
  "A little lost": [
    "What feels uncertain for you right now?",
    "When did you last feel clear about something?",
    "What's one tiny thing you actually know for sure?",
  ],
  Tired: [
    "What has been draining you lately?",
    "What are you pushing through that you haven't admitted?",
    "What would rest actually look like for you right now?",
  ],
  Heavy: [
    "What's weighing on you right now? Just say it.",
    "Where do you think this heaviness is coming from?",
    "What would feel like a tiny relief right now?",
  ],
  Unclear: [
    "What decision or situation feels foggy right now?",
    "What do you wish you knew?",
    "What does your gut say, even if it doesn't make sense?",
  ],
  Okay: [
    "What made today feel okay?",
    "What or who contributed to that?",
    "What do you want to carry into tomorrow?",
  ],
};

const Journal = ({ answers, setAnswers, choosedFeeling }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/complete");
    }
  };

  return (
    <>
      <SEO
        title="Luna — Reflect & Answer | Your Personal 2 Minute Journaling Space"
        description="Answer 3 simple questions to clear your mind and find calm. Luna's reflection space helps you process your thoughts when you feel stuck, anxious, or overwhelmed. Free, no signup."
        content="journaling questions, reflection questions, 
          clear your mind, process emotions, mental clarity exercise,
          guided journaling, self reflection, anxiety journaling,
          stress journaling, 3 question journal, free journaling tool,
          mindfulness exercise, gratitude questions"
      />

      <div className="journal">
        <div className="journal-wrapper">
          {/* Progress bar */}
          <div className="progress-track">
            {prompts[choosedFeeling].map((_, i) => (
              <div
                key={i}
                className={`progress-step ${i < step ? "done" : i === step ? "active" : ""}`}
              />
            ))}
          </div>

          {/* Prompt */}
          <h2 className="prompt-area">{prompts[choosedFeeling][step]}</h2>

          {/* Textarea */}
          <textarea
            className="journal-area"
            placeholder="Write freely..."
            value={answers[step]}
            onChange={(e) => {
              const updated = [...answers];
              updated[step] = e.target.value;
              setAnswers(updated);
            }}
          />

          {/* Button */}
          <button className="btn-next" onClick={handleNext}>
            {step < 2 ? "Next →" : "Finish"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Journal;
