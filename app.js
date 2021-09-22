'use strict'

let hoursOp = ['6:00 am', '7:00 am', '8:00 am', '9:00 am','10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

let storeLocations = [];

function Stores(name, minCust, maxCust, avgCookieSale)
{
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.salesTotals = [];
    this.grandTotal = 0;
    this.getSalesTotals();
    storeLocations.push(this);

}

Stores.prototype.getSalesTotals= function()
{
    for(let hours = 0; hours < hoursOp.length; hours++)
    {
        this.salesTotals.push(Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust * this.avgCookieSale)));
    }
};

let tableEl = document.getElementById('sales');

function displayTime()
{
    for(let hours = 0; hours < hoursOp.length; hours++)
    {
        let timeEl = document.createElement('th')
        timeEl.innerText = hoursOp[hours];
        tableEl.appendChild(timeEl);
    }
}

displayTime();

Stores.prototype.render = function()
{
    let rowEl = document.createElement('tr');
    
    let nameEl = document.createElement('td');
    nameEl.innerText = this.name;
    rowEl.appendChild(nameEl);
    
    for(let hours = 0; hours < hoursOp.length; hours++)
    {
        let salesTotalEl = document.createElement('td');
        salesTotalEl.innerText = this.salesTotals[hours];
        rowEl.appendChild(salesTotalEl);
    }

    tableEl.appendChild(rowEl);
}

new Stores('Seattle', 23, 65, 6.3);
storeLocations[0].render();

new Stores('Tokyo', 3, 24, 1.2);
storeLocations[1].render();

new Stores('Dubai', 11, 38, 3.7)
storeLocations[2].render();

new Stores('Paris', 20, 38, 2.3);
storeLocations[3].render();

new Stores('Lima', 2, 16, 4.6);
storeLocations[4].render();


// function generateRange(min, max)
// {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let seattle = 
// {
//     name: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     salesTotals: [],
//     grandTotal: 0,
//     hourlyCustomers: function()
//     {
//         for(let hours = 0; hours < hoursOp.length; hours++)
//         {
//             let generateNumber = generateRange(this.minCust, this.maxCust);
            
//             let customerSales = Math.round(generateNumber * this.avgCookieSale);
//             this.salesTotals.push(`${hoursOp[hours]}: total sales ${customerSales}`);
//             this.grandTotal = this.grandTotal + customerSales;
//         }
//     },
// };

// function generateLineItems(store) 
// {
//     let parentEl = document.querySelector(`#${store.name}`);
    
//     for (let total = 0; total < store.salesTotals.length; total++) 
//     {
//         let newItem = document.createElement('li');
        
//         newItem.innerText = store.salesTotals[total];
        
//         parentEl.appendChild(newItem);
//     }
    
//     let lastItem = document.createElement('li');
    
//     lastItem.innerText = store.grandTotal;
    
//     parentEl.appendChild(lastItem);
// }

// console.log(seattle)
// seattle.hourlyCustomers();
// generateLineItems(seattle);
