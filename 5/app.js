var password = prompt("Enter your password")
var recheak = prompt("Re enter your password")

if (password && recheak == undefined){
    alert("Please enter your password")
}
if (password == recheak){
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}
