import mongoose from 'mongoose'

const { Schema } = mongoose

let Order = null

try {
  const OrderSchema = new Schema({
    _id: {
      orderKey:  Number,
    },
    buyer: String,
    seller: String,
    deliver: String,
    state: Number,
    date: Date,
    dateDelay: Date,
    takeverification: String,
    deliveryverification: String,
    priceOrder: String,
    priceDeliver: String,
    validateBuyer: Boolean,
    validateSeller: Boolean,
    validateDeliver: Boolean,
    details: String,
    delay: Number
  })
  Order = mongoose.model('Order', OrderSchema)
} catch (e) {
  Order = mongoose.model('Order')
}

export default Order
