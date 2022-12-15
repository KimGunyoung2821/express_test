const express = require('express')
const app = express()
const nunjuscks = require('nunjucks')

app.set('view engine', 'html')
nunjuscks.configure('views', {
    express: app
})
// 어떤 폴더 기준으로 할거냐  ,내부적으로 next가 실행된다 , http://localhost:3000/css/index.css , js/index.js
app.use(express.static('public'))
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res,) => {
    const name = req.query.name
    res.render('index.html', { name: name })
    console.log('client to connected')
})

app.get('/user/join', (req,res)=>{
    res.render('user/join.html')
})

app.post('/user/join', (req, res)=>{
    res.redirect('/user/welcome')
    console.log(req.body)
})

app.get('/user/welcome', (req,res)=>{
    res.send('회원가입 !!')
})

app.listen(3000, () => {
    console.log(`start server!!`)
})