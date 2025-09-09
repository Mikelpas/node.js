const express = require ('express');
const app = express();
require('ejs')
app.set('view engine', 'ejs');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.URI;
// const port = 5100;
const mongoose = require('mongoose')
const customerRouter = require("./routes/user.route")



app.use(express.urlencoded({ extended: true }));



mongoose.connect(URI)
.then(() => {
    console.log("Connected to MongoDB");
    
}).
catch((err) => {
    console.log("MongoDB connection error:", err);
});

const port = process.env.PORT || 5100;

// let customerSchema = mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true , unique: [true, "Email has been taken, please choose another one"]},
//     password: {type: String, required: true},
// });

// let customerModel = mongoose.model('Customer', customerSchema);

// allCustomers = [];
app.use('/user', customerRouter)


// app.post('/register', (req, res) => {
//     console.log(req.body);
//     // res.send('confirmed')
//     // allCustomers.push(req.body)
//     let newCustomer = new customerModel(req.body);
//     newCustomer.save()
//     .then(() => {
//         res.redirect('/dashboard');
//     })
//     .catch((err) => {
//         console.error("Error registering customer:", err);
//     });
// })


// app.post('/login', (req, res) => {
//     res.send('confirmed again')
// });


app.listen(port, () => {
    console.log('App has started already');
    
});
