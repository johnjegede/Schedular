var moment = moment();

console.log(moment);
console.log(moment.date());
console.log(moment.hour());
console.log(moment.format());

console.log(moment.format("MMMM DD"));
console.log(moment.calendar());
var date = moment.format("dddd, MMMM DD");

$("#currentDay").text(date);