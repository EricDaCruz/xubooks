import { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Link, useParams } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
/* Styles */
import "./styles.css";
/* Infos */
import { CommunityContribution } from "../../../db/community";
import { Books } from "../../../db/books";

export function Contribution() {
   const { id } = useParams();

   const [contributions, setContributions] = useState([]);
   const [book, setBook] = useState({});

   useEffect(() => {
      let bookInfos = Books.find((book) => book.id == id); // pegando o livro pelo id
      setBook(bookInfos);
   }, []);

   useEffect(() => {
      (function getContribution() {
         let contributionsByBook = CommunityContribution.filter(
            (contribution) => contribution.bookId == book.id
         );
         if (contributionsByBook.length > 0) {
            setContributions(contributionsByBook);
            console.log(contributionsByBook);
         }
      })();
   }, [book]);

   return (
      <div>
         <Header />
         <div className="content-arrow community">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
         </div>
         <div className="titles">
            <h1>
               <strong>Comunidade:</strong> {book.title}
            </h1>
            <h2>Releituras:</h2>
         </div>

         {contributions.length === 0 ? (
            <h3 className="not-found-contribution">
               Nenhuma contribuição foi feita para esse livro ainda
            </h3>
         ) : (
            <div className="content-contribution">
               {contributions.map((item) => (
                  <div className="contribution" key={item.id}>
                     <img src={`/contributions/${item.image}`} />
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
