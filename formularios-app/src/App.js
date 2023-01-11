// import "./css/global.css";
import { useState } from "react";
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
      <form>
        <Input 
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
        />

        <Select 
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
      </form>
    </div>
  );
}

export default App;
