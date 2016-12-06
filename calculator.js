var calc = {};
calc.define = function () {
	calc.calcStringOLD = calc.calcStringNEW = calc.lastExpression = calc.somstring = "";
	calc.calculated = false;
	calc.first = true;
	calc.update();
}
calc.add = function (s) {
	if (s === ".") {
		s = calc.first ? ((calc.calcStringOLD.indexOf(".") !== -1) ? "" : s) : ((calc.calcStringNEW.indexOf(".") !== -1) ? "" : s);
	}
	calc.first ? (calc.calcStringOLD += s) : (calc.calcStringNEW += s);
	calc.somstring += s;
	calc.calculated = false;
	calc.update();
}
calc.execExpr = function (s) {
	calc.calc();
	calc.calculated = false;
	calc.somstring += (" " + s + " ");
	calc.lastExpression = s;
	calc.update(true);
}
calc.calc = function () {
	calc.calcStringOLD = (calc.calcStringOLD == "") ? 0 : calc.calcStringOLD;
	calc.calcStringNEW = (calc.calcStringNEW == "") ? 0 : calc.calcStringNEW;
	
	switch (calc.lastExpression) {
		case "+":
			calc.calcStringOLD = (parseFloat(calc.calcStringOLD) + parseFloat(calc.calcStringNEW));
			break;
		case "-":
			calc.calcStringOLD = (parseFloat(calc.calcStringOLD) - parseFloat(calc.calcStringNEW));
			break;
		case "/":
			calc.calcStringOLD = (parseFloat(calc.calcStringOLD) / parseFloat(calc.calcStringNEW));
			break;
		case "*":
			calc.calcStringOLD = (parseFloat(calc.calcStringOLD) * parseFloat(calc.calcStringNEW));
			break;
	}
	calc.calcStringNEW = calc.lastExpression = "";
	calc.calculated = true;
	calc.first = false;
	calc.update();
}
calc.update = function (somonly = false) {
	console.log(calc.calcStringOLD + " | " + calc.calcStringNEW);
	if (!somonly) {
		document.getElementById("calc_calc").value = (calc.calculated || calc.first) ? calc.calcStringOLD : calc.calcStringNEW;
		document.getElementById("calc_calc").value = Math.round(document.getElementById("calc_calc").value * 1000) / 1000;
	}
	document.getElementById("calc_som").value = calc.somstring;
}