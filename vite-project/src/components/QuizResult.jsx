import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuizResult(props) {

  const navigate = useNavigate()
  

  const showReport = () => {
    navigate('/show-report')

  }


  const viewMistake = () => {
    navigate ('/view-mistake')

  }


  const QuizFeedback = () =>{
    navigate('/quiz-feedback')
  }



  return (
    <>
      <h1>Score</h1>
      <div className="show-score">
        <p>score: {props.score}</p>
        <p>Total Score: {props.total}</p>
      </div>
      <div className="btn">
        <button id='next-button' onClick={props.tryAgain}>Try Again</button>

        <button onClick={showReport}>
          Show report
        </button>

        <button onKeyDown={
          (e) =>{
            if(e.key === 'Enter')
              viewMistake()
          }
        }>
          View Mistakes
        </button>

        <button onKeyDown={
          (e) =>{
            if(e.key === 'Enter')
              QuizFeedback()
          }
        }>
          QuizFeedBack
        </button>
      </div>



    </>
  )
}

export default QuizResult