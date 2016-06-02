#!/usr/bin/env node

var cmd = process.argv[2]

process.argv.splice(2, 1)

if (cmd === 'create') require('./bin/create')
else if (cmd === 'run') require('./bin/run')
else if (cmd === 'list-torrents') require('./bin/list-torrents')
else if (cmd === 'list-containers') require('./bin/list-containers')
else if (cmd === 'start-daemon') require('./bin/start-daemon')
else if (cmd === 'stop-daemon') require('./bin/stop-daemon')
else require('./help')()
