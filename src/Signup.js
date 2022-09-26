import {AiFillEye} from "react-icons/ai";
import "./style/signup.css";
import Logo from "./logo.png"
export default function Signup() {
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
                        <input type={"text"} placeholder="First name"/>
                    </div>
                    <div className="Signup_outer_inner_row4_right">
                        <input type={"text"} placeholder="Last name"/>
                    </div>
                </div>
                <div className="Signup_outer_inner_row5">
                    <input type={"text"} placeholder="Email"/>
                </div>
                <div className="Signup_outer_inner_row6">
                    <input type={"Password"} placeholder="Password"/>
                    <div className="passwordeye">
                        <AiFillEye/>
                    </div>
                </div>
                <div className="Signup_outer_inner_row7">
                    <input type={"text"} placeholder="Re-Enter password"/>
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