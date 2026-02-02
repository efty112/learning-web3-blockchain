# Tokens:

    • Bitcoin (BTC), Ethereum (ETH), Solana (SOL) --> Blockchains + Tokens (Coins)
    • USDT, USDC --> Tokens + Not Blockchains (Uses/relies on Other’s Blockchains. Like- uses Ethereum/Solana blockchains)

```
- A program is a special account that holds executable code and processes instructions on other accounts.
- The Token Program is a system program developed by Solana that defines the standard rules for creating and managing SPL tokens.
```

In case of **Ethereum**, USDT/USDC are smart-contracts.

In case of **Solana**, USDT/USDC are SPL tokens created by the Token Program using mint accounts.

Basically, the token program is created by the Solana engineers so that people can deploy their “Tokens/coins”. To deploy a token, you have to create a “**mint account**”.

```
----------------------
|Solana Token Program|
----------------------
|
|        ------------
|------- |Token Mint|---------|User1 ATA - (20 USDC)|
|        |  (USDC)  |---------|User2 ATA - (30 USDC)|
|        ------------
|
|        ------------
|------- |Token Mint|---------|User1 ATA - (20 DOGY)|
|        |  (DOGY)  |---------|User2 ATA - (40 USDC)|
|        ------------

```

### How blocks use the Token Program

#### When a transaction is included in a block:

- The transaction references the Token Program’s address
- The Solana runtime executes the Token Program
- The program reads/writes other accounts (mint, ATA, etc.)

**So:**
- The program is not copied
- It is not stored per block
- It is called, like a function


### What actually exists on Solana

#### Token Program:

- The Token Program is a single program account
- Deployed once on Solana
- Has a fixed public address (e.g. Tokenkeg...)
- Shared by all blocks, all transactions, all users

### How it’s done on ETH?

On Ethereum, there is nothing called Token Programs given by the Ethereum Engineers under which you can deploy your Token. There you have to create a **Smart Contract** for your Token yourself. But Ethereum has created a **Template (Smart Contract Template)** for Tokens named **ERC-20**.


-----------
#### What are getting stored in the “Mint Account”?
Data like- Mint Authority, Supply, Decimals, Freeze Authority etc.
That’s why, every mint account takes **“82 bytes”** of space.


**Token Mint/Mint Account:**

It’s like a bank that has the authority to create more coins. It can also have the authority to freeze coins.


**Associate Token Account (ATA):**

Before you can ask other people to send you a token, you need to create an associated token account for that token and your public key. Each wallet has one ATA per token mint.

----------------

#### Read More:
Solana Tokens: https://solana.com/docs/tokens
Program Derived Address (PDA): https://solana.com/docs/core/pda