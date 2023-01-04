import React, { useEffect } from 'react'

import { useFetch } from './hooks/useFetch';
import { useLocalStorege } from './hooks/useLocalStorege';

const App = () => {
  const [produto, setProduto] = useLocalStorege('produto', '');
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>Error</p>
  if (loading) return <p>Carregando...</p>
  if (data)
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
  else return null
}

export default App;
