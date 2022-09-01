
import {basicSetup, EditorView} from "codemirror"
import {cpp} from "@codemirror/lang-cpp"
import { useEffect, useState} from "react"


const useCodeMirror = ()=>{
  
  const [count, setCount] = useState(1);


  let edit;
  useEffect(()=>{
    const el = document.getElementById('editorWrapper');
    // const el = document.body;
    console.log("EL::::::::::   ", el);
    if(count === 1){
      console.log("==========>", count)
      edit = new EditorView({
        extensions: [basicSetup, cpp()],
        parent: el,
      })
      setCount(2)
    }

  })

    

  // return {edit};

}

export default useCodeMirror;
