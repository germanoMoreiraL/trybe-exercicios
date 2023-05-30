const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }

  const sortedArray = array.sort();
  const listOfTechs = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
      listOfTechs.push({
      tech: sortedArray[index],
      name,
    })
  }
  return listOfTechs;
}

module.exports = techList;