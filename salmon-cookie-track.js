

  var pioneerSquare = {
  CookiesSoldHourly: function() {
  StoreID = 'Pioneer Square';
  MinCust =  17;
  MaxCust =  88;
  AvgCookiePerSale = 5.2;
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (MaxCust - MinCust + 1)) + MinCust) * AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand1').innerHTML = StoreID;
    document.getElementById('cookie-stand2').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };

  var portlandAirport = {
  CookiesSoldHourly: function() {
  StoreID = 'Portland Airport';
  MinCust =   6;
  MaxCust =  24;
  AvgCookiePerSale = 1.2;
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (MaxCust - MinCust + 1)) + MinCust) * AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand3').innerHTML = StoreID;
    document.getElementById('cookie-stand4').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };

  var washingtonSquare = {
  CookiesSoldHourly: function() {
  StoreID = 'Washington Square';
  MinCust =  11;
  MaxCust =  38;
  AvgCookiePerSale = 1.9;
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (MaxCust - MinCust + 1)) + MinCust) * AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand5').innerHTML = StoreID;
    document.getElementById('cookie-stand6').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };

  var sellwood = {
  CookiesSoldHourly: function() {
  StoreID = 'Sellwood';
  MinCust =  20;
  MaxCust =  48;
  AvgCookiePerSale = 3.3;
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (MaxCust - MinCust + 1)) + MinCust) * AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand7').innerHTML = StoreID;
    document.getElementById('cookie-stand8').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };

  var pearlDistrict = {
  CookiesSoldHourly: function() {
  StoreID = 'Pearl District';
  MinCust =   3;
  MaxCust =  24;
  AvgCookiePerSale = 2.6;
  var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
  for (var i = 0; i < time.length; i++) {
    var cookiesSoldHourly = Math.floor(((Math.random() * (MaxCust - MinCust + 1)) + MinCust) * AvgCookiePerSale);
    console.log(cookiesSoldHourly);
    document.getElementById('cookie-stand9').innerHTML = StoreID;
    document.getElementById('cookie-stand10').innerHTML += '<li>'+time[i]+cookiesSoldHourly+'</li>';
  }
  }
  };

  var store = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];
  for (var i = 0; i < store.length; i++) {
    var hourlyCookies = store[i];
    hourlyCookies.CookiesSoldHourly();
  };
