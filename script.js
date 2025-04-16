// Map of categories to Google Drive folder IDs
const folderMap = {
  home: "1PLzdqxzjXTruLYKmj6pHAQ9p-WZLDRkb",
  portfolio: {
    murals: "1VwdKKmMfcpLZYTW97QNk9-e8w1YPXm3q",
    paintings: "1VwdKKmMfcZZZZZZZZZZZZZZZZZZZZZZZZ",
    designs: "1VwdKKmMfcYYYYYYYYYYYYYYYYYYYYYYYY",
  },
  shop: {
    prints: "1GIecCmERWEfjaE4_uBNTK-tmFT3dGIdN",
    originals: "1GIecCmERWEfZZZZZZZZZZZZZZZZZZZZZZ",
    books: "1GIecCmERWEfYYYYYYYYYYYYYYYYYYYYYY",
  },
};

// Function to load images dynamically
function loadGallery(sectionId, category, subCategory = null) {
  const gallery = document.getElementById(sectionId);
  const folderId = subCategory ? folderMap[category][subCategory] : folderMap[category];

  if (!folderId) {
    gallery.innerHTML = `<p>Error: Gallery for "${category}" is not available. Please check the folder ID.</p>`;
    return;
  }

  gallery.innerHTML = `
    <iframe 
      src="https://drive.google.com/embeddedfolderview?id=${folderId}#grid" 
      width="100%" 
      height="600" 
      frameborder="0"
      onerror="this.parentElement.innerHTML='<p>Failed to load gallery. Please try again later.</p>'"
    ></iframe>
  `;
}

// Tab Switching Functionality
function switchTab(tabId) {
  const allTabs = document.querySelectorAll(".tab-content");
  allTabs.forEach(tab => tab.classList.add("hidden"));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.remove("hidden");
  }
}

// Load galleries on page load
document.addEventListener("DOMContentLoaded", () => {
  // Home gallery
  loadGallery("gallery", "home");

  // Portfolio galleries
  loadGallery("portfolio-gallery-murals", "portfolio", "murals");
  loadGallery("portfolio-gallery-paintings", "portfolio", "paintings");
  loadGallery("portfolio-gallery-designs", "portfolio", "designs");

  // Shop galleries
  loadGallery("shop-gallery-prints", "shop", "prints");
  loadGallery("shop-gallery-originals", "shop", "originals");
  loadGallery("shop-gallery-books", "shop", "books");
});

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
