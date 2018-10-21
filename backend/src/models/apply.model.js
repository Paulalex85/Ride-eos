import mongoose from 'mongoose'

const { Schema } = mongoose

let Apply = null

try {
  const ApplySchema = new Schema({
    _id: {
      applyKey:  Number,
    },
    deliver: String,
    offerKey: Number
  })
  Apply = mongoose.model('Apply', ApplySchema)
} catch (e) {
  Apply = mongoose.model('Apply')
}

export default Apply
