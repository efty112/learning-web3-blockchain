// Creating HD Wallet for Solana:
// ------------------------------

// Libraries:
// -----------
// bip39 -> [https://www.npmjs.com/package/bip39]
// Solana -> [https://solana.com/developers/cookbook/wallets/generate-mnemonic]
// ed25519-hd-key -> [https://www.npmjs.com/package/ed25519-hd-key]
// Ethers -> [https://docs.ethers.org/v6/api/wallet/#Wallet-encrypt]


// Resources for the code:
// [https://solana.com/developers/cookbook/wallets/restore-from-mnemonic], [https://stackoverflow.com/questions/69248618/how-to-get-proper-public-address-from-mnemonic-phrase-for-solana]

import { Keypair } from "@solana/web3.js";
import bip39 from "bip39"
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58";
import {ethers, HDNodeWallet} from "ethers";

const mnemonic = bip39.generateMnemonic(); //=> Generates 12 words
// const mnemonic = bip39.generateMnemonic(256); //=> Generates 24 words
const seedPhrase = bip39.mnemonicToSeedSync(mnemonic).toString("hex")

console.log(mnemonic);
console.log(seedPhrase);

const numberOfKeyPairs = 4;

console.log("\nSolana Addresses:");
console.log("------------------\n");

for(let i=0; i<numberOfKeyPairs; i++){
    const path = `m/44'/501'/${i}'/0'`;
    const derivedSeed = derivePath(path, seedPhrase).key;
    const derivedSecret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const walletKeypair = Keypair.fromSecretKey(derivedSecret);

    const publicKey = walletKeypair.publicKey.toBase58();
    const privateKey = bs58.encode(walletKeypair.secretKey);

    console.log(publicKey, "->" ,privateKey);
}

console.log("\nEthereum Addresses:");
console.log("-------------------");

// const ethMnemonics = ethers.Mnemonic.fromPhrase(mnemonic);
// const ethSeed = ethMnemonics.computeSeed()

// console.log(ethMnemonics.phrase)
// console.log(ethSeed);

const ethHdWalletInstance = ethers.HDNodeWallet.fromPhrase(mnemonic, undefined, "m");
// console.log(ethHdWalletInstance)

for (let i=0; i<numberOfKeyPairs; i++){
    const path = `m/44'/60'/0'/0/${i}`;
    const wallet = ethHdWalletInstance.derivePath(path);

    console.log(wallet.path)
    console.log(wallet.address)
    console.log(wallet.privateKey)
}