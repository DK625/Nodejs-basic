const express = require('express')
var morgan = require('morgan') 
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))
app.engine('hbs', engine({
    extname: '.hbs' // tạo phần mở rộng là .hbs thay vì .handlebars để ngắn hơn
}))
//app sử dụng Template engine là handlebars, name đặt là 'handlebars', thả thư viện vào bên cạnh
app.set('view engine', 'hbs') // đặt view engine là handlebars, handlebars là tên bên trên


const path = require('path')
/*
console.log(__dirname) // c:\njs\src đường dẫn thư mục đến file hiện tại
*/
app.set('views', path.join(__dirname, 'resource/views')) // đặt đường dẫn thư mục cho view
// app.set('views', path.join(__dirname, 'views')) sẽ lỗi vì đường dẫn không đúng
/*
app.get('/', (req, res) => {
    return res.render(
        'home'
    );
})
app.get('/news', (req, res) => {
    return res.render(
        'news'
    );
})
*/
/*
template đòi hỏi layout có header và footer
sau đó cầm phần content của home đưa vào giữa layout
header, footer tĩnh, khi render 1 trang khác thì giữ layout, thay đổi phần body

theo cấu trúc khi gọi app.get('/)... return 'home' sẽ gọi file home.handlebars trong views
file news cũng tương tự
template sẽ ghép nội dung trong file được chọn cho vào file main đã tạo trong thư mục layouts
*/
app.listen(port, () => console.log(`Example app listeninng at http://localhost:${port}`))

/*
Static file & SASS
Cấu hình dự án sử dụng file tĩnh, những file CSS, file img
*/
app.use(express.static(path.join(__dirname, 'public'))) // tạo đường dẫn c:\njs\src\public thư mục muốn đưa vào
/* express.static kiểm tra đối với file tĩnh, trả về đường dẫn của file được chọn
 vd http://localhost:3000/img/anh.jpg --> c:\njs\src\public/img/anh.jpg
 */

/*
trang web không thể link được file .scss mà nó cần link cái file css được combine bởi file .scss trong thư mục scss
"watch": "sass src/resources/scss/app.scss src/public/css/app.css", sau khi chạy command này, sẽ dùng sass để combine file scss thành file app.css --> chạy bằng npm run watch để theo dõi
tích hợp boostrap
*/

// app.get('/search', (req, res) => {
//     return res.render(
//         'search'
//     );
// })

const route = require('./routes') // mặc định chỉ đến file index
route(app)
// những trang không có tài nguyên như home, search, contact,... đưa nó chung vào 1 file, k cần tạo nhiều controllers, chỉ cần tạo 1 file site.js trong router và 1 file siteController.js trong controllers
