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
    baseAtkp: 65,
    baseAtkm: 461,
    maxHp: 812,
    defp: 344,
    defm: 342,
    form: [elements.caster_speed, elements.target_speed],
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        mult: () => elements.caster_speed.value() / 4000 + elements.caster_speed.value() / 1000 + 1 + (elements.caster_speed.value() > elements.target_speed.value() ? 0.15 : 0),
        single: true,
        dmgType: "magical"
      },
      ardent_strike: {
        name: "Ardent Strike",
        rate: 1.5,
        pow: 1,
        mult: () => elements.caster_speed.value() / 2000 + elements.caster_speed.value() / 1000 + 1 + (elements.caster_speed.value() > elements.target_speed.value() ? 0.15 : 0),
        dmgType: "magical"
      },
      ardent_strike_explosion: {
        name: "Ardent Strike Explosion",
        rate: 0.75,
        pow: 1,
        mult: () => elements.caster_speed.value() / 2000 + elements.caster_speed.value() / 1000 + 1 + (elements.caster_speed.value() > elements.target_speed.value() ? 0.15 : 0),
        noMiss: true,
        dmgType: "magical"
      },
      blazing_bane: {
        name: "Blazing Bane",
        rate: 3.2,
        pow: 1,
        mult: () => elements.caster_speed.value() / 500 + elements.caster_speed.value() / 1000 + 1 + (elements.caster_speed.value() > elements.target_speed.value() ? 0.15 : 0),
        single: true,
        dmgType: "magical"
      }
    }
  },
  seithfeayr: {
    name: 'Sèithfeayr',
    classType: classType.thief,
    baseAtkp: 894,
    baseAtkm: 50,
    maxHp: 945,
    defp: 180,
    defm: 144,
    form: [elements.caster_stealth, elements.moon_blessing, elements.vampire_target, elements.target_nb_debuff],
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
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "physical"
      },
      ambush: {
        name: "Ambush",
        rate: () => elements.caster_stealth.value() ? 2.2 : 1.9,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "physical"
      },
      phantom_claw: {
        name: "Phantom Claw",
        rate: 2.5,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.vampire_target.value() ? 0.5 : 0)
          + 0.25 * elements.target_nb_debuff.value(),
        single: true,
        dmgType: "physical"
      },
      nocturne: {
        name: "Nocturne",
        rate: 1.5,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "physical"
      },
      mage_hunter: {
        name: "Mage Hunter",
        rate: 2.0,
        pow: 1,
        mult: () => (elements.caster_stealth.value() ? 1.2 : 1) + (elements.vampire_target.value() ? 0.5 : 0),
        single: true,
        dmgType: "physical"
      }
    }
  },
  adonai: {
    name: 'Adonaï',
    classType: classType.mage,
    baseAtkp: 63,
    baseAtkm: 650,
    maxHp: 1208,
    defp: 506,
    defm: 502,
    form: [elements.pet, elements.dice_roll, elements.sacred_target, elements.ascension_stack, elements.demon_mode_first_turn, elements.turn_stack],
    atkUp: (skill) => {
      let up = 1;
      let asc_bonus = elements.ascension_stack.value() / 10;
      up += asc_bonus;
      if (!elements.pet.value())
        return up;
      else
        return (skill.dmgType && skill.dmgType === "magical") ? up + 0.3 : up;
    },
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      },
      embrasement: {
        name: "Embrasement d'épée",
        rate: () => {
          let dice = elements.dice_roll.value();

          if (dice > 60)
            return 2.0;
          else if (dice > 40)
            return 2.2;
          else
            return 2.6;
        },
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      },
      elemental_overflow_mono: {
        name: "Déluge élémentaire (monocible)",
        rate: 2.8,
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      },
      elemental_overflow_mult: {
        name: "Déluge élémentaire (AoE)",
        rate: 1.8,
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        aoe: true,
        dmgType: "magical"
      },
      elemental_burst: {
        name: "Détonation élémentaire",
        rate: 1.5,
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      },
      elemental_canon: {
        name: "Canon élémentaire",
        rate: () => 2.6 + elements.turn_stack.value() * 4.5,
        pow: 1,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      },
      cursed_thorn: {
        name: "Cursed Thorn",
        rate: 2.0,
        pow: 1,
        penetrate: () => (elements.demon_mode_first_turn.value() ? 0.2 : 0) + 0.35,
        mult: () => 1 + (elements.sacred_target.value() ? 0.3 : 0),
        single: true,
        dmgType: "magical"
      }
    }
  },
  zidkala: {
    name: 'Zid\'Kala',
    classType: classType.warrior,
    baseAtkp: 613,
    baseAtkm: 50,
    maxHp: 1326,
    defp: 418,
    defm: 306,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
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
        dmgType: "physical",
        single: true
      },
      bleeding_cut: {
        name: "Bleeding Cut",
        rate: 1.2,
        pow: 1,
        dmgType: "physical",
        single: true
      },
      vampire_blade: {
        name: "Vampire Blade",
        rate: 2.2,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      sequential_cutter: {
        name: "Sequential Cutter",
        rate: 3.0,
        pow: 1,
        dmgType: "physical",
        aoe: true
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
    barrier: () => elements.caster_max_hp.value() * 0.3,
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
    baseAtkm: 280,
    maxHp: 1443,
    defp: 400,
    defm: 423,
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
      },
      luminos: {
        name: "Luminos",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magical"
      }
    }
  }
};