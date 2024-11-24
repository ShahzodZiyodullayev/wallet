/**
 * Truncates the provided address string and formats it for display.
 *
 * The formatted address will contain the first six characters of the
 * original address followed by an ellipsis and the last four characters.
 * If the address is not provided or is null, the function returns null.
 *
 * @param {string} [address] - The address string to format.
 * @returns {string|null} The formatted address string or null if the input is null or undefined.
 */
export const formatAddress = (address?: string): string | null => {
  if (!address) return null;
  return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
};
