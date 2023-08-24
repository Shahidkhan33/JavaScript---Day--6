//4.write a class to calculate the uber price

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute,demand='low',surgefee=30) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.demand = demand //if demand is high for uber at that time or during bad weather and traffic they charge surge fee
      this.surgefee = surgefee
    }
  
    totalPrice() {
        if(this.demand==='high'){
             return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute)+this.surgefee;
        }else{
            return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
        }     
    }
  }
  //uber pricing without surgefee at low demand
  let myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log('uber pricing without surgefee at low demand:',myUber.totalPrice());
  //OUTPUT
  //uber pricing without surgefee at low demand 150


  //Uber pricing at high demand with surge value
  let myUber1 = new UberPrice(10,15,65,20,5,'high',50)
  console.log('Uber pricing at high demand with given surge value:',myUber1.totalPrice())
  //OUTPUT
  //Uber pricing at high demand with given surge value: 390


   //Uber pricing at high demand but at default surge value
  let myUber2 = new UberPrice(10,15,65,20,5,'high')
  console.log('Uber pricing at high demand but at default surge value:',myUber2.totalPrice())
  //OUTPUT
  //Uber pricing at high demand but at default surge value: 370