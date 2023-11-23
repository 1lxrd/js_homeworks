'use strict'

var prompt = require('prompt');

prompt.start();

prompt.get(['age'], function (err, result) {

    if (isNaN(+result.age)) {console.log('Not a number')}

    else if (result.age < 0) {
        console.log(`Invalid age, ${result.age} < 0`);
    }
    else if (10<result.age && result.age<20){
        console.log(`${result.age} рокiв`);
    }
    else {
        switch (result.age%10){
            case 1:
                var word = 'рiк';
                break;
            
            case 2: //в js нельзя класть несколько значений в кейс? перечисление через запятую не работает
                var word = 'роки';
                break;

            case 3:
                var word = 'роки';
                break;    

            case 4:
                var word = 'роки';
                break; 
            
            default:
                var word = 'рокiв';
        }
        
        console.log(`${result.age} ${word}`);
    }
});