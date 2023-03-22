"use strict"

const $ = selector => document.querySelector(selector);

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
    if (email1 == "") { 
        $("#email_1_error").textContent = "Email is required.";
        isValid = false;
    } else { 
        $("#email_1_error").textContent = ""; 
    }
    
    if (address == "") { 
        $("#address_error").textContent = "Address is required.";
        isValid = false;
    } else { 
        $("#address_error").textContent = ""; 
    }
    if (city == "") { 
        $("#city_error").textContent = "City is required.";
        isValid = false;
    } else { 
        $("#city_error").textContent = ""; 
    }
    if (state == "") { 
        $("#state_error").textContent = "State is required.";
        isValid = false;
    } else { 
        $("#state_error").textContent = ""; 
    }
    if (zip == "") { 
        $("#zip_error").textContent = "Zip is required.";
        isValid = false;
    } else { 
        $("#zip_error").textContent = ""; 
    }

    if (cell == "") { 
        $("#cell_error").textContent = "Cell phone number is required.";
        isValid = false;
    } else { 
        $("#cell_error").textContent = ""; 
    }


    if (firstName == "") {
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    } else { 
        $("#first_name_error").textContent = ""; 
    }

    if (firstName == "") {
        $("#last_name_error").textContent = "Last name is required.";
        isValid = false;
    } else { 
        $("#last_name_error").textContent = ""; 
    }


    // submit the form if user entries are valid
    if ( isValid ) {
        $("#email_form").submit(); 
    }
};

const clearForm = () => {
    // clear text boxes
    $("#email_1").value = "";
    $("#address").value = "";
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#zip").value = "";
    $("#cell").value = "";

    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#address_error").textContent = "*";
    $("#first_name_error").textContent = "*"; 
    $("#last_name_error").textContent = "*"; 
    $("#city_error").textContent = "*"; 
    $("#state_error").textContent = "*"; 
    $("#zip_error").textContent = "*";
    $("#cell_error").textContent = "*";

    // set focus on first text box after resetting the form
    $("#first_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#first_name").focus();
});
