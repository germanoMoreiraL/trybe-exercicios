const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const getNumber = parseInt(splitString[index]);
 

  if (getNumber) {
    glassesOfWater += getNumber;
  }
  }
  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }
  return `${glassesOfWater} ${glass} de água`
}

module.exports = hydrate;