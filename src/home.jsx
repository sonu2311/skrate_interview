import './main.css';
import {Header} from './header';
import React from 'react';
import {api} from './library';

function Overview(){
  const l= [1,2,3,4]
  return (
    <>
      <div className='card'>
        <div className='overview_text'>Overview</div>
        <div className='hsplit' style={{boxSizing:'border-box'}}>
          {l.map((x)=>(
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{}}>    
              <div className='inside_div_in_card hsplit'>
                <div className='overview_element_text vheight'>Profile Views  </div>
                <div className='overview_element_count vheight'>89</div>
              </div>
            </div>
          ))}         
        </div>    
      </div>
    </>
  )
}

function UpcomingSessions(){
  const l=[1,2,3,4]
  return (
    <>
      <div className='card'>
        <div className='overview_text'>Upcoming Sessions</div>
        {l.map ((x)=>(
          <div className='hsplit upcoming_session_element' style={{boxSizing:'border-box'}}>
            <div className='col-xs-5 hsplit ' style={{}}>
              <div className='upcoming_session_element_section '>
                <img src= "images/profile_image.png"  className=''/>
              </div>
              <div className='upcoming_session_element_section '  style={{marginLeft:"13px"}} >
                <div >
                  <div className='font22 lalign mb5'>Rushil Rai  </div>
                  <div className='font20 lalign'>Flutter</div>
                </div>
              </div> 
            </div>
            <div className='col-xs-3 upcoming_session_element_section'>
              <div>
                <div className='font22 mb5'> 14.00 - 15.00</div>
                <div className='font20'> 24/10/21</div>
              </div>  
            </div> 
            <div className=' col-xs-3 upcoming_session_element_section'>
            <div className='upcoming_session_color_div'> Mentorship</div>
            </div> 
            <div className=' col-xs-1 upcoming_session_element_section'>
            <span class="material-icons" style={{fontWeight:"600"}}>
              arrow_forward
            </span>
            </div> 
          </div> 
        ))}   
      </div>
    </>
  )
}

function RightSection(){
  
}


 export function Home(){
  return (
    <>
      <Header/>
      <div class="hsplit" style={{marginTop:"3px"}}>
        <div className="left_panel hide-xs hide-sm show-lg hide-md">
          <div >home</div>
          <div>Shuffle</div>
        </div>
        <div className='hsplit right_section'>
          <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
            <Overview/>
            <UpcomingSessions/>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-12 col-xs-12 ">
            <div className='card'>
              right card
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
 }