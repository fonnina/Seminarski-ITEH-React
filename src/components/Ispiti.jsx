import axios from 'axios';
import { useEffect, useState } from 'react';

function Ispiti() {

    const [ispiti, setIspiti] = useState([]);
   

    useEffect(() => {
        axios.get("http://localhost:8000/api/ispiti").then(res => {
            setIspiti(res.data.ispiti);
        });
    }, []);


    return (
        <div>

            <table id="ispititable" className="table table-hover table-striped">

                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>ESPB</th>
                        <th>Godina</th>
                        <th>Profesor</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        ispiti.map((ispit) => {
                            return (
                                <tr key={ispit.id}>
                                    <td>{ispit.naziv}</td>
                                    <td>{ispit.ESPB}</td>
                                    <td>{ispit.godina}</td>
                                    <td>{ispit.profesor}</td>
                                    <td><button className='btn btn-success'>Prijavi</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Ispiti;