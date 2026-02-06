const { Connection, clusterApiUrl, Keypair, SystemProgram, Transaction, sendAndConfirmTransaction } = require("@solana/web3.js");
const fs = require("fs");

// Resource: https://solana.com/developers/cookbook/accounts/create-account

const connection = new Connection(clusterApiUrl('devnet'), "confirmed")

const feePayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync("/home/efty-ahmed/.config/solana/id.json", "utf-8"))));

const dataAccount = Keypair.generate();
const space = 1000;

async function accountCreation() {

    const createAccountTransaction = new Transaction().add(
      SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: dataAccount.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(space),
          space,
          programId: SystemProgram.programId
    })
  );

  const signature = await sendAndConfirmTransaction(
    connection,
    createAccountTransaction,
    [feePayer, dataAccount]
  );
  
  console.log("Transaction Signature:", signature);
}

accountCreation();