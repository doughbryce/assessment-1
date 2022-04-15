const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`welcome to the password validator\n`);
let upperCase = false;
let num = false;
let lowerCase = false;

reader.question(`enter a password (10+ characters, 1+ upper case, 1+ number, 1+ lower case): `, function(password){
    let token = password.split('');
    for (let i = 0; i < password.length; i++) {
        if (token[i] === token[i].toUpperCase()) {
            upperCase = true;
        } else if(isNaN(token[i]) === false){
            num = true;
        } else if (token[i] === token[i].toLowerCase()){
            lowerCase = true;
        }
    }
        if(password.length >= 10 && upperCase  && num && lowerCase) {
            console.log(`${password} is the new password`)
            reader.close();
        } else {
            console.log(`enter a valid password`);
            reader.close();
        }
    });
