import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (

        <div className="adminNavbar">
            <div className="left_link">
                <h1>User Portel</h1>
            </div>

            <div className="middle_lkink">
                <ul>
                    <li><Link to='' className="nav_buttons">Home</Link></li>
                    <li><Link to='/user/book-List' className="nav_buttons">Book Lists</Link></li>
        
                </ul>
            </div>
            <div className="right_link">
                <Link to='/' className="nav_buttons">LogOut</Link>
            </div>



        </div>

    );
}

export default UserNavbar;