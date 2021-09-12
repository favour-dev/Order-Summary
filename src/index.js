import React from 'react';
import ReactDOM from 'react-dom';
import illustration from './images/';

function Order (){
  return (
    <div className='ordercontainer'>
      <div className='ordercontainer-top'>
        <img src={illustration}/>
      </div> 
      <div className='ordercontainer-bottom'>
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks, podcasts on any device anywhere you like</p>
        <div>
          Annual Plan<span>$50.99/year</span>
        </div>

        <button>Proceed to Payment</button>
      </div>

    </div>
  )
}
ReactDOM.render(<Order/>, document.getElementById('root'));