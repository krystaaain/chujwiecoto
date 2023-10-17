const images = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeLightbox = document.querySelector('.close-lightbox');
const thumbnails = document.querySelectorAll('.thumbnail');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = image.src;
    });
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        lightboxImage.src = images[index].src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
