import './main.css';
import {Header} from './header';
import React from 'react';
import {api} from './library';


function Overview({dashboardStats}){
  const list = [{
    text: "Profile Views",
    value: dashboardStats.profile_views,  
  },
  {
    text: "Mentorship Sessions",
    value: dashboardStats.mentorship_sessions, 
  },
  {
    text: "Jobs Applied",
    value: dashboardStats.jobs_applied, 
  },
  {
    text: "Skills Verified",
    value: dashboardStats.skills_verified
  },
  ]

  return (
    <>
      <div className='card'>
        <div className='overview_text'>Overview</div>
        <div className='hsplit' style={{boxSizing:'border-box'}}>
          {list.map((content)=>(
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{}}>    
              <div className='inside_div_in_card hsplit'>
                <div className='overview_element_text vheight'>{content.text}</div>
                <div className='overview_element_count vheight'>{content.value}</div>
              </div>
            </div>
          ))}         
        </div>    
      </div>
    </>
  )
}

function UpcomingSessions({upcomingSessions}){
 
  return (
    <>
      <div className='card'>
        <div className='overview_text'>Upcoming Sessions</div>
        {upcomingSessions.map ((session)=>(
          <div className='hsplit upcoming_session_element' style={{boxSizing:'border-box'}}>
            <div className='col-xs-6 col-sm-5 col-lg-4 hsplit'>
              <div className='upcoming_session_element_section '>
                <img src= "images/profile2.png"  className='profile_image2'/>
              </div>
              <div className='upcoming_session_element_section' style={{marginLeft:"13px"}} >
                <div >
                  <div className='font22 lalign mb5'>{session.mentor_name}  </div>
                  <div className='font15 lalign'>Flutter</div>
                </div>
              </div> 
            </div>
            <div className='col-xs-2 col-sm-3 col-lg-4 upcoming_session_element_section'>
              <div>
                <div className='font22 mb5'>{session.timings} </div>
                <div className='font20'>{session.date}</div>
              </div>  
            </div> 
            <div className=' col-xs-3 upcoming_session_element_section'>
              <div className='upcoming_session_color_div' style={{backgroundColor:(session.session_type== "Review" ? "rgba(145,174,225,1)": "rgba(232,201,209,1)") }}>{session.session_type}</div>
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


function RightSection({jobPostings}){
  return (
    <>
      <div className='card'>
        <div className='overview_text'>New Jobs</div>
        {jobPostings.map ((job)=>(
          <div className='hsplit upcoming_session_element' style={{boxSizing:'border-box'}}>
            <div className='col-xs-8 hsplit '>
              {/* <div className='upcoming_session_element_section'>
                <img src= "images/profile_image.png"  className=''/>
              </div> */}
              <div className='upcoming_session_element_section'style={{marginLeft:"13px"}}>
                <div >
                  <div className='font22 lalign mb5'>{job.role} </div>
                  <div className='font15 lalign'>{job.organization_name}</div>
                  <div className='font15 lalign'>{job.location}</div>
                </div>
              </div> 
            </div>
            <div className=' col-xs-4  upcoming_session_element_section '>
              <div className='font20'>{job.date_posted}</div>
            </div> 
          </div> 
        ))}   
      </div>
    </>
  )
}

function LeftSEction({shuffle}){
  return(
    <>
      <div className='' style={{marginTop:"20px"}}>
        <div className="side_panel_element">
          <div className="hsplit ">
            <div>
              <span className="material-icons side_panel_icon">
                home
              </span>
            </div>
            <div className="side_panel_text" >Home</div>	
          </div>
	      </div>
        <div className="side_panel_element" onClick={shuffle}>
          <div className="hsplit ">
            <div>
              <span className="material-icons side_panel_icon">
              apps
              </span>
            </div>
            <div className="side_panel_text"  >Shuffle</div>	
          </div>
	      </div>
      </div>
    </>
  )
}


function shuffleArray(a) {
  let array = [...a];
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}



 export function Home(){
  
  const [fullName, setFullName] = React.useState("")
  const [dashboardStats, setDashboardStats] = React.useState({})
  const [upcomingSessions, setUpcomingSessions] = React.useState([])
  const [jobPostings, setJobPostings] = React.useState([])
  
  const shuffle = function(){
    setUpcomingSessions(shuffleArray(upcomingSessions))
    setJobPostings(shuffleArray(jobPostings))
     
  }

  React.useEffect(()=>{
    fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
    .then(x => x.json())
    .then(function(backend_output){
      
        console.log(backend_output);

        setFullName(backend_output.full_name)
        setDashboardStats(backend_output.dashboard_stats)
        setUpcomingSessions(backend_output.upcoming_sessions)
        setJobPostings(backend_output.job_postings)
      }
    )
  }, [])

  return (
    <>
      <Header name={fullName}/>
      <div class="hsplit" style={{marginTop:"3px"}}>
        <div className="col-lg-1 hide-xs hide-sm show-lg hide-md">
          <LeftSEction  shuffle={shuffle}/>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <Overview dashboardStats={dashboardStats}/>
          <UpcomingSessions upcomingSessions={upcomingSessions}/>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
          <RightSection jobPostings={jobPostings}/>
        </div> 
      </div>
    </>
  )
 }