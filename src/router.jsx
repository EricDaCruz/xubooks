import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Book } from "./Pages/Book";
import { Community } from "./Pages/Community";
import { Contribution } from "./Pages/Community/Contribution";
//Pages
import { Home } from "./Pages/Home";

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="community" element={<Community />} />
            <Route path="/community/book/:id" element={<Contribution />} />
            <Route path="team" element={<Header />} />
         </Routes>
      </BrowserRouter>
   );
}
