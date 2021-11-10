import React from "react";
import './Button.scss';
import { Link } from 'react-router-dom';
import "./Button.scss";


function Button({path, buttonClass, linkClass, content, onClick}) {
  
  return (
    <Link to={path} className={linkClass}>
      <button className={buttonClass} onClick={onClick}>{content}</button>
    </Link>
  );
}

export default Button;
