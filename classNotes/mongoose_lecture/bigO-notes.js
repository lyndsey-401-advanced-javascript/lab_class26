'use strict';

const input = [1, 2, 3, 4, 5];
let count = 0; 

//this is Big O of factor n (notated as O(n))
for(let i = 0; i < input.length; i++){
    console.log(input[i]); //counting this as operation one 
    count++;
}

for(let i = 0; i < 5; i++){
    console.log(i); //this is ocnstant time; 0(1) = O(0n + 1);
    count++;
}

console.log(count); 

//map / filter / forEach / reduce  eat more code time 

//big theta -- analysis 
//O(n + n^2 + log(n)) =  O(n^2)
//consider the biggest .... O(25n + 100n^2 + 2) = 0(n^2)
//ignore constants 
//....so i guess i'll just die then 
//arrays are the worst, we will kill them with fire


