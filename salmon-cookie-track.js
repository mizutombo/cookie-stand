
  var pioneerSquare = {
  StoreID:            'Pioneer Square',
  MinCust:            17,
  MaxCust:            88,
  AvgCookiePerSale:   5.2,
  CookiesSoldHourly: function() {
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand1').innerHTML = this.StoreID;
    document.getElementById('cookie-stand2').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };
  var portlandAirport = {
  StoreID:            'Portland Airport',
MinCust:              6,
  MaxCust:            24,
  AvgCookiePerSale:   1.2,
  CookiesSoldHourly: function() {
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand3').innerHTML = this.StoreID;
    document.getElementById('cookie-stand4').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };
  var washingtonSquare = {
  StoreID:            'Washington Square',
  MinCust:            11,
  MaxCust:            38,
  AvgCookiePerSale:   1.9,
  CookiesSoldHourly: function() {
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand5').innerHTML = this.StoreID;
    document.getElementById('cookie-stand6').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };
  var sellwood = {
  StoreID:            'Sellwood',
  MinCust:            20,
  MaxCust:            48,
  AvgCookiePerSale:   3.3,
  CookiesSoldHourly: function() {
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand7').innerHTML = this.StoreID;
    document.getElementById('cookie-stand8').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };
  var pearlDistrict = {
  StoreID:            'Pearl District',
  MinCust:            3,
  MaxCust:            24,
  AvgCookiePerSale:   2.6,
  CookiesSoldHourly: function() {
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand9').innerHTML = this.StoreID;
    document.getElementById('cookie-stand10').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };
  var store = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];
  for (var i = 0; i < store.length; i++) {
    var hourlyCookies = store[i];
    hourlyCookies.CookiesSoldHourly();
  };
