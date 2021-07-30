export const stringToHexa = (string = "") => {
  const hexa = [];
  for (let n = 0, l = string.length; n < l; n++) {
    const hex = Number(string.charCodeAt(n)).toString(16);
    hexa.push(hex);
  }
  return hexa.join("");
};

export const hexaToString = (hexa = "") =>
  hexa
    .split("")
    .map(char => parseInt(char, 16))
    .join("");
