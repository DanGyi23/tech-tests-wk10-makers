# Bank Withdrawal

#### Considerations

- Can run using IRB/JS console, can just store in local memory, no database reqd.
- Takes action, deposit or withdrawal.
- Takes amount (Integer or float 2dp)
- Records date action performed in dd/mm/yyyy format

#### Acceptance Criteria 

Given a client makes a deposit of 1000 on 10-01-2012  
And a deposit of 2000 on 13-01-2012  
And a withdrawal of 500 on 14-01-2012  
When she prints her bank statement  
Then she would see:  

date || credit || debit || balance  
14/01/2012 || || 500.00 || 2500.00  
13/01/2012 || 2000.00 || || 3000.00  
10/01/2012 || 1000.00 || || 1000.00  

#### Suggested Testing

- Need to create new blank instance of a 'bank account' each time, so that the randomized order of the testing doesn't have an effect on the balances

1) Perform ANY ACTION with ANY amount and the column headers are returned with a newline
  - 'date || credit || debit || balance\n'
2) Perform ANY ACTION with ANY amount and the correct date is included in the string
  - '21/10/2019'
3) Perform ANY ACTION with ANY amount and the correct date is included in the string WITH the column headers
  - 'date || credit || debit || balance\n21/10/2019'
4) Perform DEPOSIT with 1 and your credit field is populated with 1.00
  - 'date || credit || debit || balance\n21/10/2019 || 1.00'
5) Perform DEPOSIT with 1 and your credit field is populated with 1.00, debit field empty
  - 'date || credit || debit || balance\n21/10/2019 || 1.00 || ||'
6) Perform DEPOSIT with 15 and your credit field is populated with 15.00, debit field empty
  - 'date || credit || debit || balance\n21/10/2019 || 15.00 || ||'
7) Perform WITHDRAWAL with 1 and your debit field is populated with 1.00, credit field empty
  - 'date || credit || debit || balance\n21/10/2019 || || 1.00 ||'
8) Perform WITHDRAWAL with 10 and your debit field is populated with 10.00, credit field empty
  - 'date || credit || debit || balance\n21/10/2019 || || 10.00 ||'
9) Perform DEPOSIT with 1 and your credit field is populated with 1.00, debit field empty, BALANCE updated
  - 'date || credit || debit || balance\n21/10/2019 || 1.00 || || 1.00'
10) Perform WITHDRAWAL with 1 and your debit field is populated with 1.00, credit field empty, BALANCE updated
  - 'date || credit || debit || balance\n21/10/2019 || || 1.00 || -1.00'
11) Adds newline char after each balance (Perform WITHDRAWAL of 1)
  - 'date || credit || debit || balance\n21/10/2019 || || 1.00 || -1.00\n'
12) Can have concurrent DEPOSIT and WITHDRAWAL on 2 lines, balance updates (DEPOSIT 10, WITHDRAW 3)
  - 'date || credit || debit || balance\n21/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 3.00 || 7.00\n'
13) Can have 3 concurrent DEPOSIT and WITHDRAWAL on 3 lines, balance updates (DEPOSIT 10, WITHDRAW 3, DEPOSIT 18)
  - 'date || credit || debit || balance\n21/10/2019 || 10.00 || || 10.00\n21/10/2019 || || 3.00 || 7.00\n21/10/2019 || 18.00 || || 25.00\n'
