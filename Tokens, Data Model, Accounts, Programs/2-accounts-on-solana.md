# Account On Solana:

On the **Solana blockchain**, an ***account*** is a fundamental data structure used to store various types of information.

Accounts are simply ***accounts*** that we create in a wallet (like- in phantom) on the blockchain.

Basically, our (normal) accounts contain Lamports (Sol coins). But these accounts also can hold (store) **data** and **executables/programs**.

#### An account can store-

    1. Lamports (Sol Coins) --> Normal Account
    2. Data --> Normal Account
    3. Executable Code --> Programs/Token Programs/Smart Contracts (in ETH).


## Programs:

On Solana, programs are special accounts that contain executable code. These accounts are distinct from regular data accounts in that they are designed to be executed by the blockchain when triggered by a transaction.

#### Examples:

***Token Program Account:***
https://explorer.solana.com/address/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

***Data and Lamports:***
https://explorer.solana.com/address/4GQsAP5jYi5ysGF1GEnWiV3zJHZLRcLWhLCSuim6aAkL



### Rent Exemption Amount:


If you want to store data in your account, or if you want to run executable code (it also requires data), you must have some Lamports (Sol Coins) in your account. There is a minimum amount of Lamports that your account must contain if you want to store some data in your account.


The amount varies in respect of the data size. This minimum amount is called “Rent Exemption Amount”. If you keep this amount in your account, only then you will be able to store data in your account. Otherwise, you can’t. This amount will not be deducted from your account. Whenever, you stop storing data and retrieve, you will be refunded.

**Rent:**

If the amount of Lamports is less than the required amount, it will be debited time to time as a Rent.


#### Read More:
Accounts: https://solana.com/docs/core/accounts
Transactions: https://solana.com/docs/core/transactions
Programs: https://solana.com/docs/core/programs
