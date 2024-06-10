import React from 'react'
import "./Navbar.css"
import { FiHome } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { RiCalendarLine } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { CiUser } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { GoGraph } from "react-icons/go";
import { Link } from 'react-router-dom';

const LeftNavbar = () => {

  return (
    <>
    <div className="leftnavbar">
    <h1>Akademi</h1>

    <div className="pages">
        <div className= "pages1">
        <FiHome style={{ width: '26px', height: '26px', color: 'white' }}/>
        <Link to="/"><p>Dashboard </p></Link>
        </div>
        <div className="pages1">
        <GrUserManager style={{ width: '26px', height: '26px', color: 'white' }}/>
        <Link to="/student"><p>Students </p></Link>
        </div>
        <div className="pages1">
        <GrUserManager style={{ width: '26px', height: '26px', color: 'white' }}/>
        <Link to="/teacher"><p>Teachers </p></Link>
        </div>
        <div className="pages1">
        <RiCalendarLine style={{ width: '26px', height: '26px', color: 'white' }} />
        <p>Event</p>
        </div>
        <div className="pages1">
        <FaMoneyBillTrendUp  style={{ width: '26px', height: '26px', color: 'white' }} />
        <p>Finance</p>
        </div>
        <div className="pages1">
        <ImSpoonKnife style={{ width: '26px', height: '26px', color: 'white' }}/>
        <p>Food</p>
        </div>
        <div className="pages1">
        <CiUser style={{ width: '26px', height: '26px', color: 'white' }} />
        <p>User</p>
        </div>
        <div className="pages1">
        <TiMessages style={{ width: '26px', height: '26px', color: 'white' }}/>
        <p>Chart</p>
        </div>
        <div className="pages1">
        <GoGraph  style={{ width: '26px', height: '26px', color: 'white' }}/>
        <p>Latest Activity</p>
        </div>
       
    </div>
    <div className="bottom">
        <h3>Akademi - School Admission Dasboard</h3>
        <p>Made with Love by Peterdraw</p>
    </div>

    </div>
   

    
    </>
  )
}

export default LeftNavbar