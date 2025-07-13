import { Client, Account, Databases, Storage, ID } from "appwrite";
import { renderAdvert } from "../components/advertCard.js";

const client = new Client();
client.setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]').setProject('[YOUR_PROJECT_ID]');
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

window.addEventListener('DOMContentLoaded', async () => {
  // Load user info
  let user;
  try {
    user = await account.get();
    document.getElementById('username-market').textContent = user.name || user.email;
    document.getElementById('profile-pic-market').src = localStorage.getItem('profilePic') || "assets/images/default-avatar.png";
  } catch (e) {
    window.location.href = "login.html";
  }
  // Load market adverts
  loadAdverts();

  // Upload form logic
  document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // 1. Validate
    const title = document.getElementById('advert-title').value.trim();
    const content = document.getElementById('advert-content').value.trim();
    const category = document.getElementById('advert-category').value;
    const reward = parseInt(document.getElementById('advert-reward').value, 10);
    const reach = parseInt(document.getElementById('advert-reach').value, 10);
    const file = document.getElementById('advert-file').files[0];
    if (!title || !content || !category || isNaN(reward) || isNaN(reach) || reach < 1000 || reward < 500 || reward > 1000) {
      alert("Please fill all fields correctly.");
      return;
    }
    // 2. Payment (simulate wallet)
    alert("Please connect your wallet and pay 0.001 BNB to upload advert. (Integration required)");
    // 3. Upload file if any
    let fileUrl = "";
    if (file) {
      const uploaded = await storage.createFile('[bucket_id]', ID.unique(), file);
      fileUrl = storage.getFileView('[bucket_id]', uploaded.$id).href;
    }
    // 4. Save to DB
    await databases.createDocument('[db_id]', 'adverts', ID.unique(), {
      userAvatar: localStorage.getItem('profilePic') || "assets/images/default-avatar.png",
      username: user.name || user.email,
      title, content, category, reward, reach, fileUrl
    });
    alert("Advert uploaded!");
    loadAdverts();
  });
});

async function loadAdverts() {
  const result = await databases.listDocuments('[db_id]', 'adverts');
  document.getElementById('market-adverts-feed').innerHTML = result.documents.map(renderAdvert).join('');
}