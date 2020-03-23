const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({ nome: 'Diego' });
})

app.listen(3333);