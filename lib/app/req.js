class request {
    constructor(request) {
        this.headers = request.headers
        //this.rawheaders = request.rawheaders
        this.httpVersion = request.httpVersion
        this.url = request.url
        this.method = request.method
        this.socket = request.connection // => new Socket()
    }
}

module.exports = request