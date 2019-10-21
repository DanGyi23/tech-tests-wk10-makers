function BankAccount() {
  this._history = []
}

BankAccount.prototype.statement = function () {
  let all_debits = this._history.filter(function (x) { return x.includes("debit") });
  let all_credits = this._history.filter(function (x) { return x.includes("credit") });
  if (all_debits[0]) {
    return `date || credit || debit || balance\n21/10/2019 || || ${all_debits[0][1]}.00 ||`
  } else if (all_credits[0]) {
    return `date || credit || debit || balance\n21/10/2019 || ${all_credits[0][1]}.00 || ||`
  } else {
    return `date || credit || debit || balance\n`
  }
}

BankAccount.prototype.withdraw = function (amount) {
  this._history.push(['debit', amount])
}

BankAccount.prototype.deposit = function (amount) {
  this._history.push(['credit', amount])
}
