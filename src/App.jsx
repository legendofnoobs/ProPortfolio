import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Highlights from "./pages/Highlights";
import Footer from "./components/Footer";

import Lenis from "lenis";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

// Separate layout to detect route changes
const MainLayout = () => {
  const location = useLocation();
  const isHighlightsPage = location.pathname.includes("/work/highlights/");

  return (
    <>
      {!isHighlightsPage && (
        <header className="fixed w-full z-30">
          <Navbar />
        </header>
      )}
      <div className="pt-28 max-[1400px]:px-7 overflow-hidden m-auto">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/info" element={<Info />} />
          <Route path="/work/highlights/:id" element={<Highlights />} />
        </Routes>
      </div>
      {!isHighlightsPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
