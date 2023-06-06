const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dragon.strength);

  const dragonAttack = maxDamage > minDamage ? maxDamage : minDamage;
  return dragonAttack;
}

const warriorDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg));
  const warriorAttack = maxDamage > minDamage ? maxDamage : minDamage;
  return warriorAttack;
}

const mageDamage = (mage) => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = maxDamage * 2;
  const stats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  }
  if (mageMana > 15) {
    const manaDamage = minDamage < maxDamage ? maxDamage : minDamage;
    stats.manaSpent = 15;
    stats.damageDealt = mageAttack;
    return stats;
  }
  return stats;
}
