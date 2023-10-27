// Получаем ссылки на элементы DOM
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');

// Слушатель события input (набор текста)
searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  const movies = movieList.getElementsByClassName('movie');
  for (const movie of movies) {
    const title = movie.querySelector('.movie-title').textContent.toLowerCase();
    if (title.includes(searchValue)) {
      movie.classList.remove('hidden'); // Удаляем класс hidden
    } else {
      movie.classList.add('hidden'); // Добавляем класс hidden
    }
  }
});
