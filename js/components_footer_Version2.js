const footer = document.createElement('footer');
footer.innerHTML = `
  <nav class="footer-nav slideup">
    <a href="index.html" class="nav-btn"><img src="assets/icons/home.svg" alt="Home"/><span>Home</span></a>
    <a href="market.html" class="nav-btn"><img src="assets/icons/market.svg" alt="Market"/><span>Market</span></a>
    <a href="wallet.html" class="nav-btn"><img src="assets/icons/wallet.svg" alt="Wallet"/><span>Wallet</span></a>
    <a href="support.html" class="nav-btn"><img src="assets/icons/support.svg" alt="Support"/><span>Support</span></a>
  </nav>
`;
document.body.appendChild(footer);