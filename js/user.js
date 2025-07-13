export async function setupUserProfile(account, databases) {
  const user = await account.get();
  document.getElementById('username').textContent = user.name || user.email;
  // Avatar change
  document.getElementById('profile-pic').onclick = () => {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.png,.jpg,.jpeg';
    fileInput.onchange = (e) => {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('profilePic', reader.result);
        document.getElementById('profile-pic').src = reader.result;
      };
      reader.readAsDataURL(file);
    };
    fileInput.click();
  };
  // Referral code
  let referralCode = localStorage.getItem('referralCode');
  if (!referralCode) {
    referralCode = Math.random().toString(36).substr(2, 7).toUpperCase();
    localStorage.setItem('referralCode', referralCode);
  }
  document.getElementById('referral-code').textContent = referralCode;
  // Display number of signups with code (must be tracked in backend)
  // IP anti-fraud check should be done in backend before reward
}
