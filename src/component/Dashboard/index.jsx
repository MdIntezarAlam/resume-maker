import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { PAGE_PATHS } from '../../SiginUp_SiginIn/utils/contatnts'
import '../../styles/dashboard.css'


const Dashboard = () => {

  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  useEffect(() => {
    if (!loggedInUser) {
      navigate(PAGE_PATHS.login)
      // navigate(<Dashboard />.login)
    }
  }, [])

  return (
    <div className="create_resume_page">

      <div className="create_resume_page_container">
        {/* After User Login they will come this Page, that is Dashboard Page */}
        <div className="login_success_and_dashboard">
          <h1 className='login_success'>Welcome Dear {loggedInUser.name}</h1>
        </div>
        <div className="Crete_resume">
          <Link to="/body">
            <button className='create_resume_btn'>Create Resume</button>
          </Link>
        </div>
        <div className="download_resume">
          <Link to="/body">
            <button className='download_resume_btn'>Download Resume</button>
          </Link>
        </div>
        <div className="edit_resume">
          <Link to="/body">
            <button className='edit_resume_btn'>Edit Resume</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard