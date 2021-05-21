/* EXERCISE 1 Create an array containing the first 5 positive numbers.*/
let positive = [ 1, 2, 3, 4, 5];

/* EXERCISE 2 Create an object containing your name, surname, email address and age. */
let Jeg = { name:"Magdalena", lastname:"Sochon", email :"miljoekspert@gmail.com", age: 37}

/* EXERCISE 3 Add to the previously created object a boolean value to rappresent wheter you have or not a driving license. */
Jeg.drivingLicense = true
console.log(Jeg)

/* EXERCISE 4 Remove from the previously created object the age property. */
delete Jeg.age
console.log(Jeg)

/* EXERCISE 5 Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
let Jeg2 = Jeg
Jeg2.email = "differentAddress :)"
console.log("Clone of first person with new e-mail address ",  Jeg2)

///EXERCISE 6
//You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
///Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
///Write an algorithm that calculates the total cost to charge the user with.

let totalShoppingCart  = 85

if (totalShoppingCart > 50) {
    console.log("Free shiping, total price:  ", parseInt.totalShoppingCart)}
else (parseInt.totalShoppingCart )
    {console.log("Total cost of your order is :", totalShoppingCart + 10)}

    //EXERCISE 7
    //You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
    //Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.  
console.log("BARE I DAG, BLACK-FREDAG")


let BlackFriday = totalShoppingCart - (totalShoppingCart * 0.20)
if (BlackFriday> 50) {console.log("Free shiping, total price:  ", BlackFriday)}
else 
    (console.log("Total cost of your order is :", BlackFriday + 10))



/// EXERCISE 8 Create an object representing a car with properties like brand, model, licensePlate.After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
////
///TU MIALAM PROBLEM WIEC UZYWAM PODPOWIEDZI.brand

let car1 = { brand: "Toyota", model: "Yaris", licensePlate: "AZXSASS"}
let car2 = { ...car1, licensePlate: "Whatever"}
let car3 = { ...car1, licensePlate: "Whatever1"}
let car4 = { ...car1, licensePlate: "Whatever2"}
let car5 = { ...car1, licensePlate: "Whatever3"}




let car = {
    brand :"Suzuki" , 
    model :"SX4", 
    licPlate : "RJ9874"      }

let cars = [{},{} , {} , {}, {}]

for (let i = 0; i < 6; i++){()
    Object.assign(cars[i]),car)
    cars[i].licPlate = licPlate[i]  }
    console.log(cars)

//albo metoda 
Object.assign(car4,car);
car4.licensePlate = 4444;
console.log(car4);

let car5 = {};

Object.assign(car5, car);
car5.licensePlate= 66666;
console.log(car5);





/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
let carsForRent = [ car1, car2, car3, car4, car5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.pop()
carsForRent.shift()


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(car.brand, car.model, car.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let carsForSale = [car1,car5, car2]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
console.log()
/* EXERCISE 13 Print in the console the data from each car in the carsForSale array. */

console.log(carsForSale[0].licensePlate)
console.log(carsForSale[1].licensePlate)
console.log(carsForSale[2].licensePlate)



