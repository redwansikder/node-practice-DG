const fs = require('fs')
const path = require('path')

const fileOps2 = () => {
  try {
    if (!fs.existsSync(path.join(__dirname, 'new'))) {
      fs.mkdir(path.join(__dirname, 'new'), () => {
        console.log('Dir removed')
      })
    }

    if (fs.existsSync(path.join(__dirname, 'new'))) {
      fs.rmdir(path.join(__dirname, 'new'), () => {
        console.log('Dir removed')
      })
    }
  } catch (err) {
    console.error(err)
  }
}

fileOps2()
