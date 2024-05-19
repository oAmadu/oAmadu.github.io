const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const cvShowcase = document.querySelector('.cv-showcase');
const cvContent = document.querySelector('.cv-content');
const boxes = document.querySelectorAll('.box');

const CV_CONTENT = {
  0: `I am an enthusiastic and adaptable computer engineering fresh graduate...`,
  1: () => window.location.href = 'mailto:aymt7mi@gmail.com',
  2: `Phone: +966538024619\nOther contact info`,
  3: `<style> iframe.pdf-viewer { border: none; display: block; width: fit-content; height: fit-content;}</style><iframe class="pdf-viewer" src="media/cv1.pdf"</iframe>`,
  4: () => window.open('https://github.com/oAmadu'),
  5: () => window.open('https://www.linkedin.com/in/aymt7mi/')
};

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

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
// test comment