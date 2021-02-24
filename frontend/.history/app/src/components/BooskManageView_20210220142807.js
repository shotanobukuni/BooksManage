import React, {useState, useEffect} from 'react'
import axios from 'axios'

function BooskManageView() {
    const [id, setId] = useState(1)
    const [bookList, setBookList] = useState({
        'title':'',
        'updated_at': ''
    })
    // Get Books Data
    const GetBooksData = () => {
        axios.get(`http://127.0.0.1:8000/api/books/${id}/`)
        .then(res => {setBookList(res.data)})
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
        .then(res => {setBookList(res.data)})
    }, [])
    return (
        <div>
            <h2>書籍管理アプリ</h2>
            <ul>
                bookList.map(book => <li key={book.id}>
                    title : {book.title}
                    latest date : {book.updated_at}
                </li>)
            </ul>
        </div>
    )
}

export default BooskManageView
