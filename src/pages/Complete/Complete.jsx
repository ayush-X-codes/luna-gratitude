import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Complete.css"

const Complete = ({ answers }) => {
  const navigate = useNavigate()

  return (
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

      </div>
    </div>
  )
}

export default Complete