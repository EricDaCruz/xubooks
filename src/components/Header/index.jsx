import { useLocation, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./styles.css";

export const Header = () => {
   const location = useLocation().pathname;

   return (
      <header className="header">
         <div className="logo">
            <img src={Logo} alt="Logo Xubooks" />
            <p>
               Xu<span>BOOKS</span>
            </p>
         </div>
         <div className="container-search">
            <div className="content-search">
               <AiOutlineSearch />
               <input type="text" />
            </div>
         </div>
         <nav className="nav">
            <ul className="content-links">
               <li className={`link ${location === '/' && 'active'}`}>
                  <Link to="/">Obras</Link>
               </li>
               <li className={`link ${location === '/community' && 'active'}`}>
                  <Link to="/community">Comunidade</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};
