
const WikiBea = require("./contracts/WikiBea.json");
const Web3 = require('web3');


const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const abi = [ { "constant": true, "inputs": [], "name": "artigosCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "artigos", "outputs": [ { "name": "id", "type": "uint256" }, { "name": "titulo", "type": "string" }, { "name": "corpo", "type": "string" }, { "name": "autor", "type": "address" }, { "name": "versao", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [ { "name": "_titulo", "type": "string" }, { "name": "_corpo", "type": "string" } ], "name": "adicionaArtigo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_id", "type": "uint256" }, { "name": "_titulo", "type": "string" }, { "name": "_corpo", "type": "string" } ], "name": "alterarArtigo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "id", "type": "uint256" } ], "name": "getArtigo", "outputs": [ { "name": "", "type": "uint256" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
const address = '0xf67f69777bAF3f1a77ce7BB66599281aB370AFB1'
const contrato = web3.eth.Contract(abi, address);

console.log(contrato.methods)

//const teste = contrato.methods.getArtigos.call(1).toString()
//console.log(teste)