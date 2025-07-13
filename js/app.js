import { Client, Account, Databases } from "appwrite";
import { renderAdvert } from "../components/advertCard.js";

// Appwrite setup
const client = new Client();
client.setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]').setProject('[YOUR_PROJECT_ID]');
const account = new Account(client);
const databases = new Databases(client);

window.addEventListener('DOMContentLoaded', async () => {
  // Auth check
  try {
    const user = await account.get();
    document.getElementById('username').textContent = user.name || user.email;
    // Load balance
    const balance = await getUserBalance(user.$id);
    document.getElementById('sa-balance').textContent = balance || 0;
    // Load adverts
    const adverts = await fetchAdverts();
    document.getElementById('advert-feed').innerHTML = adverts.map(renderAdvert).join('');
  } catch (e) {
    window.location.href = "login.html";
  }
});

// Example: get balance from Appwrite
async function getUserBalance(userId) {
  const result = await databases.getDocument('[db_id]', 'users', userId);
  return result.sa_balance || 0;
}

// Example: fetch adverts from Appwrite
async function fetchAdverts() {
  const result = await databases.listDocuments('[db_id]', 'adverts');
  return result.documents;
}
