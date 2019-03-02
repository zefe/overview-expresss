const express = require('express')
const app = express()
const port = 3000

app.use('/files', express.static('public'))

app.get('/', (req, res) => {
    console.log(`http:// ${req.hostname}:${port}`)
    res.send('Hello World!')

    console.log(res.statusCode)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))