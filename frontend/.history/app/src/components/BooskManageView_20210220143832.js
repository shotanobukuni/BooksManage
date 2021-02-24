import React, {useState, useEffect} from 'react'
import axios from 'axios'

function BooskManageView() {
    const [bookList, setBookList] = useState([])
    // Get Books Data
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
        .then(res => {setBookList(res.data)})
    }, )
    return (
        <div>
            <h2>書籍管理アプリ</h2>
            <ul>
                {{titele}}
            </ul>
        </div>
    )
}

export default BooskManageView
