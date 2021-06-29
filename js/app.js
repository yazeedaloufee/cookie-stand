"use strict";

let shops=[];
//start of constructor function
function Shop (name,max,min,cCustomer){
    this.name=name;
    this.maxCustomers =max;
    this.minCustormers = min;
    this.averageCookiesCustomer = cCustomer;
    this.averageCookiesHour=[];
    this.sumcockiesRaw=0;
shops.push(this);

}//end of constructor functino

Shop.prototype.randCustomers=function (max, min){
         
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
     }

Shop.prototype.randCookieCreater=function(){
    for(let i=0; i<14;i++){
       //let random2=this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers);
        this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
    }}
let divEl=document.getElementById('hours')
    let tableEL=document.createElement('table')
//header function 
    function createHeader(){
    
    divEl.appendChild(tableEL)
    let trEl=document.createElement('tr');
    tableEL.appendChild(trEl);
    let thEL=document.createElement("th");
    thEL.textContent='Shops'

    trEl.appendChild(thEL);

    for (let i=0;i< 14;i++){
    let thEL1=document.createElement("th");
    if(i<7){
        thEL1.textContent=`  ${(i+5) % 12+1}am  `}
    if(i>=7){
        thEL1.textContent=`  ${(i+6) % 12}pm  `;//this.averageCookiesHour[i]; //
            }
    trEl.appendChild(thEL1);
    console.log(i);

    }
    let thEL2=document.createElement("th");
    thEL2.textContent='daily location total'

    trEl.appendChild(thEL2);
}//end of header function
//footer function
function createFooter(){
    let ftrEl=document.createElement('tr');
    ftrEl.textContent=`hourly total and all for all total`
    tableEL.appendChild(ftrEl);
    for (let i=0;i< 14;i++){
         let tdElc=document.createElement('td')
        let hourlySum=0;
        for(let n=0;n<shops.length;n++){
       hourlySum+=shops[n].averageCookiesHour[i]
        tdElc.textContent=`${hourlySum}`}
        ftrEl.appendChild(tdElc);
}
let allSum=0;
let tdEld=document.createElement('td');

for (let i=0;i<shops.length;i++){
allSum+=shops[i].sumcockiesRaw;
}
tdEld.textContent=`${allSum}`;
ftrEl.appendChild(tdEld);


}//end of footer function



Shop.prototype.render= function(){
    
this.randCookieCreater();
let sumcockies=0;
let trEl3=document.createElement('tr');
let shop=document.createElement('h2');
shop.textContent=this.name;
trEl3.appendChild(shop);

for (let i=0;i< this.averageCookiesHour.length;i++){
    let liEl=document.createElement('td');
    sumcockies+=this.averageCookiesHour[i];
    
    if(i<7){
    liEl.textContent=` ${this.averageCookiesHour[i]}`;//this.averageCookiesHour[i]; //
    }
    if(i>=7){
        liEl.textContent=` ${this.averageCookiesHour[i]}`;//this.averageCookiesHour[i]; //
        }
    trEl3.appendChild(liEl);
   
}
let liEl=document.createElement('td');
liEl.textContent=` ${sumcockies}`;
trEl3.appendChild(liEl);

tableEL.appendChild(trEl3);
 this.sumcockiesRaw=sumcockies}



let seatle= new Shop('seatle',65,23,6.3);
let Tokyo=new Shop('Tokyo',24,3,1.2);
let Dubai=new Shop('Dubai',38,11,3.7);
let Paris=new Shop('Paris',38,20,2.3);
let Lima=new Shop('Lima',16,2,4.6);


createHeader();
seatle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

createFooter();












    

    // seatle.check();
  
