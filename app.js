const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const cros = require('koa2-cors')
const http = require('http').createServer(app.callback())
const io = require('socket.io')(http)


http.listen(3000)
router.get('/hello', async (ctx) => {
    ctx.body = 'hello world'
})
app.use(router.routes())
// app.use(cros())
app.use(async (ctx, next) => {
    ctx.body = 'hello world'
})


io.on('connection', (socket) => {
    console.log('connect success')
    socket.on('test', (data) => {
        console.log(`test` + data.name)
    })
})

console.log('run success')
