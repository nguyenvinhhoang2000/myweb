import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Card from "components/card";

MyProject.propTypes = {};

function MyProject(props) {
  return (
    <div className='container'>
      <div className='background_img'></div>

      <div className='card-item'>
        <Card />
      </div>
    </div>
  );
}

export default MyProject;
