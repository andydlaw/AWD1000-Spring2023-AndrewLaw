//Declare and initialize program constants
const START = 1
const END = 100


//Declare and initialize program variables
let outputStr = ""

//Print out the odd numbers 1-100 using while loop
let i = START
while ( i <= END)
{
    outputStr += i + " "
    i +=2
}

alert (outputStr)