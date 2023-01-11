import {Routes,Route } from "react-router-dom";
import BookList from "./BookList";
import ReadBook from "./readBook";
import UserDashBoard from "./UserDashBoard";
import UserNavbar from "./UserNavbar";

const UserPortel = () => {

    return ( 
        <div className="user-portel">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>} />
                <Route path="/book-List" element={<BookList/>}/>
                <Route path='/book-List/:id' element={<ReadBook/>} />

            </Routes>
        </div>
     );
}
 
export default UserPortel;