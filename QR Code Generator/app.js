document.addEventListener("DOMContentLoaded", function(){

let whatsappLink = "https://wa.me/c/254733805545";


let qrCode = new QRCode(document.getElementById('qrCode'),{
text: whatsappLink,
width: 128,
height: 128

});

});

// async returns the promise
// await - waits for the promise.


