import { AdvantageType, Source } from '@/domain/entities';
import { ItemContent } from '@/domain/valueObjects';

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
  [
    'Fascinate',
    {
      name: 'Fascinate',
      type: 'skill',
      description: [
        'One of your interaction skills is so effective you can capture and hold other’s attention with it. Choose @{Skill|Deception}, @{Skill|Intimidation}, or @{Skill|Persuasion} when you acquire this advantage. You can also use Fascinate with an appropriate @{Skill|Expertise} skill, like musician or singer, at the GM’s discretion.',
        'You are subject to the normal guidelines for interaction skills, and combat or other immediate danger makes this advantage ineffective. Take a standard action and make an interaction skill check against your target’s opposing check (@{Skill|Insight} or @{Defense|Will} defense). If you succeed, the target is entranced. You can maintain the effect with a standard action each round, giving the target a new resistance check. The effect ends when you stop performing, the target successfully resists, or any immediate danger presents itself. Like all interaction skills, you can use Fascinate on a group, but you must affect everyone in the group in the same way.',
        'You may take this advantage more than once. Each time, it applies to a different skill.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Fast Grab',
    {
      name: 'Fast Grab',
      type: 'combat',
      description: [
        'When you hit with an unarmed attack you can immediately make a @{Action|Grab|grab} check against that opponent as a free action. Your unarmed attack inflicts its normal damage and counts as the initial attack check required to grab your opponent.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Favored Environment',
    {
      name: 'Favored Environment',
      type: 'combat',
      description: [
        'You have an environment you’re especially suited for fighting in. Examples include in the air, underwater, in space, in extreme heat or cold, in jungles or woodlands, and so forth. While you are in your favored environment, you gain a +2 circumstance bonus to attack checks or your active defenses. Choose at the start of the round whether the bonus applies to attack or defense. The choice remains until the start of your next round. This circumstance bonus is not affected by power level.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Favored Foe',
    {
      name: 'Favored Foe',
      type: 'skill',
      description: [
        'You have a particular type of opponent you’ve studied or are especially effective against. It may be a type of creature (aliens, animals, constructs, mutants, undead, etc.), a profession (soldiers, police officers, Yakuza, etc.) or any other category the GM approves. Especially broad categories like “humans” or “villains” are not permitted. You gain a +2 circumstance bonus on @{Skill|Deception}, @{Skill|Intimidation}, @{Skill|Insight}, and @{Skill|Perception} checks dealing with your Favored Foe. This circumstance bonus is not limited by power level.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Fearless',
    {
      name: 'Fearless',
      type: 'general',
      description: [
        'You are immune to fear effects of all sorts, essentially the same as an @{Effect|Immunity} to Fear effect.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Grabbing Finesse',
    {
      name: 'Grabbing Finesse',
      type: 'combat',
      description: [
        'You can use your @{Skill|Dexterity} bonus, rather than your @{Ability|Strength} bonus, to make grab attacks. You are not @{Condition|Vulnerable|vulnerable} while grabbing. See @{Advantage|Grab}, for details. This is a good advantage for skilled unarmed combatants focused more on speed than strength.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Great Endurance',
    {
      name: 'Great Endurance',
      type: 'general',
      description: [
        'You have a +5 bonus on checks to avoid becoming @{Condition|Fatigued|fatigued} and checks to hold your breath, avoid damage from starvation or thirst, avoid damage from hot or cold environments, and to resist suffocation and drowning.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Hide in Plain Sight',
    {
      name: 'Hide in Plain Sight',
      type: 'skill',
      description: [
        'You can @{Action|Hide|hide} without any need for a @{Condition|Deception} or @{Condition|Intimidation} check or any sort of diversion, and without penalty to your @{Condition|Stealth} check. You’re literally there one moment, and gone the next. You must still have some form of cover or concealment within range of your normal movement speed in order to hide.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Aim',
    {
      name: 'Improved Aim',
      type: 'combat',
      description: [
        'You have an even keener eye when it comes to ranged combat. When you take a standard action to @{Action|Aim|aim}, you gain double the normal circumstance bonus: +10 for a close attack or ranged attack adjacent to the target, +5 for a ranged attack at a greater distance.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Critical',
    {
      name: 'Improved Critical',
      type: 'combat',
      description: [
        'Increase your critical threat range with a particular attack (chosen when you acquire this advantage) by 1, allowing you to score a critical hit on a natural 19 or 20. Only a natural 20 is an automatic hit, however, and an attack that misses is not a critical. Each additional rank applies to a different attack or increases your threat range with an existing attack by one more, to a maximum threat range of 16-20 with 4 ranks.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Improved Defense',
    {
      name: 'Improved Defense',
      type: 'combat',
      description: [
        'When you take the @{Action|Defend|defend} action in combat you gain a +2 circumstance bonus to your active defense checks for the round.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Disarm',
    {
      name: 'Improved Disarm',
      type: 'combat',
      description: [
        'You have no penalty to your attack check when attempting to @{Action|Disarm|disarm} an opponent and they do not get the opportunity to disarm you.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Grab',
    {
      name: 'Improved Grab',
      type: 'combat',
      description: [
        'You can make @{Action|Grab|grab} attacks with only one arm, leaving the other free. You can also maintain the grab while using your other hand to perform actions. You are not @{Condition|Vulnerable|vulnerable} while grabbing.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Hold',
    {
      name: 'Improved Hold',
      type: 'combat',
      description: [
        'Your @{Action|Grab|grab} attacks are particularly difficult to escape. Opponents you grab suffer a –5 circumstance penalty on checks to escape.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Initiative',
    {
      name: 'Improved Initiative',
      type: 'combat',
      description: [
        'You have a +4 bonus to your initiative checks per rank in this advantage.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Improved Smash',
    {
      name: 'Improved Smash',
      type: 'combat',
      description: [
        'You have no penalty to attack checks to hit an object held by another character (see @{Action|Smash}).',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improved Trip',
    {
      name: 'Improved Trip',
      type: 'combat',
      description: [
        'You have no penalty to your attack check to @{Action|Trip|trip} an opponent and they do not get the opportunity to trip you. When making a trip attack, make an opposed check of your @{Skill|Acrobatics} or @{Skill|Athletics} against your opponent’s Acrobatics or Athletics, you choose which your opponent uses to defend, rather than the target choosing. This is a good martial arts advantage for unarmed fighters.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improvised Tools',
    {
      name: 'Improvised Tools',
      type: 'skill',
      description: [
        'You ignore the circumstance penalty for using skills without proper tools, since you can improvise sufficient tools with whatever is at hand. If you’re forced to work without tools at all, you suffer only a –2 penalty.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Improvised Weapon',
    {
      name: 'Improvised Weapon',
      type: 'combat',
      description: [
        'When wielding an improvised close combat weapon—anything from a chair to a telephone pole or entire car—you use your @{Skill|Close Combat}: Unarmed skill bonus for attack checks with the “weapon” rather than relying on your general Close Combat skill bonus. Additional ranks in this advantage give you a +1 bonus to Damage with improvised weapons per rank. Your maximum Damage bonus is still limited by power level, as usual.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Inspire',
    {
      name: 'Inspire',
      type: 'fortune',
      description: [
        'You can inspire your allies to greatness. Once per scene, by taking a standard action and spending a Victory point, allies able to interact with you gain a +1 circumstance bonus per Inspire rank on all checks until the start of your next round, with a maximum bonus of +5. You do not gain the bonus, only your allies do. The inspiration bonus ignores power level limits, like other uses of Victory points. Multiple uses of Inspire do not stack, only the highest bonus applies.',
      ],
      maxRanks: 5,
      source: 'HH',
    },
  ],
  [
    'Jack-Of-All-Trades',
    {
      name: 'Jack-Of-All-Trades',
      type: 'skill',
      description: [
        'You can use any skill untrained, even skills or aspects of skills that normally cannot be used untrained, although you must still have proper tools if the skill requires them.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Languages',
    {
      name: 'Languages',
      type: 'skill',
      description: [
        'You can speak and understand additional languages. With one rank in this advantage, you know an additional language. For each additional rank, you double your additional known languages: two at rank 2, four at rank 3, eight at rank 4, etc. So a character with Languages 7 is fluent in 64 languages! Characters are assumed to be fluent in any languages they know, including being able to read and write in them.',
        'For the ability to understand any language, see @{Effect|Comprehend} effect.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Leadership',
    {
      name: 'Leadership',
      type: 'fortune',
      description: [
        'Your presence reassures and lends courage to your allies. As a standard action, you can spend a Victory point to remove one of the following conditions from an ally with whom you can interact: @{Condition|Dazed|dazed}, @{Condition|Fatigued|fatigued}, or @{Condition|Stunned|stunned}.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Instant Up',
    {
      name: 'Instant Up',
      type: 'general',
      description: [
        'You can go from prone to standing as a free action without the need for an @{Skill|Acrobatics} skill check.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Interpose',
    {
      name: 'Interpose',
      type: 'general',
      description: [
        'Once per round, when an ally within range of your normal movement is hit by an attack, you can choose to place yourself between the attacker and your ally as a reaction, making you the target of the attack instead. The attack hits you rather than your ally, and you suffer the effects normally. You cannot use this advantage against area effects or perception range attacks, only those requiring an attack check.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Inventor',
    {
      name: 'Inventor',
      type: 'skill',
      description: [
        'You can use the @{Skill|Technology} skill to create inventions. See Inventing for details.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Luck',
    {
      name: 'Luck',
      type: 'fortune',
      description: [
        'Once per round, you can choose to reroll a die roll, like spending a Victory point (see Victory points), including adding 10 to rerolls of 10 or less. You can do this a number of times per game session equal to your Luck rank, with a maximum rank of half the series power level (rounded down). Your Luck ranks refresh when your Victory points “reset” at the start of an adventure. The GM may choose to set a different limit on ranks in this advantage, depending on the series.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Minion',
    {
      name: 'Minion',
      type: 'general',
      description: [
        'You have a follower or minion. This minion is an independent character with a Character point total of (advantage rank x 15). Minions are subject to the normal power level limits, and cannot have minions themselves. Your minions (if capable of independent thought) automatically have a helpful attitude toward you. They are subject to the normal rules for minions.',
        'Minions do not earn Character points. Instead, you must spend earned Character points to increase your rank in this advantage to improve the minion’s Character point total and traits. Minions also do not have Victory points. Any lost minions are replaced in between adventures with other followers with similar abilities at the Gamemaster’s discretion.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Move-By Action',
    {
      name: 'Move-By Action',
      type: 'combat',
      description: [
        'When taking a standard action and a move action you can move both before and after your standard action, provided the total distance moved isn’t greater than your normal movement speed.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Power Attack',
    {
      name: 'Power Attack',
      type: 'combat',
      description: [
        'When you make a @{Maneuver|Power Attack|power attack} you can take a penalty of up to –5 on your attack bonus and add the same number (up to +5) to the effect bonus of your attack.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Precise Attack',
    {
      name: 'Precise Attack',
      type: 'combat',
      description: [
        'When you make close or ranged attacks (choose one) you ignore attack check penalties for cover or concealment (choose one), although total cover still prevents you from making attacks. Each additional rank in this advantage lets you choose an additional option, so with Precise Attack 4, all your attacks (both close and ranged) ignore penalties for both cover and concealment.',
      ],
      maxRanks: 4,
      source: 'HH',
    },
  ],
  [
    'Prone Fighting',
    {
      name: 'Prone Fighting',
      type: 'combat',
      description: [
        'You suffer no circumstance penalty to attack checks for being @{Condition|Prone|prone}, and adjacent opponents do not gain the usual circumstance bonus for close attacks against you.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Quick Draw',
    {
      name: 'Quick Draw',
      type: 'combat',
      description: [
        'You can draw a weapon from a holster or sheath as a free action, rather than a move action.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Ranged Attack',
    {
      name: 'Ranged Attack',
      type: 'combat',
      description: [
        'You have a +1 bonus to ranged attacks checks per rank in this advantage. Your total attack bonus is still limited by power level.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Redirect',
    {
      name: 'Redirect',
      type: 'combat',
      description: [
        'If you successfully @{Action|Trick|trick} an opponent, you can redirect a missed attack against you from that opponent at another target as a reaction. The new target must be adjacent to you and within range of the attack. The attacker makes a new attack check with the same modifiers as the first against the new target.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Ritualist',
    {
      name: 'Ritualist',
      type: 'skill',
      description: [
        'You can use the @{Skill|Expertise}: Magic skill to create and cast magical rituals. This advantage is often a back-up or secondary magical power for superhuman sorcerers, and may be the only form of magic available to some “dabbler” types.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Second Chance',
    {
      name: 'Second Chance',
      type: 'general',
      description: [
        'Choose a particular hazard, such as falling, being tripped, triggering traps, mind control (or another fairly specific power effect, such as Damage with the fire descriptor) or a particular skill with consequences for failure. If you fail a check against that hazard, you can make another immediately and use the better of the two results. You only get one second chance for any given check, and the GM decides if a particular hazard or skill is an appropriate focus for this advantage. You can take this advantage multiple times, each for a different hazard.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Seize Initiative',
    {
      name: 'Seize Initiative',
      type: 'fortune',
      description: [
        'You can spend a Victory point to automatically go first in the initiative order. You may only do so at the start of combat, when you would normally make your initiative check. If more than one character uses this advantage, they all make initiative checks normally and act in order of their initiative result, followed by all the other characters who do not have this advantage.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Set-Up',
    {
      name: 'Set-Up',
      type: 'combat',
      description: [
        'You can transfer the benefits of a successful combat use of an interaction skill to your teammate(s). For example, you can feint and have your target vulnerable against one or more allies next attack(s), rather than yours. Each rank in the advantage lets you transfer the benefit to one ally. The interaction skill check requires its normal action, and the affected allies must be capable of interacting with you (or at least seeing the set-up) to benefit from it.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Sidekick',
    {
      name: 'Sidekick',
      type: 'general',
      description: [
        'You have another character serving as your partner and aide. Create your sidekick as an independent character with (advantage rank x 5) Character points, and subject to the series power level. A sidekick’s Character point total must be less than yours. Your sidekick is an NPC, but automatically helpful and loyal to you. Gamemasters should generally allow you to control your sidekick, although sidekicks remain NPCs and the GM has final say in their actions.',
        'Sidekicks do not earn Character points. Instead, you must spend earned Character points to increase your rank in Side-kick to improve the sidekick’s Character point total and traits; each point you spend to increase your rank in Sidekick grants the sidekick 5 additional Character points. Sidekicks also do not have Victory points, but you can spend your own Victory points on the sidekick’s behalf with the usual benefits. Sidekicks are not minions, but full-fledged characters, so they are not subject to the minion rules.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Skill Mastery',
    {
      name: 'Skill Mastery',
      type: 'skill',
      description: [
        'Choose a skill. You can make routine checks with that skill even when under pressure. This advantage does not allow you to make routine checks with skills that do not normally allow you to do so. You can take this advantage multiple times for different skills.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Startle',
    {
      name: 'Startle',
      type: 'skill',
      description: [
        'You can use @{Skill|Intimidation} rather than @{Skill|Deception} to @{Action|Feint|feint} in combat. Targets resist with @{Skill|Insight}, @{Skill|Intimidation}, or @{Defense|Will} defense.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Takedown',
    {
      name: 'Takedown',
      type: 'combat',
      description: [
        'If you render a minion incapacitated with an attack, you get an immediate extra attack as a free action against another minion within range and adjacent to the previous target’s location. The extra attack is with the same attack and bonus as the first. You can continue using this advantage until you miss or there are no more minions within range of your attack or your last target.',
        'A second rank in this advantage allows you to attack non-adjacent minion targets, moving between attacks if necessary to do so. You cannot move more than your total speed in the round, regardless of the number of attacks you make. You stop attacking once you miss, run out of movement, or there are no more minions within range of your attack.',
      ],
      maxRanks: 2,
      source: 'HH',
    },
  ],
  [
    'Taunt',
    {
      name: 'Taunt',
      type: 'skill',
      description: [
        'You can @{Action|Demoralize|demoralize} an opponent with @{Skill|Deception} rather than @{Skill|Intimidation}, disparaging and undermining confidence rather than threatening. Targets resist using @{Skill|Deception}, @{Skill|Insight}, or @{Defense|Will} defense.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Teamwork',
    {
      name: 'Teamwork',
      type: 'general',
      description: [
        'You’re effective at helping out your friends. When you support a team check you have a +5 circumstance bonus to your check. This bonus also applies to the @{Action|Aid} action and Team Attacks.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Throwing Mastery',
    {
      name: 'Throwing Mastery',
      type: 'combat',
      description: [
        'You have a +1 damage bonus with thrown weapons per rank in this advantage. You can also throw normally harmless objects—playing cards, pens, paper clips, and so forth—as weapons with a damage bonus equal to your advantage rank and range based on the higher of your advantage rank or @{Ability|Strength}. Your maximum damage bonus with any given weapon or attack is still limited by power level.',
      ],
      maxRanks: -1,
      source: 'HH',
    },
  ],
  [
    'Tracking',
    {
      name: 'Tracking',
      type: 'skill',
      description: [
        'You can use the @{Skill|Perception} skill to visually follow tracks like the @{Effect|Senses|Tracking Senses} effect.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Trance',
    {
      name: 'Trance',
      type: 'general',
      description: [
        'Through breathing and bodily control, you can slip into a deep trance. This takes a minute of uninterrupted meditation and a DC 15 @{Ability|Awareness} check. While in the trance you add your Awareness rank to your @{Ability|Stamina} rank to determine how long you can hold your breath and you use the higher of your @{Defense|Fortitude} or @{Defense|Will} defenses for resistance checks against suffocation. Poison and disease effects are suspended for the duration of the trance. It requires a @{Skill|Perception} check with a DC equal to your Awareness check result to determine you’re not dead because your bodily functions are so slow. You are aware of your surroundings while in trance and can come out of it at any time at will. You cannot take any actions while in the trance, but your GM may allow mental communication while in a trance.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Ultimate Effort',
    {
      name: 'Ultimate Effort',
      type: 'fortune',
      description: [
        'You can spend a Victory point on a particular check and treat the roll as a 20 (meaning you don’t need to roll the die at all, just apply a result of 20 to your modifier). This is not a natural 20, but is treated as a roll of 20 in all other respects. You choose the particular check the advantage applies to when you acquire it and the GM must approve it. You can take Ultimate Effort multiple times, each time, it applies to a different check. This advantage may not be used after you’ve rolled the die to determine if you succeed.',
        {
          type: 'section',
          title: 'Sample Ultimate Efforts',
          description: [
            'The following are some potential Ultimate Efforts. The GM is free to add others suitable to the series.',
            {
              type: 'list',
              items: [
                '<strong>Ultimate Aim:</strong> When you take a standard action to @{Action|Aim|aim} an attack, you can spend a Victory point to apply a 20 result to the attack check on the following round. Since the Ultimate Aim bonus is not a natural 20, it also does not qualify as an automatic or critical hit.',
                '<strong>Ultimate Resistance:</strong> You can spend a Victory point to apply a 20 result to a resistance check with one defense determined when you acquire this advantage.',
                '<strong>Ultimate Skill:</strong> You can spend a Victory point to apply a 20 result to checks with a particular skill.',
              ],
            },
          ],
        },
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Uncanny Dodge',
    {
      name: 'Uncanny Dodge',
      type: 'combat',
      description: [
        'You are especially attuned to danger. You are not @{Condition|Vulnerable|vulnerable} when @{Condition|Surprised|surprised} or otherwise caught off-guard. You are still made vulnerable by effects that limit your mobility.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Weapon Bind',
    {
      name: 'Weapon Bind',
      type: 'combat',
      description: [
        'If you take the @{Action|Defend|defend} action and successfully defend against a close weapon attack, you can make a @{Action|Disarm|disarm} attempt against the attacker immediately as a reaction. The disarm attempt is carried out normally, including the attacker getting the opportunity to disarm you.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Weapon Break',
    {
      name: 'Weapon Break',
      type: 'combat',
      description: [
        'If you take the @{Action|Defend|defend} action and successfully defend against a close weapon attack, you can make an attack against the attacker’s weapon immediately as a reaction. This requires an attack check and inflicts normal damage to the weapon if it hits (see @{Action|Smash}).',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
  [
    'Well-Informed',
    {
      name: 'Well-Informed',
      type: 'skill',
      description: [
        'You are exceptionally well-informed. When encountering an individual, group, or organization for the first time, you can make an immediate @{Skill|Investigation} or @{Skill|Persuasion} skill check to see if your character has heard something about the subject. Use the guidelines for gathering information in the Investigation Skill description to determine the level of information you gain. You receive only one check per subject upon first encountering them, although the GM may allow another upon encountering the subject again once significant time has passed.',
      ],
      maxRanks: 1,
      source: 'HH',
    },
  ],
]);
