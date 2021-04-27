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
var newArr=[];
var z= new Array(args.length);
//console.log(z);
function convertToPhonetic(args){
    for(var i = 0; i < args.length; i++) {
        z[i]= splitToDigit(args[i]);
        //console.log(z[i]);
        var newStr = " ";
        for(var j=0; j< z[i].length; j++){
          
           // plus5.push(phonetic.get(z[j]));
            newStr += phonetic.get(z[i][j]);
            
        }
        newArr.push(newStr);
          
    }
    return newArr;
}
var ans = convertToPhonetic(args);
var myvar ='';
for(let i = 0; i< args.length; i++){
    if(i == 0){
        myvar = myvar + ''  + ans[i]; 
    }
    else{
        myvar = myvar + ','  + ans[i];
    }
}   
console.log(myvar);
//console.log(ans);
//console.log(...newArr);
//console.log(Array.to(newArr));