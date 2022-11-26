const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

fs.writeFile(path.join(__dirname, 'lorem2.txt'), 'nice', (err) => {
  if (err) throw err
  console.log('sucess write')

  fs.appendFile(
    path.join(__dirname, 'lorem2.txt'),
    '\n\n\nnice to meet you',
    (err) => {
      if (err) throw err
      console.log('sucess append')

      fs.rename(
        path.join(__dirname, 'lorem2.txt'),
        path.join(__dirname, 'lorem3.txt'),
        (err) => {
          if (err) throw err
          console.log('sucess rename')
        }
      )
    }
  )
})

process.on('uncaughtException', (err) => {
  console.log(err)
  process.exit(1)
})
