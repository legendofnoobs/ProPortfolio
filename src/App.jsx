// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Work from "./pages/Work";
// import Info from "./pages/Info";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <BrowserRouter>
//     <header className="fixed w-full z-30">
//       <Navbar />
//     </header>
//     <div className="pt-28 px-20 max-[1400px]:px-7">
//       <Routes>
//         <Route path="/" element={<Work/>}/>
//         <Route path="/info" element={<Info/>}/>
//       </Routes>
//     </div>
//     <footer>
//       <Footer/>
//     </footer>
//     </BrowserRouter>
//   )
// }

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Highlights from "./pages/Highlights";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <header className="fixed w-full z-30">
        <Navbar />
      </header>
      <div className="pt-28 px-20 max-[1400px]:px-7">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/info" element={<Info />} />
          <Route path="work/highlights/:id" element={<Highlights />} /> {/* Add Highlights Route */}
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
