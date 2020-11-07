const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
  //https://criandoumcrudpatrickisido-
  //  fabmus1.dcoder.run/
})

app.get('/test', (req, res) => {
  res.send('Hello World TEST!')
  //https://criandoumcrudpatrickisido-
  //  fabmus1.dcoder.run/test
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)}
)
