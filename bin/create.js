var argv = require('minimist')(process.argv.slice(2), {
  alias: { c: 'container', h: 'help' }
})

var share = require('..')

if (!argv.container || argv.help) {
  console.log(require('../docs/create')())
  process.exit(0)
}

var name = argv.n || argv.name
var container = argv.c || argv.container

share.createTorrent(container, name, function (err, torrent) {
  if (err) {
    console.error('Could not create torrent from container:', err)
    process.exit(2)
  }
  console.log('\nSuccessfully created torrent:', torrent)
  process.exit(0)
})
