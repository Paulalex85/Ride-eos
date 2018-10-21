import mongoose from 'mongoose'

const { Schema } = mongoose

let Offer = null

try {
  const OfferSchema = new Schema({
    _id: {
      offerKey:  Number,
    },
    orderKey: Number,
    orderKey: Number,
    placeKey: Number,
    stateOffer: Number
  })
  Offer = mongoose.model('Offer', OfferSchema)
} catch (e) {
  Offer = mongoose.model('Offer')
}

export default Offer
