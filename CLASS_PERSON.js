//3 Write a “person” class to hold all the details

class Person {
    constructor(Name,  age,degree, department,  mobile, city){
        this.Name = Name;       
        this.age = age;
        this.degree = degree
        this.department=department;
        this.mobile=mobile;
        this.city = city;
    }
    getDetails(){
        return `Name: ${this.Name}
        age: ${this.age}
        degree: ${this.degree}
        department: ${this.department}     
        mobile: ${this.mobile}
        city: ${this.city}`;        
    }
}

let person1 = new Person("selva siva",24,'B.Tech', "mechanical",  9150485661, "ambasamudram");
let person2 = new Person("parama sivan", 27,'B.Tech' ,"mechanical", 7639782192, "chennai");

console.log(person1.getDetails());
console.log(person2.getDetails());

/*OUTPUT for person1
Name: selva siva
        age: 24
        degree: B.Tech
        department: mechanical
        mobile: 9150485661
        city: ambasamudram*/
        

/*OUTPUT for person2
Name: parama sivan
        age: 27
        degree: B.Tech
        department: mechanical
        mobile: 7639782192
        city: chennai */