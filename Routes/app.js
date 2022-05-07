const express= require('express');
const app= express();
const multer =require('multer');
// const bodyParser= require('body-parser');
const userControllers= require('../Controllers/userControllers');


app.use(express.json());
// app.post('/user',userControllers.user);
const diskStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`${__dirname}/images`)
    },
    filename:function(req,file,cb){
        let extension=file.mimetype.split("/")[1];
        cb(null,`admin-${file.fieldname}-${Date.now()}.${extension}`);
    }
})
const upload=multer({
    storage:diskStorage
})
app.use(express.json());
app.post("/user",upload.array("profilePic"),userControllers.Register);
app.post("/gallery",upload.single("coverImage",5),userControllers.Gallery);
module.exports=app;