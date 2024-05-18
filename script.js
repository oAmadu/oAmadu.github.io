const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
// Get the CV showcase element
const cvShowcase = document.querySelector('.cv-showcase');

// Get the CV content element
const cvContent = document.querySelector('.cv-content');

// Get the box elements
const boxes = document.querySelectorAll('.box');

// Add event listener to each box
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    // Clear the previous CV content
    cvContent.innerHTML = '';

    // Show the CV showcase
    cvShowcase.style.display = 'block';

    // Handle the click event based on the box index
    switch (index) {
      case 0:
        // About icon clicked
        cvContent.innerHTML = 'I am an enthusiastic and adaptable computer engineering fresh graduate with a strong passion for continuous learning. My interests span across AI, web development, robotics, and game development.<br><br>I successfully finished a summer training program at Smart Methods, where I acquired hands-on experience with modern robotics technology while also improving my problem-solving skills and teamwork abilities.<br><br>I actively seek opportunities to expand my knowledge and stay up to date with the latest developments in the industry.<br><br>I am excited to contribute my expertise and make a positive impact.';
        cvContent.style.fontSize = '18px';
        cvContent.style.fontFamily = 'cursive';
        break;
      case 1:
        //Gmail
        window.location.href = 'mailto:aymt7mi@gmail.com';
        break;
      case 2:
        // Contacts icon clicked
        cvContent.textContent = 'Phone: +966538024619\nOther contact info';
        break;
      case 3:
        // CV icon clicked
        //cvContent.innerHTML = '<style> iframe.pdf-viewer { border: none; display: block; width: fit-content; height: fit-content;}</style>';
        cvContent.innerHTML = '<style> iframe.pdf-viewer { border: none; display: block; width: fit-content; height: fit-content;}</style><iframe class="pdf-viewer" src="media/cv1.pdf"</iframe>';
        break;
      case 4:
        cvContent.innerHTML
        //github
        window.open('https://github.com/oAmadu');
        break;
      case 5:
        //linkedin
        window.open('https://www.linkedin.com/in/aymt7mi/');
        break;
      case 6:
        //About
        break;
      default:
        // For other icons do nothing
        break;
    }
  });
});