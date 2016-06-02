var randomstring = require('randomstring')

var conf = require('./conf')

module.exports = {
  makeId: function () {
    return randomstring.generate({
      charset: 'hex',
      capitalization: 'lowercase',
      length: conf.idLength
    })
  }
}

