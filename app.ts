import express from 'express'
import { serverConfig } from './src/frameworks/webserver'
import routesIndex from './src/frameworks/webserver/routes/routesIndex'
import expressConfig from './src/frameworks/webserver/expressConfig'

const app = express()
serverConfig(app).startServer()
expressConfig(app)
routesIndex(app)

export default app
