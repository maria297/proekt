db.movies.insertMany([
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    director: "Christopher Nolan"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    actors: ["Christian Bale", "Heath Ledger"],
    director: "Christopher Nolan"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.6,
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    director: "Christopher Nolan"
  },
  {
    title: "Titanic",
    genre: "Drama",
    year: 1997,
    rating: 7.8,
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
    director: "James Cameron"
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    year: 2009,
    rating: 7.9,
    actors: ["Sam Worthington", "Zoe Saldana"],
    director: "James Cameron"
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    actors: ["John Travolta", "Uma Thurman"],
    director: "Quentin Tarantino"
  },
  {
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    actors: ["Brad Pitt", "Edward Norton"],
    director: "David Fincher"
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    actors: ["Tom Hanks"],
    director: "Robert Zemeckis"
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    director: "Wachowski Sisters"
  },
  {
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino"],
    director: "Francis Ford Coppola"
  }
]);


db.actors.insertMany([
  { name: "Leonardo DiCaprio", dob: ISODate("1974-11-11"), nationality: "USA", movies: ["Inception", "Titanic"] },
  { name: "Joseph Gordon-Levitt", dob: ISODate("1981-02-17"), nationality: "USA", movies: ["Inception"] },
  { name: "Christian Bale", dob: ISODate("1974-01-30"), nationality: "UK", movies: ["The Dark Knight"] },
  { name: "Heath Ledger", dob: ISODate("1979-04-04"), nationality: "Australia", movies: ["The Dark Knight"] },
  { name: "Matthew McConaughey", dob: ISODate("1969-11-04"), nationality: "USA", movies: ["Interstellar"] },
  { name: "Kate Winslet", dob: ISODate("1975-10-05"), nationality: "UK", movies: ["Titanic"] },
  { name: "Tom Hanks", dob: ISODate("1956-07-09"), nationality: "USA", movies: ["Forrest Gump"] },
  { name: "Brad Pitt", dob: ISODate("1963-12-18"), nationality: "USA", movies: ["Fight Club"] },
  { name: "Keanu Reeves", dob: ISODate("1964-09-02"), nationality: "Canada", movies: ["The Matrix"] },
  { name: "Al Pacino", dob: ISODate("1940-04-25"), nationality: "USA", movies: ["The Godfather"] }
]);

// Вмъкване на режисьори
db.directors.insertMany([
  { name: "Christopher Nolan", nationality: "UK", movies: ["Inception", "The Dark Knight", "Interstellar"] },
  { name: "James Cameron", nationality: "Canada", movies: ["Titanic", "Avatar"] },
  { name: "Quentin Tarantino", nationality: "USA", movies: ["Pulp Fiction"] },
  { name: "David Fincher", nationality: "USA", movies: ["Fight Club"] },
  { name: "Robert Zemeckis", nationality: "USA", movies: ["Forrest Gump"] },
  { name: "Wachowski Sisters", nationality: "USA", movies: ["The Matrix"] },
  { name: "Francis Ford Coppola", nationality: "USA", movies: ["The Godfather"] },
  { name: "Steven Spielberg", nationality: "USA", movies: ["E.T."] },
  { name: "Ridley Scott", nationality: "UK", movies: ["Gladiator"] },
  { name: "Peter Jackson", nationality: "New Zealand", movies: ["The Lord of the Rings"] }
]);

db.users.insertMany([
  { username: "ivan123", email: "ivan@mail.com", favorites: ["Inception", "Fight Club"] },
  { username: "maria90", email: "maria@mail.com", favorites: ["Titanic", "The Matrix"] },
  { username: "george77", email: "george@mail.com", favorites: ["The Dark Knight"] },
  { username: "nina_bg", email: "nina@mail.com", favorites: ["Interstellar", "Forrest Gump"] },
  { username: "admin", email: "admin@mail.com", favorites: ["The Godfather"] },
  { username: "dani_22", email: "dani@mail.com", favorites: ["Avatar"] },
  { username: "peter_05", email: "peter@mail.com", favorites: ["The Matrix"] },
  { username: "sofia_star", email: "sofia@mail.com", favorites: ["Pulp Fiction"] },
  { username: "bob1988", email: "bob@mail.com", favorites: ["Fight Club", "Inception"] },
  { username: "linda_l", email: "linda@mail.com", favorites: ["Forrest Gump"] }
]);


db.reviews.insertMany([
  { user: "ivan123", movie: "Inception", text: "Страхотен филм!", rating: 9, date: ISODate("2024-01-10") },
  { user: "maria90", movie: "Titanic", text: "Класическа драма.", rating: 8, date: ISODate("2024-01-12") },
  { user: "george77", movie: "The Dark Knight", text: "Уникално изпълнение на Леджър.", rating: 10, date: ISODate("2024-01-15") },
  { user: "nina_bg", movie: "Interstellar", text: "Умопомрачителна визия!", rating: 9, date: ISODate("2024-01-17") },
  { user: "admin", movie: "The Godfather", text: "Най-добрият филм за всички времена.", rating: 10, date: ISODate("2024-01-20") },
  { user: "dani_22", movie: "Avatar", text: "Изключителна визия и ефекти.", rating: 8, date: ISODate("2024-01-22") },
  { user: "peter_05", movie: "The Matrix", text: "Още е актуален и днес.", rating: 9, date: ISODate("2024-01-25") },
  { user: "sofia_star", movie: "Pulp Fiction", text: "Най-добрият на Тарантино.", rating: 9, date: ISODate("2024-01-28") },
  { user: "bob1988", movie: "Fight Club", text: "Много дълбока история.", rating: 9, date: ISODate("2024-02-01") },
  { user: "linda_l", movie: "Forrest Gump", text: "Толкова емоционален филм.", rating: 10, date: ISODate("2024-02-05") }
]);
