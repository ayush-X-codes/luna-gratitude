import React, { useState } from 'react'
import "./Journal.css"
import { useNavigate } from 'react-router-dom'

const prompts = [
  "What felt slightly okay today?",
  "What are you holding onto right now?",
  "What has helped you get through recently?"
]

const Journal = ({answers, setAnswers}) => {
    const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      navigate("/complete")
    }
  }

  return (
    <div className='journal'>
      <div className="journal-wrapper">

        {/* Progress bar */}
        <div className="progress-track">
          {prompts.map((_, i) => (
            <div key={i} className={`progress-step ${i < step ? 'done' : i === step ? 'active' : ''}`} />
          ))}
        </div>

        {/* Prompt */}
        <h2 className='prompt-area'>{prompts[step]}</h2>

        {/* Textarea */}
        <textarea
          className='journal-area'
          placeholder="Write freely..."
          value={answers[step]}
          onChange={(e) => {
            const updated = [...answers]
            updated[step] = e.target.value
            setAnswers(updated)
          }}
        />

        {/* Button */}
        <button className='btn-next' onClick={handleNext}>
          {step < 2 ? "Next →" : "Finish"}
        </button>

      </div>
    </div>
  )
}

export default Journal