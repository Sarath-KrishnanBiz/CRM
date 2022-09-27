import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./Admindashboard";
import Loginn from "./Loginn";
import ObjectJson from "./ObjectJson";
import Signup from "./Signup";

export default function Navigation() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loginn/>}></Route>
                    <Route path="/Signup" element={<Signup/>}></Route>
                    <Route path="/sample" element={<ObjectJson/>}></Route>
                    <Route path="/Secondpage" element={<Admindashboard/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}