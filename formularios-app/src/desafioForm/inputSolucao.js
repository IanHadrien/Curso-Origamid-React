import React from 'react'

export const InputSolucao = ({ pergunta, id, onChange, value, options, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) =>(
        <label key={option}>
          <input 
            id={id}
            type="radio" 
            checked={value === option}
            value={option} 
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}
