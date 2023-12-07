let object = {
    first: "Green",
    second: "Blue",
    third: "Red",
    getInfo: function() {
     for (let i in this) {
        if (i !== 'getInfo') console.log(`${i}: ${this[i]}`);
     }   
    }
};

object.getInfo();
object.newProperty = 'New one';
object.getInfo();