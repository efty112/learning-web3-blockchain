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
import {ethers, HDNodeWallet, Wallet} from "ethers";

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

console.log("\nEthereum Addresses (Way-1):");
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

    // console.log(wallet.path)
    console.log(wallet.address, "->", wallet.privateKey);
}

console.log("\nEthereum Addresses (Way-2):");
console.log("-------------------");

const seed = bip39.mnemonicToSeedSync(mnemonic);

for (let i=0; i<numberOfKeyPairs; i++){
    const path = `m/44'/60'/${i}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    console.log(wallet.address, "->", wallet.privateKey);   
}

/**
 * ----- NOTE: ------
 * ------------------
 * path = `m/44'/60'/0'/0/${i}` --> Standard
 * path = `m/44'/60'/${i}'/0'`
 * 
 * Both are correct paths for Ethereum. But they don't generate the same set of addresses.
 * While m/44'/60'/0'/0/0 is the prevailing standard, you may encounter slight variations depending on when and which wallet you used to create your address.
 * 
 * Legacy/Older Wallets: Some older wallets, such as early versions of MyEtherWallet and MyCrypto, used a slightly shorter path, omitting the last 0: m/44'/60'/0'/0. When using a custom path tool, you might need to use this format to find older addresses.
 * 
 * Hardware Wallets: Ledger Live typically uses the standard m/44'/60'/0'/0/0 and increments the account index (e.g., m/44'/60'/1'/0/0) for additional accounts.
 * 
 * Trezor and MetaMask use the standard path and typically increment the address index (e.g., m/44'/60'/0'/0/1) if multiple addresses are generated within a single account.
 */