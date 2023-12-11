window.addEventListener('load', function () {

    let socket = io();
    socket.on('connect',()=>{
        console.log("connected")
    })


    document.getElementById('start_button').addEventListener('click', function () {
    });
})




