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
};
//=========================================================
// 2. this is a method of seattle so 'this' refers to seattle
// Dynamic randomizer
seattle.randCustomers = function () {
  var min = Math.ceil(seattle.minCust);
  var max = Math.floor(seattle.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
};

//==========================================================
// 3. New Method

//TODO: I want to run through the array of hours and return number of cookies

seattle.totalSales = function () {
  for (var i = 0; i < storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var cookiesPerHour = this.avgCookieSale * customersPerHour;
    this.cookiesPerHour.push(Math.floor(cookiesPerHour));
    //for each hour output a num of cookies
  }
};
// Things that  I need to do

// //assign var to output of old function
// //In order to get cookies for one hour --- customers * avgCookies
var storeHoursOpen = [ //TODO: change array into the for loop
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

//=========================================================
//Method to Render
var ulTarget = document.getElementById('list');

// step 2 is get content
var newText = 'Welcome to dom manipulation';

//step 3 add content to target
// ulTarget.textContent = newText;


// //1 targetable element
// var unorderedListEl = document.getElementById('cookiePH');
// console.log(unorderedListEl);


// // 2. create content
// // the content for an ordered listis a list item
// //document.createElement is a method that makes a dom element
// var newListItemEl = document.createElement('li');
// // newListItemEl.textContent = '9';
// unorderedListEl.appendChild(newListItemEl)

//3. add content to target
//append the new list item to the ordered list

seattle.renderToPage = function(){
  //1. find target
  var targetUlEl = document.getElementById('cookiePH');
  //2. create content
  //  a. li
  for(var i=0 ; i < 10; i++){

 
  var newLiEl = document.createElement('li');
  //  b. cookiePH
  var seattleText = 'Seattle : ' + this.cookiesPerHour + ' ' + storeHoursOpen;
  newLiEl.textContent = seattleText;
  console.log(newLiEl);
  //3. append to target
  targetUlEl.appendChild(newLiEl)
  }
}
seattle.totalSales();
seattle.renderToPage();







//figure out where i < 10 
//figure out seattleText 6am : cookies
