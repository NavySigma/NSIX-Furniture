import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Produk from "./pages/Produk"
import Galeri from "./pages/Galeri"
import Tentang from "./pages/Tentang"
import Kontak from "./pages/Kontak"
import ScrollToTop from "./hooks/useScrollToTop"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <h1 className="sr-only">NSIX Furniture Creation</h1>
      <Routes>
        <Route path="/" element={<Produk />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </>
  )
}
