import { AiOutlineMenu, AiOutlineSearch, AiFillCompass, AiFillStar, AiFillBell } from "react-icons/ai";
import { BsThreeDots, BsMessenger, BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
// import { VscAccount } from "react-icons/md";
import "./style/admin.css";
export default function Admindashboard() {
    return (
        <>
            <div className="toporder">
                <div className="toporder_col1">
                    <div className="toporder_col1_circle">
                        <AiOutlineMenu className="toporder_col1_circle_icon" />
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
                            <BsThreeDots />
                        </li>
                    </ul>
                </div>
                <div className="toporder_col3">
                    <AiOutlineSearch />
                    <input type={"text"} placeholder="Search something..." />
                    <MdArrowForwardIos />
                </div>
                <div className="toporder_col4">
                    <label>Clayton</label>
                </div>
            </div>
            <div className="contentpart">
                <div className="contentpart_leftbar">
                    <div className="contentpart_leftbar_circle">
                        <AiFillCompass />
                    </div>
                    <div className="contentpart_leftbar_circle">
                        <AiFillStar />
                    </div>
                    <div className="contentpart_leftbar_circle">
                        <BsMessenger />
                    </div>
                </div>
                <div className="contentpart_contentarea">
                </div>
                <div className="bargraph">
                    <div>
                        <label>Campign wise Prospect Count</label>
                        <BsThreeDotsVertical className="icon" />{" "}
                    </div>
                    <ul>
                        <li className="blue">
                            <label className="title">8</label>
                            <div></div> <label>Cam 1</label>
                        </li>
                        <li className="green">
                            <label className="title">7</label>
                            <div></div> <label>Cam2</label>
                        </li>
                        <li className="red">
                            <label className="title">10</label>
                            <div></div> <label>Cam3</label>
                        </li>
                    </ul>
                </div>
            <div className="Horizontalbar_main">
                <div className="Horizontalbar_main_row1">
                    <label>Leads Funnel</label>
                    <div className="Horizontalbar_main_row1_icon">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="Horizontalbar_main_row2">
                    <div className="Horizontalbar_main_row2_left">
                        <FaDollarSign />
                        <label><b>18500</b></label>
                    </div>
                    <div className="Horizontalbar_main_row2_right">
                        <label><span><b>+5%</b></span></label>
                    </div>
                </div>
                <div className="Horizontalbar_graph" >
                    <ul>
                        <li>
                            <label className="Horizontalbar_graph_orange_label">Leads</label>
                            <div className="Horizontalbar_graph_orange"></div>
                        </li>
                        <li>
                            <label>Nurturing</label>
                            <div className="Horizontalbar_graph_green"></div>
                        </li>
                        <li>
                            <label>Prospects</label>
                            <div className="Horizontalbar_graph_blue"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contentpart_list">
                <div className="contentpart_list_label">
                    <label>User list</label>
                    <BsThreeDotsVertical />
                </div>


                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
                <Singlerowlist />
            </div>


        </div>
        </>
    );
}

function Singlerowlist() {
    return (
        <div className="contentpart_list_singlerow">
            <div className="contentpart_list_singlerow_circle">
                <AiFillBell />
            </div>
            <label>Sarath krishnan</label>
            <button>Pending</button>
        </div>
    );
}