import { useState } from "react";

function BookEdit() {
    const[title,setTitle] = useState([]);

    const handleChange =(event) =>{
        setTitle(event.target.value);
    }

    const handleFormSubit = (event) =>{
        event.preventDefault();
        setTitle('');
    }

    return (<form onSubmit={handleFormSubit} className="book-edit">
        <label>Title</label>
        <input value = {title} onChange={handleChange} className="input"/>
        <button className="button is-primary">save</button>
    </form>);
}
export default BookEdit;