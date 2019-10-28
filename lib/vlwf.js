module.exports.app = require('./app')

module.exports.utils = {
    headers: {
        content: {
            html: {
                'Content-Type': 'text/html'
            },
            plain: {
                'Content-Type': 'text/plain'
            }
        }
    }
}