let object = {
    first: "Green",
    second: "Blue",
    third: "Red",
    getInfo: function(){
        for (let i in this) {
            if (typeof this[i] != 'function') console.log(`${i}: ${this[i]}`);
        }
    }
};

object.getInfo();
object.newProperty = 'New';
object.getInfo();