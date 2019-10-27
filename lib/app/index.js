const http = require('http');
const events = require('events');
const request = require('./req')

class app {
    constructor(settings) {
        
        this.e = new events.EventEmitter()
        this.http = undefined
    }

    init() {
        this.http = http.createServer((req, res) => {
            const newRequest = new request(req)
            this.e.emit('request', newRequest, res)
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