const accountId = 122345
let accountEmail = "saroj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //Not Allowed

accountEmail = "abbc@gmail.com"
accountPassword = "7654"
accountCity = "bengaluru"

/*
Prefer Not Use Var
Because Of Issue in Block Scope and Functional Scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

