const jsonServer = require('json-server')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = jsonServer.create()
const data = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(data)
server.listen(3001, () => {
  console.log('JSON Server is running! Visit http://localhost:3001/posts Change db.json to get other data')
})
