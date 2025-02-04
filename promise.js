// const promiseNew = new Promise(function (resolve, reject) {     
//     setInterval(() => {         
//         resolve({username:"Waqas Ahamd",email:"Waqas@gmail.com"});
//     }, 1000);  
// });
// promiseNew.then((data)=>{
//     console.log(data);
// })


// const promiseFore = new Promise((res,reg)=>{
//     setInterval(() => {
//         let error = false;
//         if(!error){
//             res({username:"waqas",email:"waqasAhamd@fmail.com"})
//         }else{
//             reg("ERROR: Data Not Found")
//         }
//     }, 2000);
// })
// promiseFore.then((data)=>{
//     return data.username
// }).then((newData)=>{
// console.log(newData);

// })
// .catch((error)=>{
// console.log(error);

// }).finally(()=>{
//     console.log("promise resolve and rejected ");
    
// })

// using promise asign await and try cash

// const promiseFive = new Promise((res,reg)=>{
//     setInterval(() => {
//         let error = true;
//         if(!error){
//             res({username:"JavaScript",Password:"112233"})
//         }else{
//             reg("ERROR: Data Not Found")
//         }
//     }, 2000);
// })
// promiseFive.then((data)=>{
//     return data.username
// }).then((newData)=>{
// console.log(newData);

// })
// .catch((error)=>{
// console.log(error);

// }).finally(()=>{
//     console.log("promise resolve and rejected ");
    
// })

// async function consumePromiseFive() {
//    try {
//     const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// consumePromiseFive()



// async using api call
// https://jsonplaceholder.typicode.com/posts
async function getAllUser() {
 try {
    const ApiResponsive = await fetch("https://jsonplaceholder.typicode.com/photos")    
    const data = await ApiResponsive.json()
    console.log(data);
 } catch (error) {
    console.log(error);
    
 }
}
getAllUser()


fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res);
    
}).catch((error)=>{
    console.log(error);
    
})