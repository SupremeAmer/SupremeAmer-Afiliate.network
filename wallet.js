import { renderWalletUI } from "../components/wallet.js";

let walletConnected = false;
let walletAddress = "";
let saBalance = 0;

window.addEventListener('DOMContentLoaded', async () => {
  // Render wallet UI
  render();
  document.body.addEventListener('click', async (e) => {
    if (e.target.id === 'connect-wallet') {
      // Simulate wallet connect (Integrate MetaMask here)
      walletConnected = true;
      walletAddress = "0x" + Math.random().toString(16).substr(2, 40);
      saBalance = 100000;
      render();
    } else if (e.target.id === 'disconnect-wallet') {
      walletConnected = false;
      walletAddress = "";
      saBalance = 0;
      render();
    } else if (e.target.id === 'fund-wallet-btn') {
      let amount = prompt("Enter amount of BNB or SA to fund (Min: 0.0007 BNB, 5000 SA):");
      if (amount) alert("Simulate payment for " + amount);
    } else if (e.target.id === 'withdraw-wallet-btn') {
      let amount = prompt("Enter amount of $SA to withdraw (min 20000):");
      if (amount && parseInt(amount, 10) >= 20000) alert("Simulate withdrawal of " + amount + " $SA");
      else alert("Minimum is 20000 $SA");
    }
  });
  // Transaction history from localStorage
  renderHistory();
});

function render() {
  document.getElementById('wallet-ui').innerHTML = renderWalletUI(walletConnected, walletAddress, saBalance);
}
function renderHistory() {
  let history = JSON.parse(localStorage.getItem('walletHistory') || "[]");
  document.getElementById('wallet-history-list').innerHTML = history.length
    ? history.map(tx => `<div>${tx}</div>`).join('')
    : "<div>No transactions yet.</div>";
}
