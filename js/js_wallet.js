// Only UI until connected
export function renderWalletUI(isConnected, address, saBalance) {
  if (!isConnected) {
    return `
      <div class="wallet-card fadein">
        <h3>Connect Wallet</h3>
        <button id="connect-wallet">Connect MetaMask</button>
      </div>
    `;
  }
  return `
    <div class="wallet-card fadein">
      <h3>Wallet Connected</h3>
      <div>Address: <span>${address}</span></div>
      <div>Balance: <span>${saBalance} $SA</span></div>
      <button id="disconnect-wallet">Disconnect</button>
    </div>
  `;
}