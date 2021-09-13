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
          <Image className='illustration' source={illustration} alt="illustration"/>
        </div> 
        <div className='ordercontainer-bottom'>
          <Header children="Order Summary"/>
          <Paragraph  text='You can now listen to millions of songs, audiobooks, podcasts on any device anywhere you like'/>
          <Price />

          <Button Value='Proceed to Payment'/>
          <Paragraph  text='Cancel Order'/>
        </div>

      </div>
    // </div>
  )
}

const Header = ({children}) => (
  <>
    <h1>{children}</h1>
  </>
)
const Paragraph = ({text}) => (
  <>
    <p>{text}</p>
  </>
)

const Price = () => (
  <>
     <div className="price-container">
          <Image className='music' source={musicicon} alt="music icon"/> 
          <p className="price"> Annual Plan<br/><span>$50.99/year</span></p>
          <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">Change</a>
      </div>
  </>
)

const Image = ({source, alt}) => (
  <>
    <img src={source} alt={alt}/>
  </>
)
const Button = ({Value}) => (
  <>
    <button>{Value}</button>
  </>
)
ReactDOM.render(<Order/>, document.getElementById('root'));