var names = ["kurt","ole","hans","ib"];

//This is MY version of forEach
function myforEach(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i]);
    }
}

//This is how I call (use) it
//Observe that it is provided with a callback
//identical to the one given to the original
//forEach method

// myforEach(names,function(name){
//     console.log(name);
//     })

myforEach(function(name){console.log(name)});