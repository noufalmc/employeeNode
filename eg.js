let a=[10,20,35,25];
function sum(total,value)
{
    return total+value;
}


console.log(a.reduce(sum));
let su=a.reduce((total,value)=>total+=value);
console.log(su)