import { Link } from "react-router-dom";
import "./styles.css";

export function CardBook() {
   return (
      <div className="content-card">
         <div className="content-card-image">
            <img
               className="image-card"
               src="https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg"
            />
         </div>
         <div className="content-text">
            <h2 className="title-card">Books Head</h2>
            <p className="description-card">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
               elit lectus enim id euismod. Gravida at praesent aliquam, at
               natoque at leo. Faucibus quam ipsum mi eget consectetur posuere
               dui vulputate magna.
            </p>
            <p className="genre-card">Detective-Love-History</p>
            <Link to="/book/id" className="button-card">Now Read!</Link>
         </div>
      </div>
   );
}
