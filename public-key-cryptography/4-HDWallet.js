// Creating HD Wallet for Solana:
// ------------------------------

// Libraries:
// -----------
// bip39 -> [https://www.npmjs.com/package/bip39]
// Solana -> [https://solana.com/developers/cookbook/wallets/generate-mnemonic]
// ed25519-hd-key -> [https://www.npmjs.com/package/ed25519-hd-key]

// Resources for the code:
// [https://solana.com/developers/cookbook/wallets/restore-from-mnemonic], [https://stackoverflow.com/questions/69248618/how-to-get-proper-public-address-from-mnemonic-phrase-for-solana]
import { Keypair } from "@solana/web3.js";
import bip39 from "bip39"
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58";

const mnemonic = bip39.generateMnemonic(); //=> Generates 12 words
// const mnemonic = bip39.generateMnemonic(256); //=> Generates 24 words
const seedPhrase = bip39.mnemonicToSeedSync(mnemonic).toString("hex")

const numberOfKeyPairs = 4;
for(let i=0; i<numberOfKeyPairs; i++){
    const path = `m/44'/501'/${i}'/0'`;
    const derivedSeed = derivePath(path, seedPhrase).key;
    const derivedSecret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const walletKeypair = Keypair.fromSecretKey(derivedSecret);

    const publicKey = walletKeypair.publicKey.toBase58();
    const privateKey = bs58.encode(walletKeypair.secretKey);

    console.log(publicKey, privateKey);
}