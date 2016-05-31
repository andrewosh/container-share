var share = require('..')

share.listTorrents(function (err, torrents) {
  if (err) {
    console.error('Could not get list of torrents:', err)
    process.exit(2)
  }
  console.log(torrents)
})
