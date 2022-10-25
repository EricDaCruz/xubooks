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
   const contribution = Array(5).fill(true);

   const [contributions, setContributions] = useState([]);
   const [book, setBook] = useState({});

   useEffect(() => {
      let bookInfos = Books.find((book) => book.id == id); // pegando o livro pelo id
      setBook(bookInfos);
      let contributionsByBook = CommunityContribution.filter(
         (contribution) => contribution.bookId == book.id
      );
      setContributions(contributionsByBook);
      console.log(contributionsByBook);
   }, []);

   return (
      <div>
         <Header />
         <div className="content-arrow community">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
            <h1>
               <strong>Comunidade:</strong> {book.title}
            </h1>
            <h2>Releituras:</h2>

            {contributions.length >= 1 ? (
               <div className="content-contribution">
                  {contributions.map((item ) => (
                     <div className="contribution" key={item.id}>
                        <img src={`../../../assets/contributions/${item.image}`} />
                        <h3>
                           <strong>Ilustrador:</strong> {item.author}
                        </h3>
                     </div>
                  ))}
               </div>
            ) : (
               <h3>Nenhuma contribuição foi feita para esse livro ainda</h3>
            )}
         </div>
      </div>
   );
}
