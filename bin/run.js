var argv = require('minimist')(process.argv.slice(2))

var share = require('..')

if (!argv.t && !argv.torrent) {
  console.error('You must specify torrent name to launch')
}
var torrent = argv.t || argv.torrent

console.log('Booting up container from torrent:', torrent)
share.launchContainer(torrent, function (err, torrent) {
  if (err) {
    console.error('Could not boot up container:', err)
    process.exit(2)
  }
  console.log('Container exited')
})
