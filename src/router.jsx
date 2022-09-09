import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import { Home } from "./Pages/Home";

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}
