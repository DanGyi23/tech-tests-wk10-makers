function BankAccount() {
  this._history = []
  this._header = 'date || credit || debit || balance\n'
}

BankAccount.prototype.statement = function () {
return this._header + this.statementLineCreator();
}

BankAccount.prototype.withdraw = function (amount) {
  this._history.push(['debit', amount])
}

BankAccount.prototype.deposit = function (amount) {
  this._history.push(['credit', amount])
}

BankAccount.prototype.sort = function (type) {
  return this._history.filter(function (x) { return x.includes(type) });
}

BankAccount.prototype.statementLineCreator = function () {
  let statement_array = []
  let running_balance = 0
  this._history.forEach(function (x) {
    if (x.includes('credit')) {
      running_balance += x[1]
      statement_array.push(`21/10/2019 || ${x[1]}.00 || || ${running_balance}.00\n`)
    } else if (x.includes('debit')) {
      running_balance -= x[1]
      statement_array.push(`21/10/2019 || || ${x[1]}.00 || ${running_balance}.00\n`)
    }
  });

  return statement_array.join('')
}
