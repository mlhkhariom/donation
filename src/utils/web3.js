import Web3 from 'web3';

const web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider('https://your-infura-endpoint'));

export default web3;