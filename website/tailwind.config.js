const scalaVersion = require('./scala-version')
const path = require('path')
const scalajsMode = process.env.NODE_ENV === 'production' === 'production' ? 'opt' : 'fastopt'

module.exports = {
    mode: 'jit',
    purge: [
      path.resolve(__dirname, `./target/scala-${scalaVersion}/root-${scalajsMode}/*.js`),
      path.resolve(__dirname, './src/static/html/*.html'),
    ],
    theme: {
    },
    corePlugins: {},
    plugins: [],
}
