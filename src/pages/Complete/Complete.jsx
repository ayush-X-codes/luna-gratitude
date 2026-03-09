import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Complete.css"
import SEO from '../../components/SEO'

const Complete = ({ answers }) => {
  const navigate = useNavigate()

  return (
    <>
      <SEO
        title="Luna — You Did It | Your Reflection is Complete 🌙"
        description="You just took 2 minutes for yourself. Read your reflections, celebrate your honesty, and carry this clarity into your day. Small steps lead to big changes."
        content="reflection complete, journal complete, 
          gratitude complete, self care win, mental clarity, 
          daily reflection, mindfulness complete, you did it,
          celebrate yourself, positive affirmation, 
          gratitude practice, daily journaling habit"
      />

      <div className='complete'>
        <div className='complete-wrapper'>

          {/* Message */}
          <div className='complete-message'>
            <h2 className='complete-heading'>You showed up today.</h2>
            <p className='complete-sub'>That's enough.</p>
          </div>

          {/* Their answers */}
          <div className='answer-list'>
            {answers.map((answer, i) => (
              answer && (
                <div key={i} className='answer-card'>
                  <p>{answer}</p>
                </div>
              )
            ))}
          </div>

          {/* Finish */}
          <button className='btn-finish' onClick={() => navigate('/')}>
            Finish
          </button>

          <div className="feedback">
            <a
              target="_blank"
              href="https://forms.gle/civrMADZuLNQAmXK8"
              rel="noreferrer"
            >
              Share your feedback 🌙
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Complete