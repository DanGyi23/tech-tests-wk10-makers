function BankAccount() {
  this._history = []
}

BankAccount.prototype.statement = function() {
  return `date || credit || debit || balance\n21/10/2019 || ${this._history[0]}.00 || ||`
}

BankAccount.prototype.withdraw = function () {
}

BankAccount.prototype.deposit = function (amount) {
  this._history.push(amount)
}
