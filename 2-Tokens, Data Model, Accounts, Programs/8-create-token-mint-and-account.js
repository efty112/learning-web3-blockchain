const { createMint, TOKEN_PROGRAM_ID, getMint, getOrCreateAssociatedTokenAccount, getAccount, mintTo } = require("@solana/spl-token");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const fs = require("fs");

// Getting the "FeePayer" account from the File System:
const feePayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync("/home/efty-ahmed/.config/solana/id.json", "utf-8"))));

// Creating a Connection to the "Devnet":
const connection = new Connection(clusterApiUrl('devnet'), "confirmed");

// Creating a "Token Mint":
async function createTokenMint(payer, mintAuthority, freezeAuthority, decimals) {

    const mint = await createMint(
        connection,    //Connection
        payer,      //Payer
        mintAuthority, //MintAuthority
        freezeAuthority, //FreezeAuthority
        decimals     //Decimals
    )

    return mint;
}

// Getting Mint Information (like- supply etc.):
async function getTokenMintInfo(tokenMint) {
    const mintInfo = await getMint(
        connection,
        tokenMint
    )

    return mintInfo;
}

// Creating Token Account to hold the Balance:
async function createTokenAccount(payer, mint) {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        payer.publicKey
    )

    return tokenAccount;
}

// Getting Token Account Information:
async function getTokenAccountInfo(tokenAccountAddress) {
    const tokenAccountInfo = await getAccount(
        connection,
        tokenAccountAddress
    )
    return tokenAccountInfo;
}

// Minting New Tokens:
async function mintNewTokens(payer, mint, tokenAccountAddress, mintAmount) {
    const mintTokens = await mintTo(
        connection,
        payer,
        mint,
        tokenAccountAddress,
        payer,
        mintAmount
    )
    return mintTokens;
}

async function main() {
    const tokenMint = await createTokenMint(feePayer, feePayer.publicKey, feePayer.publicKey, 9);
    console.log("Mint Created At:", tokenMint.toBase58())

    const tokenAccount = await createTokenAccount(feePayer, tokenMint)
    console.log("Token Account for the Mint:", tokenAccount.address.toBase58());

    const mintTokens = await mintNewTokens(feePayer, tokenMint ,tokenAccount.address, 100*1000000000);
    console.log("Tokens Minted", mintTokens);

    const mintInfo = await getTokenMintInfo(tokenMint);
    console.log("Mint Details", mintInfo);


    const tokenAccountInfo = await getTokenAccountInfo(tokenAccount.address);
    console.log("Token Account Details:", tokenAccountInfo);

}

main();