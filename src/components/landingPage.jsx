import { Link } from "react-router-dom";
import '../styles/landingPage.css';

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectLoginTypr">

                <h1>Library Management System</h1>
                <br /><br /><br />
                <div className="main">
                    <div className="img">
                        <img height={100} width={100} src="https://www.iconbunny.com/icons/media/catalog/product/2/6/2618.9-man-icon-iconbunny.jpg" alt="" /> <br /><br />
                        <button className="bt1"><Link to='/admin_login' className="login1"> Admin Login</Link></button>
                    </div>


                    <div className="btn">
                        <img height={100} width={100} src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-vert.png" alt="" />  <br /><br />
                        <button className="bt2"> <Link to='/user_login' className="login1">User Login</Link></button>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default LandingPage;