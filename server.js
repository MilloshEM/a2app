const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const port = 3000
const app = express()


app.use(express.static('public'))
app.use(bodyParser.json())



app.get('/api/words', (req, res) => {

    fs.readFile('content/words1.json', (err, content) => {

        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(content, "utf8")

      })

})

app.post('/api/word', (req, res) => {

    let newWords = req.body;
    res.writeHead(200);
    res.end("word added", "utf8")

    fs.readFile('content/words1.json', (err, content) => {

        let words = JSON.parse(content);
        words.words1.push(newWords)
        fs.writeFile('content/words1.json', JSON.stringify(words), ()=>{})
        
      })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))