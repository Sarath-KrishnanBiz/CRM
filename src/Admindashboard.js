import { AiOutlineMenu,AiOutlineSearch,AiFillCompass,AiFillStar,AiFillBell } from "react-icons/ai";
import { BsThreeDots,BsMessenger,BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
// import { VscAccount } from "react-icons/md";
import "./style/admin.css";
export default function Admindashboard() {
    return (
    <>
    <div className="toporder">
        <div className="toporder_col1">
            <div className="toporder_col1_circle">
            <AiOutlineMenu className="toporder_col1_circle_icon"/>
            </div>
            <label>Company</label>
        </div>
        <div className="toporder_col2">
            <ul>
                <li>Dashboard</li>
                <li>Leads</li>
                <li>Campaigns</li>
                <li>Prospects</li>
                <li>Accounts</li>
                <li>
                    <BsThreeDots/>
                </li>
            </ul>
        </div>
        <div className="toporder_col3">
            <AiOutlineSearch/>
            <input type={"text"} placeholder="Search something..."/>
            <MdArrowForwardIos/>
        </div>
        <div className="toporder_col4">
            <label>Clayton</label>
        </div>
    </div>
    <div className="contentpart">
        <div className="contentpart_leftbar">
            <div className="contentpart_leftbar_circle">
                <AiFillCompass/>
            </div>
            <div className="contentpart_leftbar_circle">
                <AiFillStar/>
            </div>
            <div className="contentpart_leftbar_circle">
                <BsMessenger/>
            </div>
        </div>
        <div className="contentpart_contentarea">
        </div>
        <div className="contentpart_list">
            <div className="contentpart_list_label">
                <label>User list</label>
                <BsThreeDotsVertical/>
            </div>

            {
                Array.map((itm, indx)=>{
                    return  <Singlerowlist/>
                })
            }
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
            <Singlerowlist/>
        </div>

    </div>
    </>
    );
}

function Singlerowlist () {
    return(
        <div className="contentpart_list_singlerow">
            <div className="contentpart_list_singlerow_circle">
                <AiFillBell/>
            </div>
            <label>Sarath krishnan</label>
            <button>Pending</button>
        </div>
    );
}