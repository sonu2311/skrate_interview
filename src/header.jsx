import './library.css';
import './main.css';
import React from 'react';

export function Header2() {
  return (
    <div className="hsplit" >
      <div>
        <a href="#/example1">
          <div className="link_box" >Example1</div>
        </a>
      </div>
      <div>
        <a href="#/example2">
          <div className="link_box" >Example2</div>
        </a>
      </div>
      <div>
        <a href="#/example3">
          <div className="link_box" >Example3</div>
        </a>
      </div>
    </div>
  );
}



export function Header({name}) {
  return (
    <>
      <div className="head_div" >
        <div className="hsplit">
            <div className="logo" >
              <img src="images/logo.png" />
            </div>
            <div className="hsplit navbar_tabs" style={{float: 'right', marginRight: '40px'}}>
              < div className="show-md hide-xs hide-sm heading">
                <button className='sign_out_button'>Sign Out</button>
              </div>
              <div className="show-md hide-xs show-sm heading">
                <img src= "images/profile_image.png"  className='profile_image'/>
              </div>
              <div className="show-md show-xs show-sm heading profile_name">
                {name}
              </div>
            </div>
        </div>
      </div>
      <div style={{height: '67px'}} />
    </>

  )
}


