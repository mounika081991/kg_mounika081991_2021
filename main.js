
//function phonetic(s){
    //let H = {
       // 0: "Zero", 1: "One", 2:"Two", 3:"Three", 
       /* 4:"Four", 5: "Five", 6: "Six", 7: "Seven",
        8: "Eight", 9: "Nine"
    
    }
    return [...s].map(x=> H[x]);
}

phonetic(100)*/

function splitToDigit(n){
    return [...n + ''].map(Number)
  }
//z = splitToDigit(100)
/*var x = [0, 1, 2, 3, 4,5, 6, 7, 8, 9];
var y = ["Zero", "One", "Two", "Three", "Four","Five", "Six", "Seven", "Eight", "Nine"];
var result = y.reduce(function(result, field, index){
    result[x[index]]= field;
    return result;
}, {})
console.log(result);*/

//const x = [0, 1, 2, 3, 4,5, 6, 7, 8, 9];
//const y = ["Zero", "One", "Two", "Three", "Four","Five", "Six", "Seven", "Eight", "Nine"];
//const buildMap = (x,y) => {
//const map = new Map();
  // for(let i = 0; i < x.length; i++){
      //ap.set(x[i], y[i]);
   //};
   //return map;
//};
//console.log(buildMap(x,y));


let phonetic = new Map([
    [0, 'Zero'],
    [1, 'One'],
    [2, 'Two'], [3, 'Three'],[4, 'Four'],[5, 'Five'],
    [6, 'Six'],[7, 'Seven'],[8, 'Eight'],[9, 'Nine']
]);
//console.log(phonetic);

//console.log(Object.keys(buildMap));
//const iterator = map.keys()
//const iterator2 = map.values()
//for (let user of iterator) {
    //console.log(user.next().value;
//}

//let Y= X.map((val, i, X) => {
    //return [X]
  //});
  //for(let user of phonetic.values()){
    //if ( phonetic.get(1)== user){
        //console.log(user);
   // }
//}
const args = process.argv;
console.log(args);
//let args = process.argv.slice(2);
//let arg = [...arguments];
//var arr = [10, 300, 5];
var newarr= [];
function convertToPhonetic( args){
    for(var i = 0; i < args.length; i++) {
        z[i]= splitToDigit(args[i]);
        var plus5 = " ";
        for(var j=0; j< z[i].length; j++){
          
           // plus5.push(phonetic.get(z[j]));
            plus5 += phonetic.get(z[i][j]);
            
        }
        newarr.push(plus5);
          
    }
    return newarr;
}

  // plus5 = [6,7,8,9]  
//
//function convertToString(input){


console.log(newarr)