"use strict";

$(document).ready(() => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	const TFIR = "This field is required.";
	const MBN = "This field must be numeric.";
	const MBVE = "This field must be valid email.";

	//Move Focus to the arrival date textbox
	$("#arrival_date").focus();

	$("#reservation_form").submit( evt => {
		let isValid = true;
		
		// validate the requested arrival date
		const arrivalDate = $("#arrival_date").val().trim();
		if (arrivalDate == "") {
			$("#arrival_date").next().text("This field is required.");
			isValid = false;
		} else {
			$("#arrival_date").next().text("");				
		}
		$("#arrival_date").val(arrivalDate);
		
		// validate the number of nights
		const nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else if (isNaN(nights)) {
			$("#nights").next().text("Must be numeric.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);		

		// validate the name entry
		const name = $("#name").val().trim();
		if (name == "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#name").next().text("");
		}
		$("#name").val(name);
					
		// validate the email entry with a regular expression
		const email = $("#email").val().trim();
		if (email == "") { 
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if ( !emailPattern.test(email) ) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email); 
		
		// validate the phone number
		const phone = $("#phone").val().trim();
		if (phone == "") { 
			$("#phone").next().text("This field is required.");
			isValid = false; 
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);
		
		// prevent the submission of the form if any entries are invalid 
		if (!isValid) {
			evt.preventDefault();				
		}
	} );// end function

	/*

	//perform validation when submit button is clicked
	$("#reservation_form").submit(evt => {
		let isValid = true;

		//validate arrival date
		const arrivalDate = $("#arrival_date").val().trim();
		if (arrivalDate === "") {
			$("#arrival_date").next().text(TFIR);
			isValid = false;
		}
		else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);


		// Validate Nights
		const nights = $("#nights").val().trim();
		if (nights === "") {
			$("#nights").next().text(TFIR);
			isValid = false;
		}
		else if (isNaN(nights)) {
			$("#nights").next().text(MBN);
			isValid = false;
		}
		else {
			$("#nights").next().text("");

		}
		$("#nights").val(nights);

		//validate Name
		const name = $("#name").val().trim();
		if (name === "") {
			$("#name").next().text(TFIR);
			isValid = false;
		}
		else {
			$("#name").next().text("");
		}
		$("#name").val(name);

		//validate Email
		const email = $("#email").val().trim();
		if (email === "") {
			$("#email").next().text(TFIR);
			isValid = false;
		}
		else if (!emailPattern.test(email)) {
			$("#email").next().text(MBVE);
			isValid = false;
		}
		else {
			$("#email").next().email("");
		}

		$("#email").val(email);

		//validate Phone
		const phone = $("#phone").val().trim();
		if (phone === "") {
			$("#phone").next().text(TFIR);
			isValid = false;
		}
		else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);


		if (!isValid) { evt.preventDefault(); }


	}) */

}); // end ready