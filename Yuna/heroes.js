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
    baseAtk: 1000,
    skills: {
      s1: {
        rate: 1,
        pow: 1
      }
    }
  },
  ley: {
    name: 'Ley',
    classType: classType.ranger,
    baseAtk: 138,
    skills: {
      auto: {
        name: "Auto",
        rate: 1,
        pow: 1
      },
      ardent_strike: {
        name: "Ardent Strike",
        rate: 1.4,
        pow: 1
      },
      ardent_strike_explosion: {
        name: "Ardent Strike Explosion",
        rate: 0.14,
        pow: 1,
        noMiss: true,
        aoe: true
      }
    }
  }
};