import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReadBook from "./readBook";
import { useLocation } from "react-router-dom";


const BookList = () => {

    let [books, setBoks] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4018/books')
            let data = await response.json()
            setBoks(data)
        }
        fetchData()
    }, [books])

    let handleDelete = (id, title) => {
        fetch(`http://localhost:4018/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} has been deleted permanently`)
    }
    let navigate = useNavigate()

    let read = (id) => {
        if(location.pathname=='/admin/book-List')
        {
            navigate(`/admin/book-List/${id}`)
        }
        else{
            navigate(`/user/book-List/${id}`)
        }
        
    }
    //to fetch the route variable
    let location=useLocation()

    return (
        <div className="bookList">
            <h1 style={{marginTop:'100px'}}>Book List: {books.length}</h1>

            <div className="book_section">
                {books.map(data => (

                    <div style={{ display: 'flex', height: '200', width: '400', marginLeft: '200px' }} className="book_img">
                        <div className="img1">
                            <img height={250} width={200} src={data.thumbnailUrl} alt="" />
                        </div>

                        <div style={{ textAlign: 'start', marginLeft: '20px' }} className="book_card">
                            <h4 > <b>Title: </b>{data.title}</h4>
                            <p> <b>Authors:</b>{data.authors}</p>
                            <p> <b>Category:</b>{data.categories}</p>
                            <p><b>pageCount:</b> {data.pageCount}</p>
                            <button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '5px', border: '1px solid blue', marginBottom: '5px', marginRight: '5px' }} onClick={() => read(data.id)}>Read More</button>
                            { location.pathname=='/admin/book-List' && <button style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', border: '0', marginBottom: '5px' }} onClick={() => handleDelete(data.id, data.title)}>Delete</button>}
                        
                        </div>
                    </div>

                ))}
            </div>
            <ReadBook data={books.id} />
        </div>
    );
}

export default BookList;