const images = [
    {
        src: 'images/1.webp',
        description: 'la primera',
        color: '#ffadad'
    },
    {
        src: 'images/2.webp',
        description: 'la segunda',
        color: '#ffd6a5'
    },
    {
        src: 'images/4.webp',
        description: 'la tercera',
        color: '#fdffb6'
    }
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const bodyElement = document.body;
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

function updateContent(index) {
    imageElement.src = images[index].src;
    descriptionElement.textContent = images[index].description;
    bodyElement.style.backgroundColor = images[index].color;
    updateLabels(index);
}

function updateLabels(index) {
    const imageNames = document.querySelectorAll('.image-name');
    imageNames.forEach((name, i) => {
        if (i === index) {
            name.classList.add('active-label');
        } else {
            name.classList.remove('active-label');
        }
    });
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateContent(currentIndex);
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateContent(currentIndex);
});

// Initialize the content
updateContent(currentIndex);
