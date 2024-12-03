// Sélection des éléments nécessaires
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

const slideWidth = slides[0].getBoundingClientRect().width;

// Positionner les slides côte à côte
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

// Fonction pour déplacer le carrousel
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transition = 'transform 0.3s ease-in-out'; // Ajout de la transition
    track.style.transform = `translateX(-${targetSlide.style.left})`;

    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');
};

// Cloner les slides pour un effet infini
const cloneSlides = () => {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];

    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    track.appendChild(firstClone); // Ajout du clone du premier slide à la fin
    track.insertBefore(lastClone, firstSlide); // Ajout du clone du dernier slide au début
};
cloneSlides();

// Gestion des boutons "Suivant" et "Précédent"
let currentIndex = 1; // On commence par le premier slide réel
track.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Position initiale

const handleNextClick = () => {
    const currentSlide = slides[currentIndex];
    currentIndex++;

    // Vérification pour revenir au début
    if (currentIndex >= slides.length) {
        currentIndex = 1; // Retour au premier slide réel
        track.style.transition = 'none'; // Retirer la transition pour un effet instantané
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    } else {
        moveToSlide(track, currentSlide, slides[currentIndex]);
    }
};

const handlePrevClick = () => {
    const currentSlide = slides[currentIndex];
    currentIndex--;

    // Vérification pour aller à la fin
    if (currentIndex < 0) {
        currentIndex = slides.length - 2; // Retour au dernier slide réel
        track.style.transition = 'none'; // Retirer la transition pour un effet instantané
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    } else {
        moveToSlide(track, currentSlide, slides[currentIndex]);
    }
};

nextButton.addEventListener('click', handleNextClick);
prevButton.addEventListener('click', handlePrevClick);

// Ajout d'un défilement automatique
setInterval(() => {
    handleNextClick();
}, 3000); // Changez la valeur (en millisecondes) pour ajuster la vitesse
