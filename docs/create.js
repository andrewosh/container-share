var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} create [container-id]


  Creates a shareable Docker image from a container ID. See the list of available containers
  by running \`${conf.name} list-containers\`

  `
}
