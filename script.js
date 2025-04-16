function showTab(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `<p>Loading ${category} images...</p>`;
  // Placeholder: you'd replace this with a fetch or API call to load images from Google Drive manually
  setTimeout(() => {
    gallery.innerHTML = `
      <img src="https://via.placeholder.com/200x300" alt="${category} Image 1" />
      <img src="https://via.placeholder.com/300x200" alt="${category} Image 2" />
    `;
  }, 800);
}
