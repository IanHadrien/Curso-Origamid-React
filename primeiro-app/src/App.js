import { JsxArrays1 } from "./aulas/jsx-arrays-1";
import { Props } from "./aulas/props";
import { Desafio1 } from "./exercicios/desafio1";
import { Exercicio1 } from "./exercicios/exercicio1";
import { Exercicio2 } from "./exercicios/exercicio2";

const App = () => {
  return (
    <>
      <h2>Exercicios</h2>
      < Exercicio1 />
      < Exercicio2 />

      <br />
      <h2>Aulas</h2>
      <JsxArrays1 />
      <Props />

      <br />
      <h2>Desafio</h2>
      < Desafio1 />
    </>
  );
}

export default App;
