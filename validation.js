const number = 23;
// string, number ,boolean 
if(typeof number  === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is a string');
}

const numbers = [3, 6, 78, 98, 6];
const student = {name:'Rahim khan', job:'study'};
console.log(Array.isArray (numbers));
console.log(Array.isArray (student));
