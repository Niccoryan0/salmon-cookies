'use strict';

// salesTable is used in the functions outside the class
var salesTable = document.getElementById('salesTable');
// Each object is added to this array upon creation
var locationArr = [];


// hourlyTotals will hold the total for each hour for all locations
// Create the class Store which will take in location, min customers, max customers, and average cookies per day, will also include an openTime and closeTime just to play around with them, defaults set to 6 and 20 respectively
function Store(location, minCustomers, maxCustomers, avgCookies, openTime = 6, closeTime = 20) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.numCustArray = [];
  this.salesArray = [];
  this.salesTotal = 0;
  this.cookieTossersNeeded = [];
  this.busyHours = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  this.hoursOpen = [];
  // Fill the empty hours open with times specific to the given open and close hour, currently makes no differnece since it uses defaults but just playing with it
  for (var i = openTime; i < closeTime; i++) {
    if (i < 12) {
      this.hoursOpen.push(i + 'am');
    } else if (i === 12) {
      this.hoursOpen.push(i + 'pm');
    } else {
      this.hoursOpen.push((i-12) + 'pm');
    }
  }
}


// First method: Get a random number of customers within the range of min and max for each store per hour and puts them in an array
Store.prototype.customersPerHour = function () {
  for (var i=0; i < this.hoursOpen.length; i++) {
    var numCust = Math.random() * ((this.maxCustomers + 1) - this.minCustomers) * this.busyHours[i] + this.minCustomers;
    this.numCustArray.push(numCust);
  }
};

// Second method: Call the customersPerHour function for every open hour of the day, multiply each number by the avg. number of cookies purchased, and create an array of cookie sales for the day and calculate the total
Store.prototype.salesHourlyandTotal = function () {
  this.customersPerHour();
  for (var i  = this.openTime; i < this.closeTime; i++) {
    var cookiesThisHour = Math.round(this.numCustArray[i-6] * this.avgCookies);
    // cookiesThisHour = Math.round(cookiesThisHour * this.busyHours[i-6]);
    this.salesArray.push(cookiesThisHour);
  }
  for (i = 0; i < this.salesArray.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArray[i];
  }
};

// Renders the header for each store first, adding it as a new column
Store.prototype.renderHeader = function() {
  // Ensure salesHourlyandTotal runs before this
  this.salesHourlyandTotal();

  // Grab a few necessary elements from the HTML to start the table
  var topRowLocation = document.getElementById('topRowSalesTable');
  if (!document.getElementById('emptySpace')){
    var emptySpaceTHead = document.createElement('th');
    emptySpaceTHead.id = 'emptySpace';
    emptySpaceTHead.textContent = '';
    topRowLocation.appendChild(emptySpaceTHead);
  }
  // Create a new heading for each column with the store's location
  var newTHeadEl = document.createElement('th');
  newTHeadEl.textContent = this.location;
  topRowLocation.appendChild(newTHeadEl);

  // Only generate time column if it doesn't already exist (Don't want to create the whole table every time)
};

// Renders the first column of the page, the times, and takes the array created by salesHourlyandTotal function, and populates the column with the values from it
Store.prototype.renderBody = function() {
  // Ensure renderHeader is run first to start the table
  this.renderHeader();
  if (!document.getElementById('7pm')){
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var newTRowEl = document.createElement('tr');
      newTRowEl.id = this.hoursOpen[i];
      newTRowEl.textContent = this.hoursOpen[i];
      salesTable.appendChild(newTRowEl);
    }
  }
  // Populate the column for the store with the numbers from the array
  for (i = 0; i < this.hoursOpen.length; i++) {
    var currentTRowEl = document.getElementById(this.hoursOpen[i]);
    var newTDataEl = document.createElement('td');
    newTDataEl.id = 'data';
    newTDataEl.textContent = this.salesArray[i];
    currentTRowEl.appendChild(newTDataEl);
  }
};

// Renders the total row of the table, with the first column saying Total and then puts the total day's count for the store in it's final column
Store.prototype.renderFooter = function() {
  // Ensure renderBody is run first so that we can attach footer at the bottom
  this.renderBody();
  // This runs fine without the following line, but the linter doesn't like line 86 referring to the salesTable when it's not defined here
  var salesTable = document.getElementById('salesTable');
  // Add a total row on the end if it doesn't exist already
  if (!document.getElementById('total')){
    var totalTRowEl = document.createElement('tr');
    totalTRowEl.textContent = 'Total';
    totalTRowEl.id = 'total';
    salesTable.appendChild(totalTRowEl);
  }

  // Add total cookie sales for the store to the total box in the store's column
  var totalTDataEl = document.createElement('td');
  totalTDataEl.textContent = this.salesTotal;
  totalTDataEl.id = 'data';
  totalTRowEl = document.getElementById('total');
  totalTRowEl.appendChild(totalTDataEl);
};

// Calculates number of Cookie Tossers needed per hour
Store.prototype.cookieTosserCalc = function () {
  this.renderFooter();
  for(var i = 0; i < (this.closeTime-this.openTime); i ++) {
    if (this.salesArray[i] <= 40) {
      this.cookieTossersNeeded.push(2);
    } else {
      this.cookieTossersNeeded.push(Math.ceil(this.salesArray[i]/20));
    }
  }
};

// Displays header for cookie tosser table on the sales page
Store.prototype.cookieTosserTableHeader = function() {
  this.cookieTosserCalc();
  // Grab a few necessary elements from the HTML to start the table
  var topRowLocation = document.getElementById('topRowTossersTable');
  if (!document.getElementById('emptySpace2')){
    var emptySpaceTHead = document.createElement('th');
    emptySpaceTHead.id = 'emptySpace2';
    emptySpaceTHead.textContent = '';
    topRowLocation.appendChild(emptySpaceTHead);
  }

  // Create a new heading for each column with the store's location
  var newTHeadEl = document.createElement('th');
  newTHeadEl.textContent = this.location;
  topRowLocation.appendChild(newTHeadEl);
};

// Displays body for cookie tosser table on the sales page
Store.prototype.cookieTosserTableBody = function() {
  this.cookieTosserTableHeader();
  var tossersTable = document.getElementById('tossersTable');
  if (!document.getElementById('time7')){
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var newTRowEl = document.createElement('tr');
      newTRowEl.id = 'time' + i;
      newTRowEl.textContent = this.hoursOpen[i];
      tossersTable.appendChild(newTRowEl);
    }
  }

  // Populate the column for the store with the numbers from the cookieTossersNeeded array
  for (i = 0; i < this.hoursOpen.length; i++) {
    var currentTRowEl = document.getElementById('time' + i);
    var newTDataEl = document.createElement('td');
    newTDataEl.id = 'data';
    newTDataEl.textContent = this.cookieTossersNeeded[i];
    currentTRowEl.appendChild(newTDataEl);
  }
};

function cookiesPerHourAllCalc() {
  var hourlyTotalsAll = new Array(locationArr[0].hoursOpen.length).fill(0);
  var dailyTotalsAll = 0;
  for (var i = 0; i < locationArr.length; i++){
    for (var j = 0; j < locationArr[0].hoursOpen.length; j++) {
      hourlyTotalsAll[j] += locationArr[i].salesArray[j];
    }
    dailyTotalsAll += locationArr[i].salesTotal;
  }
  return [hourlyTotalsAll,dailyTotalsAll];
}

function renderTotalsToPage() {
  var calcResults = cookiesPerHourAllCalc();
  // Render Header First:
  var topRowLocation = document.getElementById('topRowSalesTable');
  var totalsTHead = document.createElement('th');
  totalsTHead.textContent = 'Total';
  topRowLocation.appendChild(totalsTHead);

  // Render Body:

  for (var i = 0; i < locationArr[0].hoursOpen.length; i++) {
    var currentTRowEl = document.getElementById(locationArr[0].hoursOpen[i]);
    var newTDataEl = document.createElement('td');
    newTDataEl.id = 'data';
    newTDataEl.textContent = calcResults[0][i];
    currentTRowEl.appendChild(newTDataEl);


  }
  var totalTRowEl = document.getElementById('total');
  var totalTDataEl = document.createElement('td');
  totalTDataEl.id = 'data';
  totalTDataEl.textContent = calcResults[1];
  totalTRowEl = document.getElementById('total');
  totalTRowEl.appendChild(totalTDataEl);
}

function renderEverything() {
  for(var i = 0; i < locationArr.length; i++) {
    locationArr[i].cookieTosserTableBody();
  }
  renderTotalsToPage();
}


// Create each store

// let seattle = new Store('Seattle', 23, 65, 6.3);
// let tokyo = new Store('Tokyo', 3, 24, 1.2);
// let dubai = new Store('Dubai', 11, 38, 3.7);
// let paris = new Store('Paris', 20,38, 2.3);
// let lima = new Store('Lima', 2, 16, 4.6);

var newStoreForm = document.getElementById('newStore');
newStoreForm.addEventListener('submit', function createNewStore(newStoreSub){
  // Stop page from reloading first:
  newStoreSub.preventDefault();

  let formTarget = newStoreSub.target;
  // Grab all the values we need:
  locationArr.push(new Store(formTarget.location.value, formTarget.maxCustomers.value, formTarget.minCustomers.value, formTarget.avgCookies.value));

  console.log(locationArr);
});

locationArr.push(new Store('Seattle', 23, 65, 6.3));
locationArr.push(new Store('Tokyo', 3, 24, 1.2));
locationArr.push(new Store('Dubai', 11, 38, 3.7));
locationArr.push(new Store('Paris', 20,38, 2.3));
locationArr.push(new Store('Lima', 2, 16, 4.6));
// locationArr.push(new Store('Portland', 20, 34, 4.6));


// seattleLocation.cookieTosserTableBody();
// tokyoLocation.cookieTosserTableBody();
// dubaiLocation.cookieTosserTableBody();
// parisLocation.cookieTosserTableBody();
// limaLocation.cookieTosserTableBody();
// renderTotalsToPage();
renderEverything();


