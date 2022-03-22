import React, { useState } from 'react'
import { Link }from "react-router-dom"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const questions = [
    { 
      question: "Question 1", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "Question 2", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "Question 3", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "Question 4", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    }
  ]

  return (
    <div className='quiz'>
      {showScore ? (
        <div className="scorePage">
          you got {score} out of {questions.length}
          <Link to={'/'}><button className="button">Return to Home</button></Link>
        </div>
      ) : (
        <div className="quizContainer">
          <h2 className="questionLabel">{questions[currentQuestion].question}</h2>
          <div className='questionContainer'>
            {questions[currentQuestion].questionOptions.map((answerOption) => (
              <button className="button" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Quiz