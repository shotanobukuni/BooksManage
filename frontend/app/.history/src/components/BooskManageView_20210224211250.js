import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddNewBook from './AddNewBook'

function BooskManageView() {
    // useContext for New Book Create
    // export const BookCreater = React.createContext()

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
            {/* <BookCreater.Provider value={[bookList, setBookList]}> */}
            <AddNewBook value={[bookList, setBookList]}/>
            {/* </BookCreater.Provider> */}
        </div>
    )
}

export default BooskManageView
