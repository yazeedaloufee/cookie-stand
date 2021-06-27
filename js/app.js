"use strict";

let seatle = {
    maxCustomers :65,
    minCustormers : 23,
    averageCookiesCustomer : 6.3,
    averageCookiesHour:[],

    randCustomers :  function (max, min){
         
         return Math.floor(Math.random() * (max - min + 1) ) + min ;
          },

    randCookieCreater: function(){
          for(let i=0; i<14;i++){
             //let random2=this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers);
              this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
          }},
       

    render: function(){
        
        this.randCookieCreater();
        
        let divEl=document.getElementById('hours')
        let ulEl=document.createElement('ul')
        let sumcockies=0;
        let shop=document.createElement('h2');
        shop.textContent=`seatle`;
        divEl.appendChild(shop);

        for (let i=0;i< this.averageCookiesHour.length;i++){
            let liEl=document.createElement('li');
            sumcockies+=this.averageCookiesHour[i];
            if(i<7){
            liEl.textContent=`${(i+5) % 12+1}am: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
            }
            if(i>=7){
                liEl.textContent=`${(i+6) % 12}pm: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                }
            ulEl.appendChild(liEl);
            
        }
        let liEl=document.createElement('li');
        liEl.textContent=`total is ${sumcockies}`;
        ulEl.appendChild(liEl);

        divEl.appendChild(ulEl);


    }
    }











    let Tokyo = {
        maxCustomers :24,
        minCustormers : 3,
        averageCookiesCustomer : 1.2,
        averageCookiesHour:[],
    
        randCustomers :  function (max, min){
             
             return Math.floor(Math.random() * (max - min + 1) ) + min;
              },
    
        randCookieCreater: function(){
              for(let i=0; i<14;i++){
                  this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
              }},
           
    
        render: function(){
            
            this.randCookieCreater();
            
            let divEl=document.getElementById('hours')
            let ulEl=document.createElement('ul')
            let sumcockies=0;
            let shop=document.createElement('h2');
            shop.textContent=`Tokyo`;
            divEl.appendChild(shop);
    
            for (let i=0;i< this.averageCookiesHour.length;i++){
                let liEl=document.createElement('li');
                sumcockies+=this.averageCookiesHour[i];
                if(i<7){
                liEl.textContent=`${(i+5) % 12+1}am: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                }
                if(i>=7){
                    liEl.textContent=`${(i+6) % 12}pm: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                    }
                ulEl.appendChild(liEl);
                
            }
            let liEl=document.createElement('li');
            liEl.textContent=`total is ${sumcockies}`;
            ulEl.appendChild(liEl);
    
            divEl.appendChild(ulEl);
    
    
        }
        }
    let Dubai = {
        maxCustomers :38,
        minCustormers : 11,
        averageCookiesCustomer : 3.7,
        averageCookiesHour:[],
    
        randCustomers :  function (max, min){
             
            return Math.floor(Math.random() * (max - min + 1) ) + min;
             },
    
        randCookieCreater: function(){
              for(let i=0; i<14;i++){
                  this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
              }},
           
    
        render: function(){
            
            this.randCookieCreater();
            
            let divEl=document.getElementById('hours')
            let ulEl=document.createElement('ul')
            let sumcockies=0;
            let shop=document.createElement('h2');
            shop.textContent=`Dubai`;
            divEl.appendChild(shop);
    
            for (let i=0;i< this.averageCookiesHour.length;i++){
                let liEl=document.createElement('li');
                sumcockies+=this.averageCookiesHour[i];
                if(i<7){
                liEl.textContent=`${(i+5) % 12+1}am: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                }
                if(i>=7){
                    liEl.textContent=`${(i+6) % 12}pm: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                    }
                ulEl.appendChild(liEl);
                
            }
            let liEl=document.createElement('li');
            liEl.textContent=`total is ${sumcockies}`;
            ulEl.appendChild(liEl);
    
            divEl.appendChild(ulEl);
    
    
        }
        }
        let Paris = {
            maxCustomers :38,
            minCustormers : 20,
            averageCookiesCustomer : 2.3,
            averageCookiesHour:[],
        
            randCustomers :  function (max, min){
                 
                 return Math.floor(Math.random() * (max - min + 1) ) + min;
                  },
        
            randCookieCreater: function(){
                  for(let i=0; i<14;i++){
                      this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
                  }},
               
        
            render: function(){
                
                this.randCookieCreater();
                
                let divEl=document.getElementById('hours')
                let ulEl=document.createElement('ul')
                let sumcockies=0;
                let shop=document.createElement('h2');
                shop.textContent=`Paris`;
                divEl.appendChild(shop);
        
                for (let i=0;i< this.averageCookiesHour.length;i++){
                    let liEl=document.createElement('li');
                    sumcockies+=this.averageCookiesHour[i];
                    if(i<7){
                    liEl.textContent=`${(i+5) % 12+1}am: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                    }
                    if(i>=7){
                        liEl.textContent=`${(i+6) % 12}pm: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                        }
                    ulEl.appendChild(liEl);
                    
                }
                let liEl=document.createElement('li');
                liEl.textContent=`total is ${sumcockies}`;
                ulEl.appendChild(liEl);
        
                divEl.appendChild(ulEl);
        
        
            }
            }
            let Lima = {
                maxCustomers :16,
                minCustormers : 2,
                averageCookiesCustomer : 4.6,
                averageCookiesHour:[],
            
                randCustomers :  function (max, min){
                     
                     return Math.floor(Math.random() * (max - min + 1) ) + min;
                      },
            
                randCookieCreater: function(){
                      for(let i=0; i<14;i++){
                          this.averageCookiesHour[i]=Math.floor(this.averageCookiesCustomer*this.randCustomers(this.maxCustomers,this.minCustormers))
                      }},
                   
            
                render: function(){
                    
                    this.randCookieCreater();
                    
                    let divEl=document.getElementById('hours')
                    let ulEl=document.createElement('ul')
                    let sumcockies=0;
                    let shop=document.createElement('h2');
                    shop.textContent=`Lima`;
                    divEl.appendChild(shop);
            
                    for (let i=0;i< this.averageCookiesHour.length;i++){
                        let liEl=document.createElement('li');
                        sumcockies+=this.averageCookiesHour[i];
                        if(i<7){
                        liEl.textContent=`${(i+5) % 12+1}am: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                        }
                        if(i>=7){
                            liEl.textContent=`${(i+6) % 12}pm: ${this.averageCookiesHour[i]} cookies `;//this.averageCookiesHour[i]; //
                            }
                        ulEl.appendChild(liEl);
                        
                    }
                    let liEl=document.createElement('li');
                    liEl.textContent=`total is ${sumcockies}`;
                    ulEl.appendChild(liEl);
            
                    divEl.appendChild(ulEl);
            
            
                }
                }
                        




    

    // seatle.check();
    seatle.render();
    Tokyo.render();
    Dubai.render();
    Paris.render();
    Lima.render();


