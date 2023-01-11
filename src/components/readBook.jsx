import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {

    let [book, setBook] = useState([])
    let params = useParams() // to get route parameter

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4018/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })

    return (
        <div style={{textAlign:'start',paddingLeft:'40px',backgroundColor:'brown',color:'gold'}} className="readBook">
            {/* <h1>Read Book </h1> */}
            <h2 style={{margin:'0',textAlign:'center',color:'yellow',paddingTop:'15px'}}>{book.title}</h2>
            <h3>Authors: {book.authors}</h3>
            <h4>Category: {book.categories}</h4>
             <h5>Number of Pages: {book.pageCount}</h5>
            <p>{book.longDescription}</p>
            <br />
            <p>{book.shortDescription}</p>
            <br />

        </div>
    )
}
export default ReadBook;