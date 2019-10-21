describe("Bank", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("Perform ANY ACTION with ANY amount and the column headers are returned with a newline", function() {
    account.withdraw(10);
    expect(account.statement()).toContain('date || credit || debit || balance\n');
  });

  it("Perform ANY ACTION with ANY amount and the correct date is included in the string", function() {
    account.withdraw(10)
    expect(account.statement()).toContain('21/10/2019')
  });

  it('Perform ANY ACTION with ANY amount and the correct date is included in the string WITH the column headers', function(){
    account.withdraw(5)
    expect(account.statement()).toEqual('date || credit || debit || balance\n21/10/2019')
  });

  
});
