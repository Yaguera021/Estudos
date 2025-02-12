import { useState } from 'react';
import './App.css';
import logo from './images/trevo-loterias.png';
import RadioGroup from './components/RadioGroup';

function App() {
  const [loteria, setLoteria] = useState('mega-sena');
  const [numeroJogos, setNumeroJogos] = useState(1);
  const [cotas, setCotas] = useState(2);
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(0);

  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <h2>Calculadora</h2>
      <div className='loterias-container'>
        <label htmlFor='loterias'>Selecione a loteria:</label>
        <select
          name='loterias'
          id='loterias'
          value={loteria}
          onChange={(e) => setLoteria(e.target.value)}
        >
          <option value='mega-sena'>Mega-Sena</option>
          <option value='quina'>Quina</option>
          <option value='lotofacil'>Lotofácil</option>
        </select>
      </div>

      <RadioGroup
        label='Número de jogos:'
        name='numero-jogos'
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        selectedValue={numeroJogos}
        onChange={(value) => setNumeroJogos(Number(value))}
      />

      <RadioGroup
        label='Número de cotas:'
        name='cotas'
        options={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
        selectedValue={cotas}
        onChange={(value) => setCotas(Number(value))}
      />

      <RadioGroup
        label='Quantidade de números:'
        name='quantidade-numeros'
        options={[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        selectedValue={quantidadeNumeros}
        onChange={(value) => setQuantidadeNumeros(Number(value))}
      />

      <button>Calcular</button>

      <div className='resultado'>
        <h3>Resultado</h3>
        <p>Valor total:</p>
        <p>{'xxx'}</p>
        <p>Valor por cota:</p>
        <p>{'xxx'}</p>
        <p>Quantidade de apostas: </p>
        <p>{'xxx'}</p>
        {/* <p>Preço do Jogo para aposta simples: </p> */}
      </div>
    </div>
  );
}

export default App;
