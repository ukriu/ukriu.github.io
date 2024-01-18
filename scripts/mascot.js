document.addEventListener('DOMContentLoaded', function () {
    fetch('https://oldground.haydar.dev/api/get-waifu')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.imageUrl;

            const imgElement = document.getElementById('mascot');
            imgElement.src = imageUrl;
        })
        .catch(error => console.error('Error fetching JSON:', error));
});