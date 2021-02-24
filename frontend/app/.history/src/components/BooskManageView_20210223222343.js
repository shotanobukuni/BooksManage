import React, {useState, useEffect} from 'react'
import axios from 'axios'

function BooskManageView() {
    // Get Books Data
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/`)
        .then(res => {setBookList(res.data)})
        console.log(bookList);
    }, [])
    return (
        <div>
            <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">フリー</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">￥0 <small class="text-muted">/ 月</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 ユーザー</li>
          <li>2 GB のストレージ</li>
          <li>メールによるサポート</li>
          <li>ヘルプセンターへのアクセス</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">無料でサインアップ</button>
      </div>
    </div>
    </div>
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
