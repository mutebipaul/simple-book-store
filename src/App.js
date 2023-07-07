import BookCreate from "./components/BookCreate";
import { useState } from "react";
import BookList from "./components/BookList";

function App () {
    const [Books,setBooks]= useState([]);

    const handleCreateBook = (title) => {
        const updatedBooks =[...Books,{id:Math.round(Math.random()*9999) ,title}];
        setBooks(updatedBooks);
    }

    return (<div className="app">
        <BookList books={Books}/>
        <BookCreate onCreate ={handleCreateBook}/>
    </div>);
}
export default App;