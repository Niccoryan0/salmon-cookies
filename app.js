'use strict';
var seattleStore = {
  minCustomers : 23,
  maxCustomers : 65,
  avgCookies : 6.3,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

seattleStore.custPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

seattleStore.salesHourlyandTotal = function () {
  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
    }
  }
  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

seattleStore.render = function() {
  this.salesHourlyandTotal();
  var seattleOlEl = document.getElementById('seattleul');
  for (var i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
};


var tokyoStore = {
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies : 1.2,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

tokyoStore.custPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

tokyoStore.salesHourlyandTotal = function () {
  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
    }
  }
  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};
tokyoStore.render = function() {
  this.salesHourlyandTotal();
  var seattleOlEl = document.getElementById('tokyoul');
  for (var i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
};

var dubaiStore = {
  minCustomers : 11,
  maxCustomers : 38,
  avgCookies : 3.7,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

dubaiStore.custPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

dubaiStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
    }
  }


  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

dubaiStore.render = function() {
  this.salesHourlyandTotal();
  var seattleOlEl = document.getElementById('dubaiul');
  for (var i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
};

var parisStore = {
  minCustomers : 20,
  maxCustomers : 38,
  avgCookies : 2.3,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

parisStore.custPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

parisStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
    }
  }


  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

parisStore.render = function() {
  this.salesHourlyandTotal();
  var seattleOlEl = document.getElementById('parisul');
  for (var i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
};

var limaStore = {
  minCustomers : 2,
  maxCustomers : 16,
  avgCookies : 4.6,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

limaStore.custPerHour = function () {
  return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
};

limaStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var cookiesThisHour = Math.round(this.custPerHour() * this.avgCookies);
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + ' cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + ' cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + ' cookies');
    }
  }


  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
};

limaStore.render = function() {
  this.salesHourlyandTotal();
  var seattleOlEl = document.getElementById('limaul');
  for (var i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
};

seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();



// =================MOSTLY FOR FUN BELOW THIS LINE=======================
// Trying to work the objects into a single function based class, still in progress, let me know if you see this and want me to not do this

// function store(location, minCustomers, maxCustomers, avgCookies) {
//   this.location = location;
//   this.minCustomers = minCustomers,
//   this.maxCustomers = maxCustomers,
//   this.avgCookies = avgCookies,
//   this.salesArrayRaw = [],
//   this.salesArrayStrings = [],
//   this.salesTotal = 0;
// }

// store.prototype.customersPerHour = function () {
//   return Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
// };

// store.prototype.salesHourlyandTotal = function () {

//   for (var i  = 6; i < 20; i++) {
//     var cookiesThisHour = Math.round(this.customersPerHour() * this.avgCookies);
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


//   var storeMain = document.getElementById('mainsales');
//   var newParaEl = document.createElement('p');
//   newParaEl.textContent = this.location + ' cookie sales:';
//   storeMain.appendChild(newParaEl);
//   var newOlEl = document.createElement('ol');
//   newParaEl.appendChild(newOlEl);

//   for (i = 0; i < this.salesArrayStrings.length; i++) {
//     var newLiEl = document.createElement('li');
//     newLiEl.textContent = this.salesArrayStrings[i];
//     newOlEl.appendChild(newLiEl);
//   }
//   newLiEl = document.createElement('li');
//   newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
//   newOlEl.appendChild(newLiEl);
// };

// const seattleLocation = new store('Seattle', 23, 65, 6.3);
// seattleLocation.salesHourlyandTotal();
