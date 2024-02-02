import React, { useState } from 'react';
import "./Sidebar.css";


import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaHome
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"Mentors",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Mentoring Session",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Be a mentor",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Weekly Schedule",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Mentoring History",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Settings",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="containe">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar1">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;