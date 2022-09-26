import {AiFillEye} from "react-icons/ai";
import "./style/signup.css";
import Logo from "./logo.png";
import { useState } from "react";
export default function Signup() {
    const[firstname,setfirstname] =useState("");
    const[lastname,setlasttname] =useState("");
    const[mail,setmail] =useState("");
    const[password,setpassword] =useState("");
    const[repassword,setrepassword] =useState("");
    return (
    <>
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
                        <input type={"text"} onChange={(e) => [setfirstname(e.target.value)]} placeholder="First name"/>
                        <label>{firstname}</label>
                    </div>
                    <div className="Signup_outer_inner_row4_right">
                        <input type={"text"} onChange={(e) => [setlasttname(e.target.value)]} placeholder="Last name"/>
                        <label>{lastname}</label>
                    </div>
                </div>
                <div className="Signup_outer_inner_row5">
                    <input type={"text"} onChange={(e) => [setmail(e.target.value)]} placeholder="Email"/>
                    <label>{mail}</label>
                </div>
                <div className="Signup_outer_inner_row6">
                    <input type={"Password"} onChange={(e) => [setpassword(e.target.value)]} placeholder="Password"/>
                    <label>{password}</label>
                    <div className="passwordeye">
                        <AiFillEye/>
                    </div>
                </div>
                <div className="Signup_outer_inner_row7">
                    <input type={"text"} onChange={(e) => [setrepassword(e.target.value)]} placeholder="Re-Enter password"/>
                    <label>{repassword}</label>
                    <div className="passwordeye">
                        <AiFillEye/>
                    </div>
                </div>
                <div className="Signup_outer_inner_row8">
                    <input type={"checkbox"}/>
                    <div className="Signup_outer_inner_row8_label">
                        <label> By clicking on Register,you agree to our </label><br></br>
                        <label>
                            <span>Terms and Conditions</span> of use
                        </label>
                    </div>
                </div>
                <div className="Signup_outer_inner_row9">
                    <button>Register</button>
                </div>
            </div>
        </div>
    </>
    )
}