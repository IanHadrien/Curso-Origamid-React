import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Executou só uma vez");
  }, [])

  useEffect(() => {
    document.title = "Total " + contar;
  }, [contar])

  return (
    <button onClick={() => setContar(contar + 1)}>
      {contar}
    </button>
  )
}
