var conf = require('../conf')

module.exports = function () {
  return `Usage: ${conf.name} list-containers


  List all containers that can be committed and shared

  --all, -a      display all containers, including those that have exited

  `
}
