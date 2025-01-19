import { Application } from 'express'

export default function serverConfig(app: Application) {
  function startServer() {
    app.listen(process.env.PORT, () =>
      console.log('Hello clean archi with typescript !')
    )
  }
  return {
    startServer,
  }
}
