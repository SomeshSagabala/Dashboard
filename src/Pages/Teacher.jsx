import React from 'react'
import "./Style.css"
import LeftNavbar from '../Components/Navbar/LeftNavbar'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const Teacher = () => {
    return (
        <>
            <div className="teacher">
                <div className="teacher1">
                    <LeftNavbar />
                </div>
                <div className="teacher2">
                    <div className="Student21">
                        <div className="heading">
                            <h1>Teachers</h1>
                        </div>
                        <div className="icons">
                            <IoMdNotificationsOutline style={{ width: '36px', height: '36px', color: '#A098AE' }} />
                            <IoSettingsOutline style={{ width: '32px', height: '32px', color: '#A098AE' }} />
                            <div className="icons1">
                                <h2>Nabila A.</h2>
                                <p>Admin</p>
                            </div>
                            <div className="box1"></div>
                        </div>
                    </div>
                    <div className="Student22">
                        <div className="search">
                            <IoSearch style={{ width: '22px', height: '22px', color: '#303972' }} />
                            <input type="text" placeholder='Search here' />
                        </div>
                        <div className="buttons">
                            <div className="button1">
                                <button>Newest <IoMdArrowDropdown style={{ width: '22px', height: '22px', color: '#303972' }} /></button>
                            </div>
                            <div className="button2">
                                <button><FaPlus style={{ width: '22px', height: '22px', color: '#303972' }} /> NewTeacher</button>
                            </div>
                        </div>

                    </div>
                    <div className="teacher23">

                        <div class="grid-container">
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Dimitres Vega</h2>
                                <p>Mathematics</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card"> <div className="box5"></div>
                                <h2>Tom Housenberg</h2>
                                <p>science</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />

                                </div></div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Dana Benevista</h2>
                                <p>Art</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />

                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Salvador</h2>
                                <p>Biology</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />

                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Maria Historia</h2>
                                <p>History</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />

                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Jack Sally</h2>
                                <p>Physics</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Lula beatrice</h2>
                                <p>Algorithm</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Nella vita</h2>
                                <p>English</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Dimitres Vega</h2>
                                <p>Mathematics</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card"> <div className="box5"></div>
                                <h2>Tom Housenberg</h2>
                                <p>science</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />

                                </div></div>
                                <div class="card">
                                <div className="box5"></div>
                                <h2>Nella vita</h2>
                                <p>English</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div class="card">
                                <div className="box5"></div>
                                <h2>Nella vita</h2>
                                <p>English</p>
                                <div className="icon">
                                    <IoCallOutline style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: 'white', backgroundColor: "#303972", borderRadius: '50%' }} />
                                </div>
                            </div>

                        </div>


                        <div className="circle">
                            <div className="circle1">
                                <p>Showing 1-5 from 100 data</p>
                            </div>
                            <div className="circle2">
                                <IoMdArrowDropleft style={{ width: '26px', height: '26px', color: '#A098AE' }} />
                                <div className="box1"><p>1</p></div>
                                <div className="box"><p>2</p></div>
                                <div className="box"><p>3</p></div>
                                <IoMdArrowDropright style={{ width: '26px', height: '26px', color: '#A098AE' }} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Teacher