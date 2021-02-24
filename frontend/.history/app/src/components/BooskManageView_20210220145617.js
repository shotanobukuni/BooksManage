import React, {useState, useEffect} from 'react'
import axios from 'axios'

function BooskManageView() {
    const [bookList, setBookList] = useState([])
    // Get Books Data
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
        .then(res => {setBookList(res.data)})
    }, [])
    return (
        <div>
            <ul>
            {
                bookList.map(book => <li>
                    title : {book.title}
                    latest date : {book.updated_at}
                </li>)
            }
            </ul>
        </div>
    )
}

export default BooskManageView
