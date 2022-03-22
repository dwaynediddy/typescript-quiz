import React, { useState } from 'react'

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
      {showScore ? (
        <div>you got {score} out of {questions.length}</div>
      ) : (
        <>
          <h3>Diddy's Quizzle</h3>
          <div>{questions[currentQuestion].question}</div>
          <div>
            {questions[currentQuestion].questionOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
          </div>
        </>
        )
      }
    </div>
  )
}

export default Quiz