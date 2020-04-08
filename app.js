//TODO: do 3 literals instead of 5


"use strict";

//1 .
var seattle = {
  name: 'seattle',
  //assigning var an object
  //location: 'Seattle',
  minCust: 23,
  maxCust: 65, //could say that we are assigning key value pair
  avgCookieSale: 6.3,
  randCustomers: [],
  cookiesPerHour: [], //creating an empty array. called an array literal
  //picture: put in a picture. assign a striing url
  totalSalesPerDay: 0,
  storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
};
//=========================================================
// 2. this is a method of seattle so 'this' refers to seattle
// Dynamic randomizer
seattle.randCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

//==========================================================
// 3. New Method
seattle.totalSales = function () {
  for (var i = 0; i < this.storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var currentCookiesPerHour = this.avgCookieSale * customersPerHour;
    this.cookiesPerHour.push(Math.floor(currentCookiesPerHour));
    //for each hour output a num of cookies
  }
  //totalSalesPerDay represents the bucket of cookies
  for (i = 0; i < this.cookiePerHour.length; i++){
    this.totalSalesPerDay = this.totalSalesPerDay + this.cookiesPerHour[i];
  }
};

//=========================================================
//Method to Render

seattle.renderToPage = function(){
  //1. find target
  var targetUlEl = document.getElementById('seattlePH');
  //2. create content
  for(var i=0 ; i < this.storeHoursOpen.length; i++){
    var newLiEl = document.createElement('li');
    var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies';// recreating and reassigning var render
    newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
    //3. append to target
    targetUlEl.appendChild(newLiEl)
  }
}
seattle.totalSales();
seattle.renderToPage();




//=============================================================
//=============================================================

//1 .
var tokyo = {
  name: 'tokyo',
  //assigning var an object
  //location: 'tokyo',
  minCust: 23,
  maxCust: 65, //could say that we are assigning key value pair
  avgCookieSale: 6.3,
  randCustomers: [],
  cookiesPerHour: [], //creating an empty array. called an array literal
  //picture: put in a picture. assign a striing url
  storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
};
//=========================================================
// 2. this is a method of tokyo so 'this' refers to tokyo
// Dynamic randomizer
tokyo.randCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

//==========================================================
// 3. New Method
tokyo.totalSales = function () {
  for (var i = 0; i < this.storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var cookiesPerHour = this.avgCookieSale * customersPerHour;
    this.cookiesPerHour.push(Math.floor(cookiesPerHour));
    //for each hour output a num of cookies
  }
};

//=========================================================
//Method to Render

tokyo.renderToPage = function(){
  //1. find target
  var targetUlEl = document.getElementById('tokyoPH');
  //2. create content
  for(var i=0 ; i < this.storeHoursOpen.length; i++){
    var newLiEl = document.createElement('li');
    var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies';// recreating and reassigning var render
    newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
    //3. append to target
    targetUlEl.appendChild(newLiEl)
  }
}
tokyo.totalSales();
tokyo.renderToPage();



//=============================================================
//=============================================================


//1 .
var dubai = {
  name: 'dubai',
  //assigning var an object
  //location: 'dubai',
  minCust: 23,
  maxCust: 65, //could say that we are assigning key value pair
  avgCookieSale: 6.3,
  randCustomers: [],
  cookiesPerHour: [], //creating an empty array. called an array literal
  //picture: put in a picture. assign a striing url
  storeHoursOpen: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],
};
//=========================================================
// 2. this is a method of dubai so 'this' refers to dubai
// Dynamic randomizer
dubai.randCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

//==========================================================
// 3. New Method
dubai.totalSales = function () {
  for (var i = 0; i < this.storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var cookiesPerHour = this.avgCookieSale * customersPerHour;
    this.cookiesPerHour.push(Math.floor(cookiesPerHour));
    //for each hour output a num of cookies
  }
};

//=========================================================
//Method to Render

dubai.renderToPage = function(){
  //1. find target
  var targetUlEl = document.getElementById('dubaiPH');
  //2. create content
  for(var i=0 ; i < this.storeHoursOpen.length; i++){
    var newLiEl = document.createElement('li');
    var renderedItems =this.storeHoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies';// recreating and reassigning var render
    newLiEl.textContent = renderedItems;// we are assigning the text content of our newLiEl to be the string renderedItems 
    //3. append to target
    targetUlEl.appendChild(newLiEl)
  }
}
dubai.totalSales();
dubai.renderToPage();

