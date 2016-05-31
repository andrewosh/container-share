var argv = require('minimist')(process.argv.slice(2))

var share = require('..')

if (!argv.c && !argv.container) {
  console.error('You must specify a container ID to seed')
}
var name = argv.n || argv.name
var container = argv.c || argv.container

share.createTorrent(container, name, function (err, torrent) {
  if (err) {
    console.error('Could not create torrent from container:', err)
    process.exit(2)
  }
  console.log('Successfully created torrent:', torrent)
})
