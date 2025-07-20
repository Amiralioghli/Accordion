const accordions = document.querySelectorAll('.content-container');

accordions.forEach(container => {
  container.querySelector('.question').addEventListener('click', function () {
    container.classList.toggle('active');
  });
});
