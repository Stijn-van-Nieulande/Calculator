var calcString = "";
var calculator = {};

calculator.add = function (s) {
	calcString += s;
	calculator.update();
}
calculator.clear = function () {
	calcString = "";
	calculator.update();
}
calculator.undo = function () {
	calcString = calcString.slice(0, -1);
	calculator.update();
}
calculator.calc = function () {
	calcString = eval(calcString);
	calculator.update();
}
calculator.update = function () {
	calc.value = calcString;
}