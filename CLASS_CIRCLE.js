class Circle{
    constructor(radius = '1',color = 'red'){
        this.radius = radius,
        this.color = color
    }
    getRadius(){
        return this.radius
    }
    setRadius(rad){
        this.radius = rad
    }
    getColor(){
      return this.color
    }
    setColor(col){
        this.color = col
    }
    toString(){
        return `Circle [The radius of circle is ${this.radius} and the color of circle is ${this.color}]`;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2)
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }
}

//for circle1 with proper arguments
      var circle1 = new Circle(2, "green");

      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      console.log('radius:',circle1.getRadius())
      console.log('color:',circle1.getColor())

/*OUTPUT
Circle [The radius of circle is 2 and the color of circle is green]
Area: 12.566370614359172
Circumference: 12.566370614359172
radius: 2
color: green
 *///-----------------------------------------------------------------------------------------

//for cycle2 with no arguments
      var circle2 = new Circle();

      console.log(circle1.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
      console.log('radius:',circle2.getRadius())
      console.log('color:',circle2.getColor())
/*OUTPUT
Circle [The radius of circle is 2 and the color of circle is green]
Area: 3.141592653589793
Circumference: 6.283185307179586
radius: 1
color: red
*///--------------------------------------------------------------------------------------------

//for cycle3 with no proper arguments but will set radius and color    
      var circle3 = new Circle();
      circle3.setRadius(3)
      circle3.setColor('Black')

      console.log(circle3.toString());
      console.log("Area:", circle3.getArea());
      console.log("Circumference:", circle3.getCircumference());
      console.log('radius:',circle3.getRadius())
      console.log('color:',circle3.getColor()) 
      
/*OUTPUT
Circle [The radius of circle is 3 and the color of circle is Black]
Area: 28.274333882308138
Circumference: 18.84955592153876
radius: 3
color: Black
*/