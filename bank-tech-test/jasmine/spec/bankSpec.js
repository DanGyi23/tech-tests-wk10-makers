describe("Bank", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("Performs ANY ACTION with ANY amount and the column headers are returned with a newline", function() {
    expect(account.statement()).toContain('date || credit || debit || balance\n');
  });

  it("Performs ANY ACTION with ANY amount and the correct date is included in the string", function() {
    account.withdraw(10)
    expect(account.statement()).toContain('21/10/2019')
  });

  it('Performs ANY ACTION with ANY amount and the correct date is included in the string WITH the column headers', function(){
    account.withdraw(5)
    expect(account.statement()).toContain('date || credit || debit || balance\n21/10/2019')
  });

  it('Performs DEPOSIT with 1 and credit field is populated with 1.00', function() {
    account.deposit(1)
    expect(account.statement()).toContain('date || credit || debit || balance\n21/10/2019 || 1.00')
  });

  it('Performs DEPOSIT with 1 and credit field is populated with 1.00, debit field empty', function() {
    account.deposit(1)
    expect(account.statement()).toEqual('date || credit || debit || balance\n21/10/2019 || 1.00 || ||')
  });

  it('Performs DEPOSIT with 15 and credit field is populated with 15.00, debit field empty', function () {
    account.deposit(15)
    expect(account.statement()).toEqual('date || credit || debit || balance\n21/10/2019 || 15.00 || ||')
  });

  it('Performs WITHDRAWAL with 1 and debit field is populated with 1.00, credit field empty', function() {
    account.withdraw(1)
    expect(account.statement()).toEqual('date || credit || debit || balance\n21/10/2019 || || 1.00 ||')
  });

  it('Perform WITHDRAWAL with 10 and your debit field is populated with 10.00, credit field empty', function() {
    account.withdraw(10)
    expect(account.statement()).toEqual('date || credit || debit || balance\n21/10/2019 || || 10.00 ||')
  });
});
