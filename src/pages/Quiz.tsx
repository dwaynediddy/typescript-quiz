import { set } from 'mongoose'
import React, { useState } from 'react'

const QuestionLabel = "Question One"

const QuestionOne = () => {
  const [selected, setSelected] = useState('')
  const isSelected = (value: string): boolean => selected === value

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.currentTarget.value)
  }
  
  return (
    <div>
      <h2>what is fun</h2>
    <ul>
      <label>coding js</label>
      <li>
        <input 
          type="radio" 
          value='answer1' 
          checked={isSelected('answer1')} 
          onChange={handleRadio}
         />
      </li>
      <label>coding elm</label>
      <li>
        <input 
          type="radio" 
          value='answer2'
          checked={isSelected('answer2')}
          onChange={handleRadio}
        />
      </li>
      <label>coding python</label>
      <li>
        <input 
          type="radio" 
          value='answer3' 
          checked={isSelected('answer3')}
          onChange={handleRadio}
        />
      </li>
      <label>drinking beer</label>
      <li>
        <input 
          type="radio" 
          value='answer4' 
          checked={isSelected('answer4')}
          onChange={handleRadio}
        />
      </li>
    </ul>
  </div>
  )
}

const Quiz: React.FC = () => {
  return (
    <div>
        <label>{QuestionLabel}</label>
        <QuestionOne />
        <p>your answer is {}</p>
        <button>Submit Answer</button>
    </div>
  )
}

export default Quiz