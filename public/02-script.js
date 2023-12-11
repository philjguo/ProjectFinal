
// 1. get response 
// 2. send response using 'socket.emit('',data)'


let negative = 0
let positive = 0



let socket = io();
socket.on('connect', () => {
    console.log("connected")
})



document.getElementById('buttonA').addEventListener('click', function () {
    // sendChoice('negative');
    negative = 1;
    console.log("AI win");

    if (negative == 1) {
        let response = {
            ai: 1,
            human: 0
        }
        socket.emit('getlost', response)
    } else {
        let response = {
            ai: 0,
            human: 1
        }
        socket.emit('getlost', response)
    }
});


document.getElementById('buttonB').addEventListener('click', function () {
    // sendChoice('positive');
    positive = 1;
    console.log("Human win");
    if (negative == 1) {
        let response = {
            ai: 1,
            human: 0
        }
        socket.emit('getlost', response)
    } else {
        let response = {
            ai: 0,
            human: 1
        }
        socket.emit('getlost', response)
    }
});











// function sendChoice(choice) {
//     fetch('/record-choice', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ choice: choice }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);

//         // socket.emit('data', )
//         // Redirect to the next page or handle response
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }


