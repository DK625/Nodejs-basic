const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    // app.get('/search', (req, res) => {
    //     return res.render(
    //         'search'
    //     );
    // })
}
module.exports = route;