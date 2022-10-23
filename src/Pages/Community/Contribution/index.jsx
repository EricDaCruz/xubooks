import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
/* Styles */
import "./styles.css";

export function Contribution() {
   const contribution = Array(5).fill(true);

   return (
      <div>
         <Header />
         <div className="content-arrow community">
            <Link to="/">
               <ImArrowLeft2 />
            </Link>
            <h1>
               <strong>Comunidade:</strong> teste
            </h1>
            <h2>Releituras:</h2>

            <div className="content-contribution">
               {contribution.map((item, index) => (
                  <div className="contribution">
                     <img src="https://m.media-amazon.com/images/I/71peoM4V0lL.jpg" />
                     <h3>
                        <strong>Ilustrador:</strong> Fulano
                     </h3>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
