
const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;

// You can use any elliptic curve you want
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f6098cc130f046bcba1ed05eb496a27a03e3f0c50c763cd850a102a263a2079f');
const myWalletAddress = myKey.getPublic('hex');

const myKey2 = ec.keyFromPrivate('63a179f9851da280dc9c6fbaa9ca8cd84de00b75bea84052103aa9eb1887bb16');
const myWalletAddress2 = myKey2.getPublic('hex');





let savjeeCoin = new Blockchain();


const tx1 = new Transaction(myWalletAddress, 'public key goes here', 100);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

const tx2 = new Transaction(myWalletAddress, 'public key goes here', 100);
tx2.signTransaction(myKey);
savjeeCoin.addTransaction(tx2);

const tx3 = new Transaction(myWalletAddress2, 'public key goes here', 50);
tx3.signTransaction(myKey2);
savjeeCoin.addTransaction(tx3); 



console.log('\n starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);


console.log('\n Balance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));
console.log('\n Balance of belal is', savjeeCoin.getBalanceOfAddress(myWalletAddress2));


console.log('Is chain valid', savjeeCoin.isChainVaild());




