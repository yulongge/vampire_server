const config = require('../../config');

module.exports = (app, prefix, connection)=>{
    app.get(`${config.router_admin}/*`, function(req, res) {
        res.render('admin/public/index', { title: 'admin' });
    })
}
