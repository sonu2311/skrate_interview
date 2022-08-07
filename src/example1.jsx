import './main.css';
import {Header} from './header';
import React from 'react';
import {api} from './library';


const d={
  "full_name": "Average Joe",
  "dashboard_stats": {
    "profile_views": 50,
    "mentorship_sessions": 5,
    "jobs_applied": 3,
    "skills_verified": 5
  },
  "upcoming_sessions": [
    {
      "mentor_name": "Himanshu",
      "timings": "14.00 - 15.00",
      "date": "15/12/21",
      "session_type": "Mentorship"
    },
    {
      "mentor_name": "Vedant",
      "timings": "12.00 - 13.00",
      "date": "16/12/21",
      "session_type": "Review"
    }
  ],
  "job_postings": [
    {
      "role": "Flutter Developer",
      "organization_name": "Amazon",
      "location": "Remote",
      "date_posted": "12/12/2021"
    },
    {
      "role": "React Developer",
      "organization_name": "Facebook",
      "location": "USA",
      "date_posted": "11/12/2021"
    },
    {
      "role": "C++ Developer",
      "organization_name": "CodeNation",
      "location": "Remote",
      "date_posted": "10/12/2021"
    },
    {
      "role": "Django Developer",
      "organization_name": "Google",
      "location": "Remote",
      "date_posted": "10/12/2021"
    }
  ]
}



function Example1() {
  const [name, setName] = React.useState("A")

  React.useEffect(()=> {
    api("/my_name", {age: 60}, function(backend_output) {
      console.log(backend_output)
      setName(backend_output.name)
    })
  }, []);

  const new_name = function() {
    api("/new_name", {age: 61}, function(backend_output) {
      setName(backend_output.name)
    })
  }

  return (<>
    <Header/>
    <div className="top_box" >
      <h2>Example1</h2>
      <div>
        Name = {name}
      </div>
      <button onClick={() => new_name()} >Click for new name</button>
    </div>
  </>
  );
}

export default Example1;
