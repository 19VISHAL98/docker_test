const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', async(req, res)=> {
    return res.status(200).send({ status: 'ok', msg: "Working........."})
})
app.listen(3001, ()=> {
    console.log(`App is running successfully on port 3001`)
})