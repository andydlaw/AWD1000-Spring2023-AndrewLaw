let option = prompt("Enter your age");

if (isNaN(option)) {
    alert("Please enter your age!");
} else {

    if (option < 1 || option > 125) {
        alert("Age out of range!");
    } else {
        if (option >= 21) {
            alert("Welcome to the venue!");
        } else {
            if (option < 21) {
                alert("You're not old enough!");
            } else {


                if (option == 3) {
                    alert("There is no Three");
                }

            }

        }

    }

}