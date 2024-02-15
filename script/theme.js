document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleDark');
  const body = document.body;
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  if (isDarkTheme) {
    toggle.classList.add('bi-moon');
    body.classList.add('dark-theme');
  }
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('bi-moon');
    body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', toggle.classList.contains('bi-moon') ? 'true' : 'false');
  });
});