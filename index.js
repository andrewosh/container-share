var proc = require('child_process')

var request = require('request')
var urljoin = require('url-join')

var conf = require('./conf')

var baseUrl = 'http://localhost:' + conf.port

function createTorrent (container, name, cb) {
  request({
    url: urljoin(baseUrl, 'torrents'),
    method: 'POST',
    json: true,
    body: {
      container: container,
      name: name
    }
  }, function (err, res, body) {
    if (err) return cb(err)
    return cb(null, body)
  })
}

function listTorrents (cb) {
  request({
    url: urljoin(baseUrl, 'torrents'),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)
    return cb(null, body)
  })
}

function listContainers (cb) {
  request({
    url: urljoin(baseUrl, 'containers'),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)
    return cb(null, body)
  })
}

function launchContainer (name, cb) {
  var child = proc.spawn('torrent-docker', ['boot', name], { stdio: 'inherit' })
  child.on('error', function (err) {
    return cb(err)
  })
  child.on('close', function (code) {
    return cb(null, code)
  })
}

module.exports = {
  createTorrent,
  listTorrents,
  listContainers,
  launchContainer
}
