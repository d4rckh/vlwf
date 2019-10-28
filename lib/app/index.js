const http = require('http');
const events = require('events');
const request = require('./req')
const response = require('./res')

class app {
    constructor(settings) {
        
        this.e = new events.EventEmitter()
        this.http = undefined
    }

    init() {
        this.http = http.createServer((req, res) => {
            const newRequest = request(req)
            const newResponse = response(res)
            this.e.emit('request', newRequest, newResponse)
        })
    }

    listen(port) {
        this.http.listen(port)
    }

    get(url, cb) {
        this.e.on('request', (req, res) => {
            if (req.method === 'GET' || req.url === url) {
                cb(req, res)
            }
        })
    }

    post(url, cb) {
        this.e.on('request', (req, res) => {
            if (req.method === 'POST' || req.url === url) {
                cb(req, res)
            }
        })
    }

}

module.exports = app