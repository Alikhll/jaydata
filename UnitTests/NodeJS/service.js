(function(contextTypes){

var connect = require("connect");

var app53999 = connect();
$data.Class.defineEx("newsreader", [contextTypes["NewsReader"], $data.ServiceBase]);
app53999.use("/newsreader", $data.JayService.createAdapter(newsreader, function(){
    return new newsreader({ name: "mongoDB", databaseName: "NewsReader" });
}));

app53999.listen(53999);

})(require("./context.js").contextTypes);