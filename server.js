var express = require('express'); // access to entire express API
var app = express();

// 'app.use' allows you to add functionality to application
app.use(express.static('public')); // move .html, .css, .js files into public folder

// starts server at port (localhost: 30000) and function (will get called once server is up)
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
