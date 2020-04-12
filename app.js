//TODO: do 3 literals instead of 5

'use strict';

var tableEltoTarget = document.getElementById('storeTable');
var storeHoursOpen = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];
//constructor function--
function Store(city, minCust, maxCust, avgCookieSale, ulTargetId) {
  //stuff being constructed from the store data
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.ulTargetId = ulTargetId;
  this.storeHoursOpen = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
  this.cookieSalesPerHour = [];
  this.totalSalesPerDay = 0;
}

//Randomizer====================
Store.prototype.randCustomers = function () {
  return Math.floor(
    Math.random() * (this.maxCust - this.minCust) + this.minCust
  );
};

// totalSales function+==================
Store.prototype.totalSales = function () {
  for (var i = 0; i < storeHoursOpen.length; i++) {
    var customersPerHour = this.randCustomers();
    var currentcookieSalesPerHour = this.avgCookieSale * customersPerHour;
    this.cookieSalesPerHour.push(Math.floor(currentcookieSalesPerHour));
    //for each hour output a num of cookies
  }
  //totalSalesPerDay represents the bucket of cookies
  for (i = 0; i < this.cookieSalesPerHour.length; i++) {
    this.totalSalesPerDay = this.totalSalesPerDay + this.cookieSalesPerHour[i];
  }
};

//=======================================================
//Method to Render

Store.prototype.renderTableRow = function () {

  var newTrEl = document.createElement('tr');

  var newThEl = document.createElement('th');
  newThEl.textContent = this.city;
  newTrEl.appendChild(newThEl);
  //add cookie sales
  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var newTdEl = document.createElement('td');
    newTdEl.textContent = this.cookieSalesPerHour[i];
    newTrEl.appendChild(newTdEl);
  }
  //3. add the content to the target
  //appendChild to the tableEl , attach the tr
  tableEltoTarget.appendChild(newTrEl);
};

function renderTableHeader(){
  var newTrEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = '';
  newTrEl.appendChild(newThEl);

  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var newTdEl = document.createElement('td');
    newTdEl.textContent = storeHoursOpen[i];
    newTrEl.appendChild(newTdEl);
  }

  tableEltoTarget.appendChild(newTrEl);
}

/*==Making my form work== */
// 1. find target
var storeForm = document.getElementById('cookieStoreForm');

// function captureCookieInfo(cookieStoreForm){
// console.log('hello');
// }

// 3. make function useful... need to make a new object(store) attach a callback function

//collect the name and input and put it in the store form

//anytime that we use js to capture submit event from a form, we need to use Event.prototype.preventDefault
//finds revent info

function handleStoreForm (eventStoreForm){

  eventStoreForm.preventDefault();

  ////====learn how to find a value ==========
  // //etire event
  // console.log('event : ' , eventStoreForm);
  // //event's target (form); the target cvapures the content
  // console.log('target : ' , eventStoreForm.target);
  // //we look at the property of the tarbget that is the name of the input we want

  // console.log('input : ' , eventStoreForm.target.city);
  // //grab its value. we look at the event's target input's varlue
  // //object property nested three dots down.
  // console.log('value : ' , eventStoreForm.target.city.value);

  var newStore = eventStoreForm.target.city.value;
  var minimumCustomerPH = eventStoreForm.targetminCust.value;
  console.log(minimumCustomerPH);
  alert('your new store is ' + newStore);

}
//want to present user with the info
//2. add an event listener
storeForm.addEventListener('submit', handleStoreForm);


var seattleStore = new Store('seattle', 23, 65, 6.3, 'seattlePH');
var tokyoStore = new Store('tokyo', 3, 24, 1.2, 'tokyoPH');
var dubaiStore = new Store('dubai', 11, 38, 3.7, 'dubaiPH');
var parisStore = new Store('paris', 3, 24, 1.2, 'parisPH');
var limaStore = new Store('lima', 3, 24, 1.2, 'limaPH');

//can I make a function that renders all of this with one call?
renderTableHeader();

seattleStore.totalSales();
seattleStore.renderTableRow();

tokyoStore.totalSales();
tokyoStore.renderTableRow();

dubaiStore.totalSales();
dubaiStore.renderTableRow();

parisStore.totalSales();
parisStore.renderTableRow();

limaStore.totalSales();
limaStore.renderTableRow();



