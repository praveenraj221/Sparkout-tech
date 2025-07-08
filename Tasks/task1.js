let numbers = [2, 4, 7, 9, 10, 15];
let find = 120;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]== find){
        console.log("Yes the number is present");
        break;
    }
    else if(i === numbers.length -1){
        console.log("No the number is not present");
    }
}