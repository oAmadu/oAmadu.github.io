const cvShowcase = document.querySelector('.cv-showcase');
const cvContent = document.querySelector('.cv-content');
const boxes = document.querySelectorAll('.box');

// Every box with its shown data
const CV_CONTENT = {
  0: `I am an enthusiastic and adaptable computer engineering fresh graduate...`,
  1: () => window.location.href = 'mailto:aymt7mi@gmail.com',
  2: `Phone: +966538024619\nOther contact info`,
  3: () => window.location.href = 'media/cvs/CV1.pdf',
  4: () => window.open('https://github.com/oAmadu'),
  5: () => window.open('https://www.linkedin.com/in/aymt7mi/'),
  6: () => window.location.href = 'about.html'
};

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (typeof CV_CONTENT[index] === 'function') {
      CV_CONTENT[index]();
    } else {
      cvContent.innerHTML = CV_CONTENT[index] || '';
      cvShowcase.style.display = 'block';
    }
  });
});
