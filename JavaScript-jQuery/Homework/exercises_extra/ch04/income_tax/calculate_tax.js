"use strict";
const $ = selector => document.querySelector(selector);




const focusAndSelect = selector => {
	const elem = $(selector);
	elem.focus();
	elem.select();
};

const processEntry = () => {
	const income = parseInt($("#income").value);


	if (isNaN(income)) {
		alert("Income is not a number");
		focusAndSelect("#income");
	}
	else {


		calculateTax(income);

	}

};

const calculateTax = ti => {



	let itOwed = 0;
	let incomeTax0 = 15;
	let incomeTax1 = 0;
	let incomeTax2 = 0;
	let incomeTax3 = 0;
	let incomeTax4 = 0;
	let incomeTax5 = 0;
	let incomeTax6 = 0;



	if (ti >= 518400) {
		incomeTax6 = ((ti - 518400) * .37) + 156235;
		itOwed = itOwed + incomeTax6;
	}
	else if (ti >= 207350 && ti < 518400) {
		incomeTax5 = ((ti - 207350) * .35) + 47367.50;
		itOwed = itOwed + incomeTax5;
	}
	else if (ti >= 163300 && ti < 207350) {
		incomeTax4 = ((ti - 163300) * .37) + 33271.50;
		itOwed = itOwed + incomeTax4;
	}
	else if (ti >= 85525 && ti < 163300) {
		incomeTax3 = ((ti - 85525) * .32) + 14605.50;
		itOwed = itOwed + incomeTax3;
	}
	else if (ti >= 40125 && ti < 85525) {
		incomeTax2 = ((ti - 40125) * .24) + 4617.5;
		itOwed = itOwed + incomeTax2;
	}
	else if (ti > 9875 && ti < 40125) {
		incomeTax1 = ((ti - 9875) * .22) + 987.50;
		itOwed = itOwed + incomeTax1;
	}

	else {
		incomeTax0 = ti * .10;
		itOwed = incomeTax0;
	}



	$("#tax").value = itOwed.toFixed(2);
	focusAndSelect("#income");
}







document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});