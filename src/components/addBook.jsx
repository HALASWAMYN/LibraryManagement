import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'

//title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl

const AddBook = () => {
    let [title, setTitle] = useState("")
    let [authors, setAuthor] = useState("")
    let [categories, setCategory] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShort] = useState("")
    let [longDescription, SetLong] = useState("")
    let [thumbnailUrl, setUrl] = useState("")

    let navigate=useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = { title, authors, pageCount, categories, shortDescription, longDescription,thumbnailUrl }

        //posting to server
        fetch('http://localhost:4018/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }
    return (
        <div className="addBook">
            <h1 style={{marginTop:'100px'}}>Add a Book</h1>

            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input type="text" value={authors} onChange={(e) => setAuthor(e.target.value)} required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                        <input type="text" value={categories} onChange={(e) => setCategory(e.target.value)} required placeholder="category of the book" />
                    </div>
                    <div className="pageCount">
                        <input type="number" value={pageCount} onChange={(e) => setPageCount(e.target.value)} required placeholder="pages of the book" />
                    </div>
                    <div className="humbnailUrl">
                        <input type="text" value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} required placeholder="humbnailUrl of the book" />
                    </div>

                    <div className="shortDescription">
                        <textarea  name="" id="" cols="30" rows="10" value={shortDescription} onChange={(e) => setShort(e.target.value)} required placeholder="shortDescription of the book"></textarea>
                  
                        <textarea name="" id="" cols="30" rows="10" value={longDescription} onChange={(e) => SetLong(e.target.value)} required placeholder="LongDescription of the book"></textarea>
                   </div>
                   <br />
                    <button className="log1">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;