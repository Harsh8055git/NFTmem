let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for (let i = 0; i < 100; i++){
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    ipfsArray.push({
        path: `metadata/${paddedHex}.json`,
        content: {
            image: `ipfs://QmNp78itLpfg56e7NucFT67zoSScDrjbvhE1GJn6SpZLat/images/${paddedHex}.`,
            name: `My Youtube test NFT #${i}`,
            description: "Awesome NFT for my youtube video"
        }
    })
}
axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", 
    ipfsArray,
    {
        headers: {
            // "X-API-KEY": 'wnFbJ8XSeI8Ym4uOBsBHQfoYSOXF31OxAxs6ohXchHo7D7qvoJ66Qetxll5jrA46',
            "Content-Type": "application/json",
            "accept": "application/json"
        }
    }
).then( (res) => {
    console.log(res.data);
})
.catch ( (error) => {
    console.log(error)
})
// https://ipfs.moralis.io:2053/ipfs/QmNp78itLpfg56e7NucFT67zoSScDrjbvhE1GJn6SpZLat/images/000000000000000000000000000000000000000000000003.jpg'