// Map of categories to Google Drive folder IDs
const folderMap = {
  "home": "1PLzdqxzjXTruLYKmj6pHAQ9p-WZLDRkb",
  "commissionedMurals": "1VwdKKmMfcpLZYTW97QNk9-e8w1YPXm3q",
  "personalMurals": "14ch7iZB2JQqAFKNZpondLx_scZiH7VVA",
  "paintings": "1kWXNG-EUuMP2vofkZ3NTagrYD2htmr16",
  "drawingsIllustrations": "123bvQOOHO9UPp0yTcrqNP1rTyMTMCFHs",
  "multimedia": "1m1bK7Ntd7mZ8Ag91ZEOR_z_3Uwyfrl2_",
  "photographyPeople": "1yIQo0sbjeT7bOu5D1ryeN7og_p7pFkZB",
  "photographyPlaces": "1Aduz60CbIhbbdJa1fJj9tFX9QvoNC5Us",
  "photographyThings": "1KJiBlOQAmnl4oGht6qQRlz6PIudxn1Gi",
  "shopPrints": "1GIecCmERWEfjaE4_uBNTK-tmFT3dGIdN",
  "shopOriginals": "1P9NfQJbCk8yYQZt4SZ1W3MKZdt3CcQKk",
  "shopBooks": "1IpgEhoj2BIQwHfhApzjOOzkfOaL4Opim"
};

// Function to load images dynamically
function showTab(category) {
  const gallery = document.getElementById('gallery');
  const folderId = folderMap[category];

  if (!folderId) {
    gallery.innerHTML = `<p>Category "${category}" is not recognized.</p>`;
    return;
  }

  gallery.innerHTML = `<p>Loading ${category} images...</p>`;

  // Example of embedding Google Drive folder view (grid layout)
  setTimeout(() => {
    gallery.innerHTML = `
      <iframe src="https://drive.google.com/embeddedfolderview?id=${folderId}#grid" width="100%" height="600" frameborder="0"></iframe>
    `;
  }, 800);
}
