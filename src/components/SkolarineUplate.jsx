import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminNavMenu from "./AdminNavMenu";

function SkolarineUplate() {

    const [studenti, setStudenti] = useState([]);
    const [pretraga, setPretraga] = useState({
        pretragaInput: ''
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/studentiuplate").then(res => {
            setStudenti(res.data.studenti);
        });
    }, []);



    function funkcija(korisnicko_ime) {

        const kor_ime = {
            korisnicko_ime: korisnicko_ime
        }

        if (window.confirm("Promeni status uplate?")) {
            axios.post("http://localhost:8000/api/promenistatusuplate", kor_ime).then(response => {

                alert(response.data.message)
                window.location.reload()
            });
        }
    }


    function pretragaStudenata() {
        axios.post("http://localhost:8000/api/pretragastudenata", pretraga).then(response => {
            setStudenti(response.data.studenti)
        });
    }


    return (
        <div>

            <AdminNavMenu />

            <h1 className="text-center" id="studentinaslov">Školarine</h1>

            <div className="pretragadiv">
                <input type="text" className="form-control" id="pretraga"
                    onChange={e => setPretraga({ ...pretraga, pretragaInput: e.target.value })}
                />

                <button onClick={pretragaStudenata} className="btn btn-primary mx-2">Pretraga</button>
            </div>

            <table id="studentitable" className="table table-hover table-striped mt-3">

                <thead>
                    <tr className='text-center'>
                        <th>Ime i prezime</th>
                        <th>Broj indeksa</th>
                        <th>Email</th>
                        <th>Godina</th>
                        <th>Prosek</th>
                        <th>Uplata školarine</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    {
                        studenti.map((student) => {
                            return (
                                <tr key={student.korisnicko_ime}>
                                    <td>{student.ime_prezime}</td>
                                    <td>{student.korisnicko_ime}</td>
                                    <td>{student.email}</td>
                                    <td>{student.godina}</td>
                                    <td>{student.prosek}</td>
                                    <td className='text-center'>
                                        {student.uplata_skolarine == 'da' ?
                                            <button className="btn btn-success">DA</button> :
                                            <button onClick={() => funkcija(student.korisnicko_ime)} className="btn btn-danger">NE</button>}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SkolarineUplate;