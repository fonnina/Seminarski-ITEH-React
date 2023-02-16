import { useState } from 'react'
import axios from 'axios'

function Login() {

    const [loginValues, setLoginValues] = useState({
        korisnicko_ime: '',
        lozinka: ''
    });


    function prijaviSe() {

        axios.post("http://localhost:8000/api/prijava", loginValues).then(response => {
            if (response.data.message == 'Uspešno ste se prijavili') {
                alert(response.data.message)
                localStorage.setItem('korisnicko_ime', loginValues.korisnicko_ime);
            }
            else {
                alert(response.data.message)
            }
        });
    }


    return (
        <div className="login_page">

            <h1 className="mb-4">Prijavi se</h1>

            <div>
                <label>Korisničko ime: </label>
                <input type="text" className="form-control" id="korisnicko_ime_input"
                    value={loginValues.korisnicko_ime} onChange={e => setLoginValues({ ...loginValues, korisnicko_ime: e.target.value })} />
            </div>

            <div>
                <label className="mt-2">Lozinka: </label>
                <input type="password" className="form-control" id="lozinka_input"
                    value={loginValues.lozinka} onChange={e => setLoginValues({ ...loginValues, lozinka: e.target.value })} />
            </div>

            <button onClick={prijaviSe} className="btn btn-primary btn-lg mt-3">Prijava</button>

        </div>
    )
}

export default Login;