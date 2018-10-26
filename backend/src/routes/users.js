import { Router } from 'express'
import { listUsers } from '../services/user'

export default () => {
  let api = Router()

  api.get('/users', listUsers)

  return api
}
