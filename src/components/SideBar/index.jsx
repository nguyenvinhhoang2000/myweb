import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

SideBar.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
};

SideBar.defaultProps = {
  name: "",
  icon: "",
  path: "#",
};

function SideBar(props) {
  const sidebarListMain = [
    {
      id: 1,
      name: "About me",
      path: "/about-me",
      icon: "far fa-address-card",
    },
    {
      id: 2,
      name: "My project",
      path: "/my-project",
      icon: "fas fa-border-all",
    },
    {
      id: 3,
      name: "Skill",
      path: "/skill",
      icon: "fas fa-laptop-code",
    },
  ];

  const sidebarListSub = [
    {
      id: 4,
      name: "Photography",
      path: "/photography",
      icon: "far fa-address-card",
    },
    {
      id: 5,
      name: "Graphic design",
      path: "/graphic-design",
      icon: "fas fa-border-all",
    },
    {
      id: 6,
      name: "Motion design",
      path: "/motion-design",
      icon: "fas fa-laptop-code",
    },
  ];
  return (
    <div className='sidebar'>
      <div className='sidebar_logo'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/4585/4585382.png'
          alt=''
        />
        <p>Vinh Hoang</p>
      </div>
      <div className='sidebar_main'>
        {sidebarListMain.map((item) => (
          <NavLink key={item.id} className='sidebar_main--link' to={item.path}>
            <i className={item.icon}></i>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className='sidebar_sub'>
        {sidebarListSub.map((item) => (
          <NavLink key={item.id} className='sidebar_sub--link' to={item.path}>
            <i className={item.icon}></i>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
