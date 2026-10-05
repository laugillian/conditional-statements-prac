let regularCarWash = false;
if (regularCarWash === true) {
    console.log("The regular car wash is 20 dollars");
} else {
    console.log("The detailed car wash is 40 dollars");
}

/**
scenario 4
the condition will be based on the dogs age
dog age < 18 && dog age < 40
*/

let dogAge = 0;
if (dogAge > 0 && dogAge < 10) {
    console.log("You are a baby");
}

let num = 7;
if (num < 5) {
    console.log("The rounded number is 0");
} else {
    console.log("The rounded number is 10");
}











let number = 11;  //* 11 is edgecase
if(!(number>=0) || !(number<=10)){
    console.log("INVALID NUMBER")
} else if(number > 5){
    number = 10
    console.log(number)
} else if(number<5){
    number=0
    console.log(number)
} else{
    console.log(number)
} else{
    console.log(number)
}