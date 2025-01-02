import React from 'react';

function Hero() {
    return (  
    <section className="container-fluid" id='supportHero'>
      <div className="p-5" id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href=''>Track tickets</a>
      </div>
      <div className="row p-5 m-3" id=''>
      <div className="col-6 p-5" id=''>
        <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder='Eg. how do I activate F&O'/><br/><br/>
        <a href='' >Track account opening</a> 
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href='' >Track segment activation</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href='' >Intraday margins</a> <br/><br/>
        <a href='' >Kite user manual</a>
      </div>
      <div className="col-6 p-5" id=''>
      <h1 className='fs-3'>Featured</h1>
      <ol>
        <li><a href=''style={{lineHeight:"2.5"}}>Adjustment of Futures and Options contracts of ITC</a></li>
        <li><a href=''style={{lineHeight:"2.5"}}>Surveillance measure on scrips - January 2025</a></li>
      </ol> 
      </div>
      </div>
    </section>
    );
}

export default Hero;