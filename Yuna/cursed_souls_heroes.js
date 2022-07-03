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
  branifalias: {
    name: 'Branifalias',
    classType: classType.warrior,
    baseAtkp: 145,
    baseAtkm: 218,
    maxHp: 450,
    defp: 120,
    defm: 120,
    skills: {
      autop: {
        name: "Auto (physical)",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      autom: {
        name: "Auto (magical)",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magique"
      },
      dominion_sword: {
        name: "Dominion Sword",
        rate: 1.15,
        pow: 1,
        single: true,
        dmgType: "magical"
      }
    }
  },
  ersy: {
    name: 'Ersy',
    classType: classType.warrior,
    baseAtkp: 150,
    baseAtkm: 100,
    maxHp: 450,
    defp: 125,
    defm: 125,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      shield_bash: {
        name: "Shield Bash",
        rate: 1.1,
        pow: 1,
        single: true,
        dmgType: "physical"
      }
    }
  },
  hurd: {
    name: 'Hurd',
    classType: classType.knight,
    baseAtkp: 100,
    baseAtkm: 100,
    maxHp: 600,
    defp: 150,
    defm: 100,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      challenge: {
        name: "Challenge",
        rate: 1.1,
        pow: 1,
        single: true,
        dmgType: "physical"
      }
    }
  },
  kaguya_kanzashi: {
    name: 'Kaguya Kanzashi',
    classType: classType.mage,
    baseAtkp: 100,
    baseAtkm: 130,
    maxHp: 450,
    defp: 150,
    defm: 100,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      }
    }
  },
  Laika: {
    name: 'Laika',
    classType: classType.mage,
    baseAtkp: 100,
    baseAtkm: 150,
    maxHp: 390,
    defp: 130,
    defm: 130,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magical"
      },
      cursed_thorns: {
        name: "Cursed Thorns",
        rate: 1.1,
        pow: 1,
        single: true,
        dmgType: "magical"
      }
    }
  },
  thyrus: {
    name: 'Thyrus',
    classType: classType.thief,
    baseAtkp: 100,
    baseAtkm: 175,
    maxHp: 375,
    defp: 100,
    defm: 100,
    form: [elements.caster_nb_focus],
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "magical"
      },
      rune_perfo: {
        name: "Rune perforante",
        rate: 1.25,
        pow: 1,
        mult: () => 1 + elements.caster_nb_focus.value() * 0.15,
        penetrate: () => 0.2,
        single: true,
        dmgType: "magical"
      }
    }
  },
};