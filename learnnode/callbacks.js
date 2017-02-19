

let names = ["Donald","Goofy","Roger","Jimmy", "Lenny"];

let names2 = names.filter((name)=>{
    return name.length > 5;
})

console.log(names2);
let rows = names.map((name)=>{
    return "<td>"+name +"</td>"}
).join(" ");

console.log(rows);

let table = `<table><tbody> ${rows} </tbody></table>`;

console.log(table);