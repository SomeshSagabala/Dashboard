import React from 'react'
import "./Home.css"
import { AreaChart, BarChart, Bar, Rectangle, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import LeftNavbar from '../Navbar/LeftNavbar'
import RightNavbar from '../Navbar/RightNavbar'
import { IoSearch } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { RiCalendarLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import Chart from './Chart'
import Table from './Tables'
import Tables from './Tables'

const Home = () => {

    const infor = [
        {
          name: 'Mon',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tue',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wed',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thurs',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Fri',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sat',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sun',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    const data = [
        {
            "name": "Jan",
            "uv": 5,
            "pv": 10,
            "amt": 2400
        },
        {
            "name": "Feb",
            "uv": 20,
            "pv": 40,
            "amt": 2210
        },
        {
            "name": "March",
            "uv": 30,
            "pv": 50,
            "amt": 2290
        },
        {
            "name": "April",
            "uv": 25,
            "pv": 40,
            "amt": 2000
        },
        {
            "name": "May",
            "uv": 0,
            "pv": 5,
            "amt": 2181
        },
        {
            "name": "June",
            "uv": 20,
            "pv": 30,
            "amt": 2500
        },
        {
            "name": "july",
            "uv": 35,
            "pv": 45,
            "amt": 2100
        },
        {
            "name": "August",
            "uv": 30,
            "pv": 40,
            "amt": 2500
        },
        {
            "name": "Sep  ",
            "uv": 15,
            "pv": 20,
            "amt": 2500
        },
        {
            "name": "October",
            "uv": 40,
            "pv": 50,
            "amt": 2500
        },
        {
            "name": "Nov",
            "uv": 20,
            "pv": 40,
            "amt": 2500
        },
        {
            "name": "Dec",
            "uv": 0,
            "pv": 20,
            "amt": 2500
        },
    ]

    return (
        <>
            <div className="herosection">

                <LeftNavbar />
                <div className="hero">
                    <div className="top">
                        <div className="heading">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="search">
                            <IoSearch style={{ width: '22px', height: '22px', color: '#303972' }} />
                            <input type="text" placeholder='Search here' />
                        </div>
                    </div>
                    <div className="list">
                        <div className="list1">
                            <GrUserManager style={{ width: '45px', height: '45px', color: 'white', backgroundColor: '#4D44B5', borderRadius: '50%' }} />
                            <div className="list2">
                                <p>Students</p>
                                <span>932</span>
                            </div>
                        </div>
                        <div className="list1">
                            <GrUserManager style={{ width: '45px', height: '45px', color: 'white', backgroundColor: '#FB7D5B', borderRadius: '50%' }} />
                            <div className="list2">
                                <p>Teachers</p>
                                <span>754</span>
                            </div>
                        </div>
                        <div className="list1">
                            <RiCalendarLine style={{ width: '45px', height: '45px', color: 'white', backgroundColor: 'yellow', borderRadius: '50%' }} />
                            <div className="list2">
                                <p>Events</p>
                                <span>40</span>
                            </div>
                        </div>
                        <div className="list1">
                            <ImSpoonKnife style={{ width: '45px', height: '45px', color: 'white', backgroundColor: '#4D44B5', borderRadius: '50%' }} />
                            <div className="list2">
                                <p>Foods</p>
                                <span>32k</span>
                            </div>
                        </div>
                    </div>
                    <div className="graph">
                        <div className="graph1">
                            <div className="heading">
                                <h1>School Performance</h1>
                            </div>
                            <div className="time">
                                <div className="box3"></div>
                                <div className="time1">
                                    <p>This Weak</p>
                                    <span>1.245</span>
                                </div>
                                <div className="box4"></div>
                                <div className="time1">
                                    <p>Last Weak</p>
                                    <span>1.356</span>
                                </div>
                            </div>
                        </div>
                        <AreaChart width={1000} height={400} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="rgba(251, 125, 91, 0.2)" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="rgba(252, 196, 62, 0.3)" />
                        </AreaChart>
                    </div>
<div className="middle">
<div class="calendar">
<div className="heading">
                    <h1>School Performance</h1>
                </div>
        <div class="month">
            <div class="prev">&#10094;</div>
            <div class="date">
                <h2>June 2024</h2>
            </div>
            <div class="next">&#10095;</div>
        </div>
        <div class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="days">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
        </div>
    </div>
    <div className="chart">
    <Chart/>
    </div>
</div>
          <div className="table">
            <Tables/>
          </div>
                </div>
                <RightNavbar />

            </div>



        </>
    )
}

export default Home