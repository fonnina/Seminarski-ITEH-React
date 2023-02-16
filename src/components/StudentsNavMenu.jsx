import { Link, useNavigate } from 'react-router-dom';

function StudentsNavMenu() {

    const navigate = useNavigate();

    function odjava() {
        alert('Uspešno ste se odjavili')
        localStorage.removeItem('korisnicko_ime')
        localStorage.removeItem('admin')
        navigate('/')
    }

    return (
        <div className="admin_nav_menu">
            <div className="nav_item">
                <Link to="/studentshomepage">Početna</Link>
            </div>

            <div className="nav_item">
                <button onClick={odjava} id="button_odjava" className="btn btn-light">Odjava</button>
            </div>
        </div>
    )
}

export default StudentsNavMenu;