function pow(x, y){

    if (y === 0) result = 1;

    else{

        if (y<0) {

            x = 1/x; 
            y = -y;
        }

        result = x;
        for(let i = 1; i<y; i++) result*=x;

    }
    console.log(result);
}

pow(2, -4)