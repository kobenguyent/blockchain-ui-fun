[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

React application that allows you to interact with a blockchain. You can see the blocks on chain, see transaction within them and even create new transactions and mine blocks.

Built on top of [KobeCoin](https://github.com/kobenguyent/blockchain-fun) (Blockchain implementation in Typescript).

---

## Live demo
**[Check it out here.](https://kobenguyent.github.io/blockchain-ui-fun/)** You can create transactions, mine blocks and explore your own blockchain.

## 🏁 Getting Started <a name = "getting_started"></a>
Get a copy of the KobeCoin front-end running on your local machine (for playing around, testing or development).

```
git clone https://github.com/kobenguyent/blockchain-ui-fun.git
```

Install the dependencies:
```
cd blockchain-ui-fun
npm i
```

Run the application:
```
npm run dev
```

At this point the application should be running on your machine, for instance on [http://127.0.0.1:5173/blockchain-ui-fun/](http://127.0.0.1:5173/blockchain-ui-fun/)


## 📸 Screenshots

**Home page:** Seeing blocks on the chain & exploring transactions in each block.
![Screen Shot 2023-04-24 at 2 15 31 PM](https://user-images.githubusercontent.com/7845001/233993364-a73da42f-b5a7-40d1-b0da-112e1ca03454.png)


**Creating new transactions:** You can create new transactions to any wallet for any amount (no validation). New transactions will be added to the "pending transactions", ready to be included in the next block.
![Screen Shot 2023-04-24 at 2 16 17 PM](https://user-images.githubusercontent.com/7845001/233993507-554f925f-fd06-4c7b-907c-6ab124bbfb31.png)


**Pending transactions:** List of all pending transactions. These will be included in the next block when the mining process starts.
![Screen Shot 2023-04-24 at 2 16 55 PM](https://user-images.githubusercontent.com/7845001/233993644-76452440-ddd0-4d8b-aed8-2bb32d382f2f.png)


*⚠️This is for educational purposes only. This is by no means a complete blockchain implementation (nor does it aim to be one). Use it to learn how blockchains operates.*
