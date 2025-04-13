// http module is used to setup a basic http server
const http = require('http');

// setting up a server
const PORT = 3000;

// creating a server instance, it wont be in a running state
const server = http.createServer(async (req, res)=>{
    // everytime server hits any request, this function will be called
    console.log("request received!!");

    if(req.method=="GET"){
        res.end("GET Request received!!");
    }
    else if(req.method=="POST"){
        res.end("POST Request received!!");
    }
    else if(req.method=="PUT"){
        res.end("PUT Request received!!");
    }
}
)

// triggering the server
server.listen(PORT, ()=>{
    console.log("Server is running on PORT:", PORT);
})