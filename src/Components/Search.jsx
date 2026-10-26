
function Search({name,setName,handleSearch}){

    function handleChange(e){
        setName(e.target.value);
    }
    

    return (
        <>
        <div className="search-section">
             <p className="search-tag">YOUR NEXT CHAPTER STARTS HERE</p>

            <h1>
                Find your next <span>favourite book.</span>
            </h1>

            <div className="search">
                <input type="text" value={name} onChange={(e) => handleChange(e)} placeholder="Search book by title or author.."/>

                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        </>
    );
}
export default Search;