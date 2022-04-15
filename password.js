const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(`What would you like to calculate? \n(+, -, *, /, sqrt, sq, cube, pow, mod) (1st number) (2nd number)\n`, function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log(`math symbol: ${mathSymbol} \n1st number: ${num1} \n2nd number: ${num2}`);

	// // prints out result of operation
	// if (mathSymbol === `+`){
	// 	console.log(num1 + num2);
	// } else if (mathSymbol === `-`) {
	// 	console.log(num1 - num2);
	// } else if (mathSymbol === `*`) {
	// 	console.log(num1 * num2);
	// } else if (mathSymbol === `/`) {
	// 	console.log(num1 / num2);
	// } else if (mathSymbol === `sqrt`) {
	// 	console.log(`Square root of 1st number ${Math.sqrt(num1)}`);
	// 	console.log(`Square root of 2nd number ${Math.sqrt(num2)}`);
	// } else if (mathSymbol === `sq`){
	// 	console.log(`the square of ${num1} is ${num1 * num1}`);
	// 	console.log(`the square of ${num2} is ${num2 * num2}`);
	// } else if (mathSymbol === `cube`){
	// 	console.log(`the cube of ${num1} is ${num1 * num1 * num1}`);
	// 	console.log(`the cube of ${num2} is ${num2 * num2 * num2}`);
	// } else if (mathSymbol === `pow`){
	// 	let newNum = Math.pow(num1, num2)
	// 	console.log(`${num1} to the power of ${num2} is ${newNum}`)
	// } else if (mathSymbol === `mod`){
	// 	let newNum = num1 % num2;
	// 	console.log(`the remainder of ${num1} / ${num2} is ${newNum}`);
	// }


	// This line closes the connection to the command line interface.
	reader.close()

});