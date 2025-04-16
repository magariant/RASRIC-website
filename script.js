// Map of categories to Google Drive folder IDs
const folderMap = {
  home: "1PLzdqxzjXTruLYKmj6pHAQ9p-WZLDRkb",
  portfolio: "1VwdKKmMfcpLZYTW97QNk9-e8w1YPXm3q",
  shop: "1GIecCmERWEfjaE4_uBNTK-tmFT3dGIdN",
};

// Function to load images dynamically
function loadGallery(sectionId, category) {
  const gallery = document.getElementById(sectionId);
  const folderId = folderMap[category];

  if (!folderId) {
    gallery.innerHTML = `<p>Gallery for "${category}" is not available.</p>`;
    return;
  }

  gallery.innerHTML = `
    <iframe src="https://drive.google.com/embeddedfolderview?id=${folderId}#grid" width="100%" height="600" frameborder="0"></iframe>
  `;
}

// Load galleries on page load
document.addEventListener("DOMContentLoaded", () => {
  loadGallery("gallery", "home");
  loadGallery("portfolio-gallery", "portfolio");
  loadGallery("shop-gallery", "shop");
});

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
