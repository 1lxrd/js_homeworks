let pad = (str, symb, count, place) => {
    result = str;
    
    if (place){
        while (result.length < count) {result = symb + result;}
    }
    else {while (result.length < count) {result += symb;}}

    return result;
}