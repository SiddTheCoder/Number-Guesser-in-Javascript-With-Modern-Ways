const prompt = require('prompt-sync')();

console.log("Welcome To Number Guessing program ..")

let compGuess = Math.floor(Math.random() * 100);
console.log(compGuess)



    let chances = 1; 
    while (chances < 11) {

        console.log("───────────────────────────────────────────────────")
const userGuess = prompt("Enter Your Guess Between 1-100 : ");
        console.log("───────────────────────────────────────────────────")
        // const userGuess = prompt("Enter Your Guess Between 1-100 : ");
        if (parseInt(userGuess) == parseInt(compGuess)){
            // const userGuess = prompt("Enter Your Guess Between 1-100 : ");
            console.log("You Win")
            // console.log(`The Computer Guess Was ${compGuess}`)
            console.log(`Your Score is ${100-userGuess} .`)
            break;
        }
        else if(parseInt(userGuess) < parseInt(compGuess)){
        console.log("───────────────────────────────────────────────────")
            // const userGuess = prompt("Enter Your Guess Between 1-100 : ");
            console.log(`The Computer Guess is more than ${userGuess}`)
            console.log("You Loose")
            console.log(`Your Score is ${100-userGuess} .`)
            console.log(`Chances Remaining : ${10-chances}`)
        }
        else if(parseInt(userGuess) > parseInt(compGuess)){
        console.log("───────────────────────────────────────────────────")
        // const userGuess = prompt("Enter Your Guess Between 1-100 : ");
            console.log(`The Computer Guess is less than ${userGuess}`)
            console.log("You Loose")
            console.log(`Your Score is ${100-userGuess} .`)
            console.log(`Chances Remaining : ${10-chances}`)
        }
        else{
        console.log("───────────────────────────────────────────────────")
            // const userGuess = prompt("Enter Your Guess Between 1-100 : ");
            console.log("yOU ARE oUt of rANGe")
            console.log(`Chances Remaining : ${10-chances}`)
        }
        
        if (chances == 10) break;
        chances++; 
    }
        console.log("───────────────────────────────────────────────────")
console.log(`The Computer Score Was ${compGuess} 😎`)
        console.log("───────────────────────────────────────────────────")




