import Web3 from "web3";
import WikiBea from "../../build/contracts/WikiBea.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = WikiBea.networks[networkId];
      this.meta = new web3.eth.Contract(
        WikiBea.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

      //this.refreshBalance();
      this.teste();
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  teste: async function() {
    //const { getBalance } = this.meta.methods;
    const textoTeste = await artigos(1).call();

    const balanceElement = document.getElementsByClassName("teste")[0];
    balanceElement.innerHTML = textoTeste;
  }
};

window.App = App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:9545"),
    );
  }

  App.start();
});
