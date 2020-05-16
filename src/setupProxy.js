const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
     target: 'https://api.baxiaobu.com',
     changeOrigin: true,
     pathRewrite: {
       '^/api': ''
     }
    })
  )
  app.use(createProxyMiddleware('/aps',{
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': ''
      }
    })
  )
}