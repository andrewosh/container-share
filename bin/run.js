var argv = require('minimist')(process.argv.slice(2), {
  alias: { t: 'torrent', h: 'help' }
})

var share = require('..')

if (!argv.torrent || argv.help) {
  console.log(require('../docs/run')())
  process.exit(0)
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
