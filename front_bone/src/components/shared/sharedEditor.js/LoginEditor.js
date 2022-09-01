
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/sharedEditor/logineditor.css'


export default function TestEditor() {

    const [ roomId, setRoomId] = useState('')
    const [ username, setUsername] = useState('')
    const navigate = useNavigate();


    const createNewID = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);

        toast.success("Succesfully new room ID created")

    }
    
    const joinRoom = (e)=>{
        if(!roomId || !username){
            toast.error("Error Room ID or username is required")
        }else{
            toast.success("Succesfully new room ID created")
        }
        navigate(`/id:${roomId}`, {
            state:{
                username,
            }
        });
    }


    return (
        <React.Fragment>
            <div className='testEdit-Banner'>
                <div className='container-fluid custom-container text-left'>
                    <div className="row" >
                        <div className="col-lg-6 " style={{position: "static"}}>
                            <div className="row testEdit-healine">
                                <div className="col-lg-12" style={{position: "static"}}>
                                    <p className="testEdit-healineDesc">BitSource <span className="horizontalLine" > _________</span> </p>
                                </div>
                            </div>
                            <p className="testEdit-nextHeadline">
                                Develop with Bitsource & get notifications to reviewers
                            </p>
                            <p className="testEdit-nextHeadlineDesc">
                                Develop with Bitsource & get notifications to reviewers
                            </p>
                            <button type="text" className="btn btn-primary testEdit-button_fwc_pa_banner marginTop20">Switch to official website</button>
                        </div>
                        <div className="col-lg-6" style={{position: "static"}}>
                            <div className="row roomloginWarpper ">
                                    {/* <div className='roomwrapper'>
                                        <input className='roomlogin-userid' placeholder='User ID'></input>
                                    </div>
                                    <div className='roomwrapper'>
                                        <input className='roomlogin-username' placeholder='User Name' ></input>
                                    </div>
                                    <div className='roomwrapper '>
                                        <button type="text" className="btn btn-primary roomlogin-button ">Login</button>
                                    </div> */}

                                    <div className='roomwrapper'>
                                        <p className='roomlogin-label'>Login or paste userid to your partner</p>
                                        <div className='roomlogin-inputgroup'>
                                            <input className='roomlogin-input' value={roomId} onChange={(e)=>setRoomId(e.target.value)} placeholder='USER ID'></input>
                                            <input className='roomlogin-input' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='USER NAME'></input>
                                            <button type="text" className="btn loginButton" onClick={joinRoom} >Login</button> 
                                            <span className='createInfo'>
                                                If you don't have an invitation then &nbsp;{' '} 
                                                <a href='' onClick={createNewID} className='newroom'>New Room</a> 
                                            </span> 
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </React.Fragment>


    )
}