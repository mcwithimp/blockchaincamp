### References
##### [Ref #1] [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf)  
##### [Ref #2] [P2P foundation](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source)  
##### [Ref #3] [Torrent](https://upload.wikimedia.org/wikipedia/commons/5/5a/Qbittorrent_4.1.5.png)  
##### [Ref #4] [DLT and Blockchain](http://documents.worldbank.org/curated/en/177911513714062215/pdf/122140-WP-PUBLIC-Distributed-Ledger-Technology-and-Blockchain-Fintech-Notes.pdf)  
##### [Ref #5] [Blockchain decision models](https://medium.com/@sbmeunier/when-do-you-need-blockchain-decision-models-a5c40e7c9ba1)  
##### [Ref #6] [ECDSA Encryption](https://8gwifi.org/ecfunctions.jsp)  
##### [Ref #7] [ECDSA Sign/Verify](https://8gwifi.org/ecsignverify.jsp)  
##### [Ref #8] [SHA256](https://passwordsgenerator.net/sha256-hash-generator/)  
##### [Ref #9] [Blockchain Demo](https://anders.com/blockchain/blockchain.html)  
##### [Ref #10] [BIPs](https://github.com/bitcoin/bips)  
##### [Ref #11] [EIPs](https://github.com/ethereum/EIPs)  
##### [Ref #12] [Smart Contracts: Building Blocks for Digital Markets](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html)  
##### [Ref #13] [The Idea of Smart Contracts](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/idea.html)  
##### [Ref #14] [Tezos Dev Document](https://tezos.gitlab.io/master/)  
##### [Ref #15] Tezos Alphanet Install Script  
For Ubuntu
```
$ curl "https://gitlab.com/tezoskorea/quickstart/raw/master/tz_install.sh" | bash -s alphanet
```
For MacOS
```
$ curl "https://gitlab.com/tezoskorea/quickstart/raw/master/tz_install_mac.sh" | bash -s alphanet
```
##### [Ref #16] [Tezos Octopus](https://tezos.gitlab.io/tezos/_images/octopus.svg)      
##### [Ref #17] Tezos Snapshot for Alphanet  
```
$ curl "https://gitlab.com/tezoskorea/tezos-snapshot/raw/master/quicksync.sh" | bash -s alphanet
```
##### [Ref #18] [Alphanet Faucet](https://faucet.tzalpha.net)   
##### [Ref #19] Tezos RPC API
- [RPCs List](https://tezos.gitlab.io/master/api/rpc.html)  
- Public Node1 - tezTech
```
$ curl https://mainnet.tezrpc.me/chains/main/blocks/20 | jq
```
- Publcc Node2 - tzscan  
```
$ tezos-client -A alphanet-node.tzscan.io -P 443 -S rpc get /chains/main/blocks/20
```  

##### [Ref #20] Try Michelson
* Download resources of the camp
```
$ cd ~/tezos
$ ls
$ git clone https://gitlab.com/tezoskorea/blockchaincamp.git
$ cd blockchaincamp
$ ls
```  
* Deploy simeple.tz
```
$ cd ~/tezos
$ ./tezos-client originate contract simple for tezoskorea transferring 0 from tezoskorea running ./blockchaincamp/simple.tz --init ‘“hello”’ --burn-cap 0.303 --force-low-fee
```  

* Check the contract in local  
Copy the address of the contract
```
$ cd ~/tezos
$ ./tezos-client list known contracts
```  

* Check the contract in the blockchain  
Replace the address part with your contract's address
```
$ cd ~/tezos
$ ./tezos-client rpc get /chains/main/blocks/head/context/contracts/KT1...KLH
```  

* Check the contract in a block explorer  
  * Open the web browser (Chrome)
  * Type this in the url (replace the address part)
  * https://alphanet.tzscan.io/KT1PS...KLH


* Interaction with the contract  
```
$ cd ~/tezos
$ ./tezos-client transfer 0 from tezoskorea to simple --arg ‘”world”’
```


##### [Ref #21] Setting the cloud environment
```
$ cd ~/tezos/blockchaincamp
$ cp ./config.json ~/.tezos-node/config.json
```
```
$ cd ~/tezos
$ ./tezos-node run --rpc-addr 0.0.0.0:8732
```
```
$ cd ~/tezos/blockchaincamp
$ sudo apt-get install python3
$ python3 -m http.server 8080
```
##### [Ref #22] [eztz library](https://github.com/TezTech/eztz)  

##### [Ref #23] Front-end
```
$ cd ~/tezos
$ ./tezos-client show address tezoskorea -S
```
```
$ cd ~/tezos/blockchaincamp
$ ./extractKeys-linux-x64
```
```
$ cd ~/tezos/blockchaincamp
$ sudo apt-get install python3
$ python3 -m http.server 8080
```
```
$ cd ~/tezos
$ ./tezos-client list known contracts
```
```
$ cd ~/tezos/blockchaincamp
$ python3 -m http.server 8080
```

##### [Ref #24] Tezos Study Resources
- [컴퓨터 과학이 여는 세계](https://www.youtube.com/watch?v=HTWSPoDLmHI&list=PL0Nf1KJu6Ui7yoc9RQ2TiiYL9Z0MKoggH )
- [Blockchain in Khan Academy](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-it)
- [Blockchain in Berkely](https://dreamplus.io/academy/blockchain/berkeley)
- [Mastering Bitcoin](hhttps://github.com/bitcoinbook/bitcoinbook)
- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)
- [Blockchain Camp Seoul ](https://www.youtube.com/watch?v=y-5mdgFxrfI&list=PLoEVYCIwrH1kobqstqQEpjz_89toxe7Zj)
- [SKKRYPTO Study Note](https://tezoskoreacommunity.org/)
- [Tezos Capstone](https://tezoscapstone.com/curriculum/index.html)
- [B9Lab Tezos 101](https://academy.b9lab.com/courses/)  

##### [Ref #25] Tezos Reference Sites
- [Tezos Foundation](https://tezos.foundation)
- [Tezos Foundation Biannual Update (2019.08)](https://tezos.foundation/wp-content/uploads/2019/08/Tezos-Foundation-Biannual-Update-August-2019.pdf)
- [Tezos Gitlab Repository](https://gitlab.com/tezos/tezos/tree/mainnet)
- [Tezos Dev Document](https://tezos.gitlab.io/master/)
- [Tezos Stack Exchange](https://tezos.stackexchange.com)
- [Tezos Developer Portal](https://developers.tezos.com)
