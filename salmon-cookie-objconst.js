
  function Store (storeName, storeTime, minCust, maxCust, avgCookiePerSale) {
    this.storeName = storeName;
    this.storeTime = storeTime;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerSale = avgCookiePerSale;
    this.cookiePile = 0;
    this.cookiesSoldHourly = function() {
      return Math.floor(((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookiePerSale);
      console.log(this.cookiesSoldHourly);
    };
  }

    var cookieStores = [
      new Store('Pioneer Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 17, 88, 5.2),
      new Store('Portland Airport', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 6, 24, 1.2),
      new Store('Washington Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 11, 38, 1.9),
      new Store('Sellwood', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 20, 48, 3.3),
      new Store('Pearl District', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 3, 24, 2.6),
    ]

    for (var index = 0; index < cookieStores.length; index++) {
      var currentStore = cookieStores[index];
      document.getElementById('cookie-stand1').innerHTML += '<span class="hilite">'+currentStore.storeName+'</span>';
      for (var i = 0; i < currentStore.storeTime.length; i++) {
        var salesList = document.getElementById('cookie-stand1');
        var storeHourlySales = currentStore.cookiesSoldHourly();
        // tally up total cookies for this store
        currentStore.cookiePile += storeHourlySales;
        var hourlySales = '<li><span class="text">'+currentStore.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
        salesList.innerHTML += hourlySales;
      }
    document.getElementById('cookie-stand1').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+currentStore.cookiePile+'</span></li>';
    };

    // var storePioneerSquare = new Store ('Pioneer Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 17, 88, 5.2);
    // var storePortlandAirport = new Store ('Portland Airport', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 6, 24, 1.2);
    // var storeWashingtonSquare = new Store ('Washington Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 11, 38, 1.9);
    // var storeSellwood = new Store ('Sellwood', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 20, 48, 3.3);
    // var storePearlDistrict = new Store ('Pearl District', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 3, 24, 2.6);

    // document.getElementById('cookie-stand1').innerHTML = '<span class="hilite">'+storePioneerSquare.storeName+'</span>';
    //   for (var i = 0; i < storePioneerSquare.storeTime.length; i++) {
    //     var salesList = document.getElementById('cookie-stand2');
    //     var storeHourlySales = storePioneerSquare.cookiesSoldHourly();
    //     // tally up total cookies for this store
    //     storePioneerSquare.cookiePile += storeHourlySales;
    //     var hourlySales = '<li><span class="text">'+storePioneerSquare.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
    //     salesList.innerHTML += hourlySales;
    //   }
    // document.getElementById('cookie-stand2').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+storePioneerSquare.cookiePile+'</span></li>';
    //
    // document.getElementById('cookie-stand3').innerHTML = '<span class="hilite">'+storePortlandAirport.storeName+'</span>';
    //   for (var i = 0; i < storePortlandAirport.storeTime.length; i++) {
    //     var salesList = document.getElementById('cookie-stand4');
    //     var storeHourlySales = storePortlandAirport.cookiesSoldHourly();
    //     // tally up total cookies for this store
    //     storePortlandAirport.cookiePile += storeHourlySales;
    //     var hourlySales = '<li><span class="text">'+storePortlandAirport.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
    //     salesList.innerHTML += hourlySales;
    //   }
    // document.getElementById('cookie-stand4').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+storePortlandAirport.cookiePile+'</span></li>';
    //
    // document.getElementById('cookie-stand5').innerHTML = '<span class="hilite">'+storeWashingtonSquare.storeName+'</span>';
    //   for (var i = 0; i < storeWashingtonSquare.storeTime.length; i++) {
    //     var salesList = document.getElementById('cookie-stand6');
    //     var storeHourlySales = storeWashingtonSquare.cookiesSoldHourly();
    //     // tally up total cookies for this store
    //     storeWashingtonSquare.cookiePile += storeHourlySales;
    //     var hourlySales = '<li><span class="text">'+storeWashingtonSquare.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
    //     salesList.innerHTML += hourlySales;
    //   }
    // document.getElementById('cookie-stand6').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+storeWashingtonSquare.cookiePile+'</span></li>';
    //
    // document.getElementById('cookie-stand7').innerHTML = '<span class="hilite">'+storeSellwood.storeName+'</span>';
    //   for (var i = 0; i < storeSellwood.storeTime.length; i++) {
    //     var salesList = document.getElementById('cookie-stand8');
    //     var storeHourlySales = storeSellwood.cookiesSoldHourly();
    //     // tally up total cookies for this store
    //     storeSellwood.cookiePile += storeHourlySales;
    //     var hourlySales = '<li><span class="text">'+storeSellwood.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
    //     salesList.innerHTML += hourlySales;
    //   }
    // document.getElementById('cookie-stand8').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+storeSellwood.cookiePile+'</span></li>';
    //
    // document.getElementById('cookie-stand9').innerHTML = '<span class="hilite">'+storePearlDistrict.storeName+'</span>';
    //   for (var i = 0; i < storePearlDistrict.storeTime.length; i++) {
    //     var salesList = document.getElementById('cookie-stand10');
    //     var storeHourlySales = storePearlDistrict.cookiesSoldHourly();
    //     // tally up total cookies for this store
    //     storePearlDistrict.cookiePile += storeHourlySales;
    //     var hourlySales = '<li><span class="text">'+storePearlDistrict.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
    //     salesList.innerHTML += hourlySales;
    //   }
    // document.getElementById('cookie-stand10').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+storePearlDistrict.cookiePile+'</span></li>';
