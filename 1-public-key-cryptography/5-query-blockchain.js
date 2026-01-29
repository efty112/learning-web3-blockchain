import { default as axios } from "axios";

const accountInfoData = await axios.post('https://solana-mainnet.g.alchemy.com/v2/MmMWX2hRZEbsv4gBXwIPA',
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
    "HtJDxPg76c4yHA45AyDVRUXiHUciqB6afa67LwEzDVKi",
    {
        "commitment": "finalized",
        "encoding": "base58"
    }
    ]
})

console.log("Solana Account Data: ",accountInfoData.data)

const accountBalanceData = await axios.post('https://solana-mainnet.g.alchemy.com/v2/MmMWX2hRZEbsv4gBXwIPA',
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getBalance",
    "params": [
    "HtJDxPg76c4yHA45AyDVRUXiHUciqB6afa67LwEzDVKi",
    {
        "commitment": "finalized"
    }
    ]
})

console.log("Solana Acoount Balance: ",accountBalanceData.data)

console.log("---------------------------")

const ethAccountBalance = await axios.post('https://eth-mainnet.g.alchemy.com/v2/MmMWX2hRZEbsv4gBXwIPA', {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": [
        "0xD6AbA68512135f3C5Bb22884Ffb4C24228AE3Ddc",
        "latest"
    ],
    "id": 1
})

console.log('Ethereum Account Data: ', ethAccountBalance.data)