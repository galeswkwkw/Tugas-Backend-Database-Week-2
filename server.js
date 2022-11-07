<<<<<<< HEAD
const express = require('express')
const cors=require('cors')
//const m$user=require('./modules/user.module')
//const prisma = require('./helpers/database')
const routes = require('../routes')
const app = express()
const port = 8000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

routes(app)


module.exports=app
=======
const express = require("express");
const cors = require("cors");
const routes = require("/routes");

const app = express();
const port = 8000;

//handle
app.use(cors());
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

routes(app);



module.exports = app;
>>>>>>> 0bcf42ab825d25901377cc293d46dd5bb1f6b957
