"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const cellPattern = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
    const zipPattern = /([0-9]{4})/;

    const TFIR = "This field is required.";
    const IR = " is required.";
    const MBVE = "This field must be valid email.";

    //Move Focus to the arrival date textbox
    $("#first_name").focus();
    $("#state").val("MO");

    $("#email_form input:radio").change(function () {
        if ($(this).val() == "No") {
            $(".contactVia").attr('checked', false);
            $(".contactVia").attr('disabled', true);
            $(".wrap").css('opacity', '.2');

        }
        // Else Enable radio buttons.
        else {
            $(".contactVia").attr('disabled', false);
            $(".wrap").css('opacity', '1');

        }
    });


    $("#email_form").submit(evt => {
        let isValid = true;

        // validate the requested First Name
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text(TFIR);

            isValid = false;
            evt.preventDefault();
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the requested Last Name
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text(TFIR);

            isValid = false;
            evt.preventDefault();
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        // validate the requested Address
        const address = $("#address").val().trim();
        if (address == "") {
            $("#address").next().text(TFIR);

            isValid = false;
            evt.preventDefault();
        } else {
            $("#address").next().text("");
        }
        $("#address").val(address);

        // validate the requested city
        const city = $("#city").val().trim();
        if (city == "") {
            $("#city").next().text(TFIR);

            isValid = false;
            evt.preventDefault();
        } else {
            $("#city").next().text("");
        }
        $("#city").val(city);


        // validate the requested state
        const state = $("#state").val().trim();
        if (state == "") {
            $("#state").next().text(TFIR);

            isValid = false;
            evt.preventDefault();
        } else {
            $("#state").next().text("");
        }
        $("#state").val(state);




        // validate the number of zip
        const zip = $("#zip").val().trim();
        if (zip == "") {
            $("#zip").next().text(TFIR);
            isValid = false;
        } else if (isNaN(zip)) {
            $("#zip").next().text("Must be numeric.");
            isValid = false;

        }
        else if (!zipPattern.test(zip)) {
            $("#zip").next().text("Must be 5 digits long.");
            isValid = false;
        } 
        else {
            $("#zip").next().text("");
        }
        $("#zip").val(zip);



        // validate the email entry with a regular expression
        const email = $("#email_1").val().trim();
        if (email == "") {
            $("#email_1").next().text(TFIR);
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email);

        // validate the cell
        const cell = $("#cell").val().trim();
        if (cell == "") {
            $("#cell").next().text(TFIR);
            isValid = false;
        } else if (!cellPattern.test(cell)) {
            $("#cell").next().text("Must be formatted (999) 999-9999 or 9999999999");
            isValid = false;
        } else {
            $("#cell").next().text("");
        }
        $("#cell").val(cell);

        // prevent the submission of the form if any entries are invalid 
        if (!isValid) {
            evt.preventDefault();
        }
    });// end function




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

            errors[errors.length] = TFIR;

            isValid = false;
        } else {
            $("#first_name_error").textContent = "";
        }

        if (lastName == "") {
            errors[errors.length] = TFIR;
            isValid = false;
        } else {
            $("#last_name_error").textContent = "";
        }



        if (address == "") {
            errors[errors.length] = "Address is required.";

            isValid = false;
        } else {
            $("#address_error").textContent = "";
        }
        if (city == "") {
            errors[errors.length] = "City is required.";
            isValid = false;
        } else {
            $("#city_error").textContent = "";
        }
        if (state == "") {
            errors[errors.length] = "State is required.";
            isValid = false;
        } else {
            $("#state_error").textContent = "";
        }
        if (zip == "") {
            errors[errors.length] = "Zip is required.";
            isValid = false;
        } else {
            $("#zip_error").textContent = "";
        }

        if (email1 == "") {
            errors[errors.length] = "Email is required.";

            isValid = false;
        } else {
            $("#email_1_error").textContent = "";
        }

        if (cell == "") {
            errors[errors.length] = "Cell phone number is required.";
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


    const displayError = () => {
        let errorDisplay = "";
        for (let i = 0; i < errors.length; ++i) {
            errorDisplay += errors[i] + "\n";
        }

        $("#error_display").value = errorDisplay;
        errors.length = 0;

    }

    const clearError = () => {
        let errorDisplay = "";
        for (let i = 0; i < errors.length; ++i) {
            errors[i] = "";
        }

        $("#error_display").value = "";
        errors.length = 0;
    }

    const clearForm = () => {

        delay(function () {
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
        }, 5000); // end delay









    };


});
