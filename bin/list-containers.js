var argv = require('minimist')(process.argv.slice(2), {
  alias: { a: 'all', h: 'help' }
})

var share = require('..')

if (argv.all) {
  var opts = { all: argv.all }
}
if (argv.help) {
  console.log(require('../docs/list-containers')())
  process.exit(0)
}

share.listContainers(opts, function (err, containers) {
  if (err) {
    console.error('could not get list of containers:', err)
    process.exit(2)
  }
  console.log(containers)
})
