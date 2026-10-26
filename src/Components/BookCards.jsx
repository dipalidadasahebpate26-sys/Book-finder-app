function BookCards({book}){
    const url=book.cover_i ?(
        `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    ) : (
        null
    ) ;


    return (
        <div className="book-card">
            <div className="book">
                {
                    url ?(
                        <img src={url} alt={book.title}/>
                    ) : (
                        <div className="no-book">📚</div>
                    )
                }
            </div>

            <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author_name?.join(",") || "Unknown author"}</p>

                <p> {book.first_publish_year || "Year unavailable"}</p>

                <a href={`https://openlibrary.org${book.key}`}
                target="_blank" rel="noreferrer" className="viewbook">View Book </a>
            </div>
        </div>
    );
}
export default BookCards;