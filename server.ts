const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('This is from backend')
})

const PORT = 8000;
app.listen(PORT, () => console.log(`Node JS Server Started`))