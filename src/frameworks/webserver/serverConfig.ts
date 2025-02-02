import { Application } from 'express'

export function serverConfig(app: Application) {
  function startServer() {
    app.listen(3000, () => console.log('Hello clean archi with typescript !'))
  }
  return {
    startServer,
  }
}
