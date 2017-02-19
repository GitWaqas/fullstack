let names = ["Donald","Goofy","Roger","Jimmy", "Lenny"];
function filter(arr,callback){
    let arrToReturn = [];
    arr.array.forEach((name)=> {

let shouldInclude = callback(name);        
if(shouldInclude){
    arrToReturn.push(name);
}
    });
    return arrToReturn;
}

let names2 = filter(names,(name)=>{
    return name.length < 3;
});