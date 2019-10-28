# **VLWF**

Very Lightweight Web Framework

# Example
```js
var vlwf = require('vlwf') // Require the module
var app = new vlwf.app() // Create a new app

app.init() // Initialize the app

app.get('/', (req, res) => { // Listen for request when the url is `/`
    //res.writeHead(200, {'Content-Type': 'text/plain'}) // Optionally, specify the content type. Default is text/html
    res.write('Hello<br>') // Use .write to specify what you want to send
    res.write('hello') 
    res.end() // End the request by sending the written response.
})

app.listen(9090) // Listen for requests on port 9090!
```