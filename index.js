/**
 * not undefined or null
 * cannot be blank
 */

let name = "zaKIR"
/**
 * age must be a number
 * age should be 18 or above
 * age should be below 120
 */
let age = 34

let email = "alina@gmail.com"

if(!name) {
    console.log("name is not given");
}
if(!age) {
    console. log("your age must be 18+")
}
if(!email) {
    console. log("email connot blank")
}
if (name.trim() === "") {
    console.log("name connot be empty");
}
if( typeof age !== "number") {
    console. log("age must be a number")
}