/*
Encryption: [Key Dependent and Reversable]
------------------------------------------

"2" Types of Encryption:
-------------------------
    1. Symmetric Encryption
    [Same key for both encryption and decryption]

    [Encryption]
    Plain Text --> (KEY) --> Unreadable Text (CipherText)

    [Decryption]
    Cipher Text --> (KEY) --> Plain Text


    2. Asymmetric Encryption
    [Different keys are used for encryption (public key / private key) and decryption (private key / public key). => {Used in blockchain} => The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.]

    [Encryption]
    Plain Text --> (Private KEY) --> Unreadable Text (CipherText)

    [Decryption]
    Cipher Text --> (Public KEY) --> Plain Text

    [Encrypt via Public Key, Decrypt via Private Key]
    [Encrypt via Private Key, Decrypt via Public Key]


If you want to ensure not just the message but also where it came from:

"Hello" --> (p1 Private Key) --> "asdasd"

"asdasd" --> (p2 Public Key) --> "popopo"
"popopo" --> (p2 Private Key) --> "asdasd"

"asdasd" --> (p1 Public Key) --> "Hello"
*/

// Symmetric Encryption: [https://nodejs.org/api/crypto.html#class-cipheriv] [https://www.w3schools.com/nodejs/nodejs_crypto.asp]
import crypto from "crypto";

const algorithmName = 'aes-256-cbc';
const key = crypto.scryptSync('secretPassword', 'salt', 32);
const iv = crypto.randomBytes(16);

function encryptData(message){
    const cipher = crypto.createCipheriv(algorithmName, key, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
}

function decryptData(encryptedText){
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));

    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

const message = 'Hello Secrets';
const encryptedData = encryptData(message);
console.log(encryptedData);

const decryptedData = decryptData(encryptedData);
console.log(decryptedData);

/*
[From a private key, you can always derive a public key. From a Public key, you can never derive a private key.]

Common Asymmetric Encryption Algorithms:
    1. RSA - Rivest–Shamir–Adleman

    2. ECC - Elliptic Curve Cryptography (ECDSA) - ETH and BTC uses
    --> Uses "secp256k1" elliptic Curve
    --> Library: @noble/secp256k1 | ethers

    3. EdDSA - Edwards-curve Digital Signature Algorithm – SOL uses
    --> Uses "ed25519" elliptic Curve.
    --> Library: @noble/ed25519 | @solana/web3.js
*/

// Creating Public-Private Keypair using @noble/ed25519: [https://www.npmjs.com/package/@noble/ed25519]
import * as ed from '@noble/ed25519';

(async () => {
    const secretKey = ed.utils.randomSecretKey();
    const publicKey = await ed.getPublicKeyAsync(secretKey);
    const message = new TextEncoder().encode('hello noble');
    const signature = await ed.signAsync(message, secretKey);
    const isValid = await ed.verifyAsync(signature, message, publicKey);

    console.log(isValid);
})();


// Creating Public-Private Keypair using @solana/web3js: [https://solana.com/developers/cookbook/wallets/create-keypair]
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import nacl from "tweetnacl";

const keypair = Keypair.generate();
console.log("Public Key:", keypair.publicKey.toString())
console.log("Private Key:", bs58.encode(keypair.secretKey))

const messageBytes = new TextEncoder().encode("Hello Solana/Web3");
const signature = nacl.sign.detached(messageBytes, keypair.secretKey);
const result = nacl.sign.detached.verify(
  messageBytes,
  signature,
  keypair.publicKey.toBytes()
);

console.log(result);