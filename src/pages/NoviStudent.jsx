import AdminNavMenu from "../components/AdminNavMenu";
import { useState } from 'react'
import axios from 'axios'


function NoviStudent() {

    const [studentValues, setStudentValues] = useState({
        ime_prezime: '',
        email: '',
        korisnicko_ime: '',
        lozinka: '',
        budzet: 1,
        uplata_skolarine: 'ne',
        godina: 'Prva',
        prosek: 0,
        admin: 0
    });


    function sacuvajStudenta() {
        axios.post("http://localhost:8000/api/sacuvajstudenta", studentValues).then(response => {
            alert(response.data.message)
        });
    }


    function proveriEmail() {

        const options = {
            method: 'GET',
            url: 'https://email-validator18.p.rapidapi.com/email/validate',
            params: { email: studentValues.email },
            headers: {
                'X-RapidAPI-Key': 'b044c03b9amshd0d2c3a3355470cp192338jsn2b5104da4842',
                'X-RapidAPI-Host': 'email-validator18.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            if (response.data.success == "bad")
                alert("Email adresa nije validna!")
            else
                alert("Email adresa je validna!")

        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div>

            <AdminNavMenu />

            <h1 className="text-center" id="studentinaslov">Novi student</h1>


            <div className="novistudent">

                <div>
                    <label>Ime i prezime: </label>
                    <input type="text" className="form-control"
                        value={studentValues.ime_prezime}
                        onChange={e => setStudentValues({ ...studentValues, ime_prezime: e.target.value })} />
                </div>

                <div >
                    <label className="mt-2">Email: </label>
                    <div className="emaildiv">
                        <input type="email" className="form-control" id="email"
                            value={studentValues.email}
                            onChange={e => setStudentValues({ ...studentValues, email: e.target.value })} />

                        <button onClick={proveriEmail} className="btn btn-success mx-2" id="proveriemailbutton">Proveri email</button>
                    </div>
                </div>


                <div>
                    <label className="mt-2">Korisničko ime: </label>
                    <input type="text" className="form-control"
                        value={studentValues.korisnicko_ime}
                        onChange={e => setStudentValues({ ...studentValues, korisnicko_ime: e.target.value })} />
                </div>

                <div>
                    <label className="mt-2">Lozinka: </label>
                    <input type="text" className="form-control"
                        value={studentValues.lozinka}
                        onChange={e => setStudentValues({ ...studentValues, lozinka: e.target.value })} />
                </div>

                <div>
                    <label className="mt-2">Budžet: </label>
                    <select className="form-select"
                        value={studentValues.budzet}
                        onChange={e => setStudentValues({ ...studentValues, budzet: e.target.value })}>
                        <option value="1">Budžet</option>
                        <option value="0">Samofinansirajući</option>
                    </select>
                </div>


                <div>
                    <label className="mt-2">Godina: </label>
                    <select className="form-select"
                        value={studentValues.godina}
                        onChange={e => setStudentValues({ ...studentValues, godina: e.target.value })}>
                        <option value="Prva">Prva</option>
                        <option value="Druga">Druga</option>
                        <option value="Treća">Treća</option>
                        <option value="Četvrta">Četvrta</option>
                    </select>
                </div>

                <div>
                    <label className="mt-2">Prosek: </label>
                    <input type="number" className="form-control"
                        value={studentValues.prosek}
                        onChange={e => setStudentValues({ ...studentValues, prosek: e.target.value })} />
                </div>


                <button onClick={sacuvajStudenta} className="btn btn-primary btn-lg" id="sacuvajstudentabutton">Sačuvaj studenta</button>



            </div>

        </div >
    )
}

export default NoviStudent;