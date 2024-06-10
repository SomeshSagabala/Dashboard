import React from 'react'
import "./Home.css"
import { AreaChart, BarChart, Bar, Rectangle, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Chart = () => {

    const data = [
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
    return (
        <>
            <div className="chart">

                <div className="heading">
                    <h1>School Performance</h1>
                </div>

                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="yellow"  />
                    <Bar dataKey="uv" fill="orange"  />
                </BarChart>
            </div>


        </>
    )
}

export default Chart