import React, { useEffect, useRef } from 'react'
// import Codemirror from 'codemirror'
// import  'codemirror/lib/codemirror.css'
// import  'codemirror/mode/javascript/javascript'
// import  '@codemirror/lang-cpp'
// import  'codemirror/theme/dracula.css'
// import  'codemirror/addon/edit/closetag'
// import  'codemirror/addon/edit/closebrackets'



import  Header  from "../shared/Header.js";
import  UserClients  from "../shared/sharedUserclients/UserClients";
import '../../assets/css/editor.css'

export default function EditArea() {

    // useEffect(()=>{
    //         async function init(){
    //             Codemirror.fromTextArea(document.getElementById('E-editor') , {
    //                 mode: {name: 'lang-cpp', json:'true'},
    //                 theme: 'dracula',
    //                 autoCloseTag: true,
    //                 autofocus:true,
    //                 autoCloseBrackets: true,
    //                 lineNumbers:true,
    //             })
    //         }
    //         // init()
    // }, [])


    return (
            // <textarea id='E-editor'/>
            <div id='E-editor' className='E-editArea'></div>
    )
}
