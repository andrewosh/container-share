var appName = require('./package.json')['name']
module.exports = require('rc')(appName, {
  port: 3000,
  swarmPort: 3001,
  db: 'torrents.db',
  shareDb: 'share.db',
  data: '.',
  idLength: 15
})

