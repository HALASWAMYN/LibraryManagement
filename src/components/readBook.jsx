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
        <div className="readBook">
            <h1>Read Book </h1>
            <h2>{book.title}</h2>
            <p>{book.longDescription}</p>
            <p>{book.shortDescription}</p>

        </div>
    )
}
export default ReadBook;