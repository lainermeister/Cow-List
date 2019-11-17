const express = require('express')
const app = express()
const port = 3000
const Cow = require('./models/Cow.js')


app.use(require('body-parser').json())
app.use(require('morgan')('dev'))
app.use(express.static('./client/dist'))

app.get('/', (req, res) => {

    res.render('/')
})

app.get('/api/cows', (req, res) => {
    Cow.showAllCows()
        .then((cowList) => {
            res.send(cowList)
        })
})

app.post('/api/cows', (req, res) => {
    Cow.addCow(req.body.name, req.body.description)
        .then((response) => {
            res.send(response)
        })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))