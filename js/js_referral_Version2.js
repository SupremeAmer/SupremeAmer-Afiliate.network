// Personalized referral links, tracking panel (must be completed with backend endpoints)
export function getReferralLink(code) {
  return `${window.location.origin}/?ref=${code}`;
}
export function renderReferralPanel(user, stats) {
  return `
    <div class="referral-panel">
      <div>Your Referral Link:</div>
      <input type="text" value="${getReferralLink(user.referralCode)}" readonly/>
      <div>Referrals: <b>${stats.referrals}</b></div>
      <div>Earnings: <b>${stats.earnings} $SA</b></div>
    </div>
  `;
}