// document.getElementById('myh1chceck').textContent = "Hello World !";

// let username;
// username = window.prompt('What is you username? ');
// console.log(username)

let username;
let password;

document.getElementById('submitform').onclick = function () {
 username = document.getElementById('myusername').value;
 password = document.getElementById('mypassword').value;
 document.getElementById('hilokesh').textContent = `Hello, ${username}`
 console.log(username, password);
}