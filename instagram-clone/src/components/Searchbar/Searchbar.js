import React from "react";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="header">
      <div className="root">
        <div className="content">
          <div className="logos">
            <div className='container'>
              <div className='glyphsSpriteApp_instagram__outline__24__grey_9 u-__7'></div>
              <div className='divider'></div>
              <div className='glyphsSpriteMobile_nav_type_logo u-__7'></div>
            </div>
          </div>
          <div className="searchbar">
            <input type="text" placeholder='Search' className='input'/>
            <div className='layer1'>
              <div className='layer2'>
                <span className='icon' />
                <span className='text' >Search</span>
              </div>
            </div>
          </div>
          <div className="nav">
            <div className='buttons'>
              <div className='explore' />
              <div className='activity' />
              <div className='profile' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
