
  var storeNo1 = {
    StoreID:            'Pioneer Square',
    MinCust:            17,
    MaxCust:            88,
    AvgCookiePerSale:  5.2,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        document.getElementById('cookie-stand1').innerHTML = '<span class="hilite">'+this.StoreID+'</span>';
        var salesList = document.getElementById('cookie-stand2');
        var hourlySales = '<li><span class="text">'+time[i]+'</span><span class="data">'+cookiesSoldHourly+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand2').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+this.CookiePile+'</span></li>';
    }
  };
  var storeNo2 = {
    StoreID:            'Portland Airport',
    MinCust:             6,
    MaxCust:            24,
    AvgCookiePerSale:  1.2,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        document.getElementById('cookie-stand3').innerHTML = '<span class="hilite">'+this.StoreID+'</span>';
        var salesList = document.getElementById('cookie-stand4');
        var hourlySales = '<li><span class="text">'+time[i]+'</span><span class="data">'+cookiesSoldHourly+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand4').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+this.CookiePile+'</span></li>';
    }
  };
  var storeNo3 = {
    StoreID:            'Washington Square',
    MinCust:            11,
    MaxCust:            38,
    AvgCookiePerSale:  1.9,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        document.getElementById('cookie-stand5').innerHTML = '<span class="hilite">'+this.StoreID+'</span>';
        var salesList = document.getElementById('cookie-stand6');
        var hourlySales = '<li><span class="text">'+time[i]+'</span><span class="data">'+cookiesSoldHourly+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand6').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+this.CookiePile+'</span></li>';
    }
  };
  var storeNo4 = {
    StoreID:            'Sellwood',
    MinCust:            20,
    MaxCust:            48,
    AvgCookiePerSale:  3.3,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        document.getElementById('cookie-stand7').innerHTML = '<span class="hilite">'+this.StoreID+'</span>';
        var salesList = document.getElementById('cookie-stand8');
        var hourlySales = '<li><span class="text">'+time[i]+'</span><span class="data">'+cookiesSoldHourly+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand8').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+this.CookiePile+'</span></li>';
    }
  };
  var storeNo5 = {
    StoreID:            'Pearl District',
    MinCust:            3,
    MaxCust:            24,
    AvgCookiePerSale:  2.6,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        document.getElementById('cookie-stand9').innerHTML = '<span class="hilite">'+this.StoreID+'</span>';
        var salesList = document.getElementById('cookie-stand10');
        var hourlySales = '<li><span class="text">'+time[i]+'</span><span class="data">'+cookiesSoldHourly+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand10').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+this.CookiePile+'</span></li>';
    }
  };
  var store = [storeNo1, storeNo2, storeNo3, storeNo4, storeNo5];
  for (var i = 0; i < store.length; i++) {
    var hourlyCookies = store[i];
    hourlyCookies.CookiesSoldHourly();
  };
