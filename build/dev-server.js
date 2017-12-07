require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)
// 跨域
var httpProxy = require('http-proxy')
const targetUrl = 'http://172.31.3.232:7050';
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  // 20秒超时
  proxyTimeout: 20 * 1000,
  ws: false
});
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/'});
});
app.use('/test', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/'});
});
app.use('/login', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/login'});
});
/*
  接口直接登录: /server/login.html
*/
/* app.get('/_react_/login', (req, resp) => {
  const request = superagent.post(targetUrl + '/portal/logon.action');
  request.type('form');
  request.send({
    'identifiers.src': 'waiqin365',
    'identifiers.type': 0,
    'identifiers.password': 'a11111',
    'identifiers.verifyCode': undefined,
    'refer': 'https%3A%2F%2Fcloud.waiqin365.com',
    'identifiers.tenantname': 'test_flow',
    'identifiers.code': 'flow_01'
  });
  request.end((err, res = {}) => {
    resp.append('Set-Cookie', res.header['set-cookie']);
    resp.json({success: true, cookie: res.header['set-cookie']});
  });
}); */

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
