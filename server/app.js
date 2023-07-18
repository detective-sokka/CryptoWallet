const express= require('express');
const app = express();
const mongoose=require('mongoose');
const cors = require('cors');
const PORT=8080;

app.use(cors());

mongoose.connect('mongodb://127.0.0.1/CryptoWallet',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


mongoose.connection.on('connected',()=>{
    console.log("connected")
});

require('./models/user');

app.use(express.json());
app.use(require('./routes/user'));

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
 