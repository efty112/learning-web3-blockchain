const { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL, PublicKey } = require("@solana/web3.js");
const fs = require("fs");

const connection = new Connection(clusterApiUrl('devnet'), "confirmed")

const feePayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync("/home/efty-ahmed/.config/solana/id.json", "utf-8"))));

async function airdropSolana(publicKey, amount) {
    const airdropSignature = await connection.requestAirdrop(
        publicKey,
        amount
    );

    await connection.confirmTransaction({
        signature: airdropSignature
    });
}

airdropSolana(feePayer.publicKey, 1*LAMPORTS_PER_SOL)
.then((signature) => {
    console.log("Airdrop Signature:", signature)
})