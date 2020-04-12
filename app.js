//TODO: do 3 literals instead of 5

'use strict';

/**
 * //What do we need to be doing?
 * //I want to build a constructor function that will build my store objects
 * //data needed for fucntion Store(minCust, maxCust, storecity, avgCookieSale, cookieSalesPerHour, totalSales)
 */
var tableEltoTarget = document.getElementById('storeTable');
var storeHoursOpen = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];
//constructor function--- Pulling the properties into the object to be rendered... It is making the object
function Store(city, minCust, maxCust, avgCookieSale, ulTargetId) {
  //stuff being constructed from the store data
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.ulTargetId = ulTargetId;
 
  this.cookieSalesPerHour = []; //this is because this empty array is waiting for sales to be pushed into it
  this.totalSalesPerDay = 0; //this is the value that totalSalesPerDay will be each day
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

//=========================================================
//Method to Render



Store.prototype.renderTableRow = function () {

  var newTrEl = document.createElement('tr');

  var newThEl = document.createElement('th');
  newThEl.textContent = this.city;
  newTrEl.appendChild(newThEl);
  //TODO: add cookie sales
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
};

// console.log(Store);
var seattleStore = new Store('seattle', 23, 65, 6.3, 'seattlePH');
var tokyoStore = new Store('tokyo', 3, 24, 1.2, 'tokyoPH');
var dubaiStore = new Store('dubai', 11, 38, 3.7, 'dubaiPH');
var parisStore = new Store('paris', 3, 24, 1.2, 'parisPH');
var limaStore = new Store('lima', 3, 24, 1.2, 'limaPH');

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


/*==Making my form work== */
// 1. find target
// var cookieStoreForm = document.getElementById('cookieStoreForm');

// function captureCookieInfo(cookieStoreForm){
// console.log('hello');
// }

// 2. make function useful... need to make a new object(store)

// 3. render my new store to the page.

