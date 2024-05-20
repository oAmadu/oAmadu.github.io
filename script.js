// Dark mode button
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});


const body = document.body;
const cvShowcase = document.querySelector('.cv-showcase');
const cvContent = document.querySelector('.cv-content');
const boxes = document.querySelectorAll('.box');

// Every box with it's shown data
const CV_CONTENT = {
  0: `I am an enthusiastic and adaptable computer engineering fresh graduate...`,
  1: () => window.location.href = 'mailto:aymt7mi@gmail.com',
  2: `Phone: +966538024619\nOther contact info`,
  3: ``,
  4: () => window.open('https://github.com/oAmadu'),
  5: () => window.open('https://www.linkedin.com/in/aymt7mi/')
};


boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    cvContent.innerHTML = '';
    cvShowcase.style.display = 'block';
    if (typeof CV_CONTENT[index] === 'function') {
      CV_CONTENT[index]();
    } else {
      cvContent.innerHTML = CV_CONTENT[index] || '';
    }
  });
});
/*/
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', previousSlide);

document.getElementById('downloadPdf').addEventListener('click', () => {
  const pdfUrls = ['media/cv1.pdf', 'media/cv12.pdf'];
  window.open(pdfUrls[currentSlide], '_blank');
});

// Initialize first slide
showSlide(currentSlide);
/*/