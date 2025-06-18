# MongoDB Bookstore

## Описание
Този проект представлява база данни за онлайн книжарница, която позволява управление на книги, автори, клиенти, поръчки и рецензии.

## Структура на базата данни

### Колекции

1. **books**
   - _id: ObjectId
   - title: String
   - author: ObjectId (референция към authors)
   - isbn: String (уникален)
   - price: Number
   - category: String
   - stock: Number
   - publishedYear: Number

2. **authors**
   - _id: ObjectId
   - name: String
   - biography: String
   - birthDate: Date
   - nationality: String

3. **customers**
   - _id: ObjectId
   - name: String
   - email: String (уникален)
   - address: Object {street, city, country, postalCode}
   - phone: String
   - registrationDate: Date

4. **orders**
   - _id: ObjectId
   - customerId: ObjectId (референция към customers)
   - books: Array of Objects {bookId, quantity, price}
   - totalAmount: Number
   - orderDate: Date
   - status: String

5. **reviews**
   - _id: ObjectId
   - bookId: ObjectId (референция към books)
   - customerId: ObjectId (референция към customers)
   - rating: Number
   - comment: String
   - date: Date

## Инсталация и стартиране

1. Инсталирайте MongoDB Community Edition от [официалния сайт](https://www.mongodb.com/try/download/community)

2. Стартирайте MongoDB сървъра:
```bash
mongod
```

3. Изпълнете скриптовете в следния ред:
```bash
mongosh < create_db.js
mongosh < insert.js
mongosh < queries.js
```

## Файлове

- `create_db.js` - създава базата данни, колекциите и индексите
- `insert.js` - вмъква примерни данни във всички колекции
- `queries.js` - съдържа примери за CRUD операции и агрегации

## Примери за заявки

### READ операции
- Извличане на всички книги
- Филтриране на книги по категория
- Филтриране на клиенти по град
- Филтриране на поръчки по статус

### UPDATE операции
- Актуализиране на цената на книга
- Актуализиране на статуса на поръчка

### DELETE операции
- Изтриване на рецензия
- Изтриване на поръчка

### AGGREGATE операции
- Групиране на книги по категория
- Намиране на най-скъпите книги
- Агрегация на поръчки по клиент
- Изчисляване на среден рейтинг на книгите 
