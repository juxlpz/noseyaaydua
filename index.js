  const images = [
  './assets/image-content/gorou.jpeg',
  './assets/image-content/where is she.webp',
  './assets/image-content/u kn some.webp',
  './assets/image-content/......jpeg',
  './assets/image-content/find.webp',
  './assets/image-content/......jpeg',
  './assets/image-content/mizumiii.webp',
  './assets/image-content/mizorou.jpeg',
  './assets/image-content/sasa.jpeg',
  './assets/image-content/ily.jpeg',
];

const buttonTexts = [
  'gorou doesnt find mizumi',
  'where is she????',
  'I think u know something',
  '...',
  'I find her!!!',
  '....',
  'MIZUMIIIII',
  'mizorou canon',
  'canon',
  'canon',
];

const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalButton = document.querySelector('.final-button');

let currentIndex = 0;

function updateImage() {
  imageContent.style.opacity = 0;

  const img = new Image();
  img.src = images[currentIndex];

  img.onload = () => {
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    imageContent.style.opacity = 1;
  };

  mainButton.textContent = buttonTexts[currentIndex];
}

updateImage();

mainButton.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex < images.length) {
    updateImage();
  } else {
    mainButton.style.display = 'none';
    finalButton.style.display = 'block';
  }
});

finalButton.addEventListener('click', () => {
  window.location.href = './Smoke-heart/index.html';
});