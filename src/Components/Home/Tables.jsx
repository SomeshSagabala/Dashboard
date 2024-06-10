import React from 'react'
import './Home.css'
import Table from 'react-bootstrap/Table';
import { CiUser } from "react-icons/ci";
import { BiPrinter } from "react-icons/bi";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const Tables = () => {
  return (
    <>
      <div className="table" style={{ width: "800px;" }}>
        <div className="heading">
          <h1>Unpaid Student Instuition</h1>
        </div>
        <Table striped bordered hover>
          <tbody style={{ width: "800px;" }}>
            <tr>
              <td><div className="box"></div></td>
              <td>Samantha Williams</td>
              <td>ID 123456789</td>
              <div className="user">
                <td> <CiUser style={{ width: '26px', height: '26px', color: 'white', backgroundColor: 'orange', borderRadius: '50%' }} /> <div className="user1"><p>Class</p><span>VII</span></div></td>
              </div>
              <td>$ 50,036</td>
              <td><BiPrinter style={{ width: '26px', height: '26px', color: '#A098AE' }} /></td>

            </tr>
            <tr>
              <td><div className="box"></div></td>
              <td>Tony Soap</td>
              <td>ID 123456789</td>
              <div className="user">
                <td> <CiUser style={{ width: '26px', height: '26px', color: 'white', backgroundColor: 'orange', borderRadius: '50%' }} /> <div className="user1"><p>Class</p><span>VII</span></div></td>
              </div>
              <td>$ 50,036</td>
              <td><BiPrinter style={{ width: '26px', height: '26px', color: '#A098AE' }} /></td>
            </tr>
            <tr>
              <td><div className="box"></div></td>
              <td>Jordon Nico</td>
              <td>ID 123456789</td>
              <div className="user">
                <td> <CiUser style={{ width: '26px', height: '26px', color: 'white', backgroundColor: 'orange', borderRadius: '50%' }} /> <div className="user1"><p>Class</p><span>VII</span></div></td>
              </div>
              <td>$ 50,036</td>
              <td><BiPrinter style={{ width: '26px', height: '26px', color: '#A098AE' }} /></td>
            </tr>
            <tr>
              <td><div className="box"></div></td>
              <td>karen Hope</td>
              <td>ID 123456789</td>
              <div className="user">
                <td> <CiUser style={{ width: '26px', height: '26px', color: 'white', backgroundColor: 'orange', borderRadius: '50%' }} /> <div className="user1"><p>Class</p><span>VII</span></div></td>
              </div>
              <td>$ 50,036</td>
              <td><BiPrinter style={{ width: '26px', height: '26px', color: '#A098AE' }} /></td>
            </tr>
            <tr>
              <td><div className="box"></div></td>
              <td>Nadila Adja</td>
              <td>ID 123456789</td>
              <div className="user">
                <td> <CiUser style={{ width: '26px', height: '26px', color: 'white', backgroundColor: 'orange', borderRadius: '50%' }} /> <div className="user1"><p>Class</p><span>VII</span></div></td>
              </div>
              <td>$ 50,036</td>
              <td><BiPrinter style={{ width: '26px', height: '26px', color: '#A098AE' }} /></td>
            </tr>
          </tbody>
        </Table>

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



    </>
  )
}

export default Tables