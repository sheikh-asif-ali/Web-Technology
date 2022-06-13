 const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    fs.readFile("./employee.json",(err,data) => {
        if(err){
            res.write(err);
        }else{ 
            res.write(data);
        }
        res.end();
})
});
const PORT =3000;
server.listen(PORT,(err) => {
    if(err) {
        console.log("Error = ",err);
    }
    //console.log("Server is running on port:" +PORT);
    console.log(`Server is running on port: ${PORT}`);
});