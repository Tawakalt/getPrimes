'use strict';

module.exports = {

 /* Print all prime Numbers from 0 toN*/
 getPrimes: (n) => {
  let x= 3,j,i=2,isPrime;
       if (n<2) var primeArr=[];
       else var primeArr=[2];
       for (x; x<=n; x+=2){
           Math.sqrt(x);
           isPrime = true;
           for (i = 2; i <= j; i++){
                if (x % i === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primeArr.push(x);
            }

        }   

        return primeArr;
    }
 }

