var calcStringOLD = "";
var calcStringNEW = "";
var lastExpression = "";
var somstring = "";
var calculated = false;
var first = true;
var calculator = {};

calculator.add = function (s) {
	if (first) {
		calcStringOLD += s;
	} else {
		calcStringNEW += s;
	}
	somstring += s;
	calculated = false;
	calculator.update();
}
calculator.execExpr = function (s) {
	calculator.calc();
	calculated = false;
	somstring += (" " + s + " ");
	lastExpression = s;
	calculator.update(true);
}
calculator.clear = function () {
	calcStringOLD = "";
	calcStringNEW = "";
	lastExpression = "";
	somstring = "";
	calculated = false;
	first = true;
	calculator.update();
}
calculator.calc = function () {
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
calculator.update = function (somonly = false) {
	if (!somonly) {
		calc.value = (calculated || first) ? calcStringOLD : calcStringNEW;
		calc.value = Math.round(calc.value * 1000) / 1000;
	}
	som.value = somstring;
}