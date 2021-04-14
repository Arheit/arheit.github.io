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
  },
  seithfeayr: {
    name: 'Sèithfeayr',
    classType: classType.thief,
    baseAtkp: 132,
    baseAtkm: 50,
    maxHp: 567,
    defp: 99,
    defm: 100,
    form: [elements.caster_stealth, elements.moon_blessing],
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
        single: true,
        dmgType: "physical"
      },
      ambush: {
        name: "Ambush",
        rate: () => elements.caster_stealth.value() ? 2.2 : 1.9,
        pow: 1,
        single: true,
        dmgType: "physical"
      }
    }
  }
};