const {resolve} = require('path');

exports.mock_port = 7002;
exports.router_path = resolve(__dirname, 'routes');
exports.router_prefix = '/vampire';

