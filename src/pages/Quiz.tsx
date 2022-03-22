import React, { useState } from 'react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    { 
      question: "question 1", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "question 2", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "question 3", 
      questionOptions: [
        {answerText: "answer 1", isCorrect: false},
        {answerText: "answer 2", isCorrect: false},
        {answerText: "answer 3", isCorrect: false},
        {answerText: "answer 4", isCorrect: true},
      ]
    },
    { 
      question: "question 4", 
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
      <h3>Diddy's Quizzle</h3>
      <div>{questions[currentQuestion].question}</div>
      <div>{questions[currentQuestion].questionOptions.map((answerOption) => (
        <button>{answerOption.answerText}</button>))}
      </div>
    </div>
  )
}

export default Quiz