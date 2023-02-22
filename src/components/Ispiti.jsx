import axios from 'axios';
import { useEffect, useState } from 'react';

function Ispiti() {

    const [ispiti, setIspiti] = useState([]);
    const [prijavljeniIspiti, setPrijavljeniIspiti] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/ispiti").then(res => {
            setIspiti(res.data.ispiti);
        });
    }, []);

    function prijaviIspit(id) {
        let postoji = false
        ispiti.forEach(ispit => {
            if (ispit.id == id) {

                prijavljeniIspiti.forEach(i => {
                    if (i.id == id)
                        postoji = true
                });

                if (!postoji)
                    setPrijavljeniIspiti(current => [...current, ispit]);
            }
        });
    }

    function obrisiIspit(id) {
        let filter = prijavljeniIspiti.filter(item => item.id != id)
        setPrijavljeniIspiti(filter)
    }


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
                                    <td><b>{ispit.naziv}</b></td>
                                    <td><b>{ispit.ESPB}</b></td>
                                    <td><b>{ispit.godina}</b></td>
                                    <td><b>{ispit.profesor}</b></td>
                                    <td><button onClick={() => prijaviIspit(ispit.id)} className='btn btn-success'>Prijavi</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>


            <br />
            <br />
            <br />
            <br />
            <hr />

            <h1 className="mx-5 mt-4 mb-3">Prijavljeni ispiti</h1>

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
                        prijavljeniIspiti.map((ispit) => {
                            return (
                                <tr key={ispit.id}>
                                    <td><b>{ispit.naziv}</b></td>
                                    <td><b>{ispit.ESPB}</b></td>
                                    <td><b>{ispit.godina}</b></td>
                                    <td><b>{ispit.profesor}</b></td>
                                    <td><button onClick={() => obrisiIspit(ispit.id)} className='btn btn-success'>Obriši</button></td>
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