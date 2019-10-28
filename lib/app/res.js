function response(res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return res;
}
module.exports = response