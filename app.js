'use strict';

var tableEltoTarget = document.getElementById('storeTable');
var storeHoursOpen = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var locationList = [];

function Store(city, minCust, maxCust, avgCookieSale) { //this is a class constructor
  //stuff being constructed from the store data
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.storeHoursOpen = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
  this.cookieSalesPerHour = []; //this is because this empty array is waiting for sales to be pushed into it
  this.thisStoresTotalSalesPerDay = 0; //this is the value that thisStoresTotalSalesPerDay will be each day
}

//Randomizer====================
Store.prototype.randCustomers = function () {
  return Math.floor(
    Math.random() * (this.maxCust - this.minCust) + this.minCust
  );
};

// totalSales method to the store object ==================
Store.prototype.totalSales = function () {
  if (this.cookieSalesPerHour.length === 0) { //if array has stuff in it do not run it
    for (var i = 0; i < storeHoursOpen.length; i++) {
      var customersThisHour = this.randCustomers();
      var cookieSalesThisHour = this.avgCookieSale * customersThisHour;
      this.cookieSalesPerHour.push(Math.floor(cookieSalesThisHour));
    //for each hour output a num of cookies
    }
    // console.log(this.totalSales)
    //thisStoresTotalSalesPerDay represents the bucket of cookies
  
    for (i = 0; i < this.cookieSalesPerHour.length; i++) {
      this.thisStoresTotalSalesPerDay += this.cookieSalesPerHour[i];//keeps the running total --- array of total sales and the number of total sales perday
    }
  }

  console.log(this.thisStoresTotalSalesPerDay);
};

//=========================================================
//Method to Render

Store.prototype.renderTableRow = function () { //rendering each city and all of its numbers
  var thisCityTrEl = document.createElement('tr');
  var thisCityThEl = document.createElement('th');
  thisCityThEl.textContent = this.city;
  thisCityTrEl.appendChild(thisCityThEl);
  //TODO: add cookie sales
  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var thisCityTdEl = document.createElement('td');
    thisCityTdEl.textContent = this.cookieSalesPerHour[i];
    thisCityTrEl.appendChild(thisCityTdEl);
  }
  //totals of the city
  // 1. creating element
  var thisCitiesTotalTdEl = document.createElement('td');

  // 2. assign text content for totals
  thisCitiesTotalTdEl.textContent = this.thisStoresTotalSalesPerDay;
  // 3. append the element to the tableRow
  thisCityTrEl.appendChild(thisCitiesTotalTdEl);
  tableEltoTarget.appendChild(thisCityTrEl);
};

// renders table header reading left to right
function renderTableHeader(){
  var topHeaderTrEl = document.createElement('tr');
  var topHeaderThEl = document.createElement('th');
  topHeaderTrEl.appendChild(topHeaderThEl); // create empty cell in top left

  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var topHeaderTdEl = document.createElement('td');
    topHeaderTdEl.textContent = storeHoursOpen[i];
    topHeaderTrEl.appendChild(topHeaderTdEl);
  }
  topHeaderTdEl = document.createElement('td');
  topHeaderTdEl.textContent = 'Total';
  topHeaderTrEl.appendChild(topHeaderTdEl);
  tableEltoTarget.appendChild(topHeaderTrEl);
}

//render footer
function renderTableFooter(){
  var hourlyTotalsTrEl = document.createElement('tr');
  var hourlyTotalsThEl = document.createElement('th');
  hourlyTotalsThEl.textContent = 'Hourly Total';
  hourlyTotalsTrEl.appendChild(hourlyTotalsThEl);
  //add cookie sales

  //rendering for the hour columns
  for(var i = 0; i < storeHoursOpen.length ; i++) {
    var cookieCounter = 0;
    // console.log(cookieCounter);
    var hourlyTotalsTdEl = document.createElement('td');
    // console.log(locationList.length);
    for(var j = 0; j < locationList.length; j++) {
      cookieCounter += locationList[j].cookieSalesPerHour[i]; //reasigning everytime ---- for every hour at every store add cookie sales to running total
      // console.log(cookieCounter);
    }
    hourlyTotalsTdEl.textContent = cookieCounter;
    hourlyTotalsTrEl.appendChild(hourlyTotalsTdEl);
  }

  cookieCounter = 0;
  var totalsTotalsTdEl = document.createElement('td');
  for(i = 0; i < locationList.length; i++) {
    cookieCounter += locationList[i].thisStoresTotalSalesPerDay; //render the sum of the total sales at all locations (bottom left cell)
  }
  totalsTotalsTdEl = document.createElement('td');
  totalsTotalsTdEl.textContent = cookieCounter;
  hourlyTotalsTrEl.appendChild(totalsTotalsTdEl);
  //3. add the content to the target
  //appendChild to the tableEl , attach the tr
  tableEltoTarget.appendChild(hourlyTotalsTrEl);
}


// TODO: 3. render my new store to the page.

locationList.push(new Store('seattle', 23, 65, 6.3));
locationList.push(new Store('tokyo', 3, 24, 1.2));
locationList.push(new Store('dubai', 11, 38, 3.7));
locationList.push(new Store('paris', 3, 24, 1.2));
locationList.push(new Store('lima', 3, 24, 1.2));

//I am wanting to make a function that renders all of the stores
function renderStores(){
  renderTableHeader();
  for(var i = 0; i < locationList.length; i++) {
    locationList[i].totalSales();
    locationList[i].renderTableRow();
  }
  renderTableFooter();
}

renderStores(); // renders the first time that the page is loaded

/*==Making my form work== */
// 1. find target
function handleSubmit(event){
  event.preventDefault();
  //need to target info that will be in form
  var city = event.target.city.value; //we get the data to show to the console by using value
  console.log(city);
  var minCust = parseInt(event.target.minCust.value);
  console.log(minCust);
  var maxCust = parseInt(event.target.maxCust.value);
  console.log(maxCust);
  var avgCookieSale = parseInt(event.target.avgCookieSale.value);
  console.log(avgCookieSale);

  locationList.push(new Store(city, minCust, maxCust, avgCookieSale));

  event.target.city.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookieSale.value = null;

  tableEltoTarget.innerHTML = '';

  renderStores(); // renders new form if they submit. 
}
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleSubmit);

//take sales per hour and then




