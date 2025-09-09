const customerModel = require("../models/user.model")

exports.getSignup = (req, res) => {
    res.render('signup');
}


exports.postRegister = (req, res) => {
    console.log(req.body);
    let newCustomer = new customerModel(req.body);
    newCustomer.save()
    .then(() => {
        res.redirect("/user/dashboard");
    })
    .catch((err) => {
        console.error("Error registering user:", err);
    })
}

exports.getSignin = (req, res) => {
    res.render("signin");
}

exports.postLogin = (req, res) => {
    res.send("Login route");
}

exports.getDashboard = (req, res) => {
    customerModel.find()
    .then((data) => {
        console.log(data);
        allCustomers = data;
        res.render('index', {allCustomers});
    })
    .catch((err) => {
        console.error("Error fetching users", err);
        res.status(500).send("Internal Server Error");
    })
} 