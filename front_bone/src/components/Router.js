
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BitSource from './pages/Bitsource';
import Home from './pages/Home';
import Login from './pages/Login';
import Practice from './pages/Practice';
import Tutorial from './pages/Tutorial';
import Teamwork from './pages/Teamwork';
import LoginEditor from './pages/LoginEditor';
import Editor from './pages/Editor';


export default function Videos() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/practice" element={<Practice/>}/>
                    <Route path="/tutorial" element={<Tutorial/>}/>
                    <Route path="/bitsource" element={<BitSource/>}/>
                    <Route path="/teamwork" element={<Teamwork/>}/>
                    <Route path="/editor" element={<LoginEditor/>}/>
                    <Route path="/id:roomId" element={<Editor/>}/>

                </Routes>
            </Router>
        </div>

    )
}
