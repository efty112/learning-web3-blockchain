## How to make a Token/Mint account?
#### (Using Command Line)

----------
#### Sources:
***Solana Program Library*** --> https://github.com/solana-labs/solana-program-library/tree/master

***Step by step create mint account and Token*** --> https://spl.solana.com/token


------------
#### **The way to create a token requires you to:**

    1. Create a token mint
    2. Create an associated token account for this mint and for a specific user
    3. Mint tokens to that user.


### Let's get started:

- Solana CLI Installation: https://solana.com/docs/intro/installation 
- Solana CLI Basics: https://solana.com/docs/intro/installation/solana-cli-basics

***Basic Setup:***
```
    1. Make Sure Solana CLI is installed in your system
    2. See the Configuration --> "solana config get"
    3. Set Configuration --> "solana config set --url <network>"

    1. Generate a Solana Wallet --> "solana-keygen new"
    2. Keypair Location --> "solana config get" --> Keypair Path
    3. See the public Key --> "solana keygen pubkey" or "solana address"
    4. See the Private Key --> "cat <keypair_location>"

(Now copy the Private Key from your local file --> Add a new Account into your Phantom Wallet using the Private Key)

    1. Turn on the "Solana Devnet" on your Phantom Wallet.
    2. Now set "Devnet" Configuration into your Local System.
    3. Airdrop yourself Some Solana --> "solana airdrop 1"
    4. Now check on Phantom Wallet (You can see 2 sol added into your Solana Wallet in Devnet Mode)
```

***Create Your Token (Token Mint):***
```
    1. Create a Token: "spl-token create-token"

(Here, you will find an Address. Copy the address and then go to Solana Explorer. Set the Network of the explorer to Devnet and Search with the Address. You will also find "Your Address" appearing as the "Mint Authority")

    2. See the Available Amount (Supply) of the Token: "spl-token supply <token_address>"

```

***Create A Token Account to hold a balance of the new Token:***
```
    1. Create a Token Account: "spl-token create-account <token_address>"

(Now, you can see that the Account is an Empty Account.)

    2. See the Balance: spl-token balance <token_address>
```

***Mint Token into the Associated Account:***
```
    1. Mint Tokens: "spl-token mint <token_address> <amount>"

(Now, you can see that the certain amount of token was minted into the Associated Account. And You can also check your local account on Phantom Wallet and can see the tokens.)

    2. View all Tokens that You own: "spl-token accounts"
```

#### Basic Overview:
```
(Owner Account:)
----------------------------------------------------------
|Solana Token Program| ---> |Token Mint (Token)| ---> |
                                                      |
                      (Associated Token Account) <--- |
----------------------------------------------------------

[Associated Token Account belongs to the Mint Authority (Owner) and using this ATA, owner will be transferring the Tokens to others.]
```

### Transferring tokens to another user:

Now, if you want to send some tokens to other accounts (original accounts), they may not have any “Associated Token Account”. So, first you have to create an “Associated Token Account” for them.

But the matter is, you don’t have to create them “ATA”s manually. You can just send them tokens using an wallet, and their “ATA”s will be created automatically. (But you have to pay some “Sols” as Rent for their accounts).

Once the ATA is created for your friend, every time you send some tokens to your that friend, you won’t have to pay “Sol” as rent. You only have to pay the transaction fee.

**Detail:** https://www.solana-program.com/docs/token#example-transferring-tokens-to-another-user



## Non-Fungible Token:

(Tokens with Zero Decimal Places, Only 1 in Amount and Future Minting is disabled are called Non-Fungible Tokens)

**Details:** https://www.solana-program.com/docs/token#example-create-a-non-fungible-token


***Original SPL Token Program:*** (For Original SPL Token Program, Metaplex is used to attatch additional data to the Tokens) --> https://developers.metaplex.com/smart-contracts/token-metadata

