import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import '../styles/adminLogin.css'


const AdminLogin = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let Login = (e) => {
        e.preventDefault()
        let data = { email, password } // data from input

        //admin validatin
        if (email == 'admin@gmail.com' && password == '0000') {
            navigate('/admin/')  // navigate to admin home page
        }
        else {
            alert('inavlid credentials')
        }
    }

    return (
        <div className="adminLogin">
            <div className="form_container_card">
                <h1 style={{ margin: '0px' }}>Login as Admin</h1>
                <br /><br />
                <div className="form_input">
                    <form action="" onSubmit={Login}>
                        <div className="email">
                            <img height={70} width={70} src="https://www.iconbunny.com/icons/media/catalog/product/2/6/2618.9-man-icon-iconbunny.jpg" alt="" /> <br />

                            <label htmlFor="Email">Email:</label> <br />
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br />
                        <div className="password">
                            <label htmlFor="password">Password:</label> <br />
                            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <br />
                        <button className="log1">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default AdminLogin;