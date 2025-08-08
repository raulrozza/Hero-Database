import { ModifierType, Source } from '@/domain/entities';
import { ItemContent, RankCost } from '@/domain/valueObjects';

export type MetaModifier = {
  name: string;
  type: ModifierType;
  description: ItemContent[];
  cost: RankCost;
  source: Source;
  variants?: Array<{
    effect: string;
    name?: string;
    description?: ItemContent[];
    cost?: RankCost;
  }>;
};

export const modifiers = new Map<string, MetaModifier>([
  [
    'Accurate',
    {
      name: 'Accurate',
      type: 'extra',
      description: [
        'An effect with this extra is especially accurate; you get +2 per Accurate rank to attack checks made with it. The power level limits maximum attack bonus with any given effect.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Corporeal',
    {
      name: 'Affects Corporeal',
      type: 'extra',
      description: [
        'An incorporeal being can use an effect with this extra on the corporeal world (see @{Effect|Insubstantial}). When an effect is used against a corporeal target, the effect’s rank is equal to the rank of this extra, up to a maximum of the effect’s full rank. Characters with lower ranks 1–3 of Insubstantial do not require this extra for their effects to work on the physical world, although they can apply it to their @{Ability|Strength} rank to allow them to exert some Strength while Insubstantial.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Insubstantial',
    {
      name: 'Affects Insubstantial',
      type: 'extra',
      description: [
        'An effect with this extra works on @{Effect|Insubstantial|insubstantial} targets, in addition to having its normal effect on corporeal targets. Rank 1 allows the effect to work at half its normal rank against insubstantial targets (rounded down); rank 2 allows the effect to function at its full rank against them.',
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Objects',
    {
      name: 'Affects Objects',
      type: 'extra',
      description: [
        'This modifier allows effects normally resisted by @{Defense|Fortitude} to work on non-living objects (those with no @{Ability|Stamina}). Generally, this extra applies to effects like @{Effect|Heal} or @{Effect|Weaken}, allowing them to work on objects in the same way as they do living creatures. If the effect <strong>Affects Only Objects</strong>, working on objects but not on living creatures, it has a net modifier of +0.',
        'Objects do not get resistance checks; the effect works on the targeted object at its maximum degree of success. At the GM’s discretion, someone holding, carrying, or wearing an object can make a @{Defense|Dodge} resistance check against the effect, representing pulling the object out of the way at the last moment.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Others',
    {
      name: 'Affects Others',
      type: 'extra',
      description: [
        'This extra allows you to give someone else use of a personal effect. You must touch the subject as a standard action, and they have control over their use of the effect, although you can withdraw it when you wish as a free action. If you are unable to maintain the effect, it stops working, even if someone else is using it. Both you and your subject(s) can use the effect simultaneously.',
        'If the effect <strong>Affects Only Others</strong>, and not you, it has a net modifier of +0.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Alternate Effect',
    {
      name: 'Alternate Effect',
      type: 'extra',
      description: [
        'This modifier allows you to “swap-out” the effect for an entire other, alternate, effect! For example, a @{Effect|Damage} effect with the descriptor of “laser” might have a visual @{Power|Dazzle} as an Alternate Effect: the same light beam can be used to damage or blind a target, just not both at once. Think of Alternate Effects as different “settings” for a power. (For combinations of effects that work simultaneously, see the @{Modifier|Linked} modifier in this section.) A set of Alternate Effects is called an <strong>array</strong>.',
        'An Alternate Effect can have any rank, or combination of modifiers. Alternate Effects may also have different descriptors, usually thematically linked, within reason. This allows you to have two versions of a Damage effect, for example: such as a fire blast and an ice blast. Permanent effects cannot have Alternate Effects, nor can they be Alternate Effects (since they can’t be turned on and off).',
        'An Alternate Effect can have a total cost in character points no greater than the primary effect. So a rank 10 primary effect costing 2 points per rank, for a total of 20, can have any Alternate Effect with a cost of 20 character points or less. This cost does not include the cost of the Alternate Effect modifier itself. So if the 20-point power has 5 Alternate Effects (making the final cost 25 points), each Alternate Effect is still limited to a total value of 20 points (including any modifiers it may have), that of the base effect. Essentially, each Alternate Effect has to have all of the others as Alternate Effects. Since the modifier applies equally to all effects in the array, its cost is discounted in terms of the “free” points they have to spend.',
        'Like any power, an Alternate Effect may be made up of two or more effects, but their total cost cannot exceed the cost of the primary effect.',
        'Alternate Effects cannot be used or maintained at the same time as other Alternates in the same array; they are mutually exclusive. Switching between Alternates requires a free action and can be done once per turn. If anything disables, nullifies, or drains any power in an array, all of them are affected in the same way.',
        {
          type: 'section',
          title: 'Dynamic Alternate Effect',
          description: [
            'For 2 character points an Alternate Effect is <strong>dynamic</strong>; it can share character points with other Dynamic Alternate Effects, allowing them all to operate at the same time, but at reduced effectiveness (so you must have two Dynamic Alternate Effects for this option to be useful). You decide how many character points are allocated to the effects once per turn as a free action. Making the base effect of an array Dynamic requires 1 character point.',
          ],
        },
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Alternate Resistance',
    {
      name: 'Alternate Resistance',
      type: 'extra',
      description: [
        'An effect with this modifier has a different resistance than usual. The resistance check difficulty class remains the same, only the resistance differs. If the change is to a generally lower (and therefore more advantageous) resistance, this extra increases cost per rank by +1. If, in the GM’s opinion, there is no real increase in effectiveness, just a chance to the resistance, it has a net modifier of +0.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
      variants: [
        {
          effect: 'Affliction',
          description: [
            'Some @{Effect|Affliction|Afflictions} may be initially resisted by @{Resistance|Dodge}, representing the need for quick reaction time or reflexes to avoid the effect. In this case, the later resistance checks to remove the Affliction’s conditions are typically still based on @{Resistance|Fortitude} or @{Resistance|Will}. For example, a target might make a Dodge check to avoid a blinding light or spray of liquid, but a Fortitude check to eliminate the effect if the initial Dodge fails.',
          ],
          cost: {
            costs: [0],
            maxRanks: -1,
            type: 'standard',
          },
        },
      ],
    },
  ],
  [
    'Area',
    {
      name: 'Area',
      type: 'extra',
      description: [
        'This extra allows an effect that normally works on a single target to affect an area. No attack check is needed; the effect simply fills the designated area, based on the type of modifier. Potential targets in the area are permitted a @{Resistance|Dodge} resistance check (DC 10 + effect rank) to avoid some of the effect (reflecting ducking for cover, dodging out of the way, and so forth). A successful resistance check reduces the Area effect to half its normal rank against that target (round down, minimum of 1 rank).',
        {
          type: 'section',
          title: 'Shape',
          description: [
            'Choose one of the following options:',
            '<strong>Burst:</strong> The effect fills a sphere with a 30-foot radius (distance rank 0). Bursts on level surfaces (like the ground) create hemispheres 30 feet in radius and height.',
            '<strong>Cloud:</strong> The effect fills a sphere with a 15-foot radius (distance rank –1) that lingers in that area for one round after its duration expires (affecting any targets in the area normally during the additional round). Clouds on level surfaces (like the ground) create hemispheres 15 feet in radius and height.',
            '<strong>Cone:</strong> The effect fills a cone with a length, width, and height of 60 feet (distance rank 1), spreading out from the effect’s starting point. Cones on a level surface halve their final height.',
            '<strong>Cylinder:</strong> The effect fills a cylinder 30 feet in radius and height (distance rank 0).',
            '<strong>Line:</strong> The effect fills a path 5 feet wide and 30 feet long (distance rank 0) in a straight line.',
            '<strong>Perception:</strong> The effect works on anyone able to perceive the target point with a particular sense, chosen when you apply this extra, like a @{Modifier|Sense-Dependent} effect. Targets get a @{Resistance|Dodge} resistance check, as usual, but if the check is successful suffer no effect (rather than half). Concealment that prevents a target from perceiving the effect also blocks it. This modifier includes the Sense-Dependent flaw so it cannot be applied again. If it is applied to an already Sense-Dependent effect, it costs 2 points per rank rather than 1.',
            '<strong>Shapeable:</strong> The effect fills a volume of 30 cubic feet (volume rank 5), and you may shape the volume as you wish, so long as it all remains contiguous.',
            'Each +1 point increase in cost per rank moves the area’s distance rank up by 1. So a Burst Area with +2 cost per rank has a 60-foot radius (distance rank 1), a 120-foot radius at +3 cost per rank (distance rank 2), and so forth.',
          ],
        },
        {
          type: 'section',
          title: 'Range',
          description: [
            'The Area modifier interacts with different ranges as follows:',
            '<strong>Close:</strong> An effect must be at least close range in order to apply Area (personal range effects work only on the user by definition). A Close Area effect originates from the user and expands to fill the affected area; the user is not affected by it. So, for example, Close Burst Area Damage does not damage the user, who is at the center of the burst. This immunity does not apply to other effects, nor does it extend to anyone else: for that, apply the Selective extra. If the user wants to be affected at the same time, increase cost per rank by +1. An example would be a Close Burst Area Healing effect that included the user along with everyone else in the area. This is the equivalent of the +1 Affects Others modifier.',
            '<strong>Ranged:</strong> A ranged area effect can be placed anywhere within the effect’s range, extending to fill the area’s volume from the origin point.',
            '<strong>Perception:</strong> A perception area effect can be placed anywhere the user can accurately perceive. Perception area effects neither require an attack check nor allow a @{Resistance|Dodge} resistance check, although targets still get a normal resistance check against the effect. Perception area effects are blocked by either concealment or cover; choose one when acquiring the effect. For concealment, if the attacker can’t accurately perceive a target in the area, it is unaffected. Thus even heavy smoke or darkness can block the effect. Effects blocked by cover are much like conventional area effects: solid barriers interfere with the effect, even if they are transparent, but the effect ignores concealment like darkness, shadows, or smoke. Only targets behind total cover are unaffected.',
          ],
        },
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Attack',
    {
      name: 'Attack',
      type: 'extra',
      description: [
        'This extra applies to personal range effects, making them into attack effects. Examples include @{Effect|Shrinking} and @{Effect|Teleport}, causing a target to shrink or teleport away, respectively. Unlike most extras, the effect’s cost does not change, although it does work differently.',
        'The effect no longer works on you (so a Teleport Attack can’t be used to teleport yourself, for example). It affects one creature of any size or 50 lbs. of inanimate mass. The effect has close range and requires a standard action and an attack check to touch the subject. Its range can be improved with the @{Modifier|Range} extra while its required action can be changed with the Action modifier. The target gets a resistance check, determined when the effect is made into an attack. Generally @{Resistance|Dodge} or @{Resistance|Will} is the most appropriate. A successful check negates the effect.',
        'You must also define reasonably common circumstances that negate an Attack effect entirely, such as force fields or the ability to teleport blocking a Teleport Attack. You control the effect, and maintain it, if it has a duration longer than instant.',
        'If you want both versions of an Attack effect, such as being able to Teleport yourself and Teleport others as an attack, take both as @{Modifier|Alternate Effect|Alternate Effects}. For the ability to use both options simultaneously — to teleport a target and yourself at the same time, for example — take the effects as separate powers.',
      ],
      cost: {
        costs: [0],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Contagious',
    {
      name: 'Contagious',
      type: 'extra',
      description: [
        'Contagious effects work on both the target and anyone coming into contact with the target. New targets resist the effect normally. They also become contagious, and the effect lingers until all traces of it have been eliminated. A Contagious effect is also eliminated if its duration expires. Examples of effects with this extra include “sticky” Afflictions trapping anyone touching them, disease- or toxin-based @{Effect|Weaken} effects, or even a @{Effect|Nullify} effect spreading from one victim to another.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Dimensional',
    {
      name: 'Dimensional',
      type: 'extra',
      description: [
        'This modifier allows an effect to work on targets in other dimensions (if any exist in the series). You affect your proximate location in the other dimension as if you were actually there, figuring range modifiers from that point.',
        'One rank in Dimensional can affect a single other dimension. Two ranks can affect any of a related group of dimensions (mythic dimensions, mystic dimensions, fiendish planes, and so forth). Three ranks can reach into any other dimension in the setting.',
        'For many effects, you may need a @{Effect|Remote Sensing|Dimensional Remote Sensing} effect to target them. Targets in other dimensions you cannot sense have total concealment from you.',
      ],
      cost: {
        costs: [1],
        maxRanks: 3,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Extended Range',
    {
      name: 'Extended Range',
      type: 'extra',
      description: [
        'This modifier extends the distance over which a ranged effect works. Each rank of Extended Range doubles all of the effect’s range categories. So 1 rank makes short range (rank x 50 ft.), medium range (rank x 100 ft.) and long range (rank x 200 ft.). Each additional rank further doubles range.',
        'The GM may set limits on the maximum Extended Range an effect can have; as a general guideline, effects used on a planetary surface are limited to the distance to the horizon (beyond which the curvature of the planet makes it impossible to see anything to target it). On Earth at sea level, this is roughly three miles (distance rank 10).',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Feature',
    {
      name: 'Feature',
      type: 'extra',
      description: [
        'The @{Effect|Feature} effect can also serve as an effect modifier, essentially adding on some minor additional capability or benefit to a basic effect. Although listed here as an extra, this is essentially the same as having the Feature @{Modifier|Linked} to the base effect; the Feature is an intrinsic part of the overall power, rather than separate.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Homing',
    {
      name: 'Homing',
      type: 'extra',
      description: [
        'This modifier grants a ranged effect an additional opportunity to hit. If an attack check with a Homing effect fails, it attempts to hit again on the start of your next turn, requiring only a free action to maintain and allowing you to take other actions, including making another attack. Each rank in Homing grants the effect one additional attack check, but it still only gets one check per round.',
        'The Homing effect uses the same accurate sense as the original attack to “track” its target, so concealment effective against that sense may confuse the effect and cause it to miss. If a Homing attack misses due to concealment, it has lost its “lock” on the target and does not get any further chances to hit. You can take @{Effect|Senses} @{Modifier|Linked} to the Homing effect, if desired (to create things like radar-guided or heat-seeking missiles, for example). If a Homing attack is countered before it hits, it loses any remaining chances to hit. The same is true if it hits a different target.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Impervious',
    {
      name: 'Impervious',
      type: 'extra',
      description: [
        'A defense with this modifier is highly resistant. Any effect with a resistance difficulty modifier equal to or less than half the Impervious rank (rounded up) has no effect. So, for example, Impervious @{Resistance|Toughness} 9 ignores any @{Effect|Damage} with a rank of 5 or less. @{Modifier|Penetrating} effects can overcome Impervious Resistance.',
        'Impervious is primarily intended for Toughness resistance checks, to handle characters immune to a certain threshold of damage, but it can be applied to other defenses with the GM’s permission, to reflect characters with certain reliable capabilities in terms of resisting particular effects or hazards.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Increased Duration',
    {
      name: 'Increased Duration',
      type: 'extra',
      description: [
        'Effects have a standard duration: instant, sustained, continuous, or permanent. See <strong>Duration</strong> for details. This modifier increases an effect’s duration. Choose one of the following options:',
        '<strong>Concentration:</strong> When applied to an instant duration effect, this modifier makes it maintainable with concentration, taking a standard action each turn to do so. If the effect requires an initial attack check, no additional attack check is needed to maintain it on a target, but subsequent rounds of effect also do not benefit from critical hits. The target is affected on each of the effect user’s turns, making a normal resistance check (if any). Once the user stops concentrating for any reason, the effect ends and the target recovers normally, including resistance checks to remove ongoing effects.',
        '<strong>Continuous:</strong> When applied to a sustained duration effect, this modifier makes it continuous.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
      variants: [
        {
          effect: 'Affliction',
          name: 'Concentration',
          description: [
            'Once you have hit with a Concentration @{Effect|Affliction}, so long as you continue to take a standard action each turn to maintain the effect, the target must make a new resistance check against it, with no attack check required.',
          ],
        },
      ],
    },
  ],
  [
    'Increased Mass',
    {
      name: 'Increased Mass',
      type: 'extra',
      description: [
        'This modifier may apply to an effect that allows you to carry or affect a set amount of mass, typically a movement effect like @{Effect|Movement|Dimensional Travel} or @{Effect|Teleport}. Each rank of this extra increases the mass rank you can carry or move with the effect by 1. So Increased Mass 3 on Teleport allows you to carry up to 400 lbs. of extra mass with you when you teleport, for example.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Increased Range',
    {
      name: 'Increased Range',
      type: 'extra',
      description: [
        'Effects have a standard range: personal, close, ranged, or perception. See <strong>Range</strong> for details. This modifier increases an effect’s range. Choose one of the following options. Increasing the range of an effect from personal to close requires either the @{Modifier|Affects Others} or @{Modifier|Attack} extras. Making a close effect into a perception ranged effect requires two applications of this extra, for +2 cost per rank.',
        '<strong>Ranged:</strong> Applied to a close effect, this modifier makes it a ranged effect.',
        '<strong>Perception:</strong> When applied to a ranged effect, this modifier makes it perception range.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Incurable',
    {
      name: 'Incurable',
      type: 'extra',
      description: [
        'Effects such as @{Effect|Healing} and @{Effect|Regeneration} cannot heal the damage caused by an effect with this modifier; the target must recover at the normal rate. Effects with the @{Modifier|Persistent} extra can heal Incurable damage.',
      ],
      cost: {
        costs: [1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Indirect',
    {
      name: 'Indirect',
      type: 'extra',
      description: [
        'A ranged effect with this modifier can originate from a point other than the user, ignoring cover between the user and the target, such as walls and other intervening barriers, so long as they do not provide cover between the effect’s origin point and the target. An Indirect effect normally originates from a fixed point directed away from you. In some cases, an Indirect effect may count as a surprise attack.',
        '<strong>Indirect 1:</strong> The effect originates from a fixed point away from you.',
        '<strong>Indirect 2:</strong> The effect can come from any point away from you or a fixed point in a fixed direction (not away from you).',
        '<strong>Indirect 3:</strong> The effect can come from any point in a fixed direction (not away from you) or a fixed point in any direction.',
        '<strong>Indirect 4:</strong> The effect can originate from any point and aim in any direction, including towards you (hitting a target in front of you from behind, for example).',
      ],
      cost: {
        costs: [1],
        maxRanks: 4,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Innate',
    {
      name: 'Innate',
      type: 'extra',
      description: [
        'An effect with this modifier is an innate part of your nature and unaffected by @{Effect|Nullify}. Gamemasters should exercise caution in allowing the application of Innate; the effect must be a truly inborn or essential trait, such as an elephant’s size or a ghost’s incorporeal nature. If the effect is not something normal to the character’s species or type, it probably isn’t innate.',
      ],
      cost: {
        costs: [1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Insidious',
    {
      name: 'Insidious',
      type: 'extra',
      description: [
        'This modifier is similar to the @{Modifier|Subtle} modifier, except Insidious makes the result of an effect harder to detect rather than the effect itself. For example, a target suffering from Insidious @{Effect|Damage} isn’t even aware he’s been damaged. Someone affected by an Insidious @{Effect|Weaken} feels fine until some deficiency makes it obvious that he’s weaker, and so forth. A target of an Insidious effect may remain unaware of the danger until it’s too late!',
        'An Insidious effect is detectable either by a DC 20 skill check (usually @{Skill|Perception}, although skills like @{Skill|Expertise}, @{Skill|Insight}, or @{Skill|Treatment} may apply in other cases) or a particular unusual sense, such as an Insidious magical effect noticeable by @{Effect|Senses|Detect Magic} or Magical Awareness.',
        'Note that Insidious does not make the effect itself harder to notice; apply the Subtle modifier for that. So it is possible for an active Insidious effect to be noticeable: the target can perceive the use of the effect, but not its results: the effect appears “harmless” or doesn’t seem to “do anything” since the target cannot detect the results.',
      ],
      cost: {
        costs: [1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Linked',
    {
      name: 'Linked',
      type: 'extra',
      description: [
        'This modifier applies to two or more effects, linking them together so they only work in conjunction as one.',
        'The Linked effects must operate at the same range. The action required to use the combined effects is the longest of its components and they use a single attack check (if one is required) and resistance check (if both effects use the same type of check). If the effects have different resistances, targets check against each effect separately. Different @{Effect|Alternate Effect|Alternate Effects} cannot be Linked since they can’t be used at the same time by definition. Generally, the same effect cannot be Linked to itself to “multiply” the results of a failed resistance check (such as two Linked @{Effect|Damage} effects causing “double damage” on a failed check).',
        'This modifier does not change the cost of the component effects; simply add their costs together to get the combined effect’s cost.',
      ],
      cost: {
        costs: [0],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Multiattack',
    {
      name: 'Multiattack',
      type: 'extra',
      description: [
        'A Multiattack effect allows you to hit multiple targets, or a single target multiple times, in the same standard action. Multiattack can apply to any effect requiring an attack check. There are three ways in which a Multiattack effect can be used:',
        {
          type: 'section',
          title: 'Single Target',
          description: [
            'To use a Multiattack against a single target, make your attack check normally. If successful, increase the attack’s resistance check DC by +2 for two degrees of success, and +5 for three or more. This circumstance bonus does not count against power level limits.',
            'If an @{Modifier|Impervious} Resistance would ignore the attack before any increase in the DC, then the attack still has no effect as usual; a volley of multiple shots is no more likely to penetrate Impervious Resistance than just one.',
          ],
        },
        {
          type: 'section',
          title: 'Multiple Targets',
          description: [
            'You can use Multiattack to hit multiple targets at once by “walking” or “spraying” the Multiattack across an arc. Roll one attack check per target in the arc. You suffer a penalty to each check equal to the total number of targets. So making a Multiattack against five targets is a –5 penalty to each attack check. If you miss one target, you may still attempt to hit the others.',
          ],
        },
        {
          type: 'section',
          title: 'Covering Attack',
          description: [
            'A Multiattack can provide cover for an ally. Take a standard action and choose an ally in your line of sight, who receives the benefits of cover against enemies in your line of sight and in range of your Multiattack. (You have to be able to shoot at them to get them to keep their heads down or this maneuver won’t work.) You cannot lay down a covering attack for an ally in close combat. An opponent can choose to ignore the cover provided by your covering attack at the cost of being automatically attacked by it; make a normal attack check to hit that opponent.',
          ],
        },
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Penetrating',
    {
      name: 'Penetrating',
      type: 'extra',
      description: [
        'Your effect overcomes @{Modifier|Impervious|Impervious Resistance} to a degree; the target must make a resistance check against an effect rank equal to your Penetrating rank. So, if a rank 4 (Penetrating 2) effect hits a target with Impervious 9, the target must resist a rank 2 effect (equal to the Penetrating rank). If the effect were rank 6, the target would have to resist the full effect anyway, since its rank is greater than half the Impervious rank. You cannot have a Penetrating rank greater than your effect rank.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Precise',
    {
      name: 'Precise',
      type: 'extra',
      description: [
        'You can use a Precise effect to perform tasks requiring delicacy and fine control, such as using Precise @{Effect|Damage} to spot-weld or carve your initials, Precise @{Effect|Move Object} to type or pick a lock, Precise @{Effect|Environment} to match a particular temperature exactly, and so forth. The GM has final say as to what tasks can be performed with a Precise effect and may require an ability, skill, or power check to determine the degree of precision with any given task.',
      ],
      cost: {
        costs: [1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Reach',
    {
      name: 'Reach',
      type: 'extra',
      description: [
        'Each time you apply this modifier to a close range effect, you extend its reach by 5 feet. This may represent a short-ranged effect or one with a somewhat greater reach, like a whip, spear, or similar weapon.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Reaction',
    {
      name: 'Reaction',
      type: 'extra',
      description: [
        'Each effect has a default action required to use it: standard, free, or none (for permanent effects). See Action for details. This modifier changes an effect’s required action from a standard or free to a reaction, occurring automatically when a specific triggering event occurs. This is similar to the @{Modifier|Triggered} modifier but reaction effects do not need to be “set,” originate from their user, and can function repeatedly, so long as their triggering requirement is met.',
        'Specify a triggering circumstance that activates the effect, such as someone touching or attacking the user, activating a particular effect or power in the user’s presence, and so forth. The GM is the final arbiter as to whether or not a triggering circumstance is suitable for a particular effect in the context of the series. Caution should be used to keep this option from being abused.',
        'When the triggering circumstance occurs, the effect activates automatically, even if it is not the character’s turn. The user can only prevent the reaction effect from occurring by choosing to deactivate the effect entirely (as a free action), in which case no circumstance will trigger it. For the ability to choose to have some triggering circumstances activate the effect and some not, apply the Selective modifier as well.',
        'The Reaction modifier applies +1 cost per rank to effects with a default action of free, +3 cost per rank to effects with a default standard action.',
      ],
      cost: {
        costs: [1, 3],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Reversible',
    {
      name: 'Reversible',
      type: 'extra',
      description: [
        'You can remove conditions caused by a Reversible effect at will as a free action, so long as the subject is within the effect’s range. Examples include removing the damage conditions caused by a @{Effect|Damage} effect, repairing damage done by @{Effect|Weaken} @{Resistance|Toughness}, or removing an @{Effect|Affliction} instantly. Normally, you have no control over the results of such effects.',
      ],
      cost: {
        costs: [1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Ricochet',
    {
      name: 'Ricochet',
      type: 'extra',
      description: [
        'You can ricochet or bounce an attack effect with this modifier off of a solid surface to change its direction. This allows you to attack around corners, overcome cover and possibly make a surprise attack against an opponent. It does not allow you to affect multiple targets. The “bounce” has no effect apart from changing the attack’s direction. You must be able to define a clear path for your attack, which must follow a straight line between each ricochet. Each rank in Ricochet allows you to bounce the attack once before it hits. Ricochet may grant a bonus to hit due to surprise, at the GM’s discretion.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Secondary Effect',
    {
      name: 'Secondary Effect',
      type: 'extra',
      description: [
        'An instant duration effect with this modifier affects the target once immediately (when the effect is used) and then once again on the following round, at the end of the attacker’s turn. The target gets the normal resistance check against the secondary effect.',
        'Secondary Effects don’t stack, so if you attack a target with your Secondary Effect on the round after a successful hit, it doesn’t affect the target twice; it simply delays the second effect for another round. You can attack the target with a different effect, however. So, for example, if you hit a target with a Secondary @{Effect|Damage|Damage Effect} then, on the following round, hit with an @{Effect|Affliction}, the target suffers both the Affliction and the Secondary Damage.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Selective',
    {
      name: 'Selective',
      type: 'extra',
      description: [
        'A resistible effect with this extra is discriminating, allowing you to decide who is and is not affected by it. This is most useful for @{Modifier|Area|area effects}. You must be able to accurately perceive a target in order to decide whether or not to affect it. For a degree of selectivity with non-resistible effects, use the @{Modifier|Precise} modifier.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Sleep',
    {
      name: 'Sleep',
      type: 'extra',
      description: [
        'When this modifier is applied to an effect that causes the @{Condition|Incapacitated|incapacitated} condition, the effect leaves them @{Condition|Asleep|asleep} whenever it would normally render them incapacitated.',
      ],
      cost: {
        costs: [0],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Split',
    {
      name: 'Split',
      type: 'extra',
      description: [
        'With this modifier, a resistible effect that works on one target can split between two. The attacker chooses how many ranks to apply to each target up to the effect’s total rank. So a rank 10 effect could be split 5/5, 4/6, 2/8, or any other total adding up to 10. If an attack check is required, the attacker makes one, comparing the results against each target. The effect works on each target at its reduced rank.',
        'Each additional rank of this modifier allows the power to split an additional time, so rank 2 allows an effect to split among three targets, then four, and so forth. An effect cannot split to less than 1 rank per target, and cannot apply more than one split to the same target. Thus maximum Split rank equals the effect’s rank.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Subtle',
    {
      name: 'Subtle',
      type: 'extra',
      description: [
        'Subtle effects are not as noticeable. A subtle effect may be used to catch a target unaware and may in some cases qualify for a surprise attack. Rank 1 makes an effect difficult to notice; a DC 20 @{Skill|Perception} check is required, or the effect is noticeable only to certain exotic senses (at the GM’s discretion). Rank 2 makes the effect completely undetectable.',
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Sustained',
    {
      name: 'Sustained',
      type: 'extra',
      description: [
        'Applied to a permanent duration effect, this modifier makes it sustained duration, requiring a free action to use (rather than none, like other permanent effects). The benefit is the sustained effect can be improved using extra effort, including using it to perform power stunts. The drawback is the effect requires a free action each turn to maintain it, and being unable to do so means the effect shuts off.',
      ],
      cost: {
        costs: [0],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Triggered',
    {
      name: 'Triggered',
      type: 'extra',
      description: [
        'You can “set” an instant duration effect with this modifier to activate under particular circumstances, such as in response to a particular danger, after a set amount of time, in response to a particular event, and so forth—chosen when you apply the modifier. Once chosen, the trigger cannot be changed.',
        'The circumstances must be detectable by your senses. You can acquire @{Effect|Senses} @{Modifier|Limited} and @{Modifier|Linked} to Triggered effects, if desired. Setting the effect requires the same action as using it normally.',
        'A Triggered effect lying in wait may be detected with a @{Skill|Perception} check (DC 10 + effect rank) and in some cases disarmed with a successful skill or power check (such as @{Skill|Sleight of Hand}, @{Skill|Technology}, @{Effect|Nullify} or another countering effect) with a DC of (10 + effect rank).',
        'A Triggered effect is good for one use per rank in this modifier. After its last activation, it stops working.',
        'You can apply an additional rank of Triggered to have a Variable Trigger, allowing you to change the effect’s trigger each time you set it.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Variable Descriptor',
    {
      name: 'Variable Descriptor',
      type: 'extra',
      description: [
        'You can change the descriptors of an effect with this modifier, varying them as a free action once per round. With rank 1, you can apply any of a closely related group of descriptors, such as weather, electromagnetic, temperature, and so forth. With rank 2, you can apply any of a broad group, such as any mental, magical, or technological descriptor. The GM decides if a given descriptor is appropriate in conjunction with a particular effect and this modifier.',
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Activation',
    {
      name: 'Activation',
      type: 'flaw',
      description: [
        'A power with this flaw requires an action to prepare or activate before any of its effects are usable. If the power requires a move action to activate, the flaw is –1 point. If it requires a standard action, it is –2 points. Activation taking less than a move action is not a flaw, although may qualify as a complication (see the Power Loss complication for details).',
        'Activation has no effect other than making all of the power’s effects available for use. The effects themselves still require their normal actions to use. You can use a power’s effects in the same turn as you activate it, provided you have sufficient actions to do so. If the power is deactivated—either voluntarily or involuntarily via effects like @{Effect|Nullify} — you must activate it again in order to use any of its effects.',
        'Activation applies to an entire power and all of its effects. Activating the power brings all of its effects “online” and makes them available. If you have to activate different effects separately, apply this flaw to each of them, requiring separate actions for each.',
        'If Activation is not automatic, apply the @{Modifier|Check Required} flaw to the entire power as well and have the player make the necessary check in order to activate the power. If the check fails, the power does not activate, and the character has to take the activation action to try again.',
        {
          type: 'section',
          title: 'Activation and Permanent Effects',
          description: [
            'The Activation flaw does allow permanent effects that are part of a power to be turned off, but only if the power as a whole is deactivated. It does not affect the other aspects of permanent duration, including the inability to improve the effect with extra effort. The GM should decide if allowing a permanent effect to have an Activation is appropriate based on the specific effect and any others it is combined with in the power.',
          ],
        },
      ],
      cost: {
        costs: [-1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Check Required',
    {
      name: 'Check Required',
      type: 'flaw',
      description: [
        'An effect with this flaw requires a check of some sort — usually a skill check — with a difficulty class of 10 + ranks in Check Required. If the check fails, the effect doesn’t work, although the action required to use it is expended (so attempting to activate a standard action effect takes a standard action whether the check is successful or not).',
        'If the check succeeds, the character gains the use of 1 effect rank per point the check exceeds the DC. Thus a check result of 14 allows the character to use up to 4 ranks of the effect. If a lesser rank of the effect doesn’t do anything, then it’s the same as failing the check.',
        'The required check occurs as part of the action to use the effect and provides no benefit other than helping to activate it. Normal modifiers apply to the check, and if you are unable to make the required check for any reason, the effect doesn’t work.',
        'A natural 1 rolled on the check means it fails automatically, regardless of the check result. So there is always a small chance the effect won’t work, regardless of the character’s check bonus.',
        'This check must be in addition to any check(s) normally required for the effect. So, for example, the normal @{Skill|Perception|perception} check made in conjunction with a sensory effect does not count as an application of this flaw, and applying it means an additional check is required before the effect’s normally required check(s).',
        {
          type: 'section',
          title: 'Check Examples',
          description: [
            'Skill checks an effect may require include:',
            '@{Skill|Acrobatics}: Suitable for effects requiring a measure of coordination or complex maneuvering.',
            '@{Skill|Deception}: Good for effects intended to deceive, particularly sensory effects like @{Effect|Concealment} or @{Effect|Illusion}, and disguise or form-altering effects like @{Effect|Morph}.',
            '@{Skill|Expertise}: An Expertise skill check might represent having to know something about the subject of the effect or having to know something about the effect itself.',
            '@{Skill|Intimidation}: Useful for effects intended to inspire fear as well as similar offensive effects like @{Effect|Affliction}.',
            '@{Skill|Stealth}: Best suited to sensory effects, particularly @{Effect|Concealment}.',
            '@{Skill|Technology}: Operating a complex device may require a Technology check.',
          ],
        },
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Concentration',
    {
      name: 'Concentration',
      type: 'flaw',
      description: [
        'Applied to a sustained duration effect, this modifier makes it concentration duration, requiring a standard action, rather than a free action, each turn to maintain.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Diminished Range',
    {
      name: 'Diminished Range',
      type: 'flaw',
      description: [
        'Each rank of Diminished Range reduces the effect’s short, medium, and long ranges. One rank in this flaw gives the effect a short range of 10 feet x power rank, medium range of 25 feet x power rank, and long range of 50 feet x power rank. A second rank reduces the multipliers to 5 feet, 10 feet, and 25 feet, and a third rank reduces them to 2 feet, 5 feet, and 10 feet. Three ranks is the maximum a character can have in this flaw.',
      ],
      cost: {
        costs: [-1],
        maxRanks: 3,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Distracting',
    {
      name: 'Distracting',
      type: 'flaw',
      description: [
        'Using a Distracting effect requires more concentration than usual, causing you become @{Condition|Vulnerable|vulnerable} when you use the effect, until the start of your next turn.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Fades',
    {
      name: 'Fades',
      type: 'flaw',
      description: [
        'Each time you use an effect with this flaw, it loses 1 rank of effectiveness. For effects with a duration longer than instant, each round is considered “one use.” Once the effect reaches 0 ranks, it stops working. A faded effect can be “recovered” in some fashion, such as recharging, rest, repair, reloading, and so forth. The GM decides when and how a faded effect recovers, but it should generally occur outside of combat and take at least an hour’s time. The GM may allow a hero to recover a faded effect immediately and completely by spending a victory point.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Feedback',
    {
      name: 'Feedback',
      type: 'flaw',
      description: [
        'You suffer damage when a manifestation of your effect is damaged. This flaw only applies to effects with physical (or apparently physical) manifestations, such as @{Effect|Create}, @{Effect|Illusion}, or @{Effect|Summon}, for example. If your power’s manifestation is damaged, make a resistance check against the attack’s damage rank, using your effect’s rank as the resistance check bonus. For example, if a manifestation of a rank 10 effect is attacked for damage 12, you must make a resistance check against damage 12 with a +10 bonus (the effect’s rank) in place of your normal @{Resistance|Toughness}.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Grab-Based',
    {
      name: 'Grab-Based',
      type: 'flaw',
      description: [
        'An attack effect with this flaw requires you to successfully @{Action|Grab|grab} a target before using the effect. This generally applies to an effect that is close range, since you have to be in close combat to grab anyway. If the effect’s default range is not close, apply the @{Modifier|Reduced Range|Close} modifier as well. If you do not succeed on the grab, you cannot use the effect. If your grab attempt succeeds, the effect occurs automatically as a reaction.',
        'This flaw is essentially a form of @{Modifier|Resistible}, with a grab check rather than a regular resistance check.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Inacurate',
    {
      name: 'Inacurate',
      type: 'flaw',
      description: [
        'An effect with this flaw is hard to control or wildly inaccurate. Each rank gives you a –2 penalty to attack checks with the effect.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Increased Action',
    {
      name: 'Increased Action',
      type: 'flaw',
      description: [
        'Using an effect requires one of the following types of actions: standard, move, free, or reaction. Each increase in the required action from that effect’s base action type (free to move, for example) is a –1 cost per rank modifier.',
      ],
      cost: {
        costs: [-1, -2, -3],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Limited',
    {
      name: 'Limited',
      type: 'flaw',
      description: [
        'An effect with this flaw is not effective all the time. Limited powers generally break down into two types: those usable only in certain situations and those usable only on certain things. For example Only While Singing Loudly, Only While Flying, Only on Men (or Women), Only Against Fire, Not Usable on Yellow Things, and so forth. As a general rule, the effect must lose about half its usefulness to qualify for this modifier. Anything less limiting is better handled as an occasional complication.',
        {
          type: 'section',
          title: 'Partially Limited',
          description: [
            'If your effect is only somewhat effective in particular circumstances, apply the flaw to only some of its ranks. For example, an attack effect that does less damage against targets with @{Effect|Protection} (to represent a diminished ability to penetrate armor, for example) applies the Limited flaw to only those ranks that are ineffective.',
          ],
        },
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Noticeable',
    {
      name: 'Noticeable',
      type: 'flaw',
      description: [
        'A continuous or permanent effect with this modifier is noticeable in some sort of way (see Noticing Power Effects). Choose a noticeable display for the effect. For example Noticeable @{Effect|Protection} may take the form of armored plates or a tough, leathery-looking hide, making it clear the character is tougher than normal.',
      ],
      cost: {
        costs: [-1],
        maxRanks: 1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Permanent',
    {
      name: 'Permanent',
      type: 'flaw',
      description: [
        'A continuous effect with this flaw becomes permanent in duration. It cannot be turned off, it is always on by default. If some outside force — usually a @{Effect|Nullify} effect — does turn it off, it turns back on automatically at the earliest opportunity. Additionally, you cannot improve a permanent effect using extra effort.',
        'Permanent effects may be inconvenient at times (including things like being permanently incorporeal or 30 feet tall); this is included in the value of the flaw.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Quirk',
    {
      name: 'Quirk',
      type: 'flaw',
      description: [
        'A Quirk is some minor nuisance attached to an effect, essentially the reverse of a @{Modifier|Feature}. A Quirk is generally worth, at most, 2–3 character points, and many are simply 1-point flaws.',
        'As with Features, the GM should ensure a Quirk is truly a flaw (albeit a minor one) and not simply part of the power’s descriptors. For example, the fact that an attack with a “sonic” descriptor likely will not travel through a vacuum is not a Quirk, simply part of the “sonic” descriptor (especially since the attack may be enhanced by a medium such as water). On the other hand, a shapeshifter unable to change color (losing some of the power’s utility), or a telepath unable to lie while using @{Effect|Communication|Mental Communication}, do have Quirks to their powers.',
        'The GM sets the rank (and therefore value) of any given Quirk for an effect, based on how troublesome it may be, similar to setting ranks for the @{Advantage|Benefit} advantage and Feature effect (see those trait descriptions for details).',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Reduced Range',
    {
      name: 'Reduced Range',
      type: 'flaw',
      description: [
        'An effect has a range of close, ranged, or perception. Decreasing an effect’s range by one step (from ranged to close, for example) is worth 1 point per rank. Some effects have their range determined by rank. To change the effect’s range, increase or decrease its rank; this flaw does not apply. Effects that are close range by default cannot further decrease their range.',
      ],
      cost: {
        costs: [-1, -2],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Removable',
    {
      name: 'Removable',
      type: 'flaw',
      description: [
        'Effects with this flaw can be “taken away” from you, removing your access to the effects until you regain it. Typically, this means a power that resides in an object, called a <strong>device</strong>, which someone else can remove. There are two different versions of this flaw covered in the following paragraphs; the first is <strong>Removable</strong> and the second is <strong>Easily Removable</strong>.',
        'A removable power may only be removed when you are both @{Condition|Stunned|stunned} and @{Condition|Defenseless|defenseless}, essentially unable to resist, and cannot be removed during action time. This means opponents can generally only remove the power after defeating you (leaving you @{Condition|Incapacitated|incapacitated}) or through some sort of scheme outside of a conflict, such as a plot to break into your headquarters and steal a device kept there, for example.',
        'An easily removable power can be taken away with a @{Action|Disarm|disarm} or @{Action|Grab|grab} action. This typically represents a hand-held device (such as a weapon, magic wand, remote control, or the like) or some worn item easily snatched from you, like a hat or cloak.',
        'Removable applies to the power as a whole and not individual effects, although it may apply to a power with only one effect. The flaw is worth –1 point (–2 points for Easily Removable) per 5 total character points of the power’s final cost, after applying extras and flaws to its effects.',
        {
          type: 'section',
          title: 'Removable and Damage',
          description: [
            'Removable devices can be @{Effect|Damage|damaged}, possibly even destroyed. So long as the character has character points invested in the device, it can be repaired, eventually. This usually requires time between adventures, perhaps even a special adventure to find certain rare parts, specialized help, or other components.',
            'For a flat 1-point reduction in the value of the Removable flaw, you can define a device as <strong>Indestructible</strong>. It can still be taken away, but cannot be damaged or destroyed, except as a GM-imposed complication (earning the player a victory point as usual). This reduction can lower the value of the flaw to 0, in which case the character gets no character point discount for the device.',
          ],
        },
        {
          type: 'section',
          title: 'Removable and Complications',
          description: [
            'The temporary loss of a removable power does not constitute a complication, any more than the result of any other flaw. You can have a device or power-object as a descriptor without this flaw, if you wish, in which case the power cannot be removed or taken away from you without a complication applied by the GM (earning you a victory point) or the use of an effect like @{Effect|Nullify}, which has predefined conditions for recovery.',
          ],
        },
      ],
      cost: {
        costs: [-1, -2],
        maxRanks: -1,
        ranksRatio: 5,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Resistible',
    {
      name: 'Resistible',
      type: 'flaw',
      description: [
        'When applied to an effect that doesn’t normally allow a resistance check, this flaw gives it one. Choose the defense when the flaw is applied. Since effects that work on others allow a resistance check by definition, this nearly always applies to personal effects that allow someone interacting with them to circumvent the effect with a successful check.',
        'For example, an Enhanced @{Defense|Parry} defense effect might reflect a low-level reading of a target’s mind to anticipate and avoid attacks. It allows a @{Defense|Will} resistance check to overcome the effect, denying you the defense bonus against that opponent (and applying this flaw to the effect). Likewise, your @{Effect|Concealment} effect might be illusory rather than a true physical transformation, permitting a Will resistance check for someone to overcome it. A sustained @{Effect|Protection} effect might be some sort of “kinetic field” that permits an attacker a @{Defense|Fortitude} resistance check to overcome it.',
        'When applied to an effect that does normally allow a resistance check, this flaw gives it an additional one, which may be the same as its normal resistance, or different. The target makes both resistance checks and applies the better of the two to determine the effect’s result.',
        'For example, a @{Effect|Damage} effect might involve whirling blades an attacker can avoid with a successful @{Resistance|Dodge} resistance check, circumventing the need for a @{Resistancec|Toughness} check against the damage. Similarly a @{Effect|Weaken} effect based on a poison dart might add a Toughness check to see if the dart penetrates the target’s skin in addition to making the usual Fortitude check against the effect.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Sense-Dependent',
    {
      name: 'Sense-Dependent',
      type: 'flaw',
      description: [
        'The target of a Sense-Dependent effect must be able to perceive the effect for it to work. The target gets a @{Resistance|Dodge} resistance check. Success means the target has managed to avert his eyes, cover his ears, etc. and the effect doesn’t work. Otherwise the effect works normally and the target makes the usual resistance check against it, if any.',
        'Opponents aware of a Sense-Dependent effect can also deliberately block the targeted sense: looking away, covering or blocking their ears, etc. This provides a +10 bonus to resistance checks against the effect, but gives others partial concealment from that sense. An opponent unable to use a sense (blind, deaf, etc.) is immune to effects dependent on it. Opponents can do this by closing their eyes, wearing ear- or nose-plugs, or using another effect like @{Effect|Concealment}. This gives you total concealment from that sense.',
        'Sensory effects are Sense-Dependent by definition, and cannot apply this flaw. To give a target additional resistance to a sensory effect, use the @{Modifier|Resistible} flaw.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Side Effect',
    {
      name: 'Side Effect',
      type: 'flaw',
      description: [
        'Failing to successfully use an effect with this flaw causes some problematic effect. Failure includes missing an attack check, or the target successfully resisting the effect. If the side effect always occurs when you use the effect, whether you succeed or fail, it is worth –2 cost per rank.',
        'The exact nature of the side effect is for you and the Gamemaster to determine. As a general guideline, it should be an effect about the same in value as the effect with this flaw. So an effect with a cost of 20 points should have a 20-point side effect. Typical side effects include @{Effect|Affliction}, @{Effect|Damage}, or @{Effect|Weaken}, or the base effect itself (it essentially rebounds and affects you instead). The Side Effect does not require an attack check and only affects you, although the GM may permit some Side Effects with the @{Modifier|Area} modifier on a case-by-case basis. You get a normal resistance check against the Side Effect. If you are immune to your own powers, you aren’t immune to its side-effect.',
        'The GM may also allow a Complication Side Effect, which essentially imposes a complication on you without awarding a victory point. See Complications for more information.',
      ],
      cost: {
        costs: [-1, -2],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Tiring',
    {
      name: 'Tiring',
      type: 'flaw',
      description: [
        'An effect with this flaw causes you to suffer a level of fatigue when you use it. You recover from this fatigue normally, and can use victory points to overcome it by spending the victory point at the start of the round following the use of a tiring effect. In essence, the power requires extra effort in order to use it (see Extra Effort). This makes Tiring a useful flaw for creating an effect you can only use with extra effort.',
        'Tiring is often applied to just some ranks of an effect to represent a higher level of the effect, usable only through extra effort. For example, a hero might have a rank 12 @{Effect|Damage} effect, but routinely use only 8 ranks of it. The remaining 4 ranks are Tiring, so using them quickly fatigues the hero.',
        'A Tiring effect can be combined with extra effort, but the fatigue stacks, causing a minimum of two levels of fatigue per use.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Uncontrolled',
    {
      name: 'Uncontrolled',
      type: 'flaw',
      description: [
        'You have no control over an effect with this flaw. Instead, the Gamemaster decides when and how it works (essentially making it a plot device). This flaw is best suited for mysterious powers out of the characters’ direct control or effects the GM feels more comfortable having under direct, rather than player, control.',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Unreliable',
    {
      name: 'Unreliable',
      type: 'flaw',
      description: [
        'An Unreliable effect doesn’t work all the time. Roll a die each round before you use or maintain the effect. On a 10 or less, it doesn’t work this round, but you’ve still used the action the effect requires. You can roll again on the following round to see if it works, although you must take the normal action needed to activate the effect again. Spending a victory point on your reliability roll allows you to succeed automatically (since the roll is then at least an 11).',
        'Alternately, instead of having a reliability roll, you can choose to have five uses where your effect works normally, then it stops working altogether until you can “recover” it in some way (see @{Modifier|Fades} flaw for more on this). The GM may allow you to spend a victory point to automatically recover a spent Unreliable power.',
        'Powers that are only occasionally unreliable (less than about 50% of the time) are better handled as complications (see Complications.)',
      ],
      cost: {
        costs: [-1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
]);
