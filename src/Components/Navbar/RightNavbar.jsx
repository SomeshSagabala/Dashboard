import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { SiGooglemessages } from "react-icons/si";

const RightNavbar = () => {
    return (
        <>
            <div className="rightnavbar">
                <div className="icons">
                    <IoMdNotificationsOutline style={{ width: '36px', height: '36px', color: '#A098AE' }} />
                    <IoSettingsOutline style={{ width: '32px', height: '32px', color: '#A098AE' }} />
                    <div className="icons1">
                        <h2>Nabila A.</h2>
                        <p>Admin</p>
                    </div>
                    <div className="box1"></div>
                </div>
                <div className="student">
                    <div className="student1">
                        <h3>Recent Student</h3>
                        <p>You have 456 students</p>
                    </div>
                    <CiCirclePlus style={{ width: '46px', height: '46px', color: 'white', backgroundColor: '#303972', borderRadius: '50%' }} />
                </div>
                <div className="students">
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Samantha William</h2>
                            <p>Class VII A</p>
                        </div>
                        <SiGooglemessages style={{ width: '40px', height: '40px', color: '#A098AE', borderRadius: '50%' }} />
                    </div>
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Tony Soap</h2>
                            <p>Class VII A</p>
                        </div>
                        <SiGooglemessages style={{ width: '40px', height: '40px', color: '#A098AE', borderRadius: '50%' }} />
                    </div>
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Karen Hope</h2>
                            <p>Class VII A</p>
                        </div>
                        <SiGooglemessages style={{ width: '40px', height: '40px', color: '#A098AE', borderRadius: '50%' }} />
                    </div>
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Jordon Nico</h2>
                            <p>Class VII A</p>
                        </div>
                        <SiGooglemessages style={{ width: '40px', height: '40px', color: '#A098AE', borderRadius: '50%' }} />
                    </div>
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Nadila Adja</h2>
                            <p>Class VII A</p>
                        </div>
                        <SiGooglemessages style={{ width: '40px', height: '40px', color: '#A098AE', borderRadius: '50%' }} />
                    </div>
                    <div className="button">
                        <button>View More</button>
                    </div>
                </div>

                <div className="messages">
                    <h1>Messages</h1>
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Samantha William</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <span>12:45</span>
                    </div>
                    <hr style={{ width: '300px', height: '3px', color: '#A098AE', }} />
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2> Tony Soap</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <span>12:45</span>
                    </div>
                    <hr style={{ width: '300px', height: '3px', color: '#A098AE', }} />
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Jordon Nico</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <span>12:45</span>
                    </div>
                    <hr style={{ width: '300px', height: '3px', color: '#A098AE', }} />
                    <div className="students1">
                        <div className="box"></div>
                        <div className="icons1">
                            <h2>Nadila Adja</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <span>12:45</span>
                    </div>
                    <hr style={{ width: '300px', height: '3px', color: '#A098AE', }} />
                </div>
                <div className="button">
                    <button>View More</button>
                </div>

                <div className="foodmenu">
                    <h1>Current Food Menu</h1>
                    <div className="food">
                        <div className="box2"> </div>
                        <div className="icons1">
                            <h2>Beef Steak with Fired Potato</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div className="food">
                        <div className="box2"> </div>
                        <div className="icons1">
                            <h2>Pancake with Honey</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div className="food">
                        <div className="box2"> </div>
                        <div className="icons1">
                            <h2>Japanese Beef Ramen</h2>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>View More</button>
                </div>
                </div>
            </div>

        </>
    )
}

export default RightNavbar