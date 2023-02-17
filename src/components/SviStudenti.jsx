import axios from 'axios';
import { useEffect, useState } from 'react';

function SviStudenti() {

    const [sviStudenti, setSviStudenti] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/svistudenti").then(res => {
            setSviStudenti(res.data.studenti);
        });
    }, []);


    function obrisiStudenta(id) {
        axios.delete(`http://localhost:8000/api/obrisistudenta/${id}`).then(response => {
            alert(response.data.message)
            window.location.reload()
        });
    }



    return (
        <div>

            <table id="studentitable" className="table table-hover table-striped mt-4">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime i prezime</th>
                        <th>Broj indeksa</th>
                        <th>Email</th>
                        <th>Budzet</th>
                        <th>Prosek</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        sviStudenti.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.ime_prezime}</td>
                                    <td>{student.korisnicko_ime}</td>
                                    <td>{student.email}</td>
                                    <td>{student.budzet == 1 ? 'Budzet' : 'Samofinansirajuci'}</td>
                                    <td>{student.prosek}</td>
                                    <td><button onClick={() => obrisiStudenta(student.id)} className="btn btn-danger">Obriši</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default SviStudenti;