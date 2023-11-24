function pow(x, y){

    result = x;

    for(let i = 1; i<y; i++) result*=x;
    console.log(result);
}

pow(2, 3)