import { useState, useEffect } from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { Header } from "../../components/Header";
import { Link, useParams } from "react-router-dom";
/* Info */
import { Books } from "../../db/books";

/* Style */
import "./styles.css";
import { LoaderBook } from "../../components/LoaderBook";

export function Book() {
   const [book, setBook] = useState({});
   const [loaded, setLoaded] = useState(true);
   const { id } = useParams();

   const isTheBook = (book) => {
      return book.id == id;
   };

   useEffect(() => {
      const book = Books.find(isTheBook);
      setBook(book);
      setLoaded(false); 
   }, []);

   return (
      <div>
         <Header />
         <div className="content-arrow">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
         </div>
         {  !loaded ? (
            <div className="content-info">
               <div>
                  <img src={book.banner} alt="Image book" />
               </div>
               <div className="content-book-text">
                  <h2>{book.title}</h2>
                  <p className="genre">{book.genre.join(" - ")}</p>
                  <p className="description">{book.review}</p>
                  <div className="content-info-book">
                     <p>
                        <strong>Autor:</strong> {book.author}
                     </p>
                     <p>
                        <strong>Publicação:</strong> {book.releaseYear}
                     </p>
                  </div>
                  <div className="content-button">
                     <Link to={`/community/book/${book.id}`} className="btn">Releituras</Link>
                     <a href={`/${book.urlPDF}`} download><button className="btn pdf">Ver mais</button></a>
                     {book.urlBook && (
                        <a href={`${book.urlBook}`} target="_blank"><button className="btn btn-book">Ver Livro</button></a>
                     )}
                  </div>
               </div>
            </div>
         ):(
            <LoaderBook />
         )}
      </div>
   );
}
