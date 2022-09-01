import React from 'react'
import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import '../../assets/css/codeSyncheader.css';
import UserClients from './sharedUserclients/UserClients';



export default function CodeSyncHeader() {

  const [Users, setUsers] = useState([
    {socketId: 1, username: "Nafis Ayaz"},
    {socketId: 2, username: "Aleeza Ayaz"},
    {socketId: 3, username: "Kaushar Nisha"},
    {socketId: 4, username: "Farha Nasreen"},
])


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

        <div className = " container-fluid  CS-navbar navbar-expand-lg navbar-dark  bg-light " >
          <div className="navbar-nav  collapse navbar-collapse ">
            <div className='CS-wrapper'>
              <button className='btn CS-runButton'>RUN</button>
            </div>
            <div className='CS-wrapper-drawingMode'>
              <button className='btn CS-drawingMode'>DRAWING</button>
            </div>
            {/* <div className='CS-wrapper'>
              <button className='btn CS-runButton'>RUN</button>
            </div>
            <div className='CS-wrapper'>
              <button className='btn CS-runButton'>RUN</button>
            </div> */}
            
            <div className = "navbar-nav mx-auto nav_responsive " >
                <div className='userLists'>
                  {Users.map((user) => (
                  <UserClients
                      key={user.socketId}
                      username = {user.username}
                  />
                  )) }
                </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    )
}
