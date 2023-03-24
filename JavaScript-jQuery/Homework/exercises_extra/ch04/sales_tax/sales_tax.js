"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const subTotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if (isNaN(subTotal)) {
        alert("Subtotal is not a number");
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate)) {
        alert("Tax Rate is not a number");
        focusAndSelect("#tax_rate");
    } else if (subTotal <= 0 || subTotal > 9999) {
        alert("Subtotal is has to be greater than 0 and less than 10000");
        focusAndSelect("#subtotal");
    }
    else if (taxRate < 0 || taxRate > 11) {
        alert("Tax Rate is has to be greater than 0 and less than 12");
        focusAndSelect("#tax_rate");
    } else {


        $("#sales_tax").value = ((taxRate / 100) * subTotal).toFixed(2);

        const salesTax = parseFloat($("#sales_tax").value);
        $("#total").value = (salesTax + subTotal).toFixed(2);
        focusAndSelect("#subtotal");
    }

};

const clearSubtotal = () =>{
    $("#subtotal").value = "";
}
;
const clearTaxRate = () =>{
    $("#tax_rate").value = "";
}
;

var clearEntries = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
};


document.addEventListener("DOMContentLoaded", () => {
$("#subtotal").focus();
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
    

});