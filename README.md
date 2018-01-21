# ExpressChain

> ExpressChain is a simple NodeJS blockchain implementation that supports P2P node interaction via websockets. Also included is an HTTP serverfor interacting with the chain.

###### What can I do?

* Create a blockchain, generate new blocks and add them to the chain
* Run a local node that will listen for and broadcast new blocks
* create new blocks via HTTP interaction - via ExpressJS

###### What can a node do?

* Generate new blocks
* Request the latest blocks(or the entire chain) from other nodes
* Validate newly received blocks

###### Proof of Work

To prevent spamming the chain we need POW which adds an energy/time consuming element to block creation

* Prior to adding a block to the chain, the node must generate a hash where the last x digits are '0's'
* x = 3 is recommended

```
function proofOfWork(block){
		while(true){
			block.hash = generateHashh(block);
			if(block.hash.slice(-5) === "00000"){
				return block;
			}else{
				block.nonce++;
			}
		}
	}
```

## Getting Started

### Installation

To run ExpressChain

```
npm install
npm run
```

Check the terminal for the assigned port

To create a new block

```
localhost:3001/spawnClock/:testBlockName
```

To add a new node - mainly for testing purposes

```
localhost:3001/addNode/:port
```
