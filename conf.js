var path = require('path')

var appName = require('./package.json')['name']

module.exports = require('rc')(appName, {
  torrentsDir: path.join(__dirname, 'torrents'),
  name: appName,
  port: 3000,
  swarmPort: 3001,
  db: 'torrents.db',
  shareDb: 'share.db',
  data: '.',
  idLength: 15
})

