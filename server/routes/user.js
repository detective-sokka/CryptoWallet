const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post("/signup", function (req, res) {
  //Check if all fields are provided and are valid:
  console.log(req);

  if (!req.body.email || !req.body.password) {

    res.status(400);
    res.json({ message: "Bad Request" });

  } else {
    
    const user = new User({
                
        name : req.body.name,
        email: req.body.email,
        password:req.body.password
    });

    user.save().then(function (doc) {

        console.log(doc._id.toString());
        res.json({ message: "New user created" });

    }).catch(function (error) {

        console.log(error);
    });    
  }
});

/* TODO - Use encryption to encrypt user data.*/
router.post("/signin", function (req, res) {
  
  if (!req.body.email || !req.body.password) {
          
    res.status(400);    
    res.json({ message: "Bad Request" });

  } else {

    console.log(req.body);
    User.findOne({

      email: req.body.email,
    })
    .then((user) => {

        if (!user) {
        
          return res.status(422).json({ error: "Invalid Email or password" });
        }

        const { _id, name, email, password } = user;
        console.log("user details", user);
        return res.json({ user: { _id, name, email, password }});

      }).catch((err) => {

        console.log(err);
      });
  }
});

/* TODO - Complete this */
router.put("/edit", async (req,res) => {

});

/* TODO - Complete this */
router.delete("/remove", (req, res)=>{

});

module.exports = router;
