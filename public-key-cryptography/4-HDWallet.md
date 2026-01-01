
# HD Wallet (Hierarchical Deterministic Wallet)

Hierarchical Deterministic (HD) wallets are a type of wallet that can generate a tree of key pairs from a single seed. 

This allows for the generation of multiple addresses from a single root seed, providing both security and convenience.

|Single Seed| m/44'/60'/0'| m/44'/60'/1'| m/44'/60'/2'|
|-----------|-------------|-------------|-------------|
|           | Keypair 1   | Keypair 2   |  Keypair 3  |

#### m/44'/60'/0', m/44'/60'/1', m/44'/60'/2' are called Derivation Paths.

Here:
```
Seed Phrase --> (m/44'/60'/0') --> Keypair1
Seed Phrase --> (m/44'/60'/1') --> Keypair2
Seed Phrase --> (m/44'/60'/3') --> Keypair3
```
Here, you can create multiple wallets and each wallet has a unique public key and a private key. To remember/store these public and private keys are inconvenient.

So, to make it convenient, “seed phrase” was invented. And these types of wallets are called “HD Wallets”.



# How to Create a Wallet? :

### Mnemonic:
Mnemonic phrases are human-readable string of words used to generate a cryptographic seed (Seed Phrase).

BIP-39 (Bitcoin Improvement Proposal 39) defines how mnemonic phrases are generated and converted into a seed.

```
Mnemonic Phrases `(12 Words/24 Words)` --> Single Seed Phrase

When you first create a Wallet, you are given with a group of Mnemonics.
From these Mnemonics, you can always recover your Wallet Addresses.
```
#### 🔗 Ref - https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt

#### 🔗 How is it done in Backpack - https://github.com/coral-xyz/backpack/blob/master/packages/app-extension/src/components/common/Account/MnemonicInput.tsx#L143


### Create Public Private Keypair:
```
Mnemonic Phrases --> Single Seed Phrase --> (Derivation Path) --> Derived Seed --> Derived Secret --> Private (Secret) Key --> Public Key
```

### Derivation Paths:
Format of Derivation Paths:
```m/purpose′/coin_type′/account′/change/address_index.```

-   **m** -> represents the master key (root of the hierarchy).
-   **purpose′** : It's is a constant that defines the wallet’s purpose. [**44'** for Legacy Bitcoin (BIP44) -> Standard For HD Wallets].
-   **coin_type′** : differentiates between blockchains --> for example, **0' is Bitcoin, 60' is Ethereum, and 501' is Solana.**
-   **account′** : Specifies the Acoount Number. [0' for the first Account]
-   **change** : change indicates whether the address is external [Receiving Address] (0) or internal [Change Address] (1). [Either 0 or 1]
-   **address_index** : address_index is the index number of the specific address within an account, also starting at 0.

**External Address VS Internal Address:**
```
1. External Addresses (change = 0)
The External Chain is used for addresses that are meant to be visible to the outside world.

Purpose: These are your "Receiving Addresses." When you click "Receive" in your wallet to get paid by someone else, the wallet generates an address from this chain.

Visibility: Since you share these with others, they are considered "public-facing."

Derivation Example: m/44'/0'/0'/0/0 (The first receiving address of the first account).



2. Internal Addresses (change = 1)
The Internal Chain is used for addresses that are meant to stay hidden within your wallet’s logic.

Purpose: These are almost exclusively used as Change Addresses.

How it works: Because of how blockchains like Bitcoin work (UTXO model), if you have 1.0 BTC and want to send 0.2 BTC to a friend, you must actually spend the entire 1.0 BTC. The transaction sends 0.2 BTC to your friend and the remaining 0.8 BTC back to yourself. Your wallet sends that 0.8 BTC to an "Internal" address so it doesn't clutter your list of receiving addresses.

Visibility: These are not meant to be shared. They help keep your transaction history organized and slightly more private.

Derivation Example: m/44'/0'/0'/1/0 (The first change address of the first account).
```

**Examples:**
```
-   Bitcoin Addresses:
m/44'/0'/0' => 1st Wallet on Bitcoin.
m/44'/0'/1' => 2nd Wallet on Bitcoin.
m/44'/0'/2' => 3rd Wallet on Bitcoin.


-   Solana Addresses:
m/44'/501'/0' => 1st Wallet on Solana.
m/44'/501'/1' => 2nd Wallet on Solana.
m/44'/501'/2' => 3rd Wallet on Solana.

-   Ethereum Addresses:
m/44'/60'/0' => 1st Wallet on Ethereum.
m/44'/60'/1' => 2nd Wallet on Ethereum.
m/44'/60'/2' => 3rd Wallet on Ethereum.
```