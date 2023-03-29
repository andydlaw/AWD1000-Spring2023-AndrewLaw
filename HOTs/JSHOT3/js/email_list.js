"use strict"

const $ = selector => document.querySelector(selector);

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

const errors = [];

function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;

    document.querySelector('.thanksIMG').append(img);


}

const joinList = () => {
    // get user entries from text boxes
    const email1 = $("#email_1").value;
    const address = $("#address").value;
    const firstName = $("#first_name").value;
    const lastName = $("#last_name").value;
    const city = $("#city").value;
    const state = $("#state").value;
    const zip = $("#zip").value;
    const cell = $("#cell").value;

    // check user entries
    let isValid = true;

    if (firstName == "") {
        
       errors[errors.length] =  "First name is required.";
        
        isValid = false;
    } else {
        $("#first_name_error").textContent = "";
    }

    if (lastName == "") {
        errors[errors.length] =  "Last name is required.";
        isValid = false;
    } else {
        $("#last_name_error").textContent = "";
    }

   

    if (address == "") {
        errors[errors.length]  = "Address is required.";
        
        isValid = false;
    } else {
        $("#address_error").textContent = "";
    }
    if (city == "") {
        errors[errors.length] =  "City is required.";
        isValid = false;
    } else {
        $("#city_error").textContent = "";
    }
    if (state == "") {
        errors[errors.length] =  "State is required.";
        isValid = false;
    } else {
        $("#state_error").textContent = "";
    }
    if (zip == "") {
        errors[errors.length] =  "Zip is required.";
        isValid = false;
    } else {
        $("#zip_error").textContent = "";
    }

    if (email1 == "") {
        errors[errors.length] =  "Email is required.";        
        
        isValid = false;
    } else {
        $("#email_1_error").textContent = "";
    }

    if (cell == "") {
        errors[errors.length] =  "Cell phone number is required.";
        isValid = false;
    } else {
        $("#cell_error").textContent = "";
    }





    // submit the form if user entries are valid
    if (isValid) {
        clearError();
        displayImage('images/thankYou.png', 331, 152);
        //$("#email_form").submit();
    }
};


const displayError = () =>{
	let errorDisplay = "";
	for (let i = 0; i< errors.length; ++i){
		errorDisplay += errors[i] + "\n";
	}

	$("#error_display").value = errorDisplay;
    errors.length = 0;

}

const clearError = () =>{
	let errorDisplay = "";
	for (let i = 0; i< errors.length; ++i){
		errors[i] = "";
	}

	$("#error_display").value = "";
    errors.length = 0;
}

const clearForm = () => {

    delay(function(){
          // clear text boxes
    $("#email_1").value = "";
    $("#address").value = "";
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#zip").value = "";
    $("#cell").value = "";
    $("#error_display").value = "";
    errors.length = 0;

    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#address_error").textContent = "*";
    $("#first_name_error").textContent = "*";
    $("#last_name_error").textContent = "*";
    $("#city_error").textContent = "*";
    $("#state_error").textContent = "*";
    $("#zip_error").textContent = "*";
    $("#cell_error").textContent = "*";
    $("#first_name").focus();
    document.querySelector('.thanksIMG').textContent = "";
    clearError();  // do stuff
    }, 5000 ); // end delay
    







    // set focus on first text box after resetting the form
    
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);
    $("#join_list").addEventListener("click", displayError)

    // set focus on first text box after the form loads
    $("#first_name").focus();
});
