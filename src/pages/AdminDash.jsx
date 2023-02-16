import AdminNavMenu from "../components/AdminNavMenu";
import SviStudenti from "../components/SviStudenti";

function AdminDash() {
    return (
        <div>
            <AdminNavMenu />

            <h1>Admin Dashboard</h1>

            <SviStudenti />

        </div>
    )
}

export default AdminDash;