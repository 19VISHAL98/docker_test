const express = require('express');
const app = express();
require('dotenv').config()
console.log(process.env.PORT , "PORT")
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', async(req, res)=> {
    return res.status(200).send({ status: 'ok', msg: "Jenkins Working......... 👍👍❤️ 😒"})
})
app.listen(PORT, ()=> {
    console.log(`App is running successfully on port ${PORT}`)
})