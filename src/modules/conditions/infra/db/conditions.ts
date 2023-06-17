export type MetaCondition = {
  name: string;
  description: string;
} & ({ type: 'basic' } | { type: 'combined'; components: string[] });

export const conditions = {
  Compelled: {
    type: 'basic',
    name: 'Compelled',
    description:
      'A compelled character is directed by an outside force, but struggling against it; the character is limited to free actions and a single standard action per turn, chosen by another, controlling, character. As usual, this standard action can be traded for a move or even free action. Controlled supersedes compelled.',
  } as MetaCondition,
  Controlled: {
    type: 'basic',
    name: 'Controlled',
    description:
      'A controlled character has no free will; the character’s actions each turn are dictated by another, controlling, character.',
  } as MetaCondition,
};
