"use strict"

function drawTriangle(count, symbol = '+') {
    var result = '';
    for (let i=1; i<=count; i++){
        for (let j=0; j<i; j++){
            result += symbol+" ";
        }
        result +='\n';
    }
    console.log(result);
}

function drawTriangleAlternative(count, symbol='+'){
    var result ='';
    let i = 0;

    while (i<count){
        result +=symbol + " ";
        console.log(result);
        i++;
    }
}

drawTriangle(0);
drawTriangleAlternative(0, '*');