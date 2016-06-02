var path = require('path')
var proc = require('child_process')
var randomstring = require('randomstring')

var conf = require('./conf')

module.exports = {
  getTorrentBin: function () {
    try {
      var binPath = proc.execSync('npm bin', { encoding: 'utf8' }).trim()
      return path.join(binPath, 'torrent-docker')
    } catch (err) {
      console.error('could not find torrent-docker bin')
      throw err
    }
  },
  makeId: function () {
    return randomstring.generate({
      charset: 'hex',
      capitalization: 'lowercase',
      length: conf.idLength
    })
  }
}

