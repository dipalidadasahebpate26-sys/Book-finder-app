import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import BookCards from './Components/BookCards';


function App() {
    const [name,setName]=useState(""); // it like keep updating the words i am typing 
    const [searchName,setSearchName]=useState(""); // and it is when i click search means typing is done so the name i get now search that name 
    const [booksArray,setBooksArray]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");


    useEffect(()=>{
      async function fetchBooks() {
        try{
          setLoading(true);
          setError("");

          const url =
  `/openlibrary/search.json?q=${encodeURIComponent(searchName)}` +
  `&fields=key,title,author_name,first_publish_year,cover_i&limit=10`;


      const response=await fetch(url);

      if(!response.ok){
        throw new Error(`Request failed: ${response.status}`);
      }

      //else
        const data=await response.json();

        setBooksArray(data.docs || []); // as we get data in array []-docs , so it is now our booksarray 
        } catch(error){
          setError(error.message);
          setBooksArray([]);
        } finally {
          setLoading(false);
        }
       } 
       fetchBooks();
    } , [searchName] ); // heer depend--[searchName] so on changing the searchName return the effect 


    function handleSearch(){
        setSearchName(name);
    }

  return (
    <>
        <Navbar/>
        <Search 
        name={name}  setName={setName} handleSearch={handleSearch}/>
    
        
      <div className="mainBook">
        {loading && (
          <p className="status">Loading books...</p>
        )}

        {!loading && error && (
          <p className="status">Error: {error}</p>
        )}

        {!loading && !error && booksArray.length === 0 && (
          <p className="status">
            No books found. Try another search.
          </p>
        )}

        {!loading && !error && booksArray.length > 0 && (
          <div className="book-grid">
            {booksArray.map((book) => (
              <BookCards key={book.key} book={book} />
            ))}
          </div>
        )}
      </div>

    
    </>
  );
}

export default App;
