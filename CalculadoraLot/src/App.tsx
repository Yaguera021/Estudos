import { useEffect, useState } from 'react';
import logo from './images/trevo-loterias.png';
import SelectGroup from './components/Select';
import { calcularPrecoJogo } from './utils/calculoApostas';

import './App.css';

function App() {
  const [loteria, setLoteria] = useState<Loteria>('mega-sena');
  const [numeroJogos, setNumeroJogos] = useState(1);
  const [cotas, setCotas] = useState(2);
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [resultado, setResultado] = useState<{
    valorTotal: number;
    valorTotalBolao: number;
    valorPorCota: number;
    qtdeApostas: number;
  } | null>(null);

  type Loteria = 'mega-sena' | 'quina';

  const opcoesQuantidadeNumeros: Record<Loteria, number[]> = {
    'mega-sena': [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    quina: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };

  const imagensTabela = {
    'mega-sena': {
      premios: '/premios-mega.png',
      prob: '/prob-mega.png',
    },
    quina: {
      premios: '/premios-quina.png',
      prob: '/prob-quina.png',
    },
  };

  useEffect(() => {
    setQuantidadeNumeros(opcoesQuantidadeNumeros[loteria][0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loteria]);

  const handleCalcular = () => {
    const resultado = calcularPrecoJogo(loteria, quantidadeNumeros, numeroJogos, cotas);

    if (loteria === 'mega-sena' && resultado.valorPorCota < 15) {
      alert('Valor por cota não pode ser inferior a 15,00R$');
      return;
    } else if (loteria === 'quina' && resultado.valorPorCota < 12.5) {
      alert('Valor por cota não pode ser inferior a 12,50R$');
      return;
    }

    setResultado(resultado);
  };

  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <h2>Calculadora</h2>
      <div className='loterias-container'>
        <label htmlFor='loterias'>Selecione a loteria:</label>
        <select name='loterias' id='loterias' value={loteria} onChange={(e) => setLoteria(e.target.value as Loteria)}>
          <option value='mega-sena'>Mega-Sena</option>
          <option value='quina'>Quina</option>
          {/* <option value='lotofacil'>Lotofácil</option> */}
        </select>
      </div>

      <SelectGroup label='Número de jogos:' name='numero-jogos' options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} selectedValue={numeroJogos} onChange={(value) => setNumeroJogos(Number(value))} />

      <SelectGroup label='Número de cotas:' name='cotas' options={[2, 3, 4, 5, 6, 7, 8, 9, 10]} selectedValue={cotas} onChange={(value) => setCotas(Number(value))} />

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
        <p>{resultado ? `${new Intl.NumberFormat('pt-BR').format(resultado.qtdeApostas)}` : '0'}</p>
      </div>
      <div className='botoes'>
        <button onClick={() => window.open(imagensTabela[loteria].premios, '_blank')}>Tabela de Prêmios</button>
        <button onClick={() => window.open(imagensTabela[loteria].prob, '_blank')}>Probabilidades</button>
      </div>
      <img src={logo} alt='logo' />
    </div>
  );
}

export default App;
