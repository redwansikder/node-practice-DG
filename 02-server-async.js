const fsPromise = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, 'lorem.txt'),
      'utf8'
    )

    await fsPromise.unlink(path.join(__dirname, 'lorem.txt'))

    await fsPromise.writeFile(path.join(__dirname, 'files', 'lorem2.txt'), data)

    await fsPromise.appendFile(
      path.join(__dirname, 'files', 'lorem2.txt'),
      `\n\n This part is added later.`
    )

    await fsPromise.rename(
      path.join(__dirname, 'files', 'lorem2.txt'),
      path.join(__dirname, 'files', 'lorem3.txt')
    )
  } catch (err) {
    console.error(err)
  }
}

fileOps()

process.on('uncaughtException', (err) => {
  console.log(err)
  process.exit(1)
})
