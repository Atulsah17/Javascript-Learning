
const mySym = Symbol("key1")
const JsUser = {
    name: "Atul",
    "full name" :"atul sah",
   [ mySym]: "mykey1",
    age : 21,
    location : "jaipur",
    email: "atulsah@gmail.com",
    isLoggedIn: false,
    lastloginDays:["Monday" , "saturday"]
 }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)

// JsUser.email = "atulsah9211@gmail.com"
// Object.freeze(JsUser)
// JsUser.email="atulsahjdjsdj"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("hello js user");

}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);


}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

