// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:

// - accountName, should be the data type string
// this property should contain the name of the account holder

// - balance, should be the data type number
// this property should contain the total amount of the account

// - getBalance, should be a function
// this function should display the total amount of the account to the user

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:
//const variableName = 10;
//isNaN(variableName);

// this is the function atm(), I've created some start code for you
function atm() {
  const message = parseFloat(prompt("Select a choice: 1.) see balance 2.) make a deposit 3.) make a withdrawal 4.) get account name 5.) exit "));
  // you need to answer the question why we are using parseFloat() method here?
  // you can answer as a comment in your code, and yes you need to some research of your own
  if(message === 1){
    account.getBalance();
  } else if(message === 2){
    account.deposit();
  } else if(message === 3){
    account.withdrawal();
  } else if(message === 4){
    account.getAccountName();
  } else if(message === 5){
    account.exitAccount();
  } else {
    account.accountError();
  }
  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice
}

const account = {
  accountName: "Helena Johansson",
  balance: 100000,
  getBalance() {
    let input = parseFloat(prompt(`Your balance: ${this.balance} \n Select a choice: 2.) make a deposit 3.) make a withdrawal 4.) get account name 5.) exit`));
    if(input === 2){
      this.deposit();
    } else if(input === 3){
      this.withdrawal();
    } else if(input === 4){
      this.getAccountName();
    } else if(input === 5){
      this.exitAccount();
    } else {
      this.accountError();
    }
  },
  deposit() {
    let input = parseFloat(prompt(`Type amount to deposit. \n Minimum amount to deposit is 10kr`));
    isNumber = isNaN(input);
    if(input <= 9 || isNumber == true){
      this.accountError();
    } else {
      this.balance = this.balance + input;
      atm();
    }
  },
  withdrawal() {
    let input = parseFloat(prompt(`Type amount to withdraw. \n Minimum amount to withdraw is 10kr`));
    isNumber = isNaN(input);
    if(input <= 9 || isNumber == true || input > this.balance){
      this.accountError();
    } else {
      this.balance = (this.balance - input);
      atm();
    }
  },
  getAccountName() {
    let input = parseFloat(prompt(`Your account name: ${this.accountName} \n Select a choice: 1.) see balance 2.) make a deposit 3.) make a withdrawal 5.) exit`));
    if(input === 1){
      this.getBalance();
    } else if(input === 2){
      this.deposit();
    } else if(input === 3){
      this.withdrawal();
    } else if(input === 5){
      this.exitAccount();
    } else {
      this.accountError();
    }
  },
  accountError() {
    let input = parseFloat(prompt("Something went wrong! Choose 1, 2, 3, 4 or 5. \n Select a choice: 1.) see balance 2.) make a deposit 3.) make a withdrawal 4.) get account name 5.) exit"));
    if(input === 1){
      this.getBalance();
    } else if(input === 2){
      this.deposit();
    } else if(input === 3){
      this.withdrawal();
    } else if(input === 4){
      this.withdrawal();
    } else if(input === 5){
      this.exitAccount();
    } else {
      this.accountError();
    }
  },
  exitAccount() {
    return;
  },
}

atm();


//what I need
// balance - number, can not be negative    balance >= 0;
// getBalance : see balance (show balance) 

// x - number when choosing an action (1 - see balance, 2- make deposit, 3- make withdrawal, 4- get account name, 5- exit)

// deposit - amount, can not be negative or 0,    input >=1 (or minimum amount to deposit? like 10kr?), input has to be number!
  // action :  balance = balance + input

// withdrawal - amount, can not be negative or 0,   input >=1 (or minimum amount to withdraw? like 10kr?), input has to be number!
  // condition:   balance >= input 
  //action:   balance = balance - input;  

// getAccountName - show accountName (string)
// accountError - show error (string)

// exitAccount ???

