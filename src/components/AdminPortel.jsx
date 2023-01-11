import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import BookList from "./BookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBook from "./addBook";
import AddUser from "./addUser";
import ReadUser from "./readUser";

const AdminPortel = () => { 
    return ( 
        <div className="adminPortel">

           <AdminNavbar/>
           <Routes>

            <Route path="/" element={<AdminDashboard/>} />
            <Route path='/book-List' element={<BookList/>} />
            <Route path='/user-list' element={<UserList/>}  />
            <Route path='/book-List/:id' element={<ReadBook/>} />
            <Route path="/add-book" element={<AddBook/>} />
            <Route path='/add-user' element={<AddUser/>} />
          

           </Routes>

        </div>
     );
}
 
export default AdminPortel;