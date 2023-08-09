const cloudinary=require('cloudinary').v2
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY , 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
module.exports.getAddProduct = (req,res,next)=>{
    
    res.render('addproduct');
}

module.exports.postAddProduct = (req,res,next)=>{
    console.log(req.file);
    cloudinary.uploader.upload(`uploads/${req.file.filename}`, 
  function(error, result) {console.log(result); });
    res.send("OK");
}