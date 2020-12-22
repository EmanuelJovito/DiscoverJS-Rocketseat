// if...else

let temperatura = 37.4;
let highTemperature = temperatura >= 37.5;
let mediumTemperature = temperatura < 37.5 && temperatura >= 37;

if (highTemperature) {
  console.log("Febre alta");
} else if (mediumTemperature) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}
