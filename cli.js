#!/usr/bin/env node

var cmd = process.argv[2]

process.argv.splice(2, 1)

if (cmd === 'create') require('./bin/create')
else if (cmd === 'run') require('./bin/run')
else if (cmd === 'list-images') require('./bin/list-images')
else if (cmd === 'list-containers') require('./bin/list-containers')
else require('./help')()
