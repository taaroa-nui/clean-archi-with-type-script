import express from 'express'
import { serverConfig } from './src/frameworks/webserver'
import routesIndex from './src/frameworks/webserver/routes/routesIndex'
import expressConfig from './src/frameworks/webserver/expressConfig'

const expressApp = express()
serverConfig(expressApp).startServer()
expressConfig(expressApp)
routesIndex(expressApp)

export default expressApp
