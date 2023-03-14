//Declare and initialize program constants
const START = 15
const END = 100


//Declare and initialize program variables
let outputStr = ""

//Print out the multiples of 15 between 1-100 using for loop
for (let i = START; i <= END; i+=15)
{
    outputStr += i + " "
}

alert (outputStr)

