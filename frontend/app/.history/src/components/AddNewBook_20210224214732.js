import React, {useContext} from 'react'
import BookCreater from './BookCreater'

const AddNewBook = () => {
    const value = useContext(BookCreater);
    return (
        <div>
            <input type='text' name='title' placeholder='タイトルを入力' required />
            <input type='text' name='turns' placeholder='巻数を入力' required />
            <br/>
            {value}
            <button>本を追加する</button>
        </div>
    )
}

export default AddNewBook
