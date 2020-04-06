'use strict';
var seattleStore = {
  minCustomers : 23,
  maxCustomers : 65,
  avgCookies : 6.3,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

seattleStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var custThisHour = Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
    var cookiesThisHour = Math.round(custThisHour * this.avgCookies);
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


  var seattleOlEl = document.getElementById('seattleul');


  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  seattleOlEl.appendChild(newLiEl);
  return [this.salesArray, this.salesTotal];
};


var tokyoStore = {
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies : 1.2,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

tokyoStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var custThisHour = Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
    var cookiesThisHour = Math.round(custThisHour * this.avgCookies);
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


  var tokyoOlEl = document.getElementById('tokyoul');


  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    tokyoOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  tokyoOlEl.appendChild(newLiEl);
  return [this.salesArray, this.salesTotal];
};

var dubaiStore = {
  minCustomers : 11,
  maxCustomers : 38,
  avgCookies : 3.7,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

dubaiStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var custThisHour = Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
    var cookiesThisHour = Math.round(custThisHour * this.avgCookies);
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


  var dubaiOlEl = document.getElementById('dubaiul');


  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    dubaiOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  dubaiOlEl.appendChild(newLiEl);
  return [this.salesArray, this.salesTotal];
};

var parisStore = {
  minCustomers : 20,
  maxCustomers : 38,
  avgCookies : 2.3,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

parisStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var custThisHour = Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
    var cookiesThisHour = Math.round(custThisHour * this.avgCookies);
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


  var parisOlEl = document.getElementById('parisul');


  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    parisOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  parisOlEl.appendChild(newLiEl);
  return [this.salesArray, this.salesTotal];
};

var limaStore = {
  minCustomers : 2,
  maxCustomers : 16,
  avgCookies : 4.6,
  salesArrayRaw : [],
  salesArrayStrings : [],
  salesTotal : 0,
};

limaStore.salesHourlyandTotal = function () {

  for (var i  = 6; i < 20; i++) {
    var custThisHour = Math.round(Math.random() * ((this.maxCustomers + 1) - this.minCustomers) + this.minCustomers);
    var cookiesThisHour = Math.round(custThisHour * this.avgCookies);
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


  var limaOlEl = document.getElementById('limaul');


  for (i = 0; i < this.salesArrayStrings.length; i++) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = this.salesArrayStrings[i];
    limaOlEl.appendChild(newLiEl);
  }
  newLiEl = document.createElement('li');
  newLiEl.textContent = 'Total: ' + this.salesTotal + ' cookies';
  limaOlEl.appendChild(newLiEl);
  return [this.salesArray, this.salesTotal];
};


seattleStore.salesHourlyandTotal();
tokyoStore.salesHourlyandTotal();
dubaiStore.salesHourlyandTotal();
parisStore.salesHourlyandTotal();
limaStore.salesHourlyandTotal();
