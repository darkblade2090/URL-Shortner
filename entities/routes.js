const homeRoutes = require('./home/homeRoutes');

module.exports = function(app) {
    
    app.use('/', homeRoutes);
}