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
var locationList = [];

//constructor function--- Pulling the properties into the object to be rendered... It is making the object
function Store(city, minCust, maxCust, avgCookieSale, ulTargetId) {
  //stuff being constructed from the store data
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.ulTargetId = ulTargetId;
  this.storeHoursOpen = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
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

// renders total header
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

  newTdEl = document.createElement('td');
  newTdEl.textContent = 'Total';
  newTrEl.appendChild(newTdEl);
  tableEltoTarget.appendChild(newTrEl);
}

//render footer
function renderTableFooter(){
  var newTrEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = 'Hourly Total';
  newTrEl.appendChild(newThEl);
  //add cookie sales

  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var cookieCounter = 0;
    // console.log(cookieCounter);
    var newTdEl = document.createElement('td');
    console.log(locationList.length);
    for(var j = 0; j < locationList.length; j++) {
      cookieCounter += locationList[j].cookieSalesPerHour[i]; //taking cookieCounter value 
      // console.log(cookieCounter);
    }

    newTdEl.textContent = cookieCounter;
    newTrEl.appendChild(newTdEl);
  }

  cookieCounter = 0;
  newTdEl = document.createElement('td');
  for(i = 0; i < locationList.length; i++) {
    cookieCounter += locationList[i].totalSalesPerDay;
  }
  newTdEl.textContent = cookieCounter;
  newTrEl.appendChild(newTdEl);
  //3. add the content to the target
  //appendChild to the tableEl , attach the tr
  tableEltoTarget.appendChild(newTrEl);
}

/*==Making my form work== */
// 1. find target
function handleSubmit(event){
  event.preventDefault();
  //need to target info that will be in form
  var city = event.target.city.value; //we get the data to show to the console by using value
  console.log(city);
  var minCust = event.target.minCust.value;
  console.log(minCust);
  var maxCust = event.target.maxCust.value;
  console.log(maxCust);
  var storeHoursOpen = event.target.storeHoursOpen.value;
  console.log(storeHoursOpen);

  event.target.city.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.storeHoursOpen.value = null;

}
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleSubmit);





// var cookieStoreForm = document.getElementById('cookieStoreForm');

// function captureCookieInfo(cookieStoreForm){
// console.log('hello');
// }

// 2. make function useful... need to make a new object(store)

// 3. render my new store to the page. 

// console.log(Store);
locationList.push(new Store('seattle', 23, 65, 6.3, 'seattlePH')); //not populating because ... I am not rendering it yet.

locationList.push(new Store('tokyo', 3, 24, 1.2, 'tokyoPH'));
locationList.push(new Store('dubai', 11, 38, 3.7, 'dubaiPH'));
locationList.push(new Store('paris', 3, 24, 1.2, 'parisPH'));
locationList.push(new Store('lima', 3, 24, 1.2, 'limaPH'));

//I am wanting to make a function that renders all of the stores
function renderStores(){
  renderTableHeader();
  for(var i = 0; i < locationList.length; i++) {
    locationList[i].totalSales();
    locationList[i].renderTableRow();
  }
  renderTableFooter();
}

renderStores();

//take sales per hour and then




