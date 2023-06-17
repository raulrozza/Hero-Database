export type MetaCondition = {
  name: string;
  description: string[];
  source: string;
} & ({ type: 'basic' } | { type: 'combined'; components: string[] });

export const conditions = {
  // BASIC CONDITIONS
  Compelled: {
    type: 'basic',
    name: 'Compelled',
    description: [
      'A compelled character is directed by an outside force, but struggling against it; the character is limited to free actions and a single standard action per turn, chosen by another, controlling, character. As usual, this standard action can be traded for a move or even free action.',
      'Controlled supersedes compelled.',
    ],
    source: 'HH',
  } as MetaCondition,
  Controlled: {
    type: 'basic',
    name: 'Controlled',
    description: [
      'A controlled character has no free will; the character’s actions each turn are dictated by another, controlling, character.',
    ],
    source: 'HH',
  } as MetaCondition,
  Dazed: {
    type: 'basic',
    name: 'Dazed',
    description: [
      'A dazed character is limited to free actions and a single standard action per turn, although the character may use that action to perform a move, as usual.',
      'Stunned supersedes dazed.',
    ],
    source: 'HH',
  } as MetaCondition,
  Debilitated: {
    type: 'basic',
    name: 'Debilitated',
    description: ['The character has one or more abilities lowered below –5.'],
    source: 'HH',
  } as MetaCondition,
  Defenseless: {
    type: 'basic',
    name: 'Defenseless',
    description: [
      'A defenseless character has active defense bonuses of 0. Attackers can make attacks on defenseless opponents as routine checks. If the attacker chooses to forgo the routine check and make a normal attack check, any hit is treated as a critical hit.',
      'Defenseless characters are often prone, providing opponents with an additional bonus to attack checks.',
    ],
    source: 'HH',
  } as MetaCondition,
  Disabled: {
    type: 'basic',
    name: 'Disabled',
    description: [
      'A disabled character is at a –5 circumstance penalty on checks. If the penalty applies to specific checks, they are added to the name of the condition, such as Attack Disabled, Fighting Disabled, Perception Disabled, and so forth.',
      'Debilitated, if it applies to the same trait(s), supersedes disabled.',
    ],
    source: 'HH',
  } as MetaCondition,
  Fatigued: {
    type: 'basic',
    name: 'Fatigued',
    description: [
      'Fatigued characters are hindered. Characters recover from a fatigued condition after an hour of rest.',
    ],
    source: 'HH',
  } as MetaCondition,
  Hindered: {
    type: 'basic',
    name: 'Hindered',
    description: [
      'A hindered character moves at half normal speed (–1 speed rank).',
      'Immobile supersedes hindered.',
    ],
    source: 'HH',
  } as MetaCondition,
  Immobile: {
    type: 'basic',
    name: 'Immobile',
    description: [
      'Immobile characters have no movement speed and cannot move from the spot they occupy, although they are still capable of taking actions unless prohibited by another condition.',
    ],
    source: 'HH',
  } as MetaCondition,
  Impaired: {
    type: 'basic',
    name: 'Impaired',
    description: [
      'An impaired character is at a –2 circumstance penalty on checks. If the impairment applies to specific checks, they are added to the name of the condition, such as Attack Impaired, Fighting Impaired, Perception Impaired, and so forth.',
      'If it applies to the same trait(s), disabled supersedes impaired.',
    ],
    source: 'HH',
  } as MetaCondition,
  Normal: {
    type: 'basic',
    name: 'Normal',
    description: [
      'The character is unharmed and unaffected by other conditions, acting normally.',
    ],
    source: 'HH',
  } as MetaCondition,
  Stunned: {
    type: 'basic',
    name: 'Stunned',
    description: [
      'Stunned characters cannot take any actions, including free actions.',
    ],
    source: 'HH',
  } as MetaCondition,
  Transformed: {
    type: 'basic',
    name: 'Transformed',
    description: [
      'Transformed characters have some or all of their traits altered by an outside agency. This may range from a change in the character’s appearance to a complete change in trait ranks, even the removal of some traits and the addition of others!',
      'The primary limit on the transformed condition is the character’s character point total cannot increase, although it can effectively decrease for the duration of the transformation, such as when a powerful superhero is turned into an otherwise powerless mouse or frog (obviously based on considerably fewer character points).',
    ],
    source: 'HH',
  } as MetaCondition,
  Unaware: {
    type: 'basic',
    name: 'Unaware',
    description: [
      'The character is completely unaware of his surroundings, unable to make interaction or Perception checks or perform any action based on them. If the condition applies to a specific sense or senses, they are added to the name of the condition, such as visually unaware, tactilely unaware (or numb), and so forth. Subjects have full concealment from all of a character’s unaware senses.',
    ],
    source: 'HH',
  } as MetaCondition,
  Vulnerable: {
    type: 'basic',
    name: 'Vulnerable',
    description: [
      'Vulnerable characters are limited in their ability to defend themselves, halving their active defenses (round up the final value).',
      'Defenseless supersedes vulnerable.',
    ],
    source: 'HH',
  } as MetaCondition,
  Weakened: {
    type: 'basic',
    name: 'Weakened',
    description: [
      'The character has temporarily lost character points in a trait. See Weaken effect in Powers for more information.',
      'Debilitated supersedes weakened.',
    ],
    source: 'HH',
  } as MetaCondition,
  // COMBINED CONDITIONS
  Asleep: {
    type: 'combined',
    name: 'Asleep',
    description: [
      'While asleep, a character is defenseless, stunned, and unaware. A hearing Perception check with three or more degrees of success wakes the character and removes all these conditions, as does any sudden movement (such as shaking the sleeping character) or any effect allowing a resistance check.',
    ],
    components: ['Defenseless', 'Stunned', 'Unaware'],
    source: 'HH',
  } as MetaCondition,
  Blind: {
    type: 'combined',
    name: 'Blind',
    description: [
      'The character cannot see. Everything effectively has full visual concealment from him. He is hindered, visually unaware, and vulnerable, and may be impaired or disabled for activities where vision is a factor.',
    ],
    components: ['Disabled', 'Hindered', 'Impaired', 'Unaware', 'Vulnerable'],
    source: 'HH',
  } as MetaCondition,
  Bound: {
    type: 'combined',
    name: 'Bound',
    description: ['A bound character is defenseless, immobile, and impaired.'],
    components: ['Defenseless', 'Immobile', 'Impaired'],
    source: 'HH',
  } as MetaCondition,
  Deaf: {
    type: 'combined',
    name: 'Deaf',
    description: [
      'The character cannot hear, giving everything total auditory concealment from him. This may allow for surprise attacks on the unaware character. Interaction with other characters is limited to sign-language and lip-reading.',
    ],
    components: ['Unaware'],
    source: 'HH',
  } as MetaCondition,
  Dying: {
    type: 'combined',
    name: 'Dying',
    description: [
      'A dying character is incapacitated nd near death. When the character gains this condition, immediately make a Fortitude check (DC 15). If the check succeeds, nothing happens. With two degrees of success, the character stabilizes, removing this condition. If the check fails, the character remains dying. Three or more total degrees of failure mean the character dies: so three failed Fortitude checks or one or two checks adding up to three degrees.',
      'Dying characters make a Fortitude check each round until they either die or stabilize. Another character can stabilize a dying character with a successful Treatment check (DC 15) or use of a Healing effect.',
    ],
    components: ['Incapacitated'],
    source: 'HH',
  } as MetaCondition,
  Entranced: {
    type: 'combined',
    name: 'Entranced',
    description: [
      'An entranced character is stunned, taking no actions other than paying attention to the entrancing effect. Any obvious threat automatically breaks the trance. An ally can also shake a character free of the condition with an interaction skill check (DC 10 + effect rank).',
    ],
    components: ['Stunned'],
    source: 'HH',
  } as MetaCondition,
  Exhausted: {
    type: 'combined',
    name: 'Exhausted',
    description: [
      'Exhausted characters are near collapse. They are impaired and hindered. Characters recover from an exhausted condition after an hour of rest in comfortable surroundings.',
    ],
    components: ['Impaired', 'Hindered'],
    source: 'HH',
  } as MetaCondition,
  Incapacitated: {
    type: 'combined',
    name: 'Incapacitated',
    description: [
      'An incapacitated character is defenseless, stunned, and unaware. Incapacitated characters generally also fall prone, unless some outside force or aid keeps them standing.',
    ],
    components: ['Defenseless', 'Stunned', 'Unaware', 'Prone'],
    source: 'HH',
  } as MetaCondition,
  Paralyzed: {
    type: 'combined',
    name: 'Paralyzed',
    description: [
      'A paralyzed character is defenseless, immobile, and physically stunned, frozen in place and unable to move, but still aware and able to take purely mental actions, involving no physical movement whatsoever.',
    ],
    components: ['Defenseless', 'Immobile', 'Stunned'],
    source: 'HH',
  } as MetaCondition,
  Prone: {
    type: 'combined',
    name: 'Prone',
    description: [
      'A prone character is lying on the ground, receiving a –5 circumstance penalty on close attack checks. Opponents receive a +5 circumstance bonus to close attack checks but a –5 penalty to ranged attack checks (effectively giving the prone character total cover against ranged attacks). Prone characters are hindered.',
      'Standing up from a prone position is a move action.',
    ],
    components: ['Hindered'],
    source: 'HH',
  } as MetaCondition,
  Restrained: {
    type: 'combined',
    name: 'Restrained',
    description: [
      'A restrained character is hindered and vulnerable. If the restraints are anchored to an immobile object, the character is immobile rather than hindered. If restrained by another character, the restrained character is immobile but may be moved by the restraining character.',
    ],
    components: ['Hindered', 'Immobile', 'Vulnerable'],
    source: 'HH',
  } as MetaCondition,
  Staggered: {
    type: 'combined',
    name: 'Staggered',
    description: ['A staggered character is dazed and hindered.'],
    components: ['Dazed', 'Hindered'],
    source: 'HH',
  } as MetaCondition,
  Surprised: {
    type: 'combined',
    name: 'Surprised',
    description: [
      'A surprised character is stunned and vulnerable, caught off-guard and therefore unable to act, and less able to avoid attacks.',
    ],
    components: ['Stunned', 'Vulnerable'],
    source: 'HH',
  } as MetaCondition,
};
