
// alert("error???/");
var gallonLiter = function(gallon){
  return gallon * 3.78541;
}

var gallon = prompt("Please enter a number for gallon: ");


if (parseInt(gallon) || parseFloat(gallon)){
  document.write("You entered: " + gallon);
  document.write("In liters is: " + gallonLiter(gallon));
}else{
  document.write("Please enter a number");
}
