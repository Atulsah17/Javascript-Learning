//  let myDate = new Date()
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(typeof myDate);
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());

 let myCreatedDate = new Date(2023,0,23,5,3)
// //  console.log(myCreatedDate.toDateString());
//  console.log(myCreatedDate.toLocaleString());

//  let myTimestamp = Date.now()
// //  console.log(myTimestamp);
// //  console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
newDate.toLocaleString('default',
{weekday: 'long'});
