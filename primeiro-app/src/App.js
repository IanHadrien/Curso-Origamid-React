import React from 'react'

import { DesafioStorege } from "./desafios/desafio-useContext/ContextDesafio";
import { Limpar } from './desafios/desafio-useContext/limpar';
import { ProdutoContext } from "./hooks/produtoContext";
import { UseLocalStorege } from './hooks/useLocalStorege';

const App = () => {
  const [produto, setProduto] = UseLocalStorege('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    // <DesafioStorege>
    //     <ProdutoContext />
    //     <Limpar />
    // </DesafioStorege>

    <div>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
    </div>
  );
}

export default App;
