import { useState } from "react";
import Bookedit from "./BookEdit"

function BookShow({book,onDelete}) {
    const [showEdit,setShowEdit] = useState(false);

    const handleDeleteClick =()=>{
        onDelete(book.id);
    }

    const handleEditClick =() =>{
        setShowEdit(!showEdit);
    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content =<Bookedit/>
    }

    return (<div className="book-show">
        <div>{content}</div>
        

    <div className="actions">
        <button className="edit" onClick={handleEditClick}>edit</button>
        <button className="delete" onClick ={handleDeleteClick}>Delete</button>
    </div>
    </div>);
}
export default BookShow;

