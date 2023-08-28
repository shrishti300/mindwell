// password  - ZpnMrGA5uyspLnnn
// username - shrishti0301
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const PORT  = process.env.PORT || 5000;
const fs = require('fs');
const ImageModel = require("./models/ImageModel");
app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
    origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
}

mongoose.connect(
	"mongodb+srv://shrishti0301:ZpnMrGA5uyspLnnn@cluster0.ad1gnwm.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("Connected to MongoDB");
});


const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage:Storage,
}).single("testImage")


app.post('/upload', (req,res) =>{
    upload(req,res,(err) =>{
        if(err){
            console.log(err);
        }else{
            const newImage  = new ImageModel({
                name:req.body.name,
                image:{
                    data:fs.readFileSync("uploads/" + req.file.filename),
                    contentType:"image/png",
                },
            });
            newImage.save().then(()=>res.send('successfully uploaded')).catch((err)=> console.log(err));
        }
    })
})


app.get('/', async(req,res) =>{
    const allData= await ImageModel.find();
    res.json(allData);
})


// const userSchema = new mongoose.Schema({
// 	name: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// 	//token:{ type: String, required: true },
// });
// const User = mongoose.model("User", userSchema);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});