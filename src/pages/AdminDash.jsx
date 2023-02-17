import AdminNavMenu from "../components/AdminNavMenu";
import SviStudenti from "../components/SviStudenti";

function AdminDash() {
    return (
        <div>
            <AdminNavMenu />

            <h1 className="text-center" id="studentinaslov">Studenti</h1>

            <SviStudenti />

        </div>
    )
}

export default AdminDash;