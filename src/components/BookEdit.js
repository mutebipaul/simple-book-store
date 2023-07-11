import { useState } from "react";

function BookEdit({book,onSubmit}) {
    const[title,setTitle] = useState(book.title);

    const handleChange =(event) =>{
        setTitle(event.target.value);
    }

    const handleFormSubit = (event) =>{
        event.preventDefault();
        
        onSubmit(book.id,title);
    }

    return (<form onSubmit={handleFormSubit} className="book-edit">
        <label>Title</label>
        <input value = {title} onChange={handleChange} className="input"/>
        <button className="button is-primary">save</button>
    </form>);
}
export default BookEdit;