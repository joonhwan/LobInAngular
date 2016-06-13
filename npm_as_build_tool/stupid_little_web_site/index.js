var app = require("koa")();

app.use(function *() {
  this.body = "Koa says hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port);
console.log("Application started");
