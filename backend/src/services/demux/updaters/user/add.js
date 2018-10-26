async function add (state, payload, blockInfo, context) {
  const User = state.user
  try {
    let user = await User.find(
      {
        _id: {
          account: payload.data.account,
        }
      }
    ).exec()

    // if user already exists do not insert it in again
    if (user.length !== 0) return

    user = new User(
      {
        _id: {
          account: payload.data.account,
        },
        username: payload.data.username,
      }
    )
    await user.save()
  } catch (err) {
    console.error(err)
  }
}

export default add
