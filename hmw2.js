var services = {
    "стрижка": "60 грн",
    "голiння": "80 грн",
    "миття голови": "100 грн",
    price: function() {
        result = 0;
        for (let i in this) {
            if (typeof this[i] != 'function') {
                let arr = this[i].split(" ");
                let j = +arr[0];
                result += j;
            }
        }
        console.log(`Вартiсть: ${result} грн`);
    },
    minPrice: function() {
        let counter = true;
        let min;
        for (let i in this) {
            if (typeof this[i] != 'function') {

                let arr = this[i].split(" ");
                j = +arr[0];

                if (counter) min = j; counter = false;

                min = j<min? j:min;
            }
        }
        console.log(`Мiнiмальний прайс послуги: ${min} грн`);
    },

    maxPrice: function() {
        let max = 0;
        for (let i in this) {
            if (typeof this[i] != 'function') {

                let arr = this[i].split(" ");
                j = +arr[0];

                max = j>max? j:max;
            }
        }
        console.log(`Максимальний прайс послуги: ${max} грн`);
    },
}

services.price();
services.minPrice();
services.maxPrice();

services['Розбити скло'] = '200 грн';

services.price();
services.minPrice();
services.maxPrice();