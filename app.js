'use strict'

let hoursOp = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Stores(name, minCust, maxCust, avgCookieSale)
{
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.salesTotals = [];
    this.dailySales = 0;
    this.getSalesTotals();
    Stores.all.push(this);
    
}

Stores.all = [];

Stores.prototype.getSalesTotals = function()
{
    for(let hours = 0; hours < hoursOp.length; hours++)
    {
        let cookiesBought = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgCookieSale;
        this.salesTotals.push(Math.floor(cookiesBought));

        this.dailySales = Math.floor(this.dailySales + cookiesBought);
    }
};

Stores.prototype.render = function()
{
    let tableEl = document.getElementById('sales');
    let rowEl = document.createElement('tr');
    
    let nameEl = document.createElement('td');
    nameEl.innerText = this.name;
    rowEl.appendChild(nameEl);
    
    for(let sale = 0; sale < this.salesTotals.length; sale++)
    {
        let salesTotalEl = document.createElement('td');
        salesTotalEl.innerText = this.salesTotals[sale];
        rowEl.appendChild(salesTotalEl);
    }

    let salesTotalEl = document.createElement('td');
    salesTotalEl.innerText = this.dailySales;
    rowEl.appendChild(salesTotalEl);    

    tableEl.appendChild(rowEl);
}

let seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.render();

let tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.render();

let dubai = new Stores('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new Stores('Paris', 20, 38, 2.3);
paris.render();

let lima = new Stores('Lima', 2, 16, 4.6);
lima.render();

function renderFooter() {

    let parentEl = document.getElementById('sales');
    let rowEl = document.createElement('tr');
  
    let dataEl = document.createElement('td');
    dataEl.innerText = 'Totals';
    rowEl.appendChild(dataEl);
  
    let grandTotal = 0;
    for (let hour = 0; hour < hoursOp.length; hour ++) {

      let dataEl = document.createElement('td');
      let sum = 0;
      for (let store = 0; store < Stores.all.length; store++) {
        sum = sum + Stores.all[store].salesTotals[hour];
        grandTotal = grandTotal + Stores.all[store].salesTotals[hour];
      }
      dataEl.innerText = sum;
      rowEl.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.innerText = grandTotal;
    rowEl.appendChild(dataEl);
    parentEl.appendChild(rowEl);
  }
  
  renderFooter();