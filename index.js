require('console-png').attachTo(console)
console.png(require('fs').readFileSync(require('path').join(__dirname, '/meme.png')))
