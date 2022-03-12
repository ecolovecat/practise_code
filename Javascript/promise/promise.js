let p = new Promise((resolve,reject)=> {
    let a = 1 + 1;
    if(a == 12) {
        resolve("True");
    }  else {
        reject("False");
    }
});

p.then((message)=> {
    console.log("This is from then scope " + message);
}).catch((message)=> {
    console.log("This is from the catch scope " + message);
})


let p2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        console.log("This will appear after 3 seconds")
    },3000)
});
