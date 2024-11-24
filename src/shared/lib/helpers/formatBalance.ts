export const formatBalance = (balance: string | null, symbol: string | undefined): string => {
  if (!balance) return `0.0000 ${symbol}`;
  return `${Number(balance).toFixed(4)} ${symbol}`;
};
