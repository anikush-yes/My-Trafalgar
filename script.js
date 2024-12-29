let slideIndex = 0;

const slides = document.querySelectorAll('.person');
const dots = document.querySelectorAll('.dot');

// Funkcija, kuri atnaujina aktyvų slido ir taško statusą
function updateSlidesAndDots() {
    // Pašalinti 'active' klasę visiems slido elementams
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // Pridėti 'active' klasę pasirinktam slide
    slides[slideIndex].classList.add('active');
    
    // Atnaujinti taškus
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
            dot.classList.remove('inactive');
        } else {
            dot.classList.add('inactive');
            dot.classList.remove('active');
        }
    });
}

// Inicializuoti pirmą slido ir taško aktyvumą
updateSlidesAndDots();

document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    // Rodyklės "next" paspaudimas (pirmyn)
    nextButton.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % slides.length; // Padidina indeksą, o kai jis pasiekia paskutinį, grįžta prie pirmo
        updateSlidesAndDots();
    });

    // Rodyklės "prev" paspaudimas (atgal)
    prevButton.addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Sumažina indeksą, o kai jis pasiekia pirmą, grįžta prie paskutinio
        updateSlidesAndDots();
    });

    // Intervalas, kad slidas automatiškai keistųsi kas 3 sekundes
    setInterval(function(){
        slideIndex = (slideIndex + 1) % slides.length; // Automatiškai pereina į kitą slidą
        updateSlidesAndDots();
    }, 8000);
});