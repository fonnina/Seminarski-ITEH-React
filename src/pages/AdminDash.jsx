import AdminNavMenu from "../components/AdminNavMenu";
import SviStudenti from "../components/SviStudenti";
import { Link } from "react-router-dom";

function AdminDash() {
    return (
        <div>
            <AdminNavMenu />

            <h1 className="text-center" id="studentinaslov">Studenti</h1>

            <Link to="/novistudent">
                <button className="btn btn-primary btn-lg" id="novistudentbutton">Novi student</button>
            </Link>

            <SviStudenti />

        </div>
    )
}

export default AdminDash;