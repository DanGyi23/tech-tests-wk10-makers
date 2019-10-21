function BankAccount() {
  this._history = []
  this._header = 'date || credit || debit || balance\n'
}

BankAccount.prototype.statement = function () {
return this._header + this.statementLineCreator();
}

BankAccount.prototype.withdraw = function (amount) {
  this._history.push(['debit', amount, this.getDateToday()])
}

BankAccount.prototype.deposit = function (amount) {
  this._history.push(['credit', amount, this.getDateToday()])
}

BankAccount.prototype.statementLineCreator = function () {
  let statement_array = []
  let running_balance = 0
  
  this._history.forEach(function (x) {
    if (x.includes('credit')) {
      running_balance += x[1]
      statement_array.push(`${x[2]} || ${x[1]}.00 || || ${running_balance}.00\n`)
    } else if (x.includes('debit')) {
      running_balance -= x[1]
      statement_array.push(`${x[2]} || || ${x[1]}.00 || ${running_balance}.00\n`)
    }
  });

  return statement_array.join('')
}

BankAccount.prototype.getDateToday = function() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today
}
