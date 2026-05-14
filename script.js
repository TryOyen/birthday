const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

function animateLetter(open) {
  if (open) {
    letter.style.animation = 'slideOut 0.5s ease forwards';
  } else {
    letter.style.animation = 'slideIn 0.4s ease forwards';
  }
}

envelope.addEventListener('click', () => {
  const isOpen = envelope.classList.toggle('open');
  envelope.setAttribute('aria-pressed', isOpen);
  animateLetter(isOpen);
});

envelope.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    envelope.click();
  }
});
