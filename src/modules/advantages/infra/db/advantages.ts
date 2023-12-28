import { AdvantageType, Source } from '@/shared/domain/entities';
import { ItemContent } from '@/shared/domain/valueObjects';

export type MetaAdvantage = {
  name: string;
  type: AdvantageType;
  description: ItemContent[];
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
        {
          type: 'section',
          title: 'Sample benefits',
          description: [
            'The following are some potential Benefits. The GM is free to choose any suitable Benefit for the series.',
            {
              type: 'list',
              items: [
                '<strong>Alternate Identity:</strong> You have an alternate identity, complete with legal paperwork (driver’s license, birth certificate, etc.). This is different from a costumed identity, which doesn’t necessarily have any special legal status (but may in some settings).',
                '<strong>Ambidexterity:</strong> You are equally adept using either hand, suffering no circumstance penalty for using your off-hand (as you don’t have one).',
                '<strong>Cipher:</strong> Your true history is well hidden, making it difficult to dig up information about you. @{Skill|Investigation} checks concerning you are made at a –5 circumstance penalty per rank in this benefit.',
                '<strong>Diplomatic Immunity:</strong> By dint of your diplomatic status, you cannot be prosecuted for crimes in nations other than your own. All another nation can do is deport you to your home nation.',
                '<strong>Security Clearance:</strong> You have access to classified government information, installations, and possibly equipment and personnel.',
                '<strong>Status:</strong> By virtue of birth or achievement, you have special status. Examples include nobility, knight-hood, aristocracy, and so forth.',
                '<strong>Wealth:</strong> You have greater than average wealth or material resources, such as well-off (rank 1), independently wealthy (rank 2), a millionaire (rank 3), multi-millionaire (rank 4), or billionaire (rank 5).',
              ],
            },
          ],
        },
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Chokehold',
    {
      name: 'Chokehold',
      type: 'combat',
      description: [
        'If you successfully @{Action|Grab|grab} and @{Condition|Restrained|restrain} an opponent, you can apply a chokehold, causing your opponent to begin suffocating for as long as you continue to restrain your target.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Close Attack',
    {
      name: 'Close Attack',
      type: 'combat',
      description: [
        'You have a +1 bonus to close attacks checks per rank in this advantage. Your total attack bonus is still limited by power level. This advantage best suits characters with a level of overall close combat skill (armed and unarmed). For capability with a particular type of attack, use the @{Skill|Close Combat} skill.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Connected',
    {
      name: 'Connected',
      type: 'skill',
      description: [
        'You have such extensive and well-informed contacts you can make an @{Skill|Investigation} check to gather information in only one minute, assuming you have some means of getting in touch with your contacts. Further Investigation checks to gather information on the same subject require the normal length of time, since you must go beyond your immediate network of contacts.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Daze',
    {
      name: 'Daze',
      type: 'skill',
      description: [
        'You can make a @{Skill|Deception} or @{Skill|Intimidation} check as a standard action (choose which skill when you acquire the advantage) to cause an opponent to hesitate in combat. Make a skill check as a standard action against your target’s resistance check (the same skill, @{Skill|Insight}, or @{Defense|Will} defense, whichever has the highest bonus). If you win, your target is @{Condition|Dazed|dazed} until the end of your next round. The ability to Daze with Deception and with Intimidation are separate advantages. Take this advantage twice in order to be able to do both.',
      ],
      maxRanks: 2,
      source: 'HH',
    },
  ],
  [
    'Defensive Attack',
    {
      name: 'Defensive Attack',
      type: 'combat',
      description: [
        'When you make a @{Maneuver|Defensive Attack|defensive attack}, you can take a penalty of up to –5 on your attack bonus and add the same number (up to +5) to both your active defenses (@{Defense|Dodge} and @{Defense|Parry}).',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Defensive Roll',
    {
      name: 'Defensive Roll',
      type: 'combat',
      description: [
        'You can avoid damage through agility and “rolling” with an attack. You receive a bonus to your @{Defense|Toughness} equal to your advantage rank, but it is considered an active defense similar to @{Defense|Dodge} and @{Defense|Parry}, so you lose this bonus whenever you are @{Condition|Vulnerable|vulnerable} or @{Condition|Defenseless|defenseless}. Your total Toughness, including this advantage, is still limited by power level.',
        'This advantage is common for heroes who lack either superhuman speed or toughness, relying on their agility and training to avoid harm.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Dyehard',
    {
      name: 'Dyehard',
      type: 'general',
      description: [
        'When your condition becomes @{Condition|Dying|dying} you automatically stabilize on the following round without any need for a @{Ability|Stamina} check, although further damage—such as a finishing attack—can still kill you',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Eidetic Memory',
    {
      name: 'Eidetic Memory',
      type: 'general',
      description: [
        'You have perfect recall of everything you’ve experienced. You have a +5 circumstance bonus on checks to remember things, including resistance checks against effects that alter or erase memories. You can also make @{Skill|Expertise} skill checks to answer questions and provide information as if you were trained, meaning you can answer questions involving difficult or obscure knowledge even without ranks in the skill, due to the sheer amount of trivia you have picked up.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Equipment',
    {
      name: 'Equipment',
      type: 'general',
      description: [
        'You have 5 points per rank in this advantage to spend on equipment. This includes vehicles and headquarters. See Gadgets & Gear for details on equipment and its costs. Many heroes rely almost solely on Equipment in conjunction with their skills and other advantages.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Evasion',
    {
      name: 'Evasion',
      type: 'combat',
      description: [
        'You have a +2 circumstance bonus to @{Defense|Dodge} resistance checks to avoid area effects (see @{Extra|Area} extra in Powers). If you have 2 ranks in this advantage, your circumstance bonus increases to +5.',
      ],
      maxRanks: 2,
      source: 'HH',
    },
  ],
  [
    'Extraordinary Effort',
    {
      name: 'Extraordinary Effort',
      type: 'general',
      description: [
        'When using extra effort, you can gain two of the listed benefits, even stacking two of the same type of benefit. However, you also double the cost of the effort; you’re @{Condition|Exhausted|exhausted} starting the turn after your extraordinary effort. If you are already @{Condition|Fatigued|fatigued}, you are @{Condition|Incapacitated|incapacitated}. If you are already exhausted, you cannot use extraordinary effort. Spending a Victory point at the start of your next turn reduces the cost of your extraordinary effort to merely fatigued, the same as a regular extra effort.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
]);
