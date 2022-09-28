import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import "./salesdashboard.css"
export default function Salesdashboard() {
    const [show, setShow] = useState(false);

    const handleclick = (e) => {
        setShow(!show)
            ;
    }

    return (
        <>
            <div className="salesdash">
                <div className="salesdash_single">
                    <div className="salesdash_single_title">
                        <AiOutlineDown />
                        <label>TODO</label>
                    </div>
                    <div className="salesdash_single_item">
                        <div className="salesdash_single_item_title">
                            <AiOutlineDown onClick={(e) => {
                                handleclick(e)
                            }} />
                            <label>Task name</label>
                            <BsThreeDots />
                        </div>
                        {show ? (
                            <div className="saledash_single_item_details">
                                <div>
                                    <label>Campaign</label>
                                </div>
                                <div>
                                    <label>Task</label>
                                </div>
                                <div>
                                    <label>Lead</label>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        </div>
                        <div className="salesdash_single_plus">
                            <label>+</label>

                        </div>
                    
                </div>
                <div className="salesdash_single">
                    <div className="salesdash_single_title">
                        <AiOutlineDown />
                        <label>TODO</label>
                    </div>
                    <div className="salesdash_single_item">
                        <div className="salesdash_single_item_title">
                            <AiOutlineDown onClick={(e) => {
                                handleclick(e)
                            }} />
                            <label>Task name</label>
                            <BsThreeDots />
                        </div>
                        {show ? (
                            <div className="saledash_single_item_details">
                                <div>
                                    <label>Campaign</label>
                                </div>
                                <div>
                                    <label>Task</label>
                                </div>
                                <div>
                                    <label>Lead</label>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="salesdash_single_plus">
                        <label>+</label>

                    </div>
                </div>
                <div className="salesdash_single">
                    <div className="salesdash_single_title">
                        <AiOutlineDown />
                        <label>TODO</label>
                    </div>
                    <div className="salesdash_single_item">
                        <div className="salesdash_single_item_title">
                            <AiOutlineDown onClick={(e) => {
                                handleclick(e)
                            }} />
                            <label>Task name</label>
                            <BsThreeDots />
                        </div>
                        {show ? (
                        <div className="saledash_single_item_details">

                        <div>
                            <label>Campaign</label>
                        </div>
                        <div>
                            <label>Task</label>
                        </div>
                        <div>
                            <label>Lead</label>
                        </div>
                    </div>
                     ) : (
                        <></>
                    )}
                    </div>
                    <div className="salesdash_single_plus">
                        <label>+</label>

                    </div>
                </div>

            </div>
        </>
    )
}