const Koop = require('koop')
const koop = new Koop()
const vectorTiles = require('../src')
const files = require('@koopjs/provider-file-geojson')
koop.register(vectorTiles)
koop.register(files)
koop.server.listen(8085)
