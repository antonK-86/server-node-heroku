//для взаимодействия с БД
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//сщздаем схему взаимодействия mongoose
const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

module.exports = mongoose.model("Movie", movieSchema);
