'use strict';

// Create the class Store which will take in location, min customers, max customers, and average cookies per day, will also include an openTime and closeTime just to play around with them, defaults set to 6 and 20 respectively
function Store(location, minCustomers, maxCustomers, avgCookies, openTime = 6, closeTime = 20) {
  this.location = location;
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  this.openTime = openTime,
  this.closeTime = closeTime,
  this.numCustArray = [];
  this.salesArrayRaw = [],
  this.salesTotal = 0,
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
    this.salesArrayRaw.push(cookiesThisHour);
  }
  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

// Renders the header for each store first, adding it as a new column
Store.prototype.renderHeader = function() {
  // Ensure salesHourlyandTotal runs before this
  this.salesHourlyandTotal();

  // Grab a few necessary elements from the HTML to start the table
  var topRowLocation = document.getElementById('topRowSalesTable');

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
  var salesTable = document.getElementById('salesTable');
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
    newTDataEl.textContent = this.salesArrayRaw[i];
    currentTRowEl.appendChild(newTDataEl);
  }
};

// Renders the last row of the table, with the first column saying Total and then puts the total day's count for the store in it's final column
Store.prototype.renderFooter = function() {
  // Ensure renderBody is run first so that we can attach footer at the bottom
  this.renderBody();
  // This runs fine without the following line, but the linter doesn't like line 86 referring to the salesTable when it's not defined here
  var salesTable = document.getElementById('salesTable');
  // Add a total row on the end if it doesn't exist already
  if (!document.getElementById('total')){
    var lastTRowEl = document.createElement('tr');
    lastTRowEl.textContent = 'Total';
    lastTRowEl.id = 'total';
    salesTable.appendChild(lastTRowEl);
  }

  // Add total cookie sales for the store to the last box in the store's column
  var lastTDataEl = document.createElement('td');
  lastTDataEl.textContent = this.salesTotal;
  lastTRowEl = document.getElementById('total');
  lastTRowEl.appendChild(lastTDataEl);
};

Store.prototype.cookieTosserCalc = function () {
  this.renderFooter();
  for(var i = 0; i < (this.closeTime-this.openTime); i ++) {
    if (this.salesArrayRaw[i] <= 40) {
      this.cookieTossersNeeded.push(2);
    } else {
      this.cookieTossersNeeded.push(Math.ceil(this.salesArrayRaw[i]/20));
    }
  }
};

Store.prototype.cookieTosserTableHeader = function() {
  this.cookieTosserCalc();

  // Grab a few necessary elements from the HTML to start the table
  var topRowLocation = document.getElementById('topRowTossersTable');

  // Create a new heading for each column with the store's location
  var newTHeadEl = document.createElement('th');
  newTHeadEl.textContent = this.location;
  topRowLocation.appendChild(newTHeadEl);
};

Store.prototype.cookieTosserTableBody = function() {
  this.cookieTosserTableHeader();
  var tossersTable = document.getElementById('tossersTable');
  if (!document.getElementById('ct7')){
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var newTRowEl = document.createElement('tr');
      newTRowEl.id = 'ct' + i;
      newTRowEl.textContent = this.hoursOpen[i];
      tossersTable.appendChild(newTRowEl);
    }
  }

  // Populate the column for the store with the numbers from the cookieTossersNeeded array
  for (i = 0; i < this.hoursOpen.length; i++) {
    var currentTRowEl = document.getElementById('ct' + i);
    var newTDataEl = document.createElement('td');
    newTDataEl.textContent = this.cookieTossersNeeded[i];
    currentTRowEl.appendChild(newTDataEl);
  }
};




// Create each store
let seattleLocation = new Store('Seattle', 23, 65, 6.3);
let tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
let dubaiLocation = new Store('Dubai', 11, 38, 3.7);
let parisLocation = new Store('Paris', 20,38, 2.3);
let limaLocation = new Store('Lima', 2, 16, 4.6);

// Call the renderFooter function on each to create and populate the table, the renderFooter is the only one necessary as the functions call the other functions that are required first.
// seattleLocation.renderFooter();
seattleLocation.cookieTosserTableBody();
tokyoLocation.cookieTosserTableBody();
dubaiLocation.cookieTosserTableBody();
parisLocation.cookieTosserTableBody();
limaLocation.cookieTosserTableBody();
