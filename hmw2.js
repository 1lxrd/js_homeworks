mailTemp = /(^[a-zA-Z\d]+[.]?[a-zA-Z\d]*@)((gmail\.com)|(yahoo\.com))/;

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function filter (arr) {
    let result = [];
    arr.forEach(element => {
        
        let a = mailTemp.test(element.email);
        if (a) result.push(element.email);

    });

    return result;
}

res = filter(arr);
console.log(res);