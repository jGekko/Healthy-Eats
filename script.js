const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', event => {
    alert('Trabajo en progreso...');
  });
});

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#9EEB84';
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = '';
  });
});