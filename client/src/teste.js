
const WikiBea = require("./contracts/WikiBea.json");
const Web3 = require('web3');


const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:7545"
);

const web3 = new Web3(provider);



//console.log(web3.eth)

async function main() {
  // Use web3 to get the user's accounts.
  //const accounts = await web3.eth.getAccounts();

  // Get the contract instance.
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = WikiBea.networks[networkId];
  const instance = new web3.eth.Contract(
    WikiBea.abi,
    deployedNetwork && deployedNetwork.address,
  )

  return instance
  

  //console.log(instance.methods.artigos())
}

main()
  .then((instance) => {
    instance.methods.artigos(1).call((err, result) => { console.log('resultado2:', result) })
      .then((err, resultado) => {
        console.log('resultado: ', resultado)
      })
      .catch((err) => {
        console.log('erro:', err)
      })
  })
  .catch((err)=>{console.log('erro:', err)})


//console.log(provider)