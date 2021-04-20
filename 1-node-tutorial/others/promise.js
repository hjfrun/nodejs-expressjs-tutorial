const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err))

const start = async () => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8')
    // const second = await readFilePromise('./content/second.txt', 'utf8')

    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    console.log(first, second)
    await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first}, ${second}`, { flag: 'a' })
  } catch (err) {
    console.log(err)
  }
}

// async function start() {
//   const first = await getText('./content/first.txt')
//   console.log(first)
// }

start()


// const getText = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
