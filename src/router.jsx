import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Book } from "./Pages/Book";
//Pages
import { Home } from "./Pages/Home";

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="community" element={<Header />} />
            <Route path="/community/book/:id" element={<Book />} />
            <Route path="team" element={<Header />} />
         </Routes>
      </BrowserRouter>
   );
}
