class NewsController{
    index(req, res) {
        // [GET] /news
        res.render('news');
    }
    show(req, res) {
        // [GET] /news/:slug là biến động nhận nhiều giá trị ngẫu nhiên
        res.send('ok meow dark')
    }
}
module.exports = new NewsController
// tạo ra một đối tượng NewsController và exports ra ngoài để require vào