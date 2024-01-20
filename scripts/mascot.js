document.addEventListener('DOMContentLoaded', function () {
    const randomImageNumber = Math.floor(Math.random() * 69) + 1;

    const imageUrl = `mascots/${randomImageNumber}.webp`;

    const imgElement = document.getElementById('mascot');

    imgElement.src = imageUrl;

    imgElement.onload = function () {
        console.log('Image loaded successfully!');
    };

    imgElement.onerror = function () {
        console.error('Error loading image, setting fallback image.');
        imgElement.src = 'styles/img/fallback-mascot.webp';
    };
});
