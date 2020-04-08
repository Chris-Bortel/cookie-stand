//TODO: do 3 literals instead of 5


"use strict";

/**
 * //What do we need to be doing?
 * //I want to build a constructor function that will build my store objects
 * //data needed for fucntion Store(minCust, maxCust, storestorename, avgCookieSale, cookieSalesPerHour, totalSales)
 */

//constructor function--- Pulling the properties into the object to be rendered... It is making the object
//TODO: This is where we will put in our store data, and the Store constructor function will return our object
function Store(storeName, minCust, maxCust, avgCookieSale) {
  //stuff being constructed from the store data
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  // this.randCustomersArray = [];// Do I need this anymore?---- It was the product on the rand customer function, and we are going to put min and maxCust directly into the randCustomers function. 
  
  this.storeHoursOpen = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
  this.cookieSalesPerHour = []; //this is because this empty array is waiting for sales to be pushed into it
  this.totalSalesPerDay = 0; //this is the value that totalSalesPerDay will be each day
}

//Randomizer====================
Store.prototype.randCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

// totalSales function+==================
Store.prototype.totalSales = function () {
  for (var i = 0; i < this.storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var currentcookieSalesPerHour = this.avgCookieSale * customersPerHour;
    this.cookieSalesPerHour.push(Math.floor(currentcookieSalesPerHour));
    //for each hour output a num of cookies
  }
  //totalSalesPerDay represents the bucket of cookies
  for (i = 0; i < this.cookieSalesPerHour.length; i++){
    this.totalSalesPerDay = this.totalSalesPerDay + this.cookieSalesPerHour[i];
  }
};

//=========================================================
//Method to Render

Store.prototype.renderToPage = function(){
  //1. find target
  var targetUlEl = document.getElementById('seattlePH');
  //2. create content
  for(var i=0 ; i < this.storeHoursOpen.length; i++){
    var newLiEl = document.createElement('li');
    var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';// recreating and reassigning var render
    newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
    //3. append to target
    targetUlEl.appendChild(newLiEl)
  }
  //used attribute total sales tally from the old function and created a newLiEl, reassigned its text content, and then  rendered to the dom 
  newLiEl = document.createElement('li');
  renderedItems ='Total: ' + this.totalSalesPerDay + ' cookies';// recreating and reassigning var render
  newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
  //3. append to target
  targetUlEl.appendChild(newLiEl)
};


// console.log(Store);
var seattleStore = new Store('seattle', 23, 65, 6.3);
console.log(seattleStore);
seattleStore.totalSales();
seattleStore.renderToPage();
console.log(seattleStore.cookieSalesPerHour);
console.log(seattleStore.totalSalesPerDay);
//1 .

//==================================



// var seattle = {
//   storename: 'seattle',
//   //assigning var an object
//   //location: 'Seattle',
//   minCust: 23,
//   maxCust: 65, //could say that we are assigning key value pair
//   avgCookieSale: 6.3,
//   randCustomers: [],
//   cookieSalesPerHour: [], //creating an empty array. called an array literal
//   //picture: put in a picture. assign a striing url
//   totalSalesPerDay: 0,
//   storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
// };
// //=========================================================
// // 2. this is a method of seattle so 'this' refers to seattle
// // Dynamic randomizer
// seattle.randCustomers = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
// };


// //==========================================================
// // 3. New Method
// seattle.totalSales = function () {
//   for (var i = 0; i < this.storeHoursOpen.length; i++) {
//     var customersPerHour = this.randCustomers();
//     var currentcookieSalesPerHour = this.avgCookieSale * customersPerHour;
//     this.cookieSalesPerHour.push(Math.floor(currentcookieSalesPerHour));
//     //for each hour output a num of cookies
//   }
//   //totalSalesPerDay represents the bucket of cookies
//   for (i = 0; i < this.cookieSalesPerHour.length; i++){
//     this.totalSalesPerDay = this.totalSalesPerDay + this.cookieSalesPerHour[i];
//   }
// };

// //=========================================================
// //Method to Render

// seattle.renderToPage = function(){
//   //1. find target
//   var targetUlEl = document.getElementById('seattlePH');
//   //2. create content
//   for(var i=0 ; i < this.storeHoursOpen.length; i++){
//     var newLiEl = document.createElement('li');
//     var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';// recreating and reassigning var render
//     newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
//     //3. append to target
//     targetUlEl.appendChild(newLiEl)
//   }
//   //used attribute total sales tally from the old function and created a newLiEl, reassigned its text content, and then  rendered to the dom 
//   newLiEl = document.createElement('li');
//   renderedItems ='Total: ' + this.totalSalesPerDay + ' cookies';// recreating and reassigning var render
//   newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
//   //3. append to target
//   targetUlEl.appendChild(newLiEl)
// }
// seattle.totalSales();
// seattle.renderToPage();




// //=============================================================
// //=============================================================

// //1 .
// var tokyo = {
//   storename: 'tokyo',
//   //assigning var an object
//   //location: 'tokyo',
//   minCust: 23,
//   maxCust: 65, //could say that we are assigning key value pair
//   avgCookieSale: 6.3,
//   randCustomers: [],
//   cookieSalesPerHour: [], //creating an empty array. called an array literal
//   //picture: put in a picture. assign a striing url
//   storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
// };
// //=========================================================
// // 2. this is a method of tokyo so 'this' refers to tokyo
// // Dynamic randomizer
// tokyo.randCustomers = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
// };

// //==========================================================
// // 3. New Method
// tokyo.totalSales = function () {
//   for (var i = 0; i < this.storeHoursOpen.length; i++) {
//     var customersPerHour = this.randCustomers();
//     var cookieSalesPerHour = this.avgCookieSale * customersPerHour;
//     this.cookieSalesPerHour.push(Math.floor(cookieSalesPerHour));
//     //for each hour output a num of cookies
//   }
// };

// //=========================================================
// //Method to Render

// tokyo.renderToPage = function(){
//   //1. find target
//   var targetUlEl = document.getElementById('tokyoPH');
//   //2. create content
//   for(var i=0 ; i < this.storeHoursOpen.length; i++){
//     var newLiEl = document.createElement('li');
//     var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';// recreating and reassigning var render
//     newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
//     //3. append to target
//     targetUlEl.appendChild(newLiEl)
//   }
// }
// tokyo.totalSales();
// tokyo.renderToPage();



// //=============================================================
// //=============================================================


// //1 .
// var dubai = {
//   storename: 'dubai',
//   //assigning var an object
//   //location: 'dubai',
//   minCust: 23,
//   maxCust: 65, //could say that we are assigning key value pair
//   avgCookieSale: 6.3,
//   randCustomers: [],
//   cookieSalesPerHour: [], //creating an empty array. called an array literal
//   //picture: put in a picture. assign a striing url
//   storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
// };
// //=========================================================
// // 2. this is a method of dubai so 'this' refers to dubai
// // Dynamic randomizer
// dubai.randCustomers = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
// };

// //==========================================================
// // 3. New Method
// dubai.totalSales = function () {
//   for (var i = 0; i < this.storeHoursOpen.length; i++) {
//     var customersPerHour = this.randCustomers();
//     var cookieSalesPerHour = this.avgCookieSale * customersPerHour;
//     this.cookieSalesPerHour.push(Math.floor(cookieSalesPerHour));
//     //for each hour output a num of cookies
//   }
// };

// //=========================================================
// //Method to Render

// dubai.renderToPage = function(){
//   //1. find target
//   var targetUlEl = document.getElementById('dubaiPH');
//   //2. create content
//   for(var i=0 ; i < this.storeHoursOpen.length; i++){
//     var newLiEl = document.createElement('li');
//     var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';// recreating and reassigning var render
//     newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
//     //3. append to target
//     targetUlEl.appendChild(newLiEl)
//   }
// }
// dubai.totalSales();
// dubai.renderToPage();

