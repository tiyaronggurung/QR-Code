

var qrData = document.getElementById('qr-data');
var qrcode = new QRCode(document.getElementById('qrcode'));

function qrCodeGenerate(){
    var data = qrData.value;
    qrcode.makeCode(data);
}

// var qrcode = new QRCode("qrcode");

// function makeCode () {    
//   var elText = document.getElementById("text");
  
//   if (!elText.value) {
//     alert("Input a text");
//     elText.focus();
//     return;
//   }
  
//   qrcode.makeCode(elText.value);
// }

// makeCode();

// $("#text").
//   on("blur", function () {
//     makeCode();
//   }).
//   on("keydown", function (e) {
//     if (e.keyCode == 13) {
//       makeCode();
//     }
//   });