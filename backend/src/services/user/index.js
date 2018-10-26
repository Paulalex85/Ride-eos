import { User } from '../../models'

/**
 * Get list of all users
 * @returns {User[]}
 */
export const listUsers = async (req, res) => {
  try {
    const list = await User.find({}).exec()
    res.send(list)
  } catch (err) {
    console.error(err)
  }
}
