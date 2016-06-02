var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} list-torrents


  List all seeded images that can be booted

  `
}
