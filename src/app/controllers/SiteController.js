class SiteController{
    index(req, res) {
        // [GET] /
        res.render('home');
    }
    search(req, res) {
        // [GET] /search
        res.render('search');
        // res.send('search')
    }
}
module.exports = new SiteController
// tạo ra một đối tượng SiteController và exports ra ngoài để require vào