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
    console.log(custThisHour);
    var cookiesThisHour = custThisHour * this.avgCookies
    this.salesArrayRaw.push(cookiesThisHour);
    if (i < 12) {
      this.salesArrayStrings.push(i + 'am: ' + cookiesThisHour + 'cookies');
    } else if (i === 12) {
      this.salesArrayStrings.push(i + 'pm: ' + cookiesThisHour + 'cookies');
    } else {
      this.salesArrayStrings.push((i-12) + 'pm: ' + cookiesThisHour + 'cookies');
    }
  }

  for (i = 0; i < this.salesArrayRaw.length; i++) {
    this.salesTotal = this.salesTotal + this.salesArrayRaw[i];
  }
  var seattleOlEl = document.getElementById('seattle');
  var newLiEl = document.createElement('li');

  for (i = 0; i < this.salesArrayStrings; i++) {
    newLiEl.textContent = this.salesArrayStrings[i];
    seattleOlEl.appendChild(newLiEl);
  }
  return [this.salesArray, this.salesTotal];
};

seattleStore.salesHourlyandTotal();



var tokyoStore = {
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies : 1.2,
  
};

var dubaiStore = {
  minCustomers : 11,
  maxCustomers : 38,
  avgCookies : 3.7,
  
};

var parisStore = {
  minCustomers : 20,
  maxCustomers : 38,
  avgCookies : 2.3,
  
};

var limaStore = {
  minCustomers : 2,
  maxCustomers : 16,
  avgCookies : 4.6,
  
};


