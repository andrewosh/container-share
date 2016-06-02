var conf = require('./conf')

module.exports = function help () {
  console.log(`Usage: ${conf.name} [cmd]

  Available commands are

    create           create and seed a new Docker torrent
    run              boot a container from a torrent
    list-torrents    list all available torrents that can be booted
    list-containers  list all containers that can be shared
    start-daemon     start the seeder daemon process
    stop-daemon      stop the seeder daemon process

  Add --help after any command for detailed help`)
}
