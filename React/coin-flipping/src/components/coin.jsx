import React, { Component } from 'react'

export default class coin extends Component {
    render() {
        function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
        }
            
        function fiveHeads() {
            return new Promise( (resolve, reject) => {
            // your code here!
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads"){
                    headsCount++;
                } else {
                    headsCount = 0;
                }

            }
            if (attempts<100) {
                
                resolve(`It took ${attempts} tries to flip five "heads" ,This is run after the fiveHeadsSync function completes`);
            }else{
                reject('coin has been flipped more than 100 times')
            }
        });
                 }
                 fiveHeads()
                     .then( res => console.log(res) )
                     .catch( err => console.log(err) );
                 console.log( "When does this run now?" );
    return (
      <div>coin</div>
    )
  }
}

