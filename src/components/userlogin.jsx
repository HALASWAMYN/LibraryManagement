
import { useNavigate } from "react-router-dom"
import '../styles/adminLogin.css'


const UserLogin = () => {

    let navigate = useNavigate()

    let Login = () => {
        navigate('/user/')

    }
    return (
        <div className="adminLogin">
            <div className="form_container_card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={Login}>
                        <div className="email">
                            <img height={70} width={70} src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-vert.png" alt="" />  <br />
                            <label htmlFor="Email">Email:</label> <br />
                            <input type="email" placeholder="Email address" />
                        </div>
                        <br />
                        <div className="password">
                            <label htmlFor="password">Password:</label> <br />
                            <input type="password" placeholder="password" />
                        </div>
                        <br />
                        <button className="log2">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default UserLogin;