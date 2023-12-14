import React, {useState} from 'react';
import './card.css';

const RelationshipCard = ({ imgSrc, title, description, linkText, linkHref }) => {

  
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  const loadScript = () => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
  };

  const typeformJSX = (
    <div data-tf-live="01HHJBHMFMZ56T8XPCH8YBC9ZD"></div>
  )

  return (
    <div className="col ">
      <div className="card align-item-center justify-content-center " style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', glow: '0px 0px 10px 0px #e47830' }}>
        <img src="https://img.freepik.com/premium-vector/heart-logo-vector-symbol-valentines-day-ribbon-logotype_709422-87.jpg" className="card-img-top" alt="..." />
        <div className="card-body text-align-center ">
          <h5 className="card-title text-center"  ><b>Relationships</b></h5>
          <p className="card-text" style={{ textAlign: 'justify', color: 'black', textAlign: 'center' }}>
          This screening test is designed to provide insights into areas of concern within your relationship.
            <br />
          </p>
          <div className='btn-div' >
          <button className="btn btn-test" onClick={loadScript} >START TEST</button>
          {isScriptLoaded && typeformJSX}
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default RelationshipCard;
