/**
 * Formats a balance string with a given symbol.
 *
 * If the balance is null, it returns '0.0000' followed by the symbol.
 * If the balance has a value, it converts the balance to a number, fixes it to 4 decimal places, and then appends the symbol.
 *
 * @param {string | null} balance - The balance to format.
 * @param {string | undefined} symbol - The symbol to append to the formatted balance.
 * @returns {string} The formatted balance string with the symbol.
 */
export const formatBalance = (balance: string | null, symbol: string | undefined): string => {
  if (!balance) return `0.0000 ${symbol}`;
  return `${Number(balance).toFixed(4)} ${symbol}`;
};
