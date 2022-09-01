
import React, { useState } from 'react'
import  UserClients  from "../shared/sharedUserclients/UserClients";
import EditArea from './EditArea';
import '../../assets/css/editor.css'


import useCodeMirror from "./useCodeMirror";
import CodeSyncHeader from '../shared/CodeSyncHeader';


export default function Editor() {

    const [Users, setUsers] = useState([
        {socketId: 1, username: "Nafis Ayaz"},
        {socketId: 2, username: "Aleeza Ayaz"},
        {socketId: 3, username: "Kaushar Nisha"},
        {socketId: 4, username: "Farha Nasreen"},
    ])

    useCodeMirror();

    return (

            <React.Fragment>
                <CodeSyncHeader/>
                <div className='mainWrapper'>
                    <div className='aside'>
                        <div className='asideInner'>
                            <h4>Connected</h4>
                            <div className='userLists'>
                                {Users.map((user) => (
                                <UserClients
                                    key={user.socketId}
                                    username = {user.username}
                                />
                                )) }
                            </div>
                        </div>
                        <button className='btn E-btncopy'>COPY ROOM ID</button>
                        <button className='btn E-btnleave'>LEAVE</button>
                    </div>
                    {/* <div className='editorWrapper' id='editorWrapper'> */}
                        {/* <EditArea/> */}
                    {/* </div> */}
                </div>
          </React.Fragment>


    )
}
