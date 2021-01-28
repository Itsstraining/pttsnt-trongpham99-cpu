function main(input) {
  let inp = input.split(' ');
  let n = parseInt(inp[0]);
  
  for (let i = 2; i <= n; i++) 
  {
      while( isPrime(i) && (n % i == 0) ) 
      {
          console.log(i);
          n = n / i;
      }
  }
  return 0;
}

function isPrime(n) 
{
    let m = (Math.sqrt(n));
    for (let i = 2; i <= m; i++) 
    {
        if(n % i == 0) 
            return 0;
    }
    return 1;
}


module.exports = main;
