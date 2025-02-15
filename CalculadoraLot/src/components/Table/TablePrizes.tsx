import './TablePrizes.css';

type TabelaPremios = {
  [key: number]: {
    sena: number;
    quina6: number;
    quadra6: number;
    quina5: number;
    quadra5: number;
    quadra4: number;
  };
};

type Props = {
  quantidadeNumeros: number;
  acertosUsuario: number;
};

const tabelaPremios: TabelaPremios = {
  6: { sena: 1, quina6: 0, quadra6: 0, quina5: 1, quadra5: 0, quadra4: 1 },
  7: { sena: 1, quina6: 6, quadra6: 0, quina5: 2, quadra5: 5, quadra4: 3 },
  8: { sena: 1, quina6: 12, quadra6: 15, quina5: 3, quadra5: 15, quadra4: 6 },
  9: { sena: 1, quina6: 18, quadra6: 45, quina5: 4, quadra5: 30, quadra4: 10 },
  10: { sena: 1, quina6: 24, quadra6: 90, quina5: 5, quadra5: 50, quadra4: 15 },
  11: {
    sena: 1,
    quina6: 30,
    quadra6: 150,
    quina5: 6,
    quadra5: 75,
    quadra4: 21,
  },
  12: {
    sena: 1,
    quina6: 36,
    quadra6: 225,
    quina5: 7,
    quadra5: 105,
    quadra4: 28,
  },
  13: {
    sena: 1,
    quina6: 42,
    quadra6: 315,
    quina5: 8,
    quadra5: 140,
    quadra4: 36,
  },
  14: {
    sena: 1,
    quina6: 48,
    quadra6: 420,
    quina5: 9,
    quadra5: 180,
    quadra4: 45,
  },
  15: {
    sena: 1,
    quina6: 54,
    quadra6: 540,
    quina5: 10,
    quadra5: 225,
    quadra4: 55,
  },
  16: {
    sena: 1,
    quina6: 60,
    quadra6: 675,
    quina5: 11,
    quadra5: 275,
    quadra4: 66,
  },
  17: {
    sena: 1,
    quina6: 66,
    quadra6: 825,
    quina5: 12,
    quadra5: 330,
    quadra4: 78,
  },
  18: {
    sena: 1,
    quina6: 72,
    quadra6: 990,
    quina5: 13,
    quadra5: 390,
    quadra4: 91,
  },
  19: {
    sena: 1,
    quina6: 78,
    quadra6: 1170,
    quina5: 14,
    quadra5: 455,
    quadra4: 105,
  },
  20: {
    sena: 1,
    quina6: 84,
    quadra6: 1365,
    quina5: 15,
    quadra5: 525,
    quadra4: 120,
  },
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

export default function CalculadoraMegaSena({
  quantidadeNumeros,
  acertosUsuario,
}: Props) {
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
              <td>
                x{' '}
                {
                  tabelaPremios[quantidadeNumeros][
                    faixaAtual.sena as keyof (typeof tabelaPremios)[6]
                  ]
                }
              </td>
            </tr>
          )}
          {faixaAtual.quina && (
            <tr>
              <td>Quina</td>
              <td>
                x{' '}
                {
                  tabelaPremios[quantidadeNumeros][
                    faixaAtual.quina as keyof (typeof tabelaPremios)[6]
                  ]
                }
              </td>
            </tr>
          )}
          {faixaAtual.quadra && (
            <tr>
              <td>Quadra</td>
              <td>
                x{' '}
                {
                  tabelaPremios[quantidadeNumeros][
                    faixaAtual.quadra as keyof (typeof tabelaPremios)[6]
                  ]
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
