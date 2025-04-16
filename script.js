// Map of categories to Google Drive folder IDs
const folderMap = {
  home: "1PLzdqxzjXTruLYKmj6pHAQ9p-WZLDRkb",
  commissionedMurals: "1VwdKKmMfcpLZYTW97QNk9-e8w1YPXm3q",
  personalMurals: "14ch7iZB2JQqAFKNZpondLx_scZiH7VVA",
  paintings: "1kWXNG-EUuMP2vofkZ3NTagrYD2htmr16",
  shopPrints: "1GIecCmERWEfjaE4_uBNTK-tmFT3dGIdN",
  shopOriginals: "1P9NfQJbCk8yYQZt4SZ1W3MKZdt3CcQKk",
};

// Function to dynamically load images
function showTab(category) {
  const gallery = document.getElementById('gallery');
  const folderId = folderMap[category];

  if (!folderId) {
    gallery.innerHTML = `<p>Category "${category}" is not recognized.</p>`;
    return;
  }

  gallery.innerHTML = `<p>Loading ${category} images...</p>`;
  gallery.innerHTML = `
    <iframe src="https://drive.google.com/embeddedfolderview?id=${folderId}#grid" width="100%" height="600" frameborder="0"></iframe>
  `;
}
