// Создаем массив фильмов
const movies = [
  {id: 1, title: 'LEGO Movie', year: 2014, genre: 'Comedy/Cartoon'},
  {id: 2, title: 'Barbie', year: 2023, genre: 'Romance/Comedy'},
  {id: 3, title: 'Batman', year: 2023,genre: 'Detective/Action'},
  {id: 4, title: 'Spider-Man', year: 2024, genre: 'Action'},
  {id: 5, title: 'Minions', year: 2022, genre: 'Comedy/Cartoon'},
  {id: 6, title: 'Social Network', year: 2010, genre: 'Drama/Historical'},
  {id: 7, title: 'Drive', year: 2011, genre: 'Drama/Indie film'},
  {id: 8, title: 'Puss in boots', year: 2010, genre: 'Adventure/Cartoon'},
];

// Выводим информацию о каждом фильме
movies.forEach((movie) => {
  console.log(`Movie: ${movie.title}`);
  console.log(`ID: ${movie.id}`);
  console.log(`Year: ${movie.year}`);
  console.log(`Genre: ${movie.genre}`);
  console.log('-------------------');
});