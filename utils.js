const fs = require('fs')

function writeDataToFile(filename, conent) {
  fs.writeFileSync(filename, JSON.stringify(conent), 'utf8', (err) => {
    if(err) {
      console.log(err)
    }
  })
}

module.exports = {
  writeDataToFile
}