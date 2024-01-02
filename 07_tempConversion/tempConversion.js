const convertToCelsius = function(tempF) {
  if(typeof tempF != "number") return "ERROR";
  return Math.round(10 * (tempF - 32) / 1.8) / 10;
};

const convertToFahrenheit = function(tempC) {
  if(typeof tempC != "number") return "ERROR";
  return Math.round(10 * (tempC * 1.8 + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
