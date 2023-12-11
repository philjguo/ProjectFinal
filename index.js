
//initiate server using expresss library
const express = require('express');
const app = express();

app.use('/', express.static('public'));

let http = require("http")
let server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("server listening at" + port);
});

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);


let ai = []
let human = []


//listen for socket connection
io.on('connection', function (socket) {
    console.log("We have a new client: " + socket.id);

    socket.on('getlost', function (data) {
        //console.log(data)
        if (data.ai > data.human){
            let score = {
                answer:data.ai,
                id:socket.id
            }
            ai.push(score)
            //console.log(ai);
        }else{
            let score = {
                answer:data.human,
                id:socket.id
            }
            human.push(score)
            //console.log(human);
        }

        console.log("choose human:"+human.length+" choose ai:"+ai.length)
    })

    

    socket.on('disconnect', () => {
        console.log("disconnected");
    })
})






