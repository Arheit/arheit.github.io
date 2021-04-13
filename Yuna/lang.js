const i18n = {
  en: {
    nicknames: {
      ambitious_tywin: 'aywin ml.tywin mltywin',
      angelic_montmorancy: 'momo',
      arbiter_vildred: 'arby',
      assassin_cartuja: 'fatcat',
      assassin_cidd: 'a.cidd accid',
      assassin_coli: 'a.coli acoli',
      auxiliary_lots: 'a.lots alots',
      benevolent_romann: 'broman',
      blood_blade_karin: 'bbk',
      challenger_dominiel: 'c.dom cdom',
      champion_zerato: 'c.zerato czerato',
      church_of_ilryos_axe: 'axe god axegod',
      crescent_moon_rin: 'ml.rin mlrin',
      crimson_armin: 'c.armin carmin',
      dark_corvus: 'dc DC',
      desert_jewel_basar: 'dj.basar djbasar',
      faithless_lidica: 'f.lidica flidica',
      falconer_kluri: 'f.kluri fkluri',
      fallen_cecilia: 'f.cc fcc',
      fighter_maya: 'f.maya fmaya',
      general_purrgis: 'g.purrgis gpurrgis',
      holiday_yufine: 'hufine',
      judge_kise: 'j.kise jkise',
      maid_chloe: 'ml.chloe mlchloe',
      martial_artist_ken: 'ml.ken mlken',
      mort: 'mortelix',
      sage_baal_and_sezan: 'ml.baal mlbaal',
      shooting_star_achates: 'ssa',
      seaside_bellona: 'ssb',
      silver_blade_aramintha: 'ml.aramintha mlaramintha',
      sinful_angelica: 'ml.angelica mlangelica',
      specimen_sez: 'ml.sez mlsez',
      specter_tenebria: 'specte ml.tenebria mltenebria',
      taranor_guard: 'tg',
      troublemaker_crozet: 'ml.crozet mlcrozet',
      wanderer_silk: 'ml.silk mlsilk',
    },
    skills: {
      mods: 'Skill Modifiers',
      att_rate: 'Attack Rate',
      power: 'Power',
      mult: 'Mult Mod',
      flat: 'Flat Mod',
      critBoost: 'Crit Dmg',
      pen: 'Penetrate',
      detonation: 'Detonation',
      exEq: 'Excl. Equipment',
      elemAdv: 'Elemental Adv',
      afterMathFormula: 'Aftermath',
      afterMathDmg: 'Aftermath Dmg',
      extraDmg: 'Extra Dmg',
      custom: {
        all_fire: '{v}% Team Fire',
        caster_defense: '{v}% Defense',
        caster_left_hp_pc: '{v}% remaining HP%',
        caster_lost_hp: '{v}% lost HP',
        caster_lost_hp_pc: '{v}% lost HP%',
        caster_max_hp: '{v}% max HP',
        caster_hp_pc_over_hp_threshold: '{v}% HP% [above threshold]',
        caster_rage: '{v}% Rage',
        caster_speed: '{v}% Speed',
        caster_hp_pc_under_hp_threshold: '{v}% HP% [below threshold]',
        caster_vs_target_hp_diff: 'Caster vs Target HP Diff: {v}%/1000hp',
        elemental_advantage: '{v}% Elem. Adv.',
        per_crit_hit: '{v}% per Critical Hit',
        per_target: '{v}% per Target',
        per_bleed: '{v}% per Bleed',
        per_fewer_target: '{v}% per fewer Target',
        per_focus: '{v}% per Focus',
        per_stack: '{v}% per Stack',
        per_target_debuff: '{v}% per Debuff',
        skill_tree: 'Skill Tree: {v}%',
        target_bleed: 'Target Bleed: {v}%',
        target_debuff: 'Target Debuff: {v}%',
        target_has_buff: 'Target has Buff: {v}%',
        target_has_debuff: 'Target has Debuff: {v}%',
        target_has_no_buff: 'Target has no Buff: {v}%',
        target_lost_hp_pc: '{v}% Target lost HP%',
        target_magic_nail: 'Magic Nail: {v}%',
        target_max_hp: '{v}% Target max HP',
        target_speed: '{v}% Target Speed',
        under_threshold: 'Below Threshold: {v}%',
      }
    },
    info: {
      alencia_trample: 'Trample',
      haste_balance: '1/21 Balance applied: Detonation added (+5% damage)',
      elphelt_balance: '3/31 Balance: S1: 1/1 -> 1.1/1; S2: 1/0.85 -> 1/1, debuff scaling 15% -> 20%',
      lqc_s3_splash: 'S3 Splash',
      s1_extra_attack: 'S1 Extra Attack',
      s2_wave_2: 'S2 Wave 2',
      s2_counter: 'S2 (Counter)',
      s2_wave_3: 'S2 Wave 3',
      sez_explosion: 'Explosion',
      silk_balance: '1/21 Balance applied: S3 multiplier changed from 0.85/1.05 to 0.95/1.05',
      sol_balance: '3/31 Balance: S2: 1/1 -> 0.7/1 (nerf); S3: added aftermath damage',
      spez_balance: '1/21 Balance applied: S2 multiplier changed from 0.8/1 to 0.9/1 (Soulburn from 1.05/1 to 1.15/1)',
      victorious_flag: 'Elemental advantage must be enabled to see benefits from this artifact; doesn\'t apply to light and dark heroes',
    }
  }
};

const heroName = (id) => {
  const lang = document.getElementById('root').getAttribute('lang');
  if (lang === 'en') {
    return heroes[id].name;
  } else {
    return i18n[lang].heroes[id] || heroes[id].name;
  }
};

const heroNicknames = (id) => {
  const lang = document.getElementById('root').getAttribute('lang');
  return i18n[lang].nicknames[id] || '';
};

const artifactName = (id) => {
  const lang = document.getElementById('root').getAttribute('lang');
  if (lang === 'en') {
    return artifacts[id] ? artifacts[id].name : 'No Artifact Proc';
  } else {
    return i18n[lang].artifacts[id || 'no_proc'] || artifacts[id].name;
  }
};

const formLabel = (id) => {
  const lang = document.getElementById('root').getAttribute('lang');
  if (lang === 'en') {
    return elements[id].label;
  } else {
    return i18n[lang].form[id] || elements[id].label;
  }
};

const skillLabel = (id, soulburn = false) => {
  const lang = document.getElementById('root').getAttribute('lang');
  if (lang === 'en') {
    return (id === 'non_applicable') ? 'n/a' : i18n[lang].skills[id] || id.toUpperCase() + (soulburn ? ' Soulburn' : '');
  } else {
    id = soulburn ? id+'_soulburn' : id;
    return i18n[lang].skills[id] || i18n['en'].skills[id] || id.toUpperCase();
  }
};

const compareSkillLabel = (id) => {
  const lang = document.getElementById('root').getAttribute('lang');
  const idSplit = id.split('_');
  id = idSplit[0];
  const extra = idSplit[1] || '';

  let display;
  if (lang === 'en') {
    display = id.toUpperCase();
  } else {
    display = i18n[lang].skills[id] || id.toUpperCase();
  }

  if (extra === 'sb') {
    display += '<i class="fas fa-fire"></i>';
  } else if (extra!== '') {
    display += '<i class="far fa-plus-square"></i>';
  }

  return display
};

const getSkillModTip = (tips) => {
  if (!tips) return '';

  const output = [];
  for (const key of Object.keys(tips)) {
    let lang = document.getElementById('root').getAttribute('lang');
    if (i18n[lang].skills['custom'] === undefined) lang = 'en';
    if (i18n[lang].skills['custom'][key] === undefined) lang = 'en';

    if (i18n[lang].skills['custom'][key] === undefined) return null;
    output.push((i18n[lang].skills['custom'][key]).replace('{v}', tips[key]));
  }

  return `(${output.join(', ')})`
}

const infoLabel = (key) => {
  let lang = document.getElementById('root').getAttribute('lang');
  if (i18n[lang].info === undefined) lang = 'en';

  return i18n[lang].info[key] || i18n['en'].info[key] || '';
}