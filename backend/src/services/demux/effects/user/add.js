function add (state, payload, blockInfo, context) {
  const user = {
    _id: {
      account: payload.data.account,
    },
    username: payload.data.username
  }
  context.socket.emit('add', user)
}

export default add
