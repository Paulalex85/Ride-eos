import mongoose from 'mongoose'

const { Schema } = mongoose

let Place = null

try {
  const PlaceSchema = new Schema({
    _id: {
      placeKey:  Number,
    },
    country: String,
    zipCode: String,
  })
  Place = mongoose.model('Place', PlaceSchema)
} catch (e) {
  Place = mongoose.model('Place')
}

export default Place
