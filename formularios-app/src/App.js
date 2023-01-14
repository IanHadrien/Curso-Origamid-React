// import "./css/global.css";
import { useState } from "react";
import { Validacao } from "./aulas/validacao";
import { AppForm } from "./desafioForm/appForm";
import { Solucao } from "./desafioForm/solucao";
import { DesafioInput } from "./desafios/desafio-input";
import { DesafioMultiplos } from "./desafios/desafio-multiplos";
import { Checkbox } from "./form/Checkbox";
import { Input } from "./form/input";
import { Radio } from "./form/Radio";
import { Select } from "./form/Select";

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('');
  const [tecnologias, setTecnologias] = useState([]);

  return (
    <div>
      {/* <Input /> */}
      {/* <DesafioInput /> */}
      {/* <DesafioMultiplos /> */}
      <div>
        {/* <Input 
          id="nome" 
          label="Nome" 
          value={nome} 
          setValue={setNome}
          required
        />
        <Input 
          id="email" 
          label="Email" 
          value={email} 
          setValue={setEmail}
        /> */}

        {/* <Select 
          options={["Smartphone", "Mobile"]}
          value={produto}
          setValue={setProduto}
        />

        <Radio
          options={["Smartphone", "Mobile"]}
          value={cor} 
          setValue={setCor}
        />

        <Checkbox
          options={["Smartphone", "Mobile"]}
          value={tecnologias} 
          setValue={setTecnologias}
        />
        <br />
        <Validacao /> */}

        {/* Solução feita por mim */}
        {/* <AppForm /> */}

        {/* Solução 2 */}
        <Solucao />
      </div>
    </div>
  );
}

export default App;
