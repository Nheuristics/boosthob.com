import React from 'react'
import {useState} from 'react';

import '../../assets/css/header.css';



export default function Header() {

  let className = "btn btn-link button_fwc_pa_links"
  const handleClick = event => {
    console.log(event)
    // event.preventDefault();
    // 👇️ toggle class on click
    // event.currentTarget.classList.toggle(' onAcitveButton');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };

    return (
      <React.Fragment>

        <div className = " container-fluid navbar navbar-expand-lg navbar-dark  bg-light " >
                <a className = "navbar-brand" href = "/" >

                {/*
                    <span className = "navbar-brand fwc_spa">Develop with </span><img src = "../../assets/images/boostinorbit.svg" className = "img-size navbar-brand" alt = "BCS" / >
                */}
                    <span className = "navbar-brand fwc_spa"></span><img src = "../../assets/images/boosthub.svg" className = "img-size navbar-brand" alt = "BCS" />
                </a>

                <button type="button" className="navbar-toggler custom-btn" data-toggle="collapse" data-target="#menu" aria-expanded="true">
                    <div className="line-menubar"></div>
                    <div className="line-menubar"></div>
                    <div className="line-menubar"></div>
                </button>
                <div className="navbar-nav  collapse navbar-collapse " id="menu">
                    <div className="navbar-nav mx-auto nav_responsive ">
                      <a href='practice' type="button" className={`${className}`} onClick={handleClick} target=''>PRACTICE</a>
                      <a href='editor' type="button" className={`${className}`} onClick={handleClick} target=''>EDITOR</a>
                      {/* <a href='tutorial' type="button" className="btn btn-link button_fwc_pa_links">TUTORIALS</a> */}
                      {/* <a href='#' type="button" className="btn btn-link button_fwc_pa_links">FORUM</a> */}
                      {/* <a href='#' type="button" className="btn btn-link button_fwc_pa_links">ASSIGNMENTS</a> */}
                      <a href='bitsource' type="button" className="btn btn-link button_fwc_pa_links">BITSOURCE</a>
                      <a href='teamwork' type="button" className="btn btn-link button_fwc_pa_links">TEAMWORK</a>
                      <a href='#' type="button" className="btn btn-link button_fwc_pa_links">ABOUT</a>
                    </div>
{/* 
                    <div className="navbar-nav mx-auto nav_responsive">
                      <a href = "/#" className = "fwc_pa margin-right-4" > Login </a>
                    </div> */}

                    <div className = "navbar-nav mx-auto nav_responsive " id="menu">
                      <button type="text" className="btn btn-primary button_fwc_pa">GET STARTED FOR FREE</button>
                      <a href='login' type="button" className="btn btn-primary button_fwc_pa">Login</a>
                      {/* <a href = "https://bcsitsolutions.com" className = "linktoboostinorbit" > SWITCH TO BOOSTINORBIT</a> */}

                    </div>
                </div>

          </div>
        </React.Fragment>
    )
}
