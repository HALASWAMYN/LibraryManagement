import {Routes,Route } from "react-router-dom";
import BookList from "./BookList";
import PageNotFound from "./PageNotFound";
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
                <Route path='*' element={<PageNotFound/>} />

            </Routes>
        </div>
     );
}
 
export default UserPortel;