var website = require('./lib/website.js')
var app = new website.app()

app.init()

app.get('/', (req, res) => {
    res.write('Hello World!')
    res.end()
})

app.listen(9090)