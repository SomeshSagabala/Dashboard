import React from 'react'
import "./Style.css"
// import "./Home.css"
import LeftNavbar from '../Components/Navbar/LeftNavbar'
// import Table from 'react-bootstrap/Table';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";


const Student = () => {
    return (
        <>
            <div className="Student">
                <div className="Student1">
                    <LeftNavbar />
                </div>
                <div className="Student2">
                    <div className="Student21">
                        <div className="heading">
                            <h1>Students</h1>
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
                                <button><FaPlus style={{ width: '22px', height: '22px', color: '#303972' }} /> NewStudent</button>
                            </div>
                        </div>

                    </div>
                    <div className="Student23">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Parent Name</th>
                                    <th>City</th>
                                    <th>Contact</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <div className="user">
                                        <td><div className="box"></div>Samantha Williams</td>
                                    </div>
                                    <td># 123456789</td>
                                    <td>March 25,2021</td>
                                    <td>Mana William</td>
                                    <td>Jarkata</td>
                                    <td><IoCallOutline style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /></td>
                                    <td>VII A</td>
                                </tr>
                                <tr>
                                    <div className="user">
                                        <td><div className="box"></div>Samantha Williams</td>
                                    </div>
                                    <td># 123456789</td>
                                    <td>March 25,2021</td>
                                    <td>Mana William</td>
                                    <td>Jarkata</td>
                                    <td><IoCallOutline style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /></td>
                                    <td>VII A</td>
                                </tr>
                                <tr>
                                    <div className="user">
                                        <td><div className="box"></div>Samantha Williams</td>
                                    </div>
                                    <td># 123456789</td>
                                    <td>March 25,2021</td>
                                    <td>Mana William</td>
                                    <td>Jarkata</td>
                                    <td><IoCallOutline style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /></td>
                                    <td>VII A</td>
                                </tr>
                                <tr>
                                    <div className="user">
                                        <td><div className="box"></div>Samantha Williams</td>
                                    </div>
                                    <td># 123456789</td>
                                    <td>March 25,2021</td>
                                    <td>Mana William</td>
                                    <td>Jarkata</td>
                                    <td><IoCallOutline style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /></td>
                                    <td>VII A</td>
                                </tr>
                                <tr>
                                    <div className="user">
                                        <td><div className="box"></div>Samantha Williams</td>
                                    </div>
                                    <td># 123456789</td>
                                    <td>March 25,2021</td>
                                    <td>Mana William</td>
                                    <td>Jarkata</td>
                                    <td><IoCallOutline style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /><MdMessage style={{ width: '30px', height: '30px', color: '#303972', backgroundColor: "#A098AE", borderRadius: '50%' }} /></td>
                                    <td>VII A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Student