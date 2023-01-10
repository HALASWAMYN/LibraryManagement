import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="left_link">
                <h1>Admin Portel</h1>
            </div>

            <div className="middle_lkink">
                <ul>
                    <li><Link to='' className="nav_buttons">Home</Link></li>
                    <li><Link to='/admin/add-book' className="nav_buttons">Add Books</Link></li>
                    <li><Link to='/admin/add-user' className="nav_buttons">Add Users</Link></li>
                    <li><Link to='/admin/book-List' className="nav_buttons">Book Lists</Link></li>
                    <li><Link to='/admin/user-list' className="nav_buttons">User Lists</Link></li>

                </ul>
            </div>
            <div className="right_link">
                <Link to='/' className="nav_buttons">LogOut</Link>
            </div>



        </div>
    );
}

export default AdminNavbar;