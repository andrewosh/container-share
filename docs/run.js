var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} run [image-name]


  Live-boot a container from a torrented image. See the list of available images by running
  \`${conf.name} list-torrents\`

  `
}
