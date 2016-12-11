var app=require("express")();
var multer  = require('multer');
var path=require("path");
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade');








app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){ 
    // console.log(1);
    // console.log(req.body); //form fields 	/* example output: { title: 'abc' } */ 
    console.log(req.file);
    //res.render("size",{size:req.file.size});
    res.end(JSON.stringify({size:req.file.size}));
});


app.get("/",function(req,res){
  res.render('index');
    
});

app.listen(8080);