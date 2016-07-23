
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
          var storeHourlySales = this.cookiesSoldHourly();
          this.cookiePile += storeHourlySales;
    };
  }
  var cookieStores = [
    new Store('Pioneer Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 17, 88, 5.2),
    new Store('Portland Airport', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 6, 24, 1.2),
    new Store('Washington Square', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 11, 38, 1.9),
    new Store('Sellwood', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 20, 48, 3.3),
    new Store('Pearl District', ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: '], 3, 24, 2.6),
  ];
  for (var index = 0; index < cookieStores.length; index++) {
    var currentStore = cookieStores[index];
    // initialize var cookiePile
    var cookiePile = 0;
    // create new row to append to table
    var cookieStoreRow = document.createElement('tr');
    // create row data cell for store name
    var storeNameCell = document.createElement('td');
    storeNameCell.innerText = currentStore.storeName;
    cookieStoreRow.appendChild(storeNameCell);
    for (var i = 0; i < currentStore.storeTime.length; i++) {
      // create row data cells for cookies sold each hour throughout the day ... run function for cookies sold hourly, using random number engine
      var storeHourlyCookiesCell = document.createElement('td');
      storeHourlyCookiesCell.innerText = currentStore.cookiesSoldHourly();
      // keep running tally of hourly cookie sales for store
      currentStore.cookiePile += parseInt(storeHourlyCookiesCell.innerText);
      console.log(storeHourlyCookiesCell.innerText);
      console.log(currentStore.cookiePile);
      cookieStoreRow.appendChild(storeHourlyCookiesCell);
    }
    // create row data cell for total daily cookie sales for store
    var storeTotalSalesCell = document.createElement('td');
    storeTotalSalesCell.innerText = currentStore.cookiePile;
    console.log(storeTotalSalesCell.innerText);
    cookieStoreRow.appendChild(storeTotalSalesCell);
    // append new row onto table
    var table = document.getElementById('cookie-wookie');
    table.appendChild(cookieStoreRow);
  }

    // var storeHourlyCookiesCell10am = document.createElement('td');
    // storeHourlyCookiesCell10am.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell10am);
    // var storeHourlyCookiesCell11am = document.createElement('td');
    // storeHourlyCookiesCell11am.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell11am);
    // var storeHourlyCookiesCell12pm = document.createElement('td');
    // storeHourlyCookiesCell12pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell12pm);
    // var storeHourlyCookiesCell1pm = document.createElement('td');
    // storeHourlyCookiesCell1pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell1pm);
    // var storeHourlyCookiesCell2pm = document.createElement('td');
    // storeHourlyCookiesCell2pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell2pm);
    // var storeHourlyCookiesCell3pm = document.createElement('td');
    // storeHourlyCookiesCell3pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell3pm);
    // var storeHourlyCookiesCell4pm = document.createElement('td');
    // storeHourlyCookiesCell4pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell4pm);
    // var storeHourlyCookiesCell5pm = document.createElement('td');
    // storeHourlyCookiesCell5pm.innerText = currentStore.cookiesSoldHourly();
    // cookieStoreRow.appendChild(storeHourlyCookiesCell5pm);
    // tally up total hourly cookies for this store
    // currentStore.cookiePile += storeHourlySales;
    // create row data cell for tally of daily cookie sales for this store
  //   var storeTotalSales = document.createElement('td');
  //   storeTotalSales.innerText = currentStore.cookiePile;
  //   cookieStoreRow.appendChild(storeTotalSales);
  //   // append new row onto table
  //   var table = document.getElementById('cookie-wookie');
  //   table.appendChild(cookieStoreRow);
  // }

        // for (var index = 0; index < cookieStores.length; index++) {
        //   var currentStore = cookieStores[index];
        //   document.getElementById('cookie-stand1').innerHTML += '<span class="hilite">'+currentStore.storeName+'</span>';
        //   for (var i = 0; i < currentStore.storeTime.length; i++) {
        //     var salesList = document.getElementById('cookie-stand1');
        //     var storeHourlySales = currentStore.cookiesSoldHourly();
        //     // tally up total cookies for this store
        //     currentStore.cookiePile += storeHourlySales;
        //     var hourlySales = '<li><span class="text">'+currentStore.storeTime[i]+'</span><span class="data">'+storeHourlySales+'</span></li>';
        //     salesList.innerHTML += hourlySales;
        //   }
        // document.getElementById('cookie-stand1').innerHTML += '<li><span class="text">'+'Total: '+'</span><span class="data">'+currentStore.cookiePile+'</span></li>';
        // };

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
