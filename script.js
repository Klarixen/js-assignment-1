// create an account object

// the object should hold all of our logic

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).


const account = {
  name: "Klara",

  myName: function() {
  const accountName = prompt("What is your name?");
   this.name = accountName
   
  },

  getName: function () {
    alert(`The account holders name is ${this.name}`)
  },

  income: [],

  expenses: [],
  
  addIncome: function () {
  
    const myIncome = parseFloat(prompt("How much was your income?"));
   
    this.income.push(myIncome);
     },

  addExpenses: function () {
    // vad det var för nåt är sparat i type
    const type = prompt("What was your expense?");
    // hur mycket det kostade är sparat i amount
    const amount = parseFloat(prompt("How much was your expense?"));

    // sparar type och amount som ett objekt
    this.expenses.push({ type, amount });
    // [{type, amount}, {type, amount}, {type, amount}]
  },

  listExpense: function () {
    let expenseList = account.expenses;
    

    account.expenses.forEach(function (expenseList) {
      for (let i= 0; i <account.expenses.length; i++){

        expenseList = expenseList + account.expenses[i];
      }
      
      }),

      alert(`A list of your expenses: ${expenseList}`);
      

    },

    //^ Här visas listan i alert som [object Object],[object Object] osv. istället för det verkliga innehållet i listan.
    // Har provat massor av möjliga lösningar. Något har jag missat.
    //Kan inte lista ut varför.

  getSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;

    // loopar igenom expenses och lägger ihop varje elements amount
    this.expenses.forEach(function (expense) {
      // för att nå amount använder vi expense.amount så vi får rätt property
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function (income){
      totalIncome = totalIncome + income;
    })
  alert(`Your current balance is: ${(totalIncome - totalExpenses)} kronor. \n Income :${totalIncome} kronor. \n expense: ${totalExpenses} kronor.`);
    
  },


}

  

function menu() {
  const choice = parseFloat(
    prompt("Please choose between 1) Display account name 2) Add income 3) Add expense 4) View all your expenses 5) Account balance 6) type your name")
  );

 // parseFloat använder vi för att konvertera användarens input i form av en "string" till ett nummer, så att js förstår vilket val
 // användaren gör. Eftersom vi använder === så måste inputen konverteras för att matcha rätt val om jag förstått det hela rätt.

  if (choice === 1) {
    // do something
    // display the account name
    account.getName();
    menu();
    
  } else if (choice === 2) {
    account.addIncome();
    menu();
    
  } else if (choice === 3) {
    account.addExpenses();
    menu();
    
  } else if (choice === 4) {
    account.listExpense();
    menu();
    
} else if (choice === 5) {
  account.getSummary();
  menu ();
    
} else if (choice === 6){
  account.myName();
  menu();
} else {
  alert ("This is not a valid choice, please type a valid number in the menu selection!")
  menu();
}
}

menu();






// create a function called menu()

// the function menu() should only be responsible to show the different choices
// for the user.

// The menu() function should display the menu with different choices for the user
// depending on what the user selects from the menu you should call on the correct
// method or poperty from the account object. You can use a switch or if/else statement for your
// different menu choices. Please motivate you choice in a comment.


// CODE TO HELP YOU GET STARTED

// Here are some code snippets to help you get started. You need to place them at the correct
// place in your code but this is the logic for some parts of your assignment.

// if we want to take an input from the user in a quite nice way we can use the propmt() function
// the prompt will show a window to the user where we can add a message and it will also display
// an input field where the user can type something. In order to make this work a bit easier
// we need to wrap the propmt() in a function called parseFloat(). Why is that? You need to do some
// googling anf the put your answer in a comment in your code.
// the syntax you can use looks like this:
//const amount = parseFloat(prompt("How much was your expense?"));
// the answer that the user will put in the input box will get stored in the variable amount.

// HINT: you will need to use array methods in this assignment and there is one very basic one
// that is important. It is the method for adding something to an existing array, which one is that?

// In order to show all elements in an array we need to loop through it. In this assignment a
// forEach loop would be good to use. If you want to display the outcome of each element in the
// array on separate lines you can add:
("\n");
// for example:
//alert("This is a message " + "\n" + "with a new line");
// to your ouput. This will make the nes output on a new line.

// to make the menu look nice we should not console.log any output. Instead we shoul use either alert()
// or propmt()
// we use alert() when we just want to display something to the user, for example a message:
//alert("This is a message in an alert box!");
// we use the prompt() when we want to ask the user to do something cause the prompt()
// will display any message that we want and also display an input field where the user
// can type an input. Like this:
//const age = parseFloat(propmpt("How old are you?"));
// whatever the user types in the input field will be stored in the variable age.
