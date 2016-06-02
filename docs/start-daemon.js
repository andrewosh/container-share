var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} start-daemon

  Start the seeder daemon process that will be managed by PM2. If you would like to view the
  daemon's logs, first install PM2 globally, then use its CLI tool to tail the logs:
  1) \`npm install pm2 -g\`
  2) \`pm2 logs ${conf.name}\`

  `
}
