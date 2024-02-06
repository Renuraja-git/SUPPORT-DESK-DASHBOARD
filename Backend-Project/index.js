const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CustomerModel = require("./models/Customer");
const TicketModel = require("./models/Ticket");
const port = 3000;


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://supportdesk:system@supportdesk.8peno9y.mongodb.net/Customer");

const database = mongoose.connection
console.log("database connected")

app.post('/login', (req,res)=>{
    const {fullname, password} = req.body;
    CustomerModel.findOne({fullname:fullname})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("Logged in Successfully")
            }else{
                res.json("Password is Incorrect")
            }
        }else{
            res.json("No Record Existed")
        }
    })
})


app.post('/register', (req,res)=>{
    CustomerModel.create(req.body)
    .then(customers => res.json(customers))
    .catch(err => res.json(err))
})


app.post('/addnewticket', (req,res) =>{
  TicketModel.create(req.body)
  .then(tickets => res.json(tickets))
  .catch(err => res.json(err))
})

app.get('/ticketstatustable', (req,res) => {
    TicketModel.find()
  .then(tickets=> res.json(tickets))
  .catch(err=> res.json(err))
})


app.listen(3000,()=>{
    console.log("server is running on" + port);
});


