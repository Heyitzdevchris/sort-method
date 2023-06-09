function sortWords(words) {
  return words.sort();
}

function sortNumbers(numbers) {
 return numbers.sort((a, b) => a - b);
}

function largestFirst(numbers) {
  return numbers.sort((a, b) => b - a);
}

function sortFlowersByZone(flowers) {
  return flowers.sort((flowersA, flowersB) => flowersA.zone - flowersB.zone);
}

function sortByLength(strings) {
  return strings.sort((stringA, stringB) => stringA.length - stringB.length)
}

