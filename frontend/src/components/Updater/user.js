// Update the edited user or add user to users if a new user
export const updateUsersForCreateAndEdit = (prevState, updatedUser) => {
  let alreadyAdded = false
  let updatedUsers = prevState.users.map(post => {
    if ((user._id.timestamp === updatedUser._id.timestamp) && (post._id.author === updatedUser._id.author)) {
      alreadyAdded = true
      return { ...post, ...updatedUser }
    }
    return post
  })

  if (!alreadyAdded) {
    updatedUsers = [{ ...updatedUser, likes: 0 }, ...updatedUsers]
  }

  return updatedUsers
}