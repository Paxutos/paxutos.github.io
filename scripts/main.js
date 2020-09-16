var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bitcoin-wallet.jpg') {
      myImage.setAttribute ('src','images/bitcoin-wallet2.jpeg');
    } else {
      myImage.setAttribute ('src','images/bitcoin-wallet.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This wallet belongs to ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This wallet belongs to ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}