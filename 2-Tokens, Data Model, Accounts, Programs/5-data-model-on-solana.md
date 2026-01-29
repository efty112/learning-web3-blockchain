## Data Model on Solana:

**Read About Accounts:** https://solana.com/docs/core/accounts

**Read About Programs:** https://solana.com/docs/core/programs

**Read About Tokens:** https://solana.com/docs/tokens 

**Solana Token Program and Client (Github):** https://github.com/solana-program/token


### Token Program:

**Example Account:** https://explorer.solana.com/address/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

It’s the central Account where the code is executed. **[Executable: Yes]**

To Store **each dataset** in solana, you have to create an **individual account**. And each account stays connected to the ‘**central account**’. Each account contains all the functionalities of an account (like- having lamports, data etc.)

When you created an associated token account, you actually created a **PDA (Program Derived Address)**.


```
-----------------
|Central Account|             ----------
|Executable: Yes|-------------|Account 1|
|(Token Program)|             |  User-1 |
-----------------             ----------
    |
    |                         -------------
    |-------------------------| Account2   |
    |                         |User-1 Todos|
    |                         -------------
    |
    |                         -------------
    |-------------------------| Account3  |
    |                         |  User-2   |
    |                         -------------
    |
    |                         -------------
    |-------------------------| Account4   |
    |                         |User-2 Todos|
    |                         -------------
```