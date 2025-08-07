import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/funcomp" className="nav-link text-white">Function Component</Link>
                </li>
                <li className="nav-item">
                    <Link to="/classcomp" className="nav-link text-white">Class Component</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">Login Hook</Link>
                </li>
                <li className="nav-item">
                    <Link to="/states" className="nav-link text-white">React State</Link>
                </li>
               */}
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/employee"> EmployeeList</Link>

                </li> 

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/add-employee">add-employee</Link>

                </li>                

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/delete-employee"> Delete Emp</Link>

                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        </>
    );
}

export default Layout;