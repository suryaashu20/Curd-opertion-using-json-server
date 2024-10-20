import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [data, setdata] = useState([])
    console.log(data)
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setdata(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container at-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachIteam, index) => (

                        <tr>
                            <th scope="row">{eachIteam.id}</th>
                            <th scope="row">{eachIteam.name}</th>
                            <th scope="row">{eachIteam.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Home
