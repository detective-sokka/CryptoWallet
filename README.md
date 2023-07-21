# Basic Web3 Wallet Extension Blueprint

This repository contains the final code for the A beginner friendly Web3 Wallet Extension. This blueprint provides a way to create a browser extension that uses MoralisWeb3 to interact with EVM compatable networks.

## Getting Started

To get started with this blueprint, follow these steps:

1. Clone this repository to your local machine:
2. Navigate to the `Wallet_Extension/Final` directory:

## Front End

1. cd mwallet
2. npm i
3. npm run start

## Back End

1. With the Front End running Open a new terminal
2. cd backend
3. node index.js

## Build the Chrome Extension

1. Open new Terminal
2. cd mwallet
3. npm run build
4. Load the extension into your browser:
5. Open the Chrome browser and navigate to `chrome://extensions`.
6. Turn on "Developer mode" in the top right corner.
7. Click "Load unpacked" and select the `build` directory in this repository.

- For Mozilla Firefox:
  1. Open Firefox and navigate to `about:debugging`.
  2. Click "This Firefox" on the left sidebar.
  3. Click "Load Temporary Add-on" and select the `manifest.json` file in the `build` directory of this repository.

1. Use the extension to interact with the [Ethereum] network.

## Features

Sign in With Seed Phrase
Generate a Wallet From the Login
Send and receive Tokens
Display all the Tokens in the Users Wallet Without having to put each token in manually

## TODO/FIX

Wallet View to Display Tokens

- Check Walletview.js May need to add tokens /> slot/prop

Store Login Credentals in local storage

- Currently, clicking outside chrome extension will sign you out

Check for Code Quality
Update Documentation
Intergrate with Orginal Wallet

## Useful Things

### Youtube Tutorial

[Youtube Tutorial](https://www.youtube.com/watch?v=2ZYtqX4rOAU&list=PLFPZ8ai7J-iRWshCLIBLYM_QAuDU9r1yw&index=17&ab_channel=MoralisWeb3)

### Github Repo

[MoralisWeb3 Wallet Extension Blueprint GitHub Repo](https://github.com/MoralisWeb3/moralis-blueprints/tree/main/Wallet_Extension/Final)

### Moralis Documentation

[MoralisWeb3 Documentation ↗](https://docs.moralis.io/)

## Requirements

1. Create a Moralis Account for Moralis API Key moralis.io
2. EVM and Mumbai Polygon RPC-URL (You can get a free RPC-URL on Alchemy or Infura)

## License

This blueprint is licensed under the [MIT License](LICENSE).

I hope this helps!
