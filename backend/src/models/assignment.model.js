import mongoose from 'mongoose'

const { Schema } = mongoose

let Assignment = null

try {
  const AssignmentSchema = new Schema({
    _id: {
      assignmentKey:  Number,
    },
    placeKey: Number,
    userKey: String,
    endAssignment: Date
  })
  Assignment = mongoose.model('Assignment', AssignmentSchema)
} catch (e) {
  Assignment = mongoose.model('Assignment')
}

export default Assignment
