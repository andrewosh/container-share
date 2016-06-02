var argv = require('minimist')(process.argv.slice(2), {
  alias: { h: 'help' }
})

var share = require('..')

if (argv.help) {
  console.log(require('../docs/list-torrents')())
  process.exit(0)
}

share.listTorrents(function (err, torrents) {
  if (err) {
    console.error('Could not get list of torrents:', err)
    process.exit(2)
  }
  console.log(torrents)
  process.exit(0)
})
