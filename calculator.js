var calcStringOLD = "";
var calcStringNEW = "";
var lastExpression = "";
var calculated = false;
var first = true;
var calculator = {};

calculator.add = function (s) {
	if (first) {
		calcStringOLD += s;
	} else {
		calcStringNEW += s;
	}
	calculated = false;
	calculator.update();
}
calculator.execExpr = function (s) {
	calculator.calc();
	calculated = false;
	lastExpression = s;
}
calculator.clear = function () {
	calcStringOLD = "";
	calcStringNEW = "";
	lastExpression = "";
	calculated = false;
	first = true;
	calculator.update();
}
calculator.calc = function () {
	console.log(calcStringOLD + " | " + calcStringNEW);
	
	calcStringOLD = (calcStringOLD == "") ? 0 : calcStringOLD;
	calcStringNEW = (calcStringNEW == "") ? 0 : calcStringNEW;
	
	switch (lastExpression) {
		case "+":
			calcStringOLD = (parseFloat(calcStringOLD) + parseFloat(calcStringNEW));
			break;
		case "-":
			calcStringOLD = (parseFloat(calcStringOLD) - parseFloat(calcStringNEW));
			break;
		case "/":
			calcStringOLD = (parseFloat(calcStringOLD) / parseFloat(calcStringNEW));
			break;
		case "*":
			calcStringOLD = (parseFloat(calcStringOLD) * parseFloat(calcStringNEW));
			break;
	}
	calcStringNEW = "";
	lastExpression = "";
	calculated = true;
	first = false;
	calculator.update();
}
calculator.update = function () {
	calc.value = (calculated || first) ? calcStringOLD : calcStringNEW;
	calc.value = Math.round(calc.value * 1000) / 1000;
}