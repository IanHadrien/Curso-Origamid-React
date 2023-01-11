import React from 'react'

export const Select = ({ options, value, setValue, ...props}) => {
  return (
    <select value={value} onChange={({target}) => setValue(target.value)}>
      <option value="" disabled>Selecione</option>

      {options.map((option) => (
        <option 
          key={option}
          value={option}
          {...props}
        >
          {option}
        </option>
      ))}
    </select>
  )
}
