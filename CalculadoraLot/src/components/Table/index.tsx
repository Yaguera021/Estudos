import './TablePrizes.css';

type TabelaPremios = {
  [key: number]: {
    [key: string]: number;
  };
};

type Props = {
  quantidadeNumeros: number;
  acertosUsuario: number;
  premios: TabelaPremios;
};

const premiosMap = {
  6: { sena: 'sena', quina: 'quina6', quadra: 'quadra6' },
  5: { sena: null, quina: 'quina5', quadra: 'quadra5' },
  4: { sena: null, quina: null, quadra: 'quadra4' },
};

type PremioMap = {
  6: { sena: string; quina: string; quadra: string };
  5: { sena: null; quina: string; quadra: string };
  4: { sena: null; quina: null; quadra: string };
};

export default function TabelaPremios({ quantidadeNumeros, acertosUsuario, premios }: Props) {
  const faixaAtual = premiosMap[acertosUsuario as keyof PremioMap];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Acertos</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {faixaAtual.sena && (
            <tr>
              <td>Sena</td>
              <td>x {faixaAtual.sena ? premios[quantidadeNumeros][faixaAtual.sena] : '-'}</td>
            </tr>
          )}
          {faixaAtual.quina && (
            <tr>
              <td>Quina</td>
              <td>x {faixaAtual.quina ? premios[quantidadeNumeros][faixaAtual.quina] : '-'}</td>
            </tr>
          )}
          {faixaAtual.quadra && (
            <tr>
              <td>Quadra</td>
              <td>x {faixaAtual.quadra ? premios[quantidadeNumeros][faixaAtual.quadra] : '-'}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
