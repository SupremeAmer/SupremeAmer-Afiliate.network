// Leaderboard and stats

export function renderLeaderboard(users) {
  return `
    <div class="leaderboard">
      <h3>Top Affiliates</h3>
      <ol>
        ${users.map((u, i) => `<li>${i+1}. ${u.username} — ${u.referrals} referrals</li>`).join('')}
      </ol>
    </div>
  `;
}
