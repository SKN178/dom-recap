const today = new Date();
// console.log(today);

const Date1 = new Date('1971-03-26');
const Date2 = new Date('1971-12-16');

if(Date1.getTime() < Date2.getTime()){
    console.log('december is after march');
}
else{
    console.log = ('march is before december');
}