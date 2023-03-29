"use strict";

const $ = selector => document.querySelector(selector);


/*
const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
*/

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(2);

const processEntries = () => {
    const msg = "Must be a valid number > 0";
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);
    let isValid = true;

    if (isNaN(miles) || miles <= 0) {
        //alert("Miles driven must be a valid number greater than zero");
        //focusAndSelect("#miles");
        $("#miles").nextElementSibling.textContent = msg;
    } else if (isNaN(gallons) || gallons <= 0) {
        //alert("Gallons of gas used must be a valid number greater than zero.");
        //focusAndSelect("#gallons");
        $("#miles").nextElementSibling.textContent = "*";
        $("#gallons").nextElementSibling.textContent = msg;
    } else {
        $("#mpg").value = calculateMPG(miles, gallons);
        $("#gallons").nextElementSibling.textContent = "*";
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").nextElementSibling.textContent = "*";
    $("#gallons").nextElementSibling.textContent = "*";
    $("#miles").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});