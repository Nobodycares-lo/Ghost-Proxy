import express from 'express'
import basicAuth from 'express-basic-auth'
import http from 'node:http'
import { createBareServer } from '@tomphttp/bare-server-node'
import path from 'node:path'
import cors from 'cors'
import config from './config.js'
const __dirname = process.cwd()
const server = http.createServer()
const app = express(server)
const bareServer = createBareServer('/o/')
const PORT = process.env.PORT || 8080
if (config.challenge) {
    console.log('Password protection is enabled. Usernames are: ' + Object.keys(config.users))
    console.log('Passwords are: ' + Object.values(config.users))

    app.use(
        basicAuth({
            users: config.users,
            challenge: true,
        })
    )
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'static')))

if (config.routes !== false) {
    const routes = [
        { path: '/', file: 'index.html' },
    ]

    routes.forEach((route) => {
        app.get(route.path, (req, res) => {
            res.sendFile(path.join(__dirname, '~', route.file))
        })
    })
}
server.on('listening', () => {
    console.log(`Running at http://localhost:${PORT}`)
})

server.listen({
    port: PORT,
})