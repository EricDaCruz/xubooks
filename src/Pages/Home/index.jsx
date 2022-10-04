import { CardBook } from "../../components/CardBook";
import { Header } from "../../components/Header";

import "./styles.css";

const books = Array(5).fill(true)

export function Home() {
   return (
      <div>
         <Header />
         <div className="content">
            {
               books.map((book, index) => (
                  <CardBook key={index} book={book}/>
               ))
            }
         </div>
      </div>
   );
}
