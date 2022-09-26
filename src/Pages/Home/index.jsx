import { CardBook } from "../../components/CardBook";
import { Header } from "../../components/Header";

import "./styles.css";

export function Home() {
   return (
      <div>
         <Header />
         <div className="content">
            <CardBook />
          
         </div>
      </div>
   );
}
