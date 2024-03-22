#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
// Guessing game 
let guess = await inquirer.prompt([{
        name: 'guess',
        type: 'number',
        message: 'Please guess number from 1 to 10.'
    }]);
// let guess = 4;
if (guess.guess === 5) {
    console.log(chalk.greenBright('you guessed corret :) '));
}
else if (guess.guess > 5) {
    console.log(chalk.greenBright('you are high'));
}
else {
    console.log(chalk.blue('you are low'));
}
