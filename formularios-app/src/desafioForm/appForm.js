import React, { useEffect, useState } from 'react'
import { Radio } from '../form/Radio';
import { ValidationResponse } from './validationResponse';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

let response = [];

export const AppForm = () => {
  const [option, setOption] = useState('');
  const [pergunta, setPergunta] = useState(perguntas[0]);
  const [contador, setCont] = useState(1);
  const [respostas, setRespostas] = useState(0);

  function nextOption(id) {
    console.log(id);
    console.log(option);

    perguntas.map((r) => {
      if(r.id === id) {
        if( r.resposta === option ) {
          setRespostas(respostas + 1);
        }
      }
    });

    if (contador <= perguntas.length-1) {
      setPergunta(perguntas[contador]);
      setCont(contador + 1);
      response = [...response, option];
      console.log(response);
    } else {
      response = [...response, option];
      setCont(contador + 1);
    }
  }

  return (
    <div>
      { contador <= 4 &&
      <div>
        <p>{pergunta.pergunta}</p>
        <Radio
          options={pergunta.options}
          value={option}
          setValue={setOption}
        />
        <br />
        <button onClick={() => nextOption(pergunta.id)}>
          Proximo
        </button>
      </div>
      }

      { contador > 4 && <ValidationResponse response={respostas} />}
    </div>
  )
}
