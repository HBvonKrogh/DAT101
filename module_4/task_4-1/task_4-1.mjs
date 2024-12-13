"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Create a constant object to hold account types with these properties:
Normal: "Brukskonto"
Savings: "Sparekonto"
Credit: "Kredittkonto"
Pension: "Pensjonskonto"
Print all these types on a single comma-separated line
*/
const accountTypes = {
  Normal: "Brukskonto",
  Savings: "Sparekonto",
  Credit: "Kredittkonto",
  Pension: "Pensjonskonto",
};
printOut(Object.values(accountTypes).join(", "));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Create a bank account class with this structure:
Private type
Public toString()
Public setType(aType)

Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".
*/
class TAccount {
  #type;
  constructor(aType) {
    this.#type = aType;
  }
  toString() {
    return this.#type;
  }
  setType(aType) {
    this.#type = aType;
    printOut(`Account type changed to: ${this.#type}`);
  }
}

const myAccount = new TAccount("Normal");
printOut(myAccount.toString());
myAccount.setType("Savings");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Expand the account class to this structure:
Private type
Private balance
Public toString()
Public setType(aType)
Public deposit(aAmount)
Public withdraw(aAmount)
"getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.
*/
class TAccount2 {
  #type;
  #balance;
  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
  }
  toString() {
    return this.#type;
  }
  setType(aType) {
    this.#type = aType;
    printOut(`Account type changed to: ${this.#type}`);
  }
  deposit(aAmount) {
    this.#balance += aAmount;
    printOut(`Deposited: ${aAmount}, New balance: ${this.#balance}`);
  }
  withdraw(aAmount) {
    this.#balance -= aAmount;
    printOut(`Withdrawn: ${aAmount}, New balance: ${this.#balance}`);
  }
  getBalance() {
    return this.#balance;
  }
}

const myAccount2 = new TAccount2("Normal");
printOut(myAccount2.toString());
myAccount2.setType("Savings");
myAccount2.deposit(1000);
myAccount2.withdraw(500);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Expand the account with a private counter that counts the number of withdrawals like this:
Private type
Private balance
Private withdrawalCount
Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)
Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.
*/
class Account {
  #type;
  #balance;
  #withdrawalCount;

  constructor() {
    this.#type = "Saving";
    this.#balance = 100;
    this.#withdrawalCount = 0;
  }

  toString() {
    return `Type: ${this.#type}, Balance: ${this.#balance}, Withdrawals: ${this.#withdrawalCount}`;
  }

  setType(aType) {
    this.#type = aType;
    this.#withdrawalCount = 0;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    this.#withdrawalCount = 0;
  }

  withdraw(aAmount) {
    switch (this.#type) {
      case "Saving":
        if (this.#withdrawalCount < 3) {
          this.#balance -= aAmount;
          this.#withdrawalCount++;
        } else {
          printOut("Withdrawal limit reached for Saving account.");
        }
        break;
      case "Pension":
        printOut("Withdrawals are not allowed for Pension account.");
        break;
      default:
        printOut("Invalid account type.");
    }
  }
}

const account = new Account();
printOut(account.toString());

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
to switch to a new currency of the same type as the account already has, the method should do nothing
and just return
*/
const CurrencyTypes = {
  NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.1, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.11, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.081, name: "Pound sterling", denomination: "£" },
  INR: { value: 8.51, name: "Indiske rupi", denomination: "₹" },
  AUD: { value: 0.15, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.18, name: "Filippinske peso", denomination: "₱" },
  CAD: { value: 0.14, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.328, name: "Thai baht", denomination: "฿" },
};

class TACcount {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = CurrencyTypes.NOK;

  constructor(type) {
    this.#type = type;
  }

  toString() {
    return `Type: ${this.#type}, Balance: ${this.#balance}${this.#currencyType.denomination}`;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
    printOut(`Deposit of ${amount}${this.#currencyType.denomination}, new balance is ${this.#balance}${this.#currencyType.denomination}`);
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      this.#withdrawCount++;
    } else {
      printOut("Insufficient balance");
    }
  }

  setCurrencyType(newType) {
    if (this.#currencyType === newType) {
      return;
    }
    this.#currencyType = newType;
  }
}

const accountTask5 = new TACcount("e");
account.deposit(150);

printOut(accountTask5.toString());

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals
A method to convert between currencies, private member!
function currencyConvert(aType){
return CurrencyTypes.NOK.value / currencyType.value * aType.value;
}
Change the currency a few times and try to get the output to look like this:
The account currency has changed from Norske Kroner to Svenske Kroner
New balance is 153.87kr
The account currency has changed from Svenske Kroner to United States dollar
New balance is $16.40
The account currency has changed from United States dollar to Norske Kroner
New balance is 150.00kr
*/
const NewCurrencyTypes = {
  NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
  SEK: { value: 0.98, name: "Svenske kroner", denomination: "kr" },
  USD: { value: 0.11, name: "United States dollar", denomination: "$" },
};

class NewAccount {
  #type;
  #balance;
  #withdrawalCount;
  #currencyType;

  constructor() {
    this.#type = "Saving";
    this.#balance = 100;
    this.#withdrawalCount = 0;
    this.#currencyType = NewCurrencyTypes.NOK;
  }

  toString() {
    return `Type: ${this.#type}, Balance: ${this.#balance.toFixed(2)}${this.#currencyType.denomination}, Withdrawals: ${this.#withdrawalCount}`;
  }

  setType(aType) {
    this.#type = aType;
    this.#withdrawalCount = 0;
  }

  getBalance() {
    return this.#balance.toFixed(2);
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    this.#withdrawalCount = 0;
  }

  withdraw(aAmount) {
    switch (this.#type) {
      case "Saving":
        if (this.#withdrawalCount < 3) {
          this.#balance -= aAmount;
          this.#withdrawalCount++;
        } else {
          printOut("Withdrawal limit reached for Saving account.");
        }
        break;
      case "Pension":
        printOut("Withdrawals are not allowed for Pension account.");
        break;
      default:
        printOut("Invalid account type.");
    }
  }

  #currencyConvert(newCurrencyType) {
    return (this.#balance / this.#currencyType.value) * newCurrencyType.value;
  }

  setCurrencyType(newCurrencyType) {
    if (this.#currencyType === newCurrencyType) {
      return;
    }
    const oldCurrencyName = this.#currencyType.name;
    this.#balance = this.#currencyConvert(newCurrencyType);
    this.#currencyType = newCurrencyType;
    printOut(`The account currency has changed from ${oldCurrencyName} to ${newCurrencyType.name}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${newCurrencyType.denomination}`);
  }
}

const newAccount = new NewAccount();
newAccount.setCurrencyType(NewCurrencyTypes.SEK);
newAccount.setCurrencyType(NewCurrencyTypes.USD);
newAccount.setCurrencyType(NewCurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.
Private type
Private balance = 0
Private withdrawalCount
Private currencyType = NOK

Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount, aType)
Public withdraw(aAmount, aType)
Public setCurrencyType(aType)

Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.
Try to print something like this:
Deposit of 12.00 United States dollar, new balance is 259.94kr
Withdrawal of 10.00 Pound sterling, new balance is 141.88kr
The account currency has changed from Norske Kroner to Canadian dollar
New balance is 20.36C$
The account currency has changed from Canadian dollar to Indian rupee
New balance is 1111.06₹
Withdrawal of 150.11 Svenske kroner, new balance is 0.00₹
*/
const DifferentCurrencyTypes = {
    NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
    SEK: { value: 0.98, name: "Svenske kroner", denomination: "kr" },
    USD: { value: 0.11, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.081, name: "Pound sterling", denomination: "£" },
    CAD: { value: 0.14, name: "Canadian dollar", denomination: "C$" },
    INR: { value: 8.51, name: "Indian rupee", denomination: "₹" },
  };
  
  class DifferentAccount {
    #type = "Saving";
    #balance = 0;
    #withdrawalCount = 0;
    #currencyType = DifferentCurrencyTypes.NOK;
  
    #currencyConvert(amount, fromCurrency, toCurrency) {
      return (amount / fromCurrency.value) * toCurrency.value;
    }
  
    deposit(aAmount, aType = DifferentCurrencyTypes.NOK) {
      const convertedAmount = this.#currencyConvert(aAmount, aType, this.#currencyType);
      this.#balance += convertedAmount;
      this.#withdrawalCount = 0;
      printOut(`Deposit of ${aAmount.toFixed(2)} ${aType.name}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`);
    }
  
    withdraw(aAmount, aType = DifferentCurrencyTypes.NOK) {
      const convertedAmount = this.#currencyConvert(aAmount, aType, this.#currencyType);
      if (this.#type === "Saving" && this.#withdrawalCount < 3) {
        if (this.#balance >= convertedAmount) {
          this.#balance -= convertedAmount;
          this.#withdrawalCount++;
          printOut(`Withdrawal of ${aAmount.toFixed(2)} ${aType.name}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`);
        } else {
          printOut("Insufficient funds for this withdrawal.");
        }
      } else if (this.#type === "Pension") {
        printOut("Withdrawals are not allowed for Pension account.");
      } else {
        printOut("Invalid account type or withdrawal limit reached.");
      }
    }
  
    setCurrencyType(newCurrencyType) {
      if (this.#currencyType !== newCurrencyType) {
        const oldCurrencyName = this.#currencyType.name;
        this.#balance = this.#currencyConvert(this.#balance, this.#currencyType, newCurrencyType);
        this.#currencyType = newCurrencyType;
        printOut(`The account currency has changed from ${oldCurrencyName} to ${newCurrencyType.name}`);
        printOut(`New balance is ${this.#balance.toFixed(2)}${newCurrencyType.denomination}`);
      }
    }
  }
  
  const differentAccount = new DifferentAccount();
  differentAccount.deposit(12, DifferentCurrencyTypes.USD);
  differentAccount.withdraw(10, DifferentCurrencyTypes.GBP);
  differentAccount.setCurrencyType(DifferentCurrencyTypes.CAD);
  differentAccount.setCurrencyType(DifferentCurrencyTypes.INR);

printOut(newLine);
