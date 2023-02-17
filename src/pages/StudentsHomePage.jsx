import Ispiti from "../components/Ispiti";
import StudentsNavMenu from "../components/StudentsNavMenu";

function StudentsHomePage() {
    return (
        <div>
            <StudentsNavMenu />

            <h1 className="mx-5 mt-4 mb-3">Prijava ispita</h1>

            <Ispiti />

        </div>
    )
}

export default StudentsHomePage;