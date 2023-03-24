"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const cents = parseInt($("#cents").value);


    if (isNaN(cents)) {
        alert("Change Due is not a number");
        focusAndSelect("#cents");
    } else if (cents < 0 || cents >99) {
            alert("Please enter value from 0 to 99");
            focusAndSelect("#cents");
    }
    else{


        makeChange(cents);

    }

};

const makeChange = due => {

    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let penny = 1;

    let dollars = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
  

    do{    
        if (due >= 25)
        {
            quarters = parseInt(due / quarter);    // How many quarters we can get?
            due = due % quarter;
        }
        else if (due >= 10)
        {
            dimes = parseInt(due / dime);    // How many dimes we can get?
            due = due % dime;
        }
        else if (due >= 5)
        {
            nickels = parseInt(due / nickel);    // How many nickels we can get?
            due = due % nickel;
        }
        else if (due < 5)
        {
            pennies = parseInt(due / penny);    // How many nickels we can get?
            due = due % penny;
        }
        else
        {    
            due = due;    // How many cents we'd have left?
        }
    }while (due != 0);
  


    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
    focusAndSelect("#cents");
}



var clearEntries = () => {
    $("#cents").value = "";
    $("#quarters").value = "";
    $("#dimes").value = "";
    $("#nickels").value = "";
    $("#pennies").value = "";
};


document.addEventListener("DOMContentLoaded", () => {
    $("#cents").focus();
    $("#calculate").addEventListener("click", processEntries);



});