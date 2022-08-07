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



export function Header() {
  // const isLogin = ("login_key" in session && "id" in session.login_key && session.login_key.id != null)
  const profile_name="sonu"
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)


  const menuOpenClose = function(){
    setIsMenuOpen(!isMenuOpen)
    console.log("isMenuOpen===", isMenuOpen)
  }

  const logout =function(){
    window.location.href = "#/login"
  }

  return (
    <>
      <div className="head_div" >
        <div className="hsplit">
            <div className="logo" >
              <img src="images/logo.png" />
            </div>
            <div className="title" style={{display: 'none'}}>
              Crix
            </div>
            <div className="hsplit navbar_tabs" style={{float: 'right', marginRight: '40px'}}>
              < div className="show-md hide-xs hide-sm heading">
                <button className='sign_out_button'>Sign Out</button>
              </div>
              <div className="show-md hide-xs show-sm heading">
                <img src= "images/profile_image.png"  className='profile_image'/>
              </div>
              <div className="show-md show-xs show-sm heading profile_name">
                Jeo Stockton
              </div>
              {/* <div className="show-md hide-xs show-sm heading ">
                BIBENDUM 
              </div>
              <div className="show-md hide-xs show-sm heading">
                MEGNA
              </div> */}
              {/* <div className="hide-lg hide-md show-xs show-sm" style={{paddingTop: '6px', cursor:'pointer'}}>
                <div className="menu" onClick={menuOpenClose}>
                  <span className="material-icons" style={{fontWeight: 600}}>
                    more_vert
                  </span>
                </div>
              </div> */}

            </div>
        </div>
      </div>
      <div style={{height: '67px'}} />
    </>

  )
}


