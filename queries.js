db.movies.find();
db.movies.find({ genre: "Sci-Fi" });
db.movies.find({ genre: "Drama", rating: { $gt: 8 } });

db.actors.find();
db.actors.find({ nationality: "USA" });
db.actors.find({ dob: { $lt: ISODate("1975-01-01") } });

db.directors.find();
db.directors.find({ nationality: "UK" });
db.directors.find({ "movies.2": { $exists: true } });

db.users.find();
db.users.find({ favorites: "Fight Club" });
db.users.find({ email: /@mail\.com$/ });

db.reviews.find();
db.reviews.find({ rating: { $gt: 9 } });
db.reviews.find({ movie: "Inception", rating: { $gt: 8 } });

db.movies.updateOne({ title: "Titanic" }, { $set: { rating: 8.3 } });
db.actors.updateOne({ name: "Tom Hanks" }, { $push: { movies: "Cast Away" } });
db.directors.updateOne({ name: "Wachowski Sisters" }, { $set: { nationality: "USA (updated)" } });
db.users.updateOne({ username: "maria90" }, { $addToSet: { favorites: "Interstellar" } });
db.reviews.updateOne({ user: "bob1988", movie: "Fight Club" }, { $set: { text: "Много силен филм, заслужава си!" } });

db.movies.deleteOne({ title: "Avatar" });
db.actors.deleteOne({ name: "Kate Winslet" });
db.directors.deleteOne({ name: "Steven Spielberg" });
db.users.deleteOne({ username: "admin" });
db.reviews.deleteOne({ user: "sofia_star", movie: "Pulp Fiction" });

db.movies.aggregate([
  { $group: { _id: "$genre", total: { $sum: 1 } } }
]);

db.movies.aggregate([
  { $group: { _id: "$genre", avgRating: { $avg: "$rating" } } }
]);

db.directors.aggregate([
  { $project: { name: 1, numMovies: { $size: "$movies" } } },
  { $sort: { numMovies: -1 } }
]);

db.reviews.aggregate([
  { $group: { _id: "$movie", count: { $sum: 1 } } }
]);

db.reviews.aggregate([
  { $group: { _id: "$movie", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
]);
