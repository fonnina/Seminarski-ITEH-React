function Login() {

    return (
        <div className="login_page">

            <h1 className="mb-4">Prijavi se</h1>

            <div>
                <label>Korisničko ime: </label>
                <input type="text" className="form-control" id="korisnicko_ime_input" />
            </div>
            <div>
                <label className="mt-2">Lozinka: </label>
                <input type="password" className="form-control" id="lozinka_input" />
            </div>

            <button className="btn btn-primary btn-lg mt-3">Prijava</button>

        </div>
    )
}

export default Login;