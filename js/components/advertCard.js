export function renderAdvert(advert) {
  return `
    <div class="advert-card fadein">
      <img class="profile-thumb" src="${advert.userAvatar}" alt="user" />
      <div class="advert-details">
        <div class="advert-meta">
          <span class="username">@${advert.username}</span>
          <span class="category">${advert.category}</span>
        </div>
        <div class="advert-title">${advert.title}</div>
        <div class="advert-content">${advert.content}</div>
        <div class="advert-reward">Earn: <span>${advert.reward} $SA</span></div>
        <button class="participate-btn" data-id="${advert.id}">Participate</button>
      </div>
    </div>
  `;
}
