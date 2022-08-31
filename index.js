require("dotenv").config();
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.DB_URL);
  console.log("Database Connection Successfull");
} catch (error) {
  (error) => console.log(error);
}

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// const UserModal = require("./Models/Users");
const PropertyModal = require("./models/Properties");

app.get("/", (request, response) => {
  response.send("Wellcome to Real Estate Serve");
});

// Auth Crud
// app.post("/registerUser", async (request, response) => {
//   const user = request.body;
//   const newUser = new UserModal(user);
//   await newUser.save();
//   response.json(user);
// });

// app.get(`/getUser/:firebaseId`, (request, response) => {
//   const id = request.params.firebaseId;
//   UserModal.find({ firebaseId: id }, (error, user) => {
//     if (error) {
//       response.json(error);
//     } else {
//       response.json(user);
//     }
//   });
// });

// Property Crud
app.post("/addProperty", async (request, response) => {
  const property = request.body;
  const newProperty = new PropertyModal(property);
  await newProperty.save();
  response.json(property);
});

app.get(`/getProperty`, (request, response) => {
  PropertyModal.find({}, (error, property) => {
    if (error) {
      response.json(error);
    } else {
      response.json(property);
    }
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Run on ${process.env.PORT || 8000} Port.`);
});









// require("dotenv").config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const PropertyModel = require('./models/Properties');
// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://root:root@cluster0.gh8v8b6.mongodb.net/real_estate_hackathon');

// // app.post("/insert", async (req, res) => {
// //     const propertyTitle = req.body.propertyTitle;
// //     const properties = new PropertyModel({propertyTitle: propertyTitle,});

// //     try{
// //         await properties.save();
// //         res.send("Property Created Successfully");
// //     }
// //     catch (err) {
// //         console.log(err);
// //     }
// // });

// app.post("/insert", async (request, response) => {
//     const property = request.body;
//     const newProperty = new PropertyModel(property);
//     await newProperty.save();
//     response.json(property);
// });

// // app.get("/read", async (req, res) => {
// //     PropertyModel.find({}, (err, result) => {
// //         if(err){
// //             res.send(err);
// //         }
// //         res.send(result);
// //     })
// // })

// app.get("/", (request, response) => {
//     response.send("Wellcome to Real Estate Server");
//   });

// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// });