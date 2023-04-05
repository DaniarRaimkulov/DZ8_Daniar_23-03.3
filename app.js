fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        const photosContainer = document.getElementById('photos-container');
        data.forEach(photo => {
            const photoElement = document.createElement('img');
            photoElement.src = photo.url;
            photosContainer.appendChild(photoElement);
        });
    })
    .catch(error => console.error(error));