var Shape = require('./shape');

class Circle extends Shape{
    // radius;
    constructor (radius){
        super();
        this.radius=radius;
        console.log(radius);
    }

    canlculateArea(radius) {
        // let area  = 3.14* this.radius**2;
        console.log(this.radius);
    }

}

let a = new Circle(10);

a.calculateArea()

// export {Circle};
// export default Circle
module.exports=Circle

console.log(Object);