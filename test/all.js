var test = require('tape')
var request = require('request')
var docker = require('dockerode')

var conf = require('../conf')
var start = require('../daemon')

start(function (err) {
  if (err) throw err
  startUbuntu(function (err) {
    if (err) throw err
    runTests()
  })
})

function startUbuntu (cb) {
  
}

// start a container
// list running containers and see the above container
// commit the container, write the torrent to hyperdrive, and verify that it's there
// TODO: live-boot a container

function runTests () {
  test('commit container', function (t) {
    t.plan(2)
    request({
      url: 'http://localhost:' +conf.port + '/torrents',
      method: 'POST',
      json: true,
      body: {
        container: 
      }
    })
  })
  
  test('check seeding', function (t) {
    t.plan(2)
  })

  test('live-boot image', function (t) {
    t.plan(2)
  })
}

