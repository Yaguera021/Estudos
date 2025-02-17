import { useEffect, useState } from 'react';
import logo from './images/trevo-loterias.png';
import SelectGroup from './components/Select/SelectGroup';

import './App.css';
// import CalculadoraMegaSena from './components/Table/TablePrizes';

function App() {
  const [loteria, setLoteria] = useState<Loteria>('mega-sena');
  const [faixaPremiacao, setFaixaPremiacao] = useState(6);
  const [numeroJogos, setNumeroJogos] = useState(1);
  const [cotas, setCotas] = useState(2);
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [resultado, setResultado] = useState<{
    valorTotal: number;
    valorTotalBolao: number;
    valorPorCota: number;
    qtdeApostas: number;
  } | null>(null);

  useEffect(() => {
    setQuantidadeNumeros(opcoesQuantidadeNumeros[loteria][0]);
  }, [loteria]);

  const precoPorDezenaMega: { [key: number]: number } = {
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

  const precoPorDezenaQuina: { [key: number]: number } = {
    5: 2.5,
    6: 15.0,
    7: 52.5,
    8: 140.0,
    9: 315.0,
    10: 630.0,
    11: 1155.0,
    12: 1980.0,
    13: 3217.5,
    14: 5005.0,
    15: 7507.5,
  };

  type Loteria = 'mega-sena' | 'quina';

  const opcoesQuantidadeNumeros: Record<Loteria, number[]> = {
    'mega-sena': [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    quina: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };

  function calcularPrecoJogo() {
    let precoPorDezena: { [key: number]: number } = {};
    if (loteria === 'mega-sena') {
      precoPorDezena = precoPorDezenaMega;
    } else if (loteria === 'quina') {
      precoPorDezena = precoPorDezenaQuina;
    }

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
  }

  const handleCalcular = () => {
    const { valorTotal, valorTotalBolao, valorPorCota, qtdeApostas } =
      calcularPrecoJogo();

    if (loteria === 'mega-sena' && quantidadeNumeros === 6) {
      if (valorPorCota < 15 || valorPorCota > 50) {
        alert('Valor por cota deve ser entre R$ 15,00 e R$ 50,00');
        return;
      }
    }

    setResultado({ valorTotal, valorTotalBolao, valorPorCota, qtdeApostas });
  };

  const faixaAnterior = () => {
    if (faixaPremiacao > 4) {
      setFaixaPremiacao(faixaPremiacao - 1);
    }
  };

  const faixaSeguinte = () => {
    if (faixaPremiacao < 6) {
      setFaixaPremiacao(faixaPremiacao + 1);
    }
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
          onChange={(e) => setLoteria(e.target.value as Loteria)}
        >
          <option value='mega-sena'>Mega-Sena</option>
          <option value='quina'>Quina</option>
          {/* <option value='lotofacil'>Lotofácil</option> */}
        </select>
      </div>

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
        options={opcoesQuantidadeNumeros[loteria]}
        selectedValue={quantidadeNumeros}
        onChange={(value) => setQuantidadeNumeros(Number(value))}
      />

      <button onClick={handleCalcular}>Calcular</button>

      <div className='resultado'>
        <h3>Resultados:</h3>
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
        <h3>Premiações - {faixaPremiacao} Números</h3>
        {/* <CalculadoraMegaSena
          quantidadeNumeros={quantidadeNumeros}
          acertosUsuario={faixaPremiacao}
        /> */}
      </div>
      <div className='botoes'>
        <button onClick={faixaAnterior} disabled={faixaPremiacao === 4}>
          {'<'}
        </button>
        <img className='logo-baixo' src={logo} alt='logo' />
        <button onClick={faixaSeguinte} disabled={faixaPremiacao === 6}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default App;
