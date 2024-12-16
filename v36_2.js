// Find a = [3,7,8,6,2,5] maximum and minimum number in array


let a = [3,7,8,6,2,5]
let max=-Infinity
let min=Infinity

for(i of a){
    if(i>max){
        max=i
    }
    else if(i<min){
        min=i
    }
}
console.log(max);
console.log(min);

