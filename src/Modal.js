
import { useState } from "react";
import "./modal.css"
export default function Newpage(){

    const[show,setShow] = useState(false);
    const handleclick=()=>{
        setShow(!show)
    }
    return(
    <>
    <Popup show={show} setShow={setShow}/>
    <div className="mainpage">
        <label className="la">modal sample</label>
        <button onClick={handleclick}>Click me!</button>
        
    </div>
    </>
    );
}

function Popup({show,setShow}){
    const handleclose=()=>{
        setShow(false)
    };
    return show? (
        <div className="popupcontainer">
            <div className="popup">
                Test
                <button onClick={handleclose}>Close</button>
            </div>
        </div>
        ):(
        <></>
    );
}