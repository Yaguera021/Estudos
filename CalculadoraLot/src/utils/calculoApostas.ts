export const calcularCombinacoes = (n: number, acertos: number) => {
  if (n < acertos) return 0;
  let combinacao = 1;
  for (let i = 0; i < acertos; i++) {
    combinacao *= (n - i) / (i + 1);
  }
  return combinacao;
};

export const calcularPrecoJogo = (loteria: 'mega-sena' | 'quina', quantidadeNumeros: number, numeroJogos: number, cotas: number) => {
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

  const precoPorDezena = loteria === 'mega-sena' ? precoPorDezenaMega : precoPorDezenaQuina;
  const acertos = loteria === 'mega-sena' ? 6 : 5;

  if (quantidadeNumeros < acertos || !precoPorDezena[quantidadeNumeros]) {
    return { valorTotal: 0, valorTotalBolao: 0, valorPorCota: 0, qtdeApostas: 0 };
  }

  const precoUnitario = precoPorDezena[quantidadeNumeros];
  const valorTotal = precoUnitario * numeroJogos;
  const valorTotalBolao = valorTotal * 1.35;
  const valorPorCota = valorTotalBolao / cotas;
  const qtdeApostas = calcularCombinacoes(quantidadeNumeros, acertos) * numeroJogos;

  return { valorTotal, valorTotalBolao, valorPorCota, qtdeApostas };
};
