describe("Bank", function () {
  var account;
  var header = 'date || credit || debit || balance\n';

  beforeEach(function () {
    account = new BankAccount();
    spyOn(account, 'getDateToday').and.returnValues('21/10/2019', '21/10/2019', '21/10/2019')
  });

  beforeEach(function () {
  });

  describe("Initial Formatting", function () {
    beforeEach(function () {
      account.withdraw(10)
    });

    it("Performs ANY ACTION with ANY amount and the column headers are returned with a newline", function () {
      expect(account.statement()).toContain(header);
    });

    it("Performs ANY ACTION with ANY amount and the correct date is included in the string", function () {
      expect(account.statement()).toContain('21/10/2019')
    });

    it('Performs ANY ACTION with ANY amount and the correct date is included in the string WITH the column headers', function () {
      expect(account.statement()).toContain(`${header}21/10/2019`)
    });
  });

  describe("Simple Deposit, no balance", function () {
    it('Performs DEPOSIT with 1 and credit field is populated with 1.00', function () {
      account.deposit(1)
      expect(account.statement()).toContain(`${header}21/10/2019 || 1.00`)
    });

    it('Performs DEPOSIT with 1 and credit field is populated with 1.00, debit field empty', function () {
      account.deposit(1)
      expect(account.statement()).toContain(`${header}21/10/2019 || 1.00 || ||`)
    });

    it('Performs DEPOSIT with 15 and credit field is populated with 15.00, debit field empty', function () {
      account.deposit(15)
      expect(account.statement()).toContain(`${header}21/10/2019 || 15.00 || ||`)
    });
  });



  describe("Simple Withdrawal, no balance", function () {
    it('Performs WITHDRAWAL with 1 and debit field is populated with 1.00, credit field empty', function () {
      account.withdraw(1)
      expect(account.statement()).toContain(`${header}21/10/2019 || || 1.00 ||`)
    });

    it('Perform WITHDRAWAL with 10 and your debit field is populated with 10.00, credit field empty', function () {
      account.withdraw(10)
      expect(account.statement()).toContain(`${header}21/10/2019 || || 10.00 ||`)
    });
  });

  describe("Deposit/Withdrawal WITH Balance Update", function () {
    it('Performs DEPOSIT with 1 and credit field is populated with 1.00, debit field empty, BALANCE updated', function () {
      account.deposit(1)
      expect(account.statement()).toEqual(`${header}21/10/2019 || 1.00 || || 1.00\n`)
    });

    it('Performs WITHDRAWAL with 1 and debit field is populated with 1.00, credit field empty, BALANCE updated', function () {
      account.withdraw(1)
      expect(account.statement()).toEqual(`${header}21/10/2019 || || 1.00 || -1.00\n`)
    });

    it('Performs DEPOSIT with 10 and credit field is populated with 10.00, debit field empty, BALANCE updated', function () {
      account.deposit(10)
      expect(account.statement()).toEqual(`${header}21/10/2019 || 10.00 || || 10.00\n`)
    });

  });

  describe("Multiple DEPOSITS/WITHDRAWALS with Balance Update", function () {
    it('Can have concurrent DEPOSIT and WITHDRAWAL on 2 lines, balance updates (DEPOSIT 10, WITHDRAW 3)', function () {
      account.deposit(10)
      account.withdraw(3)
      expect(account.statement()).toEqual(`${header}21/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 3.00 || 7.00\n`)
    });

    it('Can have 3 concurrent DEPOSIT and WITHDRAWAL on 3 lines, balance updates (DEPOSIT 10, WITHDRAW 3, DEPOSIT 18)', function () {
      account.deposit(10)
      account.withdraw(3)
      account.deposit(18)
      expect(account.statement()).toEqual(`${header}21/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 3.00 || 7.00\n21/10/2019 || 18.00 || || 25.00\n`)
    });
  });

});

describe("Date changes", function () {
  var account;
  var header = 'date || credit || debit || balance\n';
  
  beforeEach(function () {
    account = new BankAccount();
    spyOn(account, 'getDateToday').and.returnValues('20/10/2019', '21/10/2019', '25/10/2019')
  });
  it('Date changes based on date of transaction. Deposits 10.00 on 20th October and Withdraws 4.00 on 21st October', function () {
    account.deposit(10)
    account.withdraw(4)
    expect(account.statement()).toEqual(`${header}20/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 4.00 || 6.00\n`)
  });
  it('Date changes based on date of transaction. Deposits 10.00 on 20th October, Withdraws 4.00 on 21st October, Deposits 1000.00 on 25th October', function () {
    account.deposit(10)
    account.withdraw(4)
    account.deposit(1000)
    expect(account.statement()).toEqual(`${header}20/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 4.00 || 6.00\n25/10/2019 || 1000.00 || || 1006.00\n`)
  });

});
