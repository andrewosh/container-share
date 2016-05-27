var appName = require('./package.json')['name']
module.exports = require('rc')(appName, {
  port: 3000,
  db: 'torrents.db',
  shareDb: 'share.db',
  data: '.',
  idLength: 15
})

