const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const model = require('./model')
app.get('/login',async (req,res)=>{
     
    const user = await model.findOne({ email:req.body.email,password:req.body.password});
    
  

    res.send(user)
})

app.post('/save', async (req, res) => {
    const user = new model(req.body);
    await user.save();
    res.status(200).send('User saved');
  });
  

const mongoDB = process.env.MONGO_URL;
const PORT = process.env.PORT||3001
mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(app.listen(PORT,()=>{
    console.log("backend server ")
}))    

