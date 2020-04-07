'use strict';
// var seattleStore = {
//   minCustomers : 23,
//   maxCustomers : 65,
//   avgCookies : 6.3,
//   salesArrayRaw : [],
//   salesArrayStrings : [],
//   salesTotal : 0,
// };

// seattleStore.custPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// seattleStore.salesHourlyandTotal = function () {
//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
//     this.salesArrayRaw.push(cookiesThisHour);
//     if (i < 12) {
//       this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
//     } else if (i === 12) {
//       this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
//     } else {
//       this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
//     }
//   }
//   for (i = 0; i < this.salesArrayRaw.length; i++) {
//     this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
//   }
// };

// seattleStore.render = function() {
//   this.salesHourlyandTotal();
//   var seattleOlEl = document.getElementById('seattleul');
//   for (var i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     seattleOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   seattleOlEl.appendChild(newLiEl);
// };


// var tokyoStore = {
//   minCustomers : 3,
//   maxCustomers : 24,
//   avgCookies : 1.2,
//   salesArrayRaw : [],
//   salesArrayStrings : [],
//   salesTotal : 0,
// };

// tokyoStore.custPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// tokyoStore.salesHourlyandTotal = function () {
//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
//     this.salesArrayRaw.push(cookiesThisHour);
//     if (i < 12) {
//       this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
//     } else if (i === 12) {
//       this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
//     } else {
//       this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
//     }
//   }
//   for (i = 0; i < this.salesArrayRaw.length; i++) {
//     this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
//   }
// };
// tokyoStore.render = function() {
//   this.salesHourlyandTotal();
//   var seattleOlEl = document.getElementById('tokyoul');
//   for (var i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     seattleOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   seattleOlEl.appendChild(newLiEl);
// };

// var dubaiStore = {
//   minCustomers : 11,
//   maxCustomers : 38,
//   avgCookies : 3.7,
//   salesArrayRaw : [],
//   salesArrayStrings : [],
//   salesTotal : 0,
// };

// dubaiStore.custPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// dubaiStore.salesHourlyandTotal = function () {

//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
//     this.salesArrayRaw.push(cookiesThisHour);
//     if (i < 12) {
//       this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
//     } else if (i === 12) {
//       this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
//     } else {
//       this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
//     }
//   }


//   for (i = 0; i < this.salesArrayRaw.length; i++) {
//     this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
//   }
// };

// dubaiStore.render = function() {
//   this.salesHourlyandTotal();
//   var seattleOlEl = document.getElementById('dubaiul');
//   for (var i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     seattleOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   seattleOlEl.appendChild(newLiEl);
// };

// var parisStore = {
//   minCustomers : 20,
//   maxCustomers : 38,
//   avgCookies : 2.3,
//   salesArrayRaw : [],
//   salesArrayStrings : [],
//   salesTotal : 0,
// };

// parisStore.custPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// parisStore.salesHourlyandTotal = function () {

//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
//     this.salesArrayRaw.push(cookiesThisHour);
//     if (i < 12) {
//       this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
//     } else if (i === 12) {
//       this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
//     } else {
//       this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
//     }
//   }


//   for (i = 0; i < this.salesArrayRaw.length; i++) {
//     this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
//   }
// };

// parisStore.render = function() {
//   this.salesHourlyandTotal();
//   var seattleOlEl = document.getElementById('parisul');
//   for (var i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     seattleOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   seattleOlEl.appendChild(newLiEl);
// };

// var limaStore = {
//   minCustomers : 2,
//   maxCustomers : 16,
//   avgCookies : 4.6,
//   salesArrayRaw : [],
//   salesArrayStrings : [],
//   salesTotal : 0,
// };

// limaStore.custPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// limaStore.salesHourlyandTotal = function () {

//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
//     this.salesArrayRaw.push(cookiesThisHour);
//     if (i < 12) {
//       this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
//     } else if (i === 12) {
//       this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
//     } else {
//       this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
//     }
//   }


//   for (i = 0; i < this.salesArrayRaw.length; i++) {
//     this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
//   }
// };

// limaStore.render = function() {
//   this.salesHourlyandTotal();
//   var seattleOlEl = document.getElementById('limaul');
//   for (var i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     seattleOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   seattleOlEl.appendChild(newLiEl);
// };

// seattleStore.render();
// tokyoStore.render();
// dubaiStore.render();
// parisStore.render();
// limaStore.render();



// =================FUNCTION BASED CLASS=======================

function Store(location, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  this.salesArrayRaw = [],
  this.salesArrayStrings = [],
  this.salesTotal = 0,
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
}

Store.prototype.customersPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

Store.prototype.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.customersPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(this.hoursOpen[i-6] + ': ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(this.hoursOpen[i-6] + ': ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push(this.hoursOpen[i-6] + ': ' + cookiesThisHour + ' cookies');
    }
  }

  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

Store.prototype.render = function() {
  this.salesHourlyandTotal();


  var salesTable = document.getElementById('salesTable');
  var topRowLocation = document.getElementById('topRowSalesTable');

  var newTHeadEl = document.createElement('th');
  newTHeadEl.textContent = this.location;
  topRowLocation.appendChild(newTHeadEl);

  if (!document.getElementById('7pm')){
    for (var i = 0; i < this.salesArrayStrings.length; i++) {
      var newTRowEl = document.createElement('tr');
      newTRowEl.id = this.hoursOpen[i];
      newTRowEl.textContent = this.hoursOpen[i];
      salesTable.appendChild(newTRowEl);
    }
  }
  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var currentTRowEl = document.getElementById(this.hoursOpen[i]);
    var newTDataEl = document.createElement('td');
    newTDataEl.textContent = this.salesArrayRaw[i];
    currentTRowEl.appendChild(newTDataEl);
  }

  if (!document.getElementById('total')){
    var lastTRowEl = document.createElement('tr');
    lastTRowEl.textContent = 'Total';
    lastTRowEl.id = 'total';
    salesTable.appendChild(lastTRowEl);
  }

  var lastTDataEl = document.createElement('td');
  lastTDataEl.textContent = this.salesTotal;
  var lastTRowEl = document.getElementById('total');
  lastTRowEl.appendChild(lastTDataEl);

  // CODE BELOW: Old code to list out the values, replaced with table but saved just in case.
  // var storeMain = document.getElementById('mainsales');
  // var newParaEl = document.createElement('p');
  // newParaEl.textContent = this.location + ' cookie sales:';
  // storeMain.appendChild(newParaEl);
  // var newOlEl = document.createElement('ol');
  // newParaEl.appendChild(newOlEl);

  // for (var i = 0; i < this.salesArrayStrings.length; i++) {
  //   var newLiEl = document.createElement('li');
  //   newLiEl.textContent = this.salesArrayStrings[i];
  //   newOlEl.appendChild(newLiEl);
  // }

  // newLiEl = document.createElement('li');
  // newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  // newOlEl.appendChild(newLiEl);

};

const seattleLocation = new Store('Seattle', 23, 65, 6.3);
const tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
const dubaiLocation = new Store('Dubai', 11, 38, 3.7);
const parisLocation = new Store('Paris', 20,38, 2.3);
const limaLocation = new Store('Lima', 2, 16, 4.6);

seattleLocation.render();
tokyoLocation.render();
dubaiLocation.render();
parisLocation.render();
limaLocation.render();



// ====================CONSTRUCTOR CLASS============================
// Playing with the differences between function-based class and constructor class
class Store2 {
  constructor(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers,
    this.maxCustomers = maxCustomers,
    this.avgCookies = avgCookies,
    this.salesArrayRaw = [],
    this.salesArrayStrings = [],
    this.salesTotal = 0;
    this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  }
  customersPerHour() {
    return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
  }
  salesHourlyandTotal() {
    for (var i = 6; i < 20; i++) {
      var cookiesThisHour = Math.round(this.customersPerHour() * this.avgCookies);
      this.salesArrayRaw.push(cookiesThisHour);
      if (i < 12) {
        this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
      }
      else if (i === 12) {
        this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
      }
      else {
        this.salesArrayStrings.push((i - 12) + 'pm: ' + cookiesThisHour + ' cookies');
      }
    }
    for (i = 0; i < this.salesArrayRaw.length; i++) {
      this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
    }
  }
  render() {
    this.salesHourlyandTotal();


    var salesTable = document.getElementById('salesTable');
    var topRowLocation = document.getElementById('topRowSalesTable');

    var newTHeadEl = document.createElement('th');
    newTHeadEl.textContent = this.location;
    topRowLocation.appendChild(newTHeadEl);

    if (!document.getElementById('7pm')){
      for (var i = 0; i < this.salesArrayStrings.length; i++) {
        var newTRowEl = document.createElement('tr');
        newTRowEl.id = this.hoursOpen[i];
        newTRowEl.textContent = this.hoursOpen[i];
        salesTable.appendChild(newTRowEl);
      }
    }
    for (i = 0; i < this.salesArrayStrings.length; i++) {
      var currentTRowEl = document.getElementById(this.hoursOpen[i]);
      var newTDataEl = document.createElement('td');
      newTDataEl.textContent = this.salesArrayRaw[i];
      currentTRowEl.appendChild(newTDataEl);
    }
  }
}
// const seattleLocation2 = new Store2('Seattle', 23, 65, 6.3);
// const tokyoLocation2 = new Store2('Tokyo', 3, 24, 1.2);
// const dubaiLocation2 = new Store2('Dubai', 11, 38, 3.7);
// const parisLocation2 = new Store2('Paris', 20,38, 2.3);
// const limaLocation2 = new Store2('Lima', 2, 16, 4.6);

// seattleLocation2.render();
// tokyoLocation2.render();
// dubaiLocation2.render();
// parisLocation2.render();
// limaLocation2.render();
