export const formatAddress = (address?: string): string | null => {
  if (!address) return null;
  return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
};
