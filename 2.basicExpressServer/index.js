const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World!!");
});
app.post('/', (req, res)=>{
    res.send("Post request recieved!");
});
app.delete('/', (req, res)=>{
    res.send("DELETE request received!!")
})

app.listen(PORT, ()=>{
    console.log("Server is running on PORT:", PORT);
});