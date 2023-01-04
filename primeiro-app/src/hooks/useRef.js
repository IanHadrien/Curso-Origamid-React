import React, { useRef, useState } from 'react'

export const UseRef = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('teste');
  const inputElement = useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  };

  return (
    <>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text" 
        ref={inputElement}
        value={input}
        onChange={({target}) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </>
  )
}
