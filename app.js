'use strict'
let hoursOp = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = 
{
    city: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customersEachHr: [],
    cookiesEachHr: [],
    hourlyCustomers: function()
    {
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            this.customersEachHr.push(Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust);
            // console.log(this.customersEachHr);
            return this.customersEachHr;
        }
    },
    
    calculateCookiesEachHr: function()
    {
        //For loop that loops through hours array
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            //Figure out what 1hr of cookie sales is
            //Push 1hr into cookiesEachHr array
            this.cookiesEachHr.push(Math.round(this.avgCookieSale * this.customersEachHr));
            console.log(this.cookiesEachHr);
            return this.cookiesEachHr;
        }
    }
};

Seattle.hourlyCustomers();
Seattle.calculateCookiesEachHr();

let Tokyo = 
{
    city: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    customersEachHr: [],
    cookiesEachHr: [],
    hourlyCustomers: function()
    {
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            this.customersEachHr.push(Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust);
            // console.log(this.customersEachHr);
            return this.customersEachHr;
        }
    },
    
    calculateCookiesEachHr: function()
    {
        //For loop that loops through hours array
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            //Figure out what 1hr of cookie sales is
            //Push 1hr into cookiesEachHr array
            this.cookiesEachHr.push(Math.round(this.avgCookieSale * this.customersEachHr));
            console.log(this.cookiesEachHr);
            return this.cookiesEachHr;
        }
    }
};

Tokyo.hourlyCustomers();
Tokyo.calculateCookiesEachHr();

let Dubai = 
{
    city: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    customersEachHr: [],
    cookiesEachHr: [],
    hourlyCustomers: function()
    {
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            this.customersEachHr.push(Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust);
            // console.log(this.customersEachHr);
            return this.customersEachHr;
        }
    },
    
    calculateCookiesEachHr: function()
    {
        //For loop that loops through hours array
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            //Figure out what 1hr of cookie sales is
            //Push 1hr into cookiesEachHr array
            this.cookiesEachHr.push(Math.round(this.avgCookieSale * this.customersEachHr));
            console.log(this.cookiesEachHr);
            return this.cookiesEachHr;
        }
    }
};

Dubai.hourlyCustomers();
Dubai.calculateCookiesEachHr();

let Paris = 
{
    city: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 3.7,
    customersEachHr: [],
    cookiesEachHr: [],
    hourlyCustomers: function()
    {
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            this.customersEachHr.push(Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust);
            // console.log(this.customersEachHr);
            return this.customersEachHr;
        }
    },
    
    calculateCookiesEachHr: function()
    {
        //For loop that loops through hours array
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            //Figure out what 1hr of cookie sales is
            //Push 1hr into cookiesEachHr array
            this.cookiesEachHr.push(Math.round(this.avgCookieSale * this.customersEachHr));
            console.log(this.cookiesEachHr);
            return this.cookiesEachHr;
        }
    }
};

Paris.hourlyCustomers();
Paris.calculateCookiesEachHr();

let Lima = 
{
    city: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    customersEachHr: [],
    cookiesEachHr: [],
    hourlyCustomers: function()
    {
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            this.customersEachHr.push(Math.floor(Math.random() * (this.maxCust + 1 - this.minCust)) + this.minCust);
            // console.log(this.customersEachHr);
            return this.customersEachHr;
        }
    },
    
    calculateCookiesEachHr: function()
    {
        //For loop that loops through hours array
        for(let hours = 0; hours < hoursOp.length; hours++)
        {
            //Figure out what 1hr of cookie sales is
            //Push 1hr into cookiesEachHr array
            this.cookiesEachHr.push(Math.round(this.avgCookieSale * this.customersEachHr));
            console.log(this.cookiesEachHr);
            return this.cookiesEachHr;
        }
    }
};

Lima.hourlyCustomers();
Lima.calculateCookiesEachHr();

let salesSeattle = Seattle.cookiesEachHr;
let salesTokyo = Tokyo.cookiesEachHr;
let salesDubai = Dubai.cookiesEachHr;
let salesParis = Paris.cookiesEachHr;
let salesLima = Lima.cookiesEachHr;

let allSales = [salesSeattle, salesTokyo, salesDubai, salesParis, salesLima];

let cityName = [Seattle.city, Tokyo.city, Dubai.city, Paris.city, Lima.city];
