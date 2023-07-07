import BookCreate from "./components/BookCreate";
// import { useState } from "react";

function App () {
    // const [Books,setBooks]= useState([]);
    const handleCreateBook = (title) => {
        console.log('Do a search with ',title);
    }
    return (<div>
        <BookCreate onCreate ={handleCreateBook}/>
    </div>);
}
export default App;