class Account{
    constructor(number, holder, balance){
        this.accountNumber = number
        this.accountHolder = holder
        this.balance = balance
    }

    checkBalance(){
        return this.balance;
    }

    deposit(amount){
        if(amount > 0){
            let dipositBalance = this.balance + amount;
            console.log(`Diposit Amount: Rs.${amount}.
Total Balance: ${dipositBalance}`);
        }
        else{
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            let withdrawBalance = this.balance - amount;
            console.log(`Withdraw: Rs.${amount}. 
Total Balance: Rs.${withdrawBalance}.`)      
        }
        else if(amount > this.balance){
            console.log("Insufficient Balance.");
        }
        else {
            console.log("Invalid deposit amount.");
        }
    }
}

class ATM extends Account{
    constructor(number, holder, balance){
        super(number, holder, balance);
    }

    displayOptions(){
        console.log("Select your choice.")
        console.log("1. Chech Balance.");
        console.log("2. Deposit.");
        console.log("3. Withdraw.");
    }

    performOperation(operation, amount){
        switch(operation){
            case 1:
                console.log(`Your current balance is Rs.${this.balance}`)
                break;
            case 2:
                super.deposit(amount);
                break;
            case 3:
                super.withdraw(amount);
                break;
        }
    }
}

let Madhav = new ATM("1234567890", "Madhav Rathod", 10000)
console.log(Madhav);
console.log("=======================================")
Madhav.displayOptions();
console.log("=======================================")
Madhav.performOperation(1, 5000);
console.log("=======================================")
Madhav.performOperation(2, 5000);
console.log("=======================================")
Madhav.performOperation(3, 5000);
console.log("=======================================")
