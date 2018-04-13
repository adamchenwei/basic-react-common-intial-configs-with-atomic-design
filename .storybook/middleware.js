const proxy = require('http-proxy-middleware')

module.exports = function expressMiddleware (router) {
  router.use('/upload', proxy({
    target: 'http://localhost:8089',
    changeOrigin: true
  }));
  router.use('/api/campaigns', proxy({
    target: 'http://localhost:8089',
    changeOrigin: true
  }));
};
