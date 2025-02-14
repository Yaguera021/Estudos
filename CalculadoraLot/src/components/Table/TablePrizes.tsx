import { useState } from 'react';

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

export default function CalculadoraMegaSena() {
  const [quantidade, setQuantidade] = useState(6);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantidade(Number(e.target.value));
  };

  return (
    <div>
      <label>Quantidade de números jogados:</label>
      <select value={quantidade} onChange={handleChange}>
        {Object.keys(tabelaPremios).map((num) => (
          <option key={num} value={num}>
            {num} números
          </option>
        ))}
      </select>

      <div>
        <h3>Possíveis Prêmios:</h3>
        <p>Sena: {tabelaPremios[quantidade].sena}x</p>
        <p>Quina (6 números): {tabelaPremios[quantidade].quina6}x</p>
        <p>Quadra (6 números): {tabelaPremios[quantidade].quadra6}x</p>
        <p>Quina (5 números): {tabelaPremios[quantidade].quina5}x</p>
        <p>Quadra (5 números): {tabelaPremios[quantidade].quadra5}x</p>
        <p>Quadra (4 números): {tabelaPremios[quantidade].quadra4}x</p>
      </div>
    </div>
  );
}
