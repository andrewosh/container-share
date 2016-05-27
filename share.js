var swarm = require('discovery-swarm')()
var hyperdrive = require('hyperdrive')
var level = require('level')

var conf = require('./conf')
var db = level(conf.shareDb)
var drive = hyperdrive(db)

var link = new Buffer(process.env['CONTAINER_DRIVE_KEY'], 'hex')
var archive = drive.createArchive(link)

swarm.listen()
swarm.join(link)
swarm.on('connection', function (connection) {
  connection.pipe(archive.replicate()).pipe(connection)
})
