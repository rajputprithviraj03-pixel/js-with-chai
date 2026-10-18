const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; 
/*
prefer not to use var 
becaause of issue in bblock scope and functional scope
*/ 
// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "7654321"
accountCity = "Kolkatta"

console.log(accountId);

console.table([ accountId, accountPassword, accountCity, accountState ])