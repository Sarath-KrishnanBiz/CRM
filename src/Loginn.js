import { AiFillEye } from "react-icons/ai";
import "./style/style.css";
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Loginn() {
    const navigate = useNavigate();
    const[mail,setmail] =useState("");
    const[password,setpassword] =useState("");
    function signup() {
        navigate("/Signup");
    }
    return (
        <>
            <div className="Login_outer">
                <div className="Login_outer_row1">
                    <div className="Login_outer_row1_inner">
                        <div className="Login_outer_row1_inner_row1">
                            <img src={logo}></img>
                            <label> LOGO</label>
                        </div>
                        <div className="Login_outer_row1_inner_row2">
                            <label><b>Welcome!</b></label>
                        </div>
                        <div className="Login_outer_row1_inner_row3">
                            <label>Please Sign-in to Account</label>
                        </div>
                        <div className="Login_outer_row1_inner_row4">
                            <input type="text" onChange={(e) => [setmail(e.target.value)]} placeholder="Email" />
                            <label>{mail}</label>
                        </div>
                        <div className="Login_outer_row1_inner_row5">
                            <input type="text" onChange={(e) => [setpassword(e.target.value)]} placeholder="Password" />
                            <label>{password}</label>
                            <div className="passwordeye">
                                <AiFillEye />
                            </div>
                        </div>
                        <div className="Login_outer_row1_inner_row6">
                            <div className="Login_outer_row1_inner_row6_left">
                                <input type="checkbox" />
                                <label>Remeber me</label>
                            </div>
                            <div className="Login_outer_row1_inner_row6_right">
                                <label>Forgot password ?</label>
                            </div>
                        </div>
                        <div className="Login_outer_row1_inner_row7">
                            <button>LOGIN</button>
                        </div>

                    </div>
                </div>
                <div className="Login_outer_row2">
                    <label>
                        New Member ?<span onClick={signup}> Sign Up </span>
                    </label>
                </div>
            </div>
        </>
    );
}


    
