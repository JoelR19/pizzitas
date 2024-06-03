const images = [
    {
        src: 'images/1.webp',
        description: 'la primera',
        color: '#ffadad',
        smallImages: [
            'images/Peque1.png',
            'images/peqe1.jpg',
            'images/Pequee1.png',
            'images/aaa.webp'
        ]
    },
    {
       
        src: 'images/2.webp',
description: 'la segunda',
color: '#ffd6a5',
smallImages: [
    'images/Peqe1.png',
    'images/Peqe1.png',
    'images/2-small3.webp',
    'images/Pequee1.png'
]
},
{
src: 'images/4.webp',
description: 'la tercera',
color: '#fdffb6',
smallImages: [
    'images/Pequee1.png',
    'images/3-small2.webp',
    'images/3-small3.webp',
    'images/3-small4.webp'
]
}
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const bodyElement = document.body;

const smallImageElements = {
topLeft: document.querySelector('.top-left-small'),
topRight: document.querySelector('.top-right-small'),
bottomLeft: document.querySelector('.bottom-left-small'),
bottomRight: document.querySelector('.bottom-right-small')
};

function updateContent(index, direction) {
const { src, description, color, smallImages } = images[index];
// Aplicamos una rotación diferente según la dirección del botón
const rotation = (direction === 'next') ? 5 : -5;
imageElement.style.transform = `rotate(${rotation}deg)`;
imageElement.style.opacity = 0; // Hacemos que la imagen se desvanezca
setTimeout(() => {
imageElement.src = src;
descriptionElement.textContent = description;
bodyElement.style.backgroundColor = color;
updateSmallImages(smallImages);
updateLabels(index);
imageElement.style.transform = 'rotate(0deg)'; // Reiniciamos la rotación
imageElement.style.opacity = 1; // Hacemos que la imagen aparezca con opacidad completa
}, 200); // Ajusta este valor para que coincida con la duración de la transición
}

function updateSmallImages(smallImages) {
smallImageElements.topLeft.src = smallImages[0];
smallImageElements.topRight.src = smallImages[1];
smallImageElements.bottomLeft.src = smallImages[2];
smallImageElements.bottomRight.src = smallImages[3];
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
updateContent(currentIndex, 'prev'); // Pasamos la dirección como 'prev'
});

document.getElementById('next-button').addEventListener('click', () => {
currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
updateContent(currentIndex, 'next'); // Pasamos la dirección como 'next'
});

// Inicializamos el contenido
updateContent(currentIndex, '');
