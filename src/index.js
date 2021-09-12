import React from 'react';
import ReactDOM from 'react-dom';
// import background from './images/pattern-background-desktop.svg';
import illustration from "./images/illustration-hero.svg";
import musicicon from "./images/icon-music.svg";
import "./index.css"

function Order (){
  return (
    // <div style={{ background: `url(${background})` }}>
      <div className='ordercontainer'>
        <div className='ordercontainer-top'>
          <img src={illustration} alt= "illustration"/>
        </div> 
        <div className='ordercontainer-bottom'>
          <h1>Order Summary</h1>
          <p className='songs'>You can now listen to millions of songs, audiobooks, podcasts on any device anywhere you like</p>
          <div className="price-container">
            <span><img src={musicicon} alt="musin icon"/></span>
          <p className="price"> Annual Plan<br/><span>$50.99/year</span></p>
          <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">Change</a>
          </div>

          <button>Proceed to Payment</button>
          <p>Cancel order</p>
        </div>

      </div>
    // </div>
  )
}
ReactDOM.render(<Order/>, document.getElementById('root'));