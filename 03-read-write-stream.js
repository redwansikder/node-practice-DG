const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem3.txt'), {
  encoding: 'utf8',
})

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'lorem4.txt'))

rs.on('data', (dataChunk) => {
  ws.write(dataChunk)
})
