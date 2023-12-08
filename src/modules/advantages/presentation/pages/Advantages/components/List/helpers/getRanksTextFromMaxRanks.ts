export default function getRanksTextFromMaxRanks(maxRanks: number) {
  if (maxRanks === 1) return 'None';

  if (maxRanks < 0) return 'Ranked';

  return `Maximum ${maxRanks}`;
}
