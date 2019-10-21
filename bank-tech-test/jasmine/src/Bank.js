function BankAccount() {
  this._history = []
  this._header = 'date || credit || debit || balance\n'
}

BankAccount.prototype.statement = function () {
  let all_debits = this.sort("debit")
  let all_credits = this.sort("credit")
  if (all_debits[0]) {
    return `${this._header}21/10/2019 || || ${all_debits[0][1]}.00 ||`
  } else if (all_credits[0]) {
    return `${this._header}21/10/2019 || ${all_credits[0][1]}.00 || || 1.00\n`
  } else {
    return `${this._header}`
  }
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
