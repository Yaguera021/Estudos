import { useState } from 'react';
import './App.css';
import logo from './images/trevo-loterias.png';
// import RadioGroup from './components/RadioGroup';
import SelectGroup from './components/Select/SelectGroup';

function App() {
  const [loteria, setLoteria] = useState('mega-sena');
  const [numeroJogos, setNumeroJogos] = useState(1);
  const [cotas, setCotas] = useState(2);
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [resultado, setResultado] = useState<{
    valorTotal: number;
    valorTotalBolao: number;
    valorPorCota: number;
    qtdeApostas: number;
  } | null>(null);

  const calcularPrecoJogo = () => {
    const precoPorDezena: { [key: number]: number } = {
      6: 5.0,
      7: 35.0,
      8: 140.0,
      9: 420.0,
      10: 1050.0,
      11: 2310.0,
      12: 4620.0,
      13: 8580.0,
      14: 15015.0,
      15: 25025.0,
      16: 40040.0,
      17: 61880.0,
      18: 92820.0,
      19: 135660.0,
      20: 193800.0,
    };

    const calcularCombinacoes = (n: number) => {
      if (n < 6) return 0;
      let combinacao = 1;
      for (let i = 0; i < 6; i++) {
        combinacao *= (n - i) / (i + 1);
      }
      return combinacao;
    };

    if (quantidadeNumeros < 6 || !precoPorDezena[quantidadeNumeros]) {
      return {
        valorTotal: 0,
        valorTotalBolao: 0,
        valorPorCota: 0,
        qtdeApostas: 0,
      };
    }

    const precoUnitario = precoPorDezena[quantidadeNumeros];
    const valorTotal = precoUnitario * numeroJogos;
    const valorTotalBolao = valorTotal * 1.35;
    const valorPorCota = valorTotalBolao / cotas;
    const qtdeApostas = calcularCombinacoes(quantidadeNumeros) * numeroJogos;

    return { valorTotal, valorTotalBolao, valorPorCota, qtdeApostas };
  };

  const handleCalcular = () => {
    const { valorTotal, valorTotalBolao, valorPorCota, qtdeApostas } =
      calcularPrecoJogo();
    setResultado({ valorTotal, valorTotalBolao, valorPorCota, qtdeApostas });
  };

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
          {/* <option value='quina'>Quina</option> */}
          {/* <option value='lotofacil'>Lotofácil</option> */}
        </select>
      </div>

      {/* <RadioGroup
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
      /> */}

      <SelectGroup
        label='Número de jogos:'
        name='numero-jogos'
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        selectedValue={numeroJogos}
        onChange={(value) => setNumeroJogos(Number(value))}
      />

      <SelectGroup
        label='Número de cotas:'
        name='cotas'
        options={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
        selectedValue={cotas}
        onChange={(value) => setCotas(Number(value))}
      />

      <SelectGroup
        label='Quantidade de números:'
        name='quantidade-numeros'
        options={[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        selectedValue={quantidadeNumeros}
        onChange={(value) => setQuantidadeNumeros(Number(value))}
      />

      <button onClick={handleCalcular}>Calcular</button>

      <div className='resultado'>
        <h3>Resultados:</h3>
        <br />
        {/* <p>Valor total:</p>
        <p>
          {resultado
            ? `${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(resultado.valorTotal)}`
            : 'R$ 0,00'}
        </p> */}
        {/* <p>Valor total Bolão Lotérico:</p>
        <p>
          {resultado
            ? `${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(resultado.valorTotalBolao)}`
            : 'R$ 0,00'}
        </p> */}
        <p>Valor por cota:</p>
        <p>
          {resultado
            ? `${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(resultado.valorPorCota)}`
            : 'R$ 0,00'}
        </p>
        <p>Quantidade de apostas:</p>
        <p>
          {resultado
            ? `${new Intl.NumberFormat('pt-BR').format(resultado.qtdeApostas)}`
            : '0'}
        </p>
      </div>
      <div className='premiacoes'>
        <h3>Premiações:</h3>
        <br />
        <p>🚧 EM BREVE 🚧 </p>
      </div>
    </div>
  );
}

export default App;
