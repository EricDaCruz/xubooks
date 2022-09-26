import { ImArrowLeft2 } from "react-icons/im";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

/* Style */
import "./styles.css";

export function Book() {
   return (
      <div>
         <Header />
         <div className="content-arrow">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
         </div>
         <div className="content-info">
            <div>
               <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg"
                  alt="Image book"
               />
            </div>
            <div className="content-book-text">
               <h2>Clube da Luta</h2>
               <p className="genre">Romance</p>
               <p className="description">
                  O clube da luta é idealizado por Tyler Durden, que acha que
                  encontrou uma maneira de viver fora dos limites da sociedade e
                  das regras sem sentido. Mas o que está por vir de sua mente
                  pode piorar muito daqui para frente.
               </p>
               <div className="content-info-book">
                  <p>
                     <strong>Autor:</strong> Chuck Palahniuk
                  </p>
                  <p>
                     <strong>Publicação:</strong> 1996
                  </p>
               </div>
               <div className="content-button">
                    <button className="btn">Ver mais</button>
                    <button className="btn pdf">Abrir PDF</button>
               </div>
            </div>
         </div>
      </div>
   );
}
