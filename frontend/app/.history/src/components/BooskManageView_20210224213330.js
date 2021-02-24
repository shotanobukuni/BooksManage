import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import AddNewBook from './AddNewBook'

function BooskManageView() {
    export const bookCreater = createContext();

    // Get All Books Data
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
        .then(res => {setBookList(res.data)})
    }, [])
    return (
        <div>
            <table border="1">
                <tr>
                    <th>Title</th>
                    <th>巻数</th>
                    <th>更新日</th>
                </tr>
                {
                    bookList.map(book => <tr>
                        <td>{book.title}</td>
                        <td>{book.turns}</td>
                        <td>{book.updated_at}</td>
                    </tr>)
                }
            </table>
            <AddNewBook />
        </div>
    )
}

export default BooskManageView
