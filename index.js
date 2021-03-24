const express = require('express');


const app = express();

// function rootCall(req, res) { res.send('I know how to open node!') }
// // From the top function, the bottom function came(arrow function). You can write it directly in you app.get.
// const rootCall = (req, res) => res.send('I know how to open node!')
// app.get('/', rootCall)

app.get('/', (req, res) => {
    res.send('I know how to open node!')
})

app.listen(3000, () => console.log('Listening to port 3000'));
app.listen(4200, () => console.log('Listening to port 4200'));