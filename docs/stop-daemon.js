var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} stop-daemon

  Stop the seeder daemon process

  `
}
