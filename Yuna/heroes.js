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
        //rate: () => elements.physical_rate.value(),
        rate: 1,
        pow: 1,
        dmgType: "physical"
      },
      s2: {
        name: "Magical attack",
        //rate: () => elements.magical_rate.value(),
        rate: 1,
        pow: 1,
        dmgType: "magical"
      }
    }
  },
  ley: {
    name: 'Ley',
    classType: classType.ranger,
    baseAtkp: 138,
    baseAtkm: 91,
    maxHp: 494,
    defp: 110,
    defm: 110,
    dot: [dot.bleed],
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1,
        single: true,
        dmgType: "physical"
      },
      ardent_strike: {
        name: "Ardent Strike",
        rate: 1.4,
        pow: 1,
        single: true,
        dmgType: "magical"
      },
      ardent_strike_explosion: {
        name: "Ardent Strike Explosion",
        rate: 0.14,
        pow: 1,
        noMiss: true,
        dmgType: "magical"
      }
    }
  }
};