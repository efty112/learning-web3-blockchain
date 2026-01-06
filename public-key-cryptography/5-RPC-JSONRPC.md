## RPC and JSON RPC

As a user, you **interact** with the blockchain for **two purposes**:
- To send a transaction
- To fetch some details from the blockchain (like- balances etc..)

In both of these cases, the way to interact with the blockchain is using **JSON-RPC**.

JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON (JavaScript Object Notation). It allows for communication between a client and a server over a network. JSON-RPC enables a client to invoke **methods** on a server and receive responses, similar to traditional RPC protocols but using JSON for data formatting.

An RPC server provides a way for external clients to interact with the blockchain network. RPC stands for Remote Procedure Call, and an RPC server exposes an API that allows clients to send requests and receive responses from the blockchain.

An RPC server is a service that listens for JSON-RPC requests from clients, processes these requests, and returns the results. It acts as an intermediary between the blockchain and external applications or services.
An RPC (Remote Procedure Call) server is not inherently part of the blockchain network itself, nor does it participate in staking or consensus mechanisms.

You can grab your own RPC server from one of many providers:
- Quicknode
- Alchemy
- Helius
- Infura


### How to Query the blockchain using RPC methods? 

- In the Alchemy server, you will find the link to your preferred blockchain.
- Take the RPC Link from Alchemy and make a **POST** method on **POSTMAN**.
- Query that link using with a body that is determined by the blockchain. You can find the preferred **POST Body** in the following links.

#### Common RPC Calls:
- **Solana**: https://solana.com/docs/rpc/http/getaccountinfo
- **Bitcoin**: https://developer.bitcoin.org/reference/rpc/
- **Ethereum**: https://ethereum.org/en/developers/docs/apis/json-rpc/


### WEI and LAMPORT:

**WEI**:
- Definition: Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar.
- Value: 1 Ether (ETH) = 10^18 Wei.


**GWEI**:
- Definition: A larger unit of Ether commonly used in the context of gas prices.
- Conversion: 1 Ether = 10^9 gwei


**LAMPORTS**:
- In the Solana blockchain, the smallest unit of currency is called a lamport. Just as wei is to Ether in Ethereum, lamports are to SOL (the native token of Solana).
- 1 SOL = 10 ^ 9 Lamports