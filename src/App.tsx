import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Beranda from "./pages/Beranda"
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
      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
