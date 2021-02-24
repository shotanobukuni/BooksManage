import React from 'react'

const AddNewBook = () => {
    return (
        <div>
            <input type='text' name='title' placeholder='タイトルを入力' required />
            <input type='text' name='turns' placeholder='巻数を入力' required />
            <br/>
            <button>本を追加する</button>
        </div>
    )
}

export default AddNewBook
