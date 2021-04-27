const args = process.argv.slice(2);
//console.log(args);
//console.log(args.length);
function splitToDigit(n){
    return [...n + ''].map(Number)
  }
let phonetic = new Map([
    [0, 'Zero'],
    [1, 'One'],
    [2, 'Two'], [3, 'Three'],[4, 'Four'],[5, 'Five'],
    [6, 'Six'],[7, 'Seven'],[8, 'Eight'],[9, 'Nine']
]);
//console.log(args[0]);
//console.log(args[1]);
var newarr=[];
var z= new Array(args.length);
console.log(z);
for(var i = 0; i < args.length; i++) {
    z[i]= splitToDigit(args[i]);
    console.log(z[i]);
    var plus5 = " ";
    for(var j=0; j< z[i].length; j++){
      
       // plus5.push(phonetic.get(z[j]));
        plus5 += phonetic.get(z[i][j]);
        
    }
    newarr.push(plus5);
      
}
console.log(newarr)