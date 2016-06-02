var path = require('path')
var proc = require('child_process')

var request = require('request')
var urljoin = require('url-join')
var pm2 = require('pm2')

var conf = require('./conf')
var util = require('./util')

var baseUrl = 'http://localhost:' + conf.port

function daemonIsRunning (cb) {
  pm2.connect(function (err) {
    if (err) return cb(err)
    pm2.describe(conf.name, function (err, desc) {
      if (err) return cb(err)
      return cb(null, desc.length !== 0)
    })
  })
}

function wrapDaemonRunning (func, cb) {
  daemonIsRunning(function (err, running) {
    if (err) return cb(err)
    if (!running) return cb(new Error('please start the seeder daemon before running this command'))
    return func(cb)
  })
}

function createTorrent (container, name, cb) {
  wrapDaemonRunning(function () {
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
  }, cb)
}

function listTorrents (cb) {
  wrapDaemonRunning(function () {
    request({
      url: urljoin(baseUrl, 'torrents'),
      json: true
    }, function (err, res, body) {
      if (err) return cb(err)
      return cb(null, body)
    })
  }, cb)
}

function listContainers (opts, cb) {
  wrapDaemonRunning(function () {
    if (typeof opts === 'function') {
      cb = opts
      opts = null
    }
    var all = (opts) ? opts.all : false
    request({
      url: urljoin(baseUrl, 'containers'),
      qs: { all: all },
      json: true
    }, function (err, res, body) {
      if (err) return cb(err)
      return cb(null, body)
    })
  }, cb)
}

function launchContainer (name, cb) {
  wrapDaemonRunning(function () {
    var id = util.makeId()
    var torrent = path.join(conf.torrentsDir, name)
    var child = proc.spawn(util.getTorrentBin(), ['boot', torrent, id], { stdio: 'inherit' })
    child.on('error', function (err) {
      return cb(err)
    })
    child.on('close', function (code) {
      return cb(null, code)
    })
  }, cb)
}

function startDaemon (key, cb) {
  if (typeof key === 'function') {
    cb = key
    key = null
  }
  if (key) {
    process.env['CONTAINER_DRIVE_KEY'] = key
  }
  pm2.connect(function (err) {
    if (err) return cb(err)
    pm2.start({
      name: conf.name,
      script: path.join(__dirname, 'daemon.js')
    }, function (err, apps) {
      return cb(err)
    })
  })
}

function stopDaemon (cb) {
  pm2.connect(function (err) {
    if (err) return cb(err)
    pm2.delete(conf.name, function (err) {
      return cb(err)
    })
  })
}

module.exports = {
  createTorrent,
  listTorrents,
  listContainers,
  launchContainer,
  startDaemon,
  stopDaemon
}
