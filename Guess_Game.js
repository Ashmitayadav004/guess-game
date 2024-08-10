let max = prompt("Enter the maximum range of game.");
const random = Math.floor(Math.random() * max) + 1;
let user = prompt("Guess the random number and enter it :");

while (true) {
    if (user == "quit") {
        console.log("you are quitting.");
        break;
    }
    else if (user == random) {
        console.log("Congrats!!!!!!!!!!!!!!!!!!!!!!!! You guess it");
        break;
    }
    else if (user < random) {
        console.log("Your guess is too small.Please guess again");
        user = prompt("Guess the random number and enter it :");
    }
    else  {
        console.log("Your guess is too large.Please guess again");
        user = prompt("Guess the random number and enter it :");
    }

}