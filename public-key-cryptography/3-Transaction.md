# How transactions work on the BlockChain?

## User side:
-       User first creates a public/private keypair.
-       They create a transaction that they want to do (send Rs 50 to Alice). The transaction includes all necessary details like the recipient's address, the amount and some blockchain specific parameters (for eg - latestBlockHash in case of solana)
-       They hash the transaction 
-       They sign the transaction using their private key
-       They send the raw transaction, signature and their public key to a node on the blockchain.

```
    User Has: Public Key, Private Key, Transaction

    Transaction --> (Hash) --> Hashed Value --> (Sign via Private Key) --> Signature

    Pass to Miner: Public Key, Transaction, Signature
```

## Miner Side:
-       Hashes the original message to generate a hash
-       Verifies the signature using the users public key and the hash generated in step 1
-       Transaction validation - The miner/validator checks additional aspects of the transaction, such as ensuring the user has sufficient funds
-       If everything checks out, adds the transaction to the block

```
Miner Has: Public Key, Transaction, Signature

Transaction --> (Hash) --> Hashed Val --> (Public Key) --> Signature2

Do the signatures match? [Signature = Signature2???] => Verification
```