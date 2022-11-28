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
const variableName = 10;
isNaN(variableName);

// this is the function atm(), I've created some start code for you
function atm(x) {
  const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here?
  // you can answer as a comment in your code, and yes you need to some research of your own
  if(x === 1){
    account.getBalance();
  } else if(x === 2){
    account.deposit();
  } else if(x === 3){
    account.withdrawal();
  } else if(x === 4){
    account.getAccountName();
  } else if(x === 5){
    account.exitAccount();
  } else {
    //error
  }
  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice
}

const account = {
  accountName: "Name of account: Helena Johansson ";
  balance: 100000;
  getBalance() {
    return this.balance; //or console log?
  }
  deposit() {}
  withdrawal() {}
  getAccountName() {
    return this.accountName;
  }
  accountError() {
    return "something went wrong"; //check this!!
  }
  exitAccount() {}
}


//what I need
// balance - number, can not be negative    balance >= 0;
// getBalance : see balance (show balance) 

// x - number when choosing an action (1 - see balance, 2- make deposit, 3- make withdrawal, 4- get account name, 5- exit)

// deposit - amount, can not be negative or 0,    input >=1 (or minimum amount to deposit? like 10kr?) 
  // action :  balance = balance + input

// withdrawal - amount, can not be negative or 0,   input >=1 (or minimum amount to withdraw? like 10kr?)
  // condition:   balance >= input 
  //action:   balance = balance - input;  

// getAccountName - show accountName (string)
// accountError - show error (string)

// exitAccount ???

