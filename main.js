import inquirer from "inquirer";
console.log("  Welcome To Abeer NUMBER-GUESSING GAME ");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter Your Guessed Number(Number Limit From 1 to 5)"
    }
]);
if (answer.UserGuessedNumber === randomnumber) {
    console.log("CONGRATULATION! You Guessed A Correct Number");
}
else {
    console.log("OPPS! You Lost");
}
