import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()

        let userData={name,age,email,phone}

        fetch('http://localhost:4018/users',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(userData)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addUser">
            <h1>Add a New User</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form action="">
                    <div className="name">
                        <input type="text" placeholder="enter name" required value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" placeholder="enter age" required min={1} value={age} onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="email">
                        <input type="email" placeholder="enter email"vrequired value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="phone">
                        <input type="tel" minLength={10} maxLength={10} required placeholder='enter phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;