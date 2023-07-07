import { useState } from "react";
function BookCreate ({onCreate}) {
    const  [title,setTitle] = useState('');

    const handleChange =(event) => {
        setTitle(event.target.value);
    }

    const handleFormSubmit =(event) => {
        event.preventDefault();
        onCreate('title');
        setTitle('');
    }
    // const handleClick =() => {
    //     onCreate('harryPotter')
    // }


    return (<div className="book-create">
        <h3>Add a Book </h3>
        <form onSubmit={handleFormSubmit}>
            <label>Title</label>
            <input ClassName ="input"value = {title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
    </div>);
}
export default BookCreate;