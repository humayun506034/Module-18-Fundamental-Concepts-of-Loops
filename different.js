let sum=0;
for(let i=1; i<20;i++)
{
    if(i%3 !== 1)
    {
        console.log(i);
        sum=sum+i;        
    }
}
console.log("Result is : ",sum);