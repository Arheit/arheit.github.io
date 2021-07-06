const dot = {
  bleed: 'bleed',
  burn: 'burn',
  bomb: 'bomb',
};

const classType = {
  knight: 'knight',
  mage: 'mage',
  ranger: 'ranger',
  soul_weaver: 'soul-weaver',
  thief: 'thief',
  warrior: 'warrior',
};

const element = {
  ice: 'ice',
  fire: 'fire',
  earth: 'earth',
  dark: 'dark',
  light: 'light',
};

const heroes = {
  boss: {
    name: 'Manual',
    classType: classType.knight,
    baseAtkp: 1000,
    baseAtkm: 800,
    maxHp: 1500,
    defp: 600,
    defm: 600,
    form: [elements.physical_rate, elements.magical_rate],
    skills: {
      s1: {
        name: "Physical attack",
        rate: () => elements.physical_rate.value(),
        pow: 1,
        dmgType: "physical"
      },
      s2: {
        name: "Magical attack",
        rate: () => elements.magical_rate.value(),
        pow: 1,
        dmgType: "magical"
      }
    }
  },
  ley: {
    name: 'Ley',
    classType: classType.ranger,
    baseAtkp: 78,
    baseAtkm: 344,
    maxHp: 564,
    defp: 121,
    defm: 142,
    form: [elements.caster_speed],
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        mult: () => elements.caster_speed.value() / 1000 + 1,
        single: true,
        dmgType: "magical"
      },
      ardent_strike: {
        name: "Ardent Strike",
        rate: 1.5,
        pow: 1,
        mult: () => elements.caster_speed.value() / 1000 + 1,
        single: true,
        dmgType: "magical"
      },
      ardent_strike_explosion: {
        name: "Ardent Strike Explosion",
        rate: 0.75,
        pow: 1,
        mult: () => elements.caster_speed.value() / 1000 + 1,
        noMiss: true,
        dmgType: "magical"
      }
    }
  },
  seithfeayr: {
    name: 'Sèithfeayr',
    classType: classType.thief,
    baseAtkp: 456,
    baseAtkm: 50,
    maxHp: 567,
    defp: 132,
    defm: 130,
    form: [elements.caster_stealth, elements.moon_blessing, elements.sacred_target],
    atkUp: () => {
      if (!elements.moon_blessing.value())
        return 0.9;
      else
        return 1.2;
    },
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "physical"
      },
      ambush: {
        name: "Ambush",
        rate: () => elements.caster_stealth.value() ? 2.2 : 1.9,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "physical"
      }
    }
  },
  adonai: {
    name: 'Adonaï',
    classType: classType.mage,
    baseAtkp: 50,
    baseAtkm: 336,
    maxHp: 840,
    defp: 175,
    defm: 190,
    form: [elements.sword_wish, elements.pet, elements.dice_roll, elements.elemental_overflow_casted, elements.vampire_target],
    atkUp: (skill) => {
      if (!elements.pet.value())
        return 1;
      else
        return (skill.dmgType && skill.dmgType === "magical") ? 1.3 : 1;
    },
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        mult: () => (elements.sword_wish.value() ? 1.5 : 1) - (elements.elemental_overflow_casted.value() ? 0.16 : 0) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "magical"
      },
      embrasement: {
        name: "Embrasement d'épée",
        rate: () => {
          let dice = elements.dice_roll.value();

          if (dice > 60)
            return 2.0;
          else
            return 2.2;
        },
        pow: 1,
        mult: () => elements.sword_wish.value() ? 1.5 : 1 - (elements.elemental_overflow_casted.value() ? 0.16 : 0) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "magical"
      },
      elemental_overflow_mono: {
        name: "Déluge élémentaire (monocible)",
        rate: 3,
        pow: 1,
        mult: () => elements.sword_wish.value() ? 1.5 : 1 - (elements.elemental_overflow_casted.value() ? 0.16 : 0) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "magical"
      },
      elemental_overflow_mult: {
        name: "Déluge élémentaire (AoE)",
        rate: 1.8,
        pow: 1,
        mult: () => elements.sword_wish.value() ? 1.5 : 1 - (elements.elemental_overflow_casted.value() ? 0.16 : 0) + (elements.vampire_target.value() ? 0.5 : 0),
        aoe: true,
        dmgType: "magical"
      }
    }
  },
  zidkala: {
    name: 'Zid\'Kala',
    classType: classType.warrior,
    baseAtkp: 241,
    baseAtkm: 50,
    maxHp: 1080,
    defp: 221,
    defm: 154,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      vampire_blade: {
        name: "Vampire Blade",
        rate: 1.8,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      blood_rend_multi: {
        name: "Blood Rend (multicible)",
        rate: 1.3,
        pow: 1,
        dmgType: "physical"
      },
      blood_rend_mono: {
        name: "Blood Rend (monocible)",
        rate: 1.6,
        pow: 1,
        dmgType: "physical"
      }
    }
  },
  niholn: {
    name: 'Niholn',
    classType: classType.soul_weaver,
    baseAtkp: 50,
    baseAtkm: 50,
    maxHp: 1080,
    defp: 80,
    defm: 100,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.3,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magical"
      }
    }
  },
  eophred: {
    name: 'Eophred',
    classType: classType.mage,
    baseAtkp: 50,
    baseAtkm: 256,
    maxHp: 840,
    defp: 144,
    defm: 210,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magical"
      },
      inflict_wounds: {
        name: "Inflict Wounds",
        rate: 1.6,
        pow: 1,
        single: true,
        dmgType: "magical"
      }
    }
  }
};