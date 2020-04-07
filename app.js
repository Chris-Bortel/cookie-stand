'use strict'

//1 . Stores the min/max hourly customers, and the average cookies per customer, in object properties

var seattleStore = {
  minCust : 23,
  maxCust : 65, 
  avgCookieSale : 6.3,
  cookiesPurchasedPerHour : [],

}

// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//
// build random number generator
// TODO: Make dynamic to seattleStore
// First purpose is to return a number
// second purpose is to return it as a random number


seattleStore.randomNumOfCust = function() {
//for each hour, I will want to randomly generate number of customers
var min = Math.ceil(seattleStore.minCust); 
var max = Math.floor(seattleStore.maxCust);

return Math.floor(Math.random() * (max - min )) + min ;
}

//===========================
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

//TODO: I want to run through the array of hours and return number of cookies

// NEW METHOD
seattleStore.totalCookieSales = function() {
  for(var i = 0; i < storeHoursOpen.length ; i++){
    var customersPerHour = this.randomNumOfCust();
    var cookiesPerHour = this.avgCookieSale * customersPerHour;
    this.cookiesPurchasedPerHour.push(Math.floor(cookiesPerHour));
    //for each hour output a num of cookies
  }

  // //assign var to output of old function
  // //In order to get cookies for one hour --- customers * avgCookies
 
}


var storeHoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm']


//=========================
//Render
























//   // Randomize the number of customers per hour
// // seattleStore.custPerHour = function (){
// //   for(var i =0; i < storeHoursOpen.length; i++ ) {

// //     //I figure that I am going to need to taget the min and maxCust
  
// //   }
// // }
// //Declare method
// //customers per hour
// //make and empty array
// //make a for loop set up with index
// // 
// //TODO: make method that will make a random numb
// TODO: //define another method that uses a for loop and calls randomNumOfCust
// //put them into an array

      

