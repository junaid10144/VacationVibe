const mongose = require("mongoose");
const placeSchema = new mongose.Schema({
  owner: { type: mongose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String], //arrays of string
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

const PlaceModel = mongose.model("Place", placeSchema);

module.exports = PlaceModel;
