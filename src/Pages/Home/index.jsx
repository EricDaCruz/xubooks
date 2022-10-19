import { CardBook } from "../../components/CardBook";
import { Header } from "../../components/Header";
/* Info */
import { Books } from "../../db/books";

import "./styles.css";

export function Home() {
   return (
      <div>
         <Header />
         <div className="content">
            {
               Books.map((book, index) => (
                  <CardBook key={index} book={book}/>
               ))
            }
         </div>
      </div>
   );
}
