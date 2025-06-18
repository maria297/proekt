# MongoDB проект: Филмова база данни
## Общо описание
Този проект представлява MongoDB база данни, която моделира информация за филми, актьори, режисьори, потребители и ревюта. Целта е да се покаже как се използват основните операции в MongoDB: CRUD (Create, Read, Update, Delete) и Aggregation Pipeline. Базата е създадена ръчно чрез файл insert.js, а заявки за работа с нея са записани в queries.js.

### Проектът е изпълнен по задание с:
-поне 5 колекции
-пълни примери за вмъкване на данни (insert.js)
-заявки за четене, обновяване, изтриване и агрегиране (queries.js)

## Структура на проекта
  ```pgsql
movie-database-project/
├── insert.js        # Вмъкване на документи във всяка колекция
├── queries.js       # Заявки (read, update, delete, aggregate)
└── README.md        # Документация и инструкции
  ``` 
## Колекции и структура
1. **movies** – информация за филмите
  ```json
{
  title: String,
  genre: String,
  year: Number,
  rating: Number,
  actors: [String],
  director: String
}
  ```
2. **actors** – информация за актьорите
  ```json

{
  name: String,
  dob: Date,
  nationality: String,
  movies: [String]
}
  ```
3. **directors** – информация за режисьорите
  ```json
{
  name: String,
  nationality: String,
  movies: [String]
}
  ```
4. **users** – потребители на приложението
  ```json
{
  username: String,
  email: String,
  favorites: [String]
}
  ```
5. **reviews** – потребителски ревюта
  ```json
{
  user: String,
  movie: String,
  text: String,
  rating: Number,
  date: Date
}
  ```
### insert.js – Вмъкване на данни
-Файлът insert.js съдържа:
-db.collection.insertMany([...]) за всички 5 колекции
-Използвани типове: низове, числа, дати (ISODate), масиви
-Всяка колекция съдържа по 10 записа с реалистични данни
-Примери за използване на insert:

  ```js

 db.movies.insertMany([...])

 db.actors.insertMany([ { name: ..., dob: ISODate("..."), ... } ])
  ```
 ### queries.js – Заявки и агрегиране
-Четене (Read)
-find() – връща всички документи
-find({ поле: стойност }) – филтриране по критерии
-Условия: $gt, $lt, $exists, регулярни изрази (/@mail\.com$/)

  ```js

db.movies.find({ genre: "Sci-Fi" })


db.actors.find({ nationality: "USA" })

db.users.find({ email: /@mail\.com$/ })
  ```
### Обновяване (Update)
-updateOne({ условие }, { $оператор: { поле: стойност } })
-Използвани оператори: $set, $push, $addToSet

  ```js

db.movies.updateOne({ title: "Titanic" }, { $set: { rating: 8.3 } })


db.actors.updateOne({ name: "Tom Hanks" }, { $push: { movies: "Cast Away" } })
  ```
### Изтриване (Delete)
-deleteOne({ условие }) – трие първия съвпадащ документ

  ```js

db.directors.deleteOne({ name: "Steven Spielberg" })
  ```
### Агрегиране (Aggregate)
-aggregate([...]) с етапи $group, $project, $sort
-Изчисления: брой, среден рейтинг, брой филми на режисьори

  ```js

db.movies.aggregate([
  { $group: { _id: "$genre", avgRating: { $avg: "$rating" } } }
])


db.reviews.aggregate([
  { $group: { _id: "$movie", count: { $sum: 1 } } }
])


db.directors.aggregate([
  { $project: { name: 1, numMovies: { $size: "$movies" } } },
  { $sort: { numMovies: -1 } }
])
  ```
## Стартиране на проекта
-За стартиране на проекта съм използвала MongoDB Atlas и MongoDB Compass. Това ми позволи да създам и управлявам базата данни онлайн и да визуализирам данните чрез удобен графичен интерфейс.

### Процес на стартиране:
-Създадох безплатен акаунт в MongoDB Atlas.
-Създадох нов клъстер (Cluster) в облака, който служи като сървър за базата ми данни.
-Конфигурирах потребителско име и парола за достъп и разреших достъп от IP адрес 0.0.0.0/0 (всички IP-та), за да мога да се свържа от моя компютър.
-Копирах връзката (URI) към клъстера и я използвах в приложението MongoDB Compass – десктоп клиент, който инсталирах локално.
-В MongoDB Compass създадох нова база данни с име movieDB и колекции според структурата на проекта.
-Използвах функцията „Insert Many“ в MongoDB Compass, за да заредя данните от файла insert.js.
-Изпълних необходимите заявки за четене, обновяване, изтриване и агрегиране на данни директно през MongoDB Compass, като използвах командите от queries.js.
-Този подход е удобен за бързо стартиране и тестване на базата данни, без да се налага инсталиране и конфигуриране на MongoDB сървър локално.
