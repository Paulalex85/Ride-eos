import add from './add'

const account = process.env.EOSIO_CONTRACT_ACCOUNT_USER

export default [
  {
    actionType: `${account}::add`, // account::action name
    updater: add
  },
]
