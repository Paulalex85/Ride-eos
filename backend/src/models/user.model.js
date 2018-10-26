import mongoose from 'mongoose'

const { Schema } = mongoose

let User = null

try {
  const UserSchema = new Schema({
    _id: {
      account: Number
    },
    username: String,
    balance: String,
  })
  User = mongoose.model('User', UserSchema)
} catch (e) {
  User = mongoose.model('User')
}

export default User
