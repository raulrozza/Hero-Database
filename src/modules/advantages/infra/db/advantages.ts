import { AdvantageType, Source } from '@/shared/domain/entities';

export type MetaAdvantage = {
  name: string;
  type: AdvantageType;
  description: string[];
  maxRanks: number;
  source: Source;
};

export const advantages = new Map<string, MetaAdvantage>([
  [
    'Accurate Attack',
    {
      name: 'Accurate Attack',
      type: 'combat',
      description: [
        'When you make an @{Maneuver|Accurate Attack|accurate attack} you can take a penalty of up to –5 on the effect modifier of the attack and add the same number (up to +5) to your attack bonus.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Agile Feint',
    {
      name: 'Agile Feint',
      type: 'skill',
      description: [
        'You can use your @{Skill|Acrobatics} bonus or movement speed rank in place of @{Skill|Deception} to feint and trick in combat as if your skill bonus or speed rank were your Deception bonus. Your opponent opposes the attempt with @{Skill|Acrobatics} or @{Skill|Insight} (whichever is better).',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'All-out Attack',
    {
      name: 'All-out Attack',
      type: 'combat',
      description: [
        'When you make an @{Maneuver|All-out Attack|all-out attack} you can take a penalty of up to –5 on your active defenses (@{Defense|Dodge} and @{Defense|Parry}) and add the same number (up to +5) to your attack bonus.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Animal Empathy',
    {
      name: 'Animal Empathy',
      type: 'skill',
      description: [
        'You have a special connection with animals. You can use interaction skills on animals normally, and do not have to speak a language the animal understands; you communicate your intent through gestures and body language and learn things by studying animal behavior. Characters normally have a –10 circumstance penalty to use interaction skills on animals, due to their @{Ability|Intellect} and lack of language.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Artificer',
    {
      name: 'Artificer',
      type: 'skill',
      description: [
        'You can use the @{Skill|Expertise|Expertise: Magic} skill to create temporary magical devices. See Magical Inventions, for details.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Assessment',
    {
      name: 'Assessment',
      type: 'general',
      description: [
        'You’re able to quickly size up an opponent’s combat capabilities. Choose a target you can accurately perceive and have the GM make a secret Insight check for you as a free action, opposed by the target’s @{Skill|Deception} check result.',
        'If you win, the GM tells you the target’s attack and defense bonuses relative to yours (lower, higher, or equal). With each additional degree of success, you learn one of the target’s bonuses exactly.',
        'If you lose the opposed roll, you don’t find out anything. With more than one degree of failure, the GM may lie or otherwise exaggerate the target’s bonuses.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Attractive',
    {
      name: 'Attractive',
      type: 'skill',
      description: [
        'You’re particularly attractive, giving you a +2 circumstance bonus on @{Skill|Deception} and @{Skill|Persuasion} checks to deceive, seduce, or change the attitude of anyone who finds your looks appealing. With a second rank, you are Very Attractive, giving you a +5 circumstance bonus. This bonus does not count as part of your regular skill bonus in terms of the series power level, but also does not apply to people or situations which (in the GM’s opinion) would not be influenced by your appearance.',
        'While superheroes tend to be a fairly good-looking lot, this advantage is generally reserved for characters with particularly impressive looks.',
      ],
      maxRanks: 2,
      source: 'HH',
    },
  ],
  [
    "Beginner's Luck",
    {
      name: "Beginner's Luck",
      type: 'fortune',
      description: [
        'By spending a Victory point, you gain an effective 5 ranks in one skill of your choice you currently have at 4 or fewer ranks, including skills you have no ranks in, even if they can’t be used untrained. These temporary skill ranks last for the duration of the scene and grant you their normal benefits.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Benefit',
    {
      name: 'Benefit',
      type: 'general',
      description: [
        'By spending a Victory point, you gain an effective 5 ranks in one skill of your choice you currently have at 4 or fewer ranks, including skills you have no ranks in, even if they can’t be used untrained. These temporary skill ranks last for the duration of the scene and grant you their normal benefits.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
]);
