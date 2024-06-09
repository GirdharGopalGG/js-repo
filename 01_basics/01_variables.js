const userId = 12345
let userEmail = "gg@gmail.com"
var userPassword = "ggwp"
userState = "Bihar"
let userCity;

/*
PREFER NOT TO USE VAR
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
USE ONLY "LET" AND "CONST"
*/

// userId = 2 //NOT ALLOWED

userEmail = "gg@wp.com"
userPassword = "glhf"
userState = "Germany"

console.log(userId)
console.table([userId,userEmail,userPassword,userState,userCity])





