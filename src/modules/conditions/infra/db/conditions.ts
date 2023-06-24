export type MetaCondition = {
  name: string;
  description: string[];
  source: string;
} & ({ type: 'basic' } | { type: 'combined'; components: string[] });

export const conditions = new Map<string, MetaCondition>([
  // BASIC CONDITIONS
  [
    'Compelled',
    {
      type: 'basic',
      name: 'Compelled',
      description: [
        'A compelled character is directed by an outside force, but struggling against it; the character is limited to free actions and a single standard action per turn, chosen by another, controlling, character. As usual, this standard action can be traded for a move or even free action.',
        '@{Condition|Controlled} supersedes compelled.',
      ],
      source: 'HH',
    },
  ],
  [
    'Controlled',
    {
      type: 'basic',
      name: 'Controlled',
      description: [
        'A controlled character has no free will; the character’s actions each turn are dictated by another, controlling, character.',
      ],
      source: 'HH',
    },
  ],
  [
    'Dazed',
    {
      type: 'basic',
      name: 'Dazed',
      description: [
        'A dazed character is limited to free actions and a single standard action per turn, although the character may use that action to perform a move, as usual.',
        '@{Condition|Stunned} supersedes dazed.',
      ],
      source: 'HH',
    },
  ],
  [
    'Debilitated',
    {
      type: 'basic',
      name: 'Debilitated',
      description: [
        'The character has one or more abilities lowered below –5.',
      ],
      source: 'HH',
    },
  ],
  [
    'Defenseless',
    {
      type: 'basic',
      name: 'Defenseless',
      description: [
        'A defenseless character has active defense bonuses of 0. Attackers can make attacks on defenseless opponents as routine checks. If the attacker chooses to forgo the routine check and make a normal attack check, any hit is treated as a critical hit.',
        'Defenseless characters are often @{Condition|Prone|prone}, providing opponents with an additional bonus to attack checks.',
      ],
      source: 'HH',
    },
  ],
  [
    'Disabled',
    {
      type: 'basic',
      name: 'Disabled',
      description: [
        'A disabled character is at a –5 circumstance penalty on checks. If the penalty applies to specific checks, they are added to the name of the condition, such as Attack Disabled, Fighting Disabled, Perception Disabled, and so forth.',
        '@{Condition|Debilitated}, if it applies to the same trait(s), supersedes disabled.',
      ],
      source: 'HH',
    },
  ],
  [
    'Fatigued',
    {
      type: 'basic',
      name: 'Fatigued',
      description: [
        'Fatigued characters are @{Condition|Hindered|hindered}. Characters recover from a fatigued condition after an hour of rest.',
      ],
      source: 'HH',
    },
  ],
  [
    'Hindered',
    {
      type: 'basic',
      name: 'Hindered',
      description: [
        'A hindered character moves at half normal speed (–1 speed rank).',
        '@{Condition|Immobile} supersedes hindered.',
      ],
      source: 'HH',
    },
  ],
  [
    'Immobile',
    {
      type: 'basic',
      name: 'Immobile',
      description: [
        'Immobile characters have no movement speed and cannot move from the spot they occupy, although they are still capable of taking actions unless prohibited by another condition.',
      ],
      source: 'HH',
    },
  ],
  [
    'Impaired',
    {
      type: 'basic',
      name: 'Impaired',
      description: [
        'An impaired character is at a –2 circumstance penalty on checks. If the impairment applies to specific checks, they are added to the name of the condition, such as Attack Impaired, Fighting Impaired, Perception Impaired, and so forth.',
        'If it applies to the same trait(s), @{Condition|Disabled|disabled}  supersedes impaired.',
      ],
      source: 'HH',
    },
  ],
  [
    'Normal',
    {
      type: 'basic',
      name: 'Normal',
      description: [
        'The character is unharmed and unaffected by other conditions, acting normally.',
      ],
      source: 'HH',
    },
  ],
  [
    'Stunned',
    {
      type: 'basic',
      name: 'Stunned',
      description: [
        'Stunned characters cannot take any actions, including free actions.',
      ],
      source: 'HH',
    },
  ],
  [
    'Transformed',
    {
      type: 'basic',
      name: 'Transformed',
      description: [
        'Transformed characters have some or all of their traits altered by an outside agency. This may range from a change in the character’s appearance to a complete change in trait ranks, even the removal of some traits and the addition of others!',
        'The primary limit on the transformed condition is the character’s character point total cannot increase, although it can effectively decrease for the duration of the transformation, such as when a powerful superhero is turned into an otherwise powerless mouse or frog (obviously based on considerably fewer character points).',
      ],
      source: 'HH',
    },
  ],
  [
    'Unaware',
    {
      type: 'basic',
      name: 'Unaware',
      description: [
        'The character is completely unaware of his surroundings, unable to make interaction or Perception checks or perform any action based on them. If the condition applies to a specific sense or senses, they are added to the name of the condition, such as visually unaware, tactilely unaware (or numb), and so forth. Subjects have full concealment from all of a character’s unaware senses.',
      ],
      source: 'HH',
    },
  ],
  [
    'Vulnerable',
    {
      type: 'basic',
      name: 'Vulnerable',
      description: [
        'Vulnerable characters are limited in their ability to defend themselves, halving their active defenses (round up the final value).',
        '@{Condition|Defenseless} supersedes vulnerable.',
      ],
      source: 'HH',
    },
  ],
  [
    'Weakened',
    {
      type: 'basic',
      name: 'Weakened',
      description: [
        'The character has temporarily lost character points in a trait. See Weaken effect in Powers for more information.',
        '@{Condition|Debilitated} supersedes weakened.',
      ],
      source: 'HH',
    },
  ],
  // COMBINED CONDITIONS
  [
    'Asleep',
    {
      type: 'combined',
      name: 'Asleep',
      description: [
        'While asleep, a character is @{Condition|Defenseless|defenseless}, @{Condition|Stunned|stunned}, and @{Condition|Unaware|unaware}. A hearing Perception check with three or more degrees of success wakes the character and removes all these conditions, as does any sudden movement (such as shaking the sleeping character) or any effect allowing a resistance check.',
      ],
      components: ['Defenseless', 'Stunned', 'Unaware'],
      source: 'HH',
    },
  ],
  [
    'Blind',
    {
      type: 'combined',
      name: 'Blind',
      description: [
        'The character cannot see. Everything effectively has full visual concealment from him. He is @{Condition|Hindered|hindered}, visually @{Condition|Unaware|unaware}, and @{Condition|Vulnerable|vulnerable}, and may be @{Condition|Impaired|impaired} or @{Condition|Disabled|disabled} for activities where vision is a factor.',
      ],
      components: ['Disabled', 'Hindered', 'Impaired', 'Unaware', 'Vulnerable'],
      source: 'HH',
    },
  ],
  [
    'Bound',
    {
      type: 'combined',
      name: 'Bound',
      description: [
        'A bound character is @{Condition|Defenseless|defenseless}, @{Condition|Immobile|immobile}, and @{Condition|Impaired|impaired}.',
      ],
      components: ['Defenseless', 'Immobile', 'Impaired'],
      source: 'HH',
    },
  ],
  [
    'Deaf',
    {
      type: 'combined',
      name: 'Deaf',
      description: [
        'The character cannot hear, giving everything total auditory concealment from him. This may allow for surprise attacks on the @{Condition|Unaware|unaware} character. Interaction with other characters is limited to sign-language and lip-reading.',
      ],
      components: ['Unaware'],
      source: 'HH',
    },
  ],
  [
    'Dying',
    {
      type: 'combined',
      name: 'Dying',
      description: [
        'A dying character is @{Condition|Incapacitated|incapacitated} and near death. When the character gains this condition, immediately make a Fortitude check (DC 15). If the check succeeds, nothing happens. With two degrees of success, the character stabilizes, removing this condition. If the check fails, the character remains dying. Three or more total degrees of failure mean the character dies: so three failed Fortitude checks or one or two checks adding up to three degrees.',
        'Dying characters make a Fortitude check each round until they either die or stabilize. Another character can stabilize a dying character with a successful Treatment check (DC 15) or use of a Healing effect.',
      ],
      components: ['Incapacitated'],
      source: 'HH',
    },
  ],
  [
    'Entranced',
    {
      type: 'combined',
      name: 'Entranced',
      description: [
        'An entranced character is @{Condition|Stunned|stunned}, taking no actions other than paying attention to the entrancing effect. Any obvious threat automatically breaks the trance. An ally can also shake a character free of the condition with an interaction skill check (DC 10 + effect rank).',
      ],
      components: ['Stunned'],
      source: 'HH',
    },
  ],
  [
    'Exhausted',
    {
      type: 'combined',
      name: 'Exhausted',
      description: [
        'Exhausted characters are near collapse. They are @{Condition|Impaired|impaired} and @{Condition|Hindered|hindered}. Characters recover from an exhausted condition after an hour of rest in comfortable surroundings.',
      ],
      components: ['Impaired', 'Hindered'],
      source: 'HH',
    },
  ],
  [
    'Incapacitated',
    {
      type: 'combined',
      name: 'Incapacitated',
      description: [
        'An incapacitated character is @{Condition|Defenseless|defenseless}, @{Condition|Stunned|stunned}, and @{Condition|Unaware|unaware}. Incapacitated characters generally also fall prone, unless some outside force or aid keeps them standing.',
      ],
      components: ['Defenseless', 'Stunned', 'Unaware', 'Prone'],
      source: 'HH',
    },
  ],
  [
    'Paralyzed',
    {
      type: 'combined',
      name: 'Paralyzed',
      description: [
        'A paralyzed character is @{Condition|Defenseless|defenseless}, @{Condition|Immobile|immobile}, and physically @{Condition|Stunned|stunned}, frozen in place and unable to move, but still aware and able to take purely mental actions, involving no physical movement whatsoever.',
      ],
      components: ['Defenseless', 'Immobile', 'Stunned'],
      source: 'HH',
    },
  ],
  [
    'Prone',
    {
      type: 'combined',
      name: 'Prone',
      description: [
        'A prone character is lying on the ground, receiving a –5 circumstance penalty on close attack checks. Opponents receive a +5 circumstance bonus to close attack checks but a –5 penalty to ranged attack checks (effectively giving the prone character total cover against ranged attacks). Prone characters are @{Condition|Hindered|hindered}.',
        'Standing up from a prone position is a move action.',
      ],
      components: ['Hindered'],
      source: 'HH',
    },
  ],
  [
    'Restrained',
    {
      type: 'combined',
      name: 'Restrained',
      description: [
        'A restrained character is @{Condition|Hindered|hindered} and @{Condition|Vulnerable|vulnerable}. If the restraints are anchored to an immobile object, the character is @{Condition|Immobile|immobile} rather than @{Condition|Hindered|hindered}. If restrained by another character, the restrained character is @{Condition|Immobile|immobile} but may be moved by the restraining character.',
      ],
      components: ['Hindered', 'Immobile', 'Vulnerable'],
      source: 'HH',
    },
  ],
  [
    'Staggered',
    {
      type: 'combined',
      name: 'Staggered',
      description: [
        'A staggered character is @{Condition|Dazed|dazed} and @{Condition|Hindered|hindered}.',
      ],
      components: ['Dazed', 'Hindered'],
      source: 'HH',
    },
  ],
  [
    'Surprised',
    {
      type: 'combined',
      name: 'Surprised',
      description: [
        'A surprised character is @{Condition|Stunned|stunned} and @{Condition|Vulnerable|vulnerable}, caught off-guard and therefore unable to act, and less able to avoid attacks.',
      ],
      components: ['Stunned', 'Vulnerable'],
      source: 'HH',
    },
  ],
]);
