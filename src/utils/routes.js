import express from 'express'
import controller from '@/utils/filecontroller'
const router = express.Router()

const routes = (app) => {
  router.post('/upload', controller.upload)
  router.get('/files', controller.getListFiles)
  router.get('/files/:name', controller.download)

  app.use(router)
}

module.exports = routes
