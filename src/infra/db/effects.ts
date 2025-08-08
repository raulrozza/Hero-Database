import { IEffect } from '@/domain/entities';

export type MetaEffect = Omit<IEffect, 'key' | 'extras' | 'flaws'>;

export const effects = new Map<string, MetaEffect>([
  [
    'Affliction',
    {
      name: 'Affliction',
      type: 'attack',
      action: 'standard',
      duration: 'instant',
      range: 'close',
      cost: { type: 'standard', costs: [1], maxRanks: -1 },
      description: [
        'You can impose some debilitating condition or conditions on a target by making a close attack. You set the conditions your Affliction causes at each degree when you acquire it and they may not be changed. Higher degree conditions replace lower degree conditions and do not stack with them.',
        'See the possible conditions for each degree under the <strong>Affliction Resistance Check</strong> table. The target resists with @{Defense|Fortitude} or @{Defense|Will} defense (chosen when you take the effect): ',
        { type: 'heading', variant: 'h1', text: 'Affliction Resistance Check' },
        {
          type: 'box',
          description: [
            {
              type: 'heading',
              variant: 'h2',
              text: 'Fortitude or Will vs. DC',
            },
            {
              type: 'heading',
              variant: 'h2',
              text: '[Affliction rank + 10]',
            },
            '<strong>Success:</strong> No effect.',
            '<strong>Failure (one degree):</strong> The target is @{Condition|Dazed|dazed}, @{Condition|Entranced|entranced}, @{Condition|Fatigued|fatigued}, @{Condition|Hindered|hindered}, @{Condition|Impaired|impaired}, or @{Condition|Vulnerable|vulnerable} (choose one). Potential descriptors include coughing or sneezing, creeping mental influence, drowsiness, euphoria, fear, itchiness, lethargy, nausea, pain, or tipsiness.',
            '<strong>Failure (two degrees):</strong> The target is @{Condition|Compelled|compelled}, @{Condition|Defenseless|defenseless}, @{Condition|Disabled|disabled}, @{Condition|Exhausted|exhausted}, @{Condition|Immobile|immobile}, @{Condition|Prone|prone}, or @{Condition|Stunned|stunned} (choose one). Potential descriptors include agonizing pain, confusion, ecstasy, momentary emotional or mental influence, paralysis, seizure, terror, or vomiting.',
            '<strong>Failure (three degrees):</strong> The target is @{Condition|Asleep|asleep}, @{Condition|Controlled|controlled}, @{Condition|Incapacitated|incapacitated}, @{Condition|Paralyzed|paralyzed}, @{Condition|Transformed|transformed} or @{Condition|Unaware|unaware} (choose one).',
          ],
        },
        'The target of an Affliction makes a resistance check at the end of each of his turns to remove first and second degree conditions. Third degree conditions require a minute of recovery time or outside aid, such as the @{Skill|Treatment} skill or @{Effect|Healing} effect (DC 10 + rank).',
        'The exact nature and descriptors of the Affliction are up to you, chosen when you acquire the effect, with the GM’s approval; some examples are provided, but feel free to make up your own.',
      ],
      source: 'HH',
    },
  ],
]);
