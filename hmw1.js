let checkNan = (value) => {

    switch (value/2+'') {

        case 'NaN':
            return true;

        case 'undefined':
            console.log('dsafas')
            return true;

        case '{}':
            return true;

        default:
            return false;
    }
}
