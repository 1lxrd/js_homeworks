'use strict';

var result = 0;
for(var i = 1; i<=100 && i>=1; i++){
    if (i%3 !== 0) result+=i;  
}
console.log(result);