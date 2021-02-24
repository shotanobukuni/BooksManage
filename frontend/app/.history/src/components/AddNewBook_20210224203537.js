import React from 'react'

const AddNewBook = () => {
    return (
        <div>
            <input type='text' name='title' placeholder='New Task ?' required />
            <button>本を追加する</button>
        </div>
    )
}

export default AddNewBook
