const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const add=path.join(__dirname,"../public");
const hbspath=path.join(__dirname,"../templets/views");
const partials_path=path.join(__dirname,"../templets/partials");
var server_port = process.env.YOUR_PORT || process.env.PORT ||8000;
var server_host = process.env.YOUR_HOST || 'localhost';
app.use(express.static(add));
app.set('view engine', 'hbs');
app.set('views', hbspath);
hbs.registerPartials(partials_path);

  
app.get("",(req,res)=>{

  res.render('index');
  
  
});
app.get("/about",(req,res)=>{
  
  res.render('about');
  
  
});
app.get("/weather",(req,res)=>{
  
  res.render('weather');
  
  
});
app.get("/me",(req,res)=>{
  
  res.render('me');
});
  
app.get("*",(req,res)=>{
  
  res.render('error',{
    error_msg:"opps page not found", 
    
  });
});
  
  



app.listen(server_port, server_host,function() {
    console.log('Listening on port %d', server_port);
});

