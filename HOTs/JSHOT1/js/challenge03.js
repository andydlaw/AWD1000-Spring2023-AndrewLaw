let option = prompt("Enter a number between 1-3");

if (isNaN(option)) {
  alert("Please enter a number, not a word");
} else {
  if (option == 1) {
    alert("One is the loneliest number that you'll ever do");
  } else {
    if (option == 2) {
      alert("Two can be as bad as one, It's the loneliest number since the number one");
    } else {
      if (option == 3) {
        alert("There is no Three");
      } else {
        if (option < 1 || option > 3) {
          alert("You didn't enter a valid number");
        }
      }
    }
  }

}