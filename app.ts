import express from 'express'
import serverConfig from './frameworks/webserver/server'

const app = express()
serverConfig(app)

export default app
