"use strict";

var ci = "kg";//use kg, km or h
var value = 13;

switch (ci) {
  case "km":
    var ci_final = "m";
    var value_final = 13 * 1000;
    var answer = `${value}${ci} is ${value_final}${ci_final}`;
    break;

  case "h":
    var ci_final = "min";
    var value_final = value * 60;
    var answer = `${value}${ci} is ${value_final}${ci_final}`;
    break;

  case "kg":
    var ci_final = "g";
    var value_final = value * 1000;
    var answer = `${value}${ci} is ${value_final}${ci_final}`;
    break;

  default:
    var answer = `Cant found entered measurement unit in database`;
}

console.log(answer);
