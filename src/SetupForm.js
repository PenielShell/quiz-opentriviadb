import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit,error} = useGlobalContext();

  return <main>
    <secitob className="quiz quiz-small">
       <form className="setup-form">
        <h2>setup quiz</h2>
         {/* amount */}
         <div className='form-control'>
          <label htmlFor="amount">number of questions</label>
          <input type="number" className='form-input' min={1} max={50} name="amount" id="amount" value={quiz.amount} onChange={handleChange} />
         </div>
         <div className='form-control'>
          {/* category */}
          <label htmlFor="category" category></label>
          <select name="category" id="category" className='form-input'
            value={quiz.category} onChange={handleChange}>
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>

         </div>
         <div className='form-control'>
          {/* difficulty */}
          <label htmlFor="difficulty" category></label>
          <select name="difficulty" id="difficulty" className='form-input'
            value={quiz.difficulty} onChange={handleChange}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>

         </div>
         {error && <p className='error'>can't generate questions, please try different options</p>}
         <button type='submit' onClick={handleSubmit} className='submit-btn'>start</button>
       </form>
    </secitob>
  </main>
}

export default SetupForm
