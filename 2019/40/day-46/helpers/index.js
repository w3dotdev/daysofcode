const fs = require('fs');
const { format } = require('date-fns');

const getNewId = () => {
 return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

const newDate = () => format(new Date(), 'yyyy-MM-dd HH:mm:ss');

const verifyID = (array, id) => {
  return new Promise((resolve, reject) => {
    const row = array.find(r => r.id == id)
    if (!row) {
      reject({
        message: 'invalid ID',
        status: 404
      })
    }
    resolve(row);
  })
}

const writeJSONFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = {
  getNewId,
  newDate,
  verifyID,
  writeJSONFile
}
