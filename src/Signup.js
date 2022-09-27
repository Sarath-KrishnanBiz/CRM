import { AiFillEye, AiOutlineCheckCircle } from "react-icons/ai";
import "./style/signup.css";
import Logo from "./logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlasttname] = useState("");
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    const [show, setShow] = useState(false);
    // const navigate = useNavigate();
    // function signup() {
    //     navigate("/Signup");
    // }
    const handleclick = () => {
        setShow(!show)
    };
    return (
        <>
            <div><Popup show={show} setShow={setShow} /></div>
            <div className="Signup_outer">
                <div className="Signup_outer_inner">
                    <div className="Signup_outer_inner_row1">
                        <img src={Logo}></img>
                        <label>Logo</label>
                    </div>
                    <div className="Signup_outer_inner_row2">
                        <label><b>Welcome !</b></label>
                    </div>
                    <div className="Signup_outer_inner_row3">
                        <label>Please signup your Account </label>
                    </div>
                    <div className="Signup_outer_inner_row4">
                        <div className="Signup_outer_inner_row4_left">
                            <input type={"text"} onChange={(e) => [setfirstname(e.target.value)]} placeholder="First name" />
                            <label>{firstname}</label>
                        </div>
                        <div className="Signup_outer_inner_row4_right">
                            <input type={"text"} onChange={(e) => [setlasttname(e.target.value)]} placeholder="Last name" />
                            <label>{lastname}</label>
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row5">
                        <input type={"text"} onChange={(e) => [setmail(e.target.value)]} placeholder="Email" />
                        <label>{mail}</label>
                    </div>
                    <div className="Signup_outer_inner_row6">
                        <input type={"Password"} onChange={(e) => [setpassword(e.target.value)]} placeholder="Password" />
                        <label>{password}</label>
                        <div className="passwordeye">
                            <AiFillEye />
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row7">
                        <input type={"text"} onChange={(e) => [setrepassword(e.target.value)]} placeholder="Re-Enter password" />
                        <label>{repassword}</label>
                        <div className="passwordeye">
                            <AiFillEye />
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row8">
                        <input type={"checkbox"} />
                        <div className="Signup_outer_inner_row8_label">
                            <label> By clicking on Register,you agree to our </label><br></br>
                            <label>
                                <span>Terms and Conditions</span> of use
                            </label>
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row9">

                        <button onClick={handleclick} >Register</button>

                    </div>
                </div>
            </div>
        </>
    )
}

function Popup({ show, setShow }) {
    const handleclose = () => {
        setShow(false)
    };
    // const [show1, setShow1] = useState();
    // const handleopen = () => {
    //     setShow1(!show1)
    // };
    return show ? (
        <>
            {/* <Popup1 show1={show1} setShow1={setShow1} /> */}
            <div className="popupcontainer">
                <div className="popup">
                    <label className="VerifyOTP"><b>Verify OTP!</b></label>
                    <div className="OTPenter">
                        <input type={"text"} placeholder={"OTP"} />
                    </div>
                    <div className="buttons">
                        <button onClick={handleclose} className="Resend">Resend</button>
                        <button className="Verify">Verify</button>
                    </div>
                </div>
            </div></>
    ) : (
        <></>
    );

}

// function Popup1() {
//     return(
//     <div className="popup1container">
//         <div className="popup1">
//             <AiOutlineCheckCircle />
//             <label>Success!</label>
//             <button>Ok</button>
//         </div>
//     </div>
//     );
// }