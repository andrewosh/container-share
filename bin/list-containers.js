var minimist = require('minimist')

var share = require('..')

share.listContainers(function (err, containers) {
  if (err) {
    console.error('could not get list of containers:', err)
    process.exit(2)
  }
  console.log(containers)
})
