
  var storeNo1 = {
    StoreID:            'Pioneer Square',
    MinCust:            17,
    MaxCust:            88,
    AvgCookiePerSale:  5.2,
    CookiePile:          0,
    CookiesSoldHourly: function() {
      var time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
    // use DOM manipulation to add section with store name
    var section = document.getElementById('cookie-stand1');
    console.log(section);
    var storeName = document.createElement('p');
    console.log(storeName);
    storeName.innerText = this.StoreID;
    section.appendChild(storeName);
    // run 'for' loop to cycle through times of the day for this store
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        // use DOM manipulation to add list item & append onto paragraph 'storeName'
        var cookieTimeList = document.createElement('li');
        cookieTimeList.innerText = time[i] + cookiesSoldHourly;
        storeName.appendChild(cookieTimeList);
      }
        var totalDailyCookies = document.createElement('li');
        totalDailyCookies.innerText = 'Total: '+this.CookiePile;
        storeName.appendChild(totalDailyCookies);
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
    var section = document.getElementById('cookie-stand1');
    console.log(section);
    var storeName = document.createElement('p');
    console.log(storeName);
    storeName.innerText = this.StoreID;
    section.appendChild(storeName);
    // run 'for' loop to cycle through times of the day for this store
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        // use DOM manipulation to add list item & append onto paragraph 'storeName'
        var cookieTimeList = document.createElement('li');
        cookieTimeList.innerText = time[i] + cookiesSoldHourly;
        storeName.appendChild(cookieTimeList);
      }
        var totalDailyCookies = document.createElement('li');
        totalDailyCookies.innerText = 'Total: '+this.CookiePile;
        storeName.appendChild(totalDailyCookies);
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
    var section = document.getElementById('cookie-stand1');
    console.log(section);
    var storeName = document.createElement('p');
    console.log(storeName);
    storeName.innerText = this.StoreID;
    section.appendChild(storeName);
    // run 'for' loop to cycle through times of the day for this store
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        // use DOM manipulation to add list item & append onto paragraph 'storeName'
        var cookieTimeList = document.createElement('li');
        cookieTimeList.innerText = time[i] + cookiesSoldHourly;
        storeName.appendChild(cookieTimeList);
      }
        var totalDailyCookies = document.createElement('li');
        totalDailyCookies.innerText = 'Total: '+this.CookiePile;
        storeName.appendChild(totalDailyCookies);
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
    var section = document.getElementById('cookie-stand1');
    console.log(section);
    var storeName = document.createElement('p');
    console.log(storeName);
    storeName.innerText = this.StoreID;
    section.appendChild(storeName);
    // run 'for' loop to cycle through times of the day for this store
      for (var i = 0; i < time.length; i++) {
        var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
        console.log(cookiesSoldHourly);
        //tally up total cookies for store
        this.CookiePile += cookiesSoldHourly;
        // use DOM manipulation to add list item & append onto paragraph 'storeName'
        var cookieTimeList = document.createElement('li');
        cookieTimeList.innerText = time[i] + cookiesSoldHourly;
        storeName.appendChild(cookieTimeList);
      }
        var totalDailyCookies = document.createElement('li');
        totalDailyCookies.innerText = 'Total: '+this.CookiePile;
        storeName.appendChild(totalDailyCookies);
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
      var section = document.getElementById('cookie-stand1');
      console.log(section);
      var storeName = document.createElement('p');
      console.log(storeName);
      storeName.innerText = this.StoreID;
      section.appendChild(storeName);
      // run 'for' loop to cycle through times of the day for this store
        for (var i = 0; i < time.length; i++) {
          var cookiesSoldHourly = Math.floor(((Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust) * this.AvgCookiePerSale);
          console.log(cookiesSoldHourly);
          //tally up total cookies for store
          this.CookiePile += cookiesSoldHourly;
          // use DOM manipulation to add list item & append onto paragraph 'storeName'
          var cookieTimeList = document.createElement('li');
          cookieTimeList.innerText = time[i] + cookiesSoldHourly;
          storeName.appendChild(cookieTimeList);
        }
          var totalDailyCookies = document.createElement('li');
          totalDailyCookies.innerText = 'Total: '+this.CookiePile;
          storeName.appendChild(totalDailyCookies);
      }
    };
  // call function
  var store = [storeNo1, storeNo2, storeNo3, storeNo4, storeNo5];
  for (var i = 0; i < store.length; i++) {
    var hourlyCookies = store[i];
    hourlyCookies.CookiesSoldHourly();
  };
