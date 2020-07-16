const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
// 	app.use(
// 		proxy('/api', {
// 			target: 'http://192.168.34.44:8889',
// 			changeOrigin: true,
// 		})
// 	);
// };
// 版本问题不能导入proxy

//"proxy": "http://192.168.34.44:8889"

const apiProxy = createProxyMiddleware('/api', {
	target: 'http://192.168.34.44:8889',
	changeOrigin: true,
});
//target是要请求服务器的地址

module.exports = function (app) {
	app.use(apiProxy);
};
