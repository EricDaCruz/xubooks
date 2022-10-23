import { Header } from "../../components/Header";
import { CardBook } from "../../components/CardBook";
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";
/* Styles */
import "./styles.css";
/* Info */
import { Books } from "../../db/books";

export function Community() {
   return (
      <div>
         <Header />
         <div className="content-arrow community">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
            <h1><strong>Comunidade</strong></h1>
         </div>
         <div className="content">
            {Books.map((book, index) => (
               <CardBook key={index} book={book} community={true} />
            ))}
         </div>
      </div>
   );
}
