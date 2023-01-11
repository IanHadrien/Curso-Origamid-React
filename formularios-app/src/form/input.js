import React from 'react'

export const Input = ({ id, label, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        id={id} 
        nome={id} 
        value={value}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </>
  )
}
