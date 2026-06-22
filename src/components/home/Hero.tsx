import { Link } from "react-router-dom"
import { waUrl } from "../../utils/whatsapp"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <span className="hero-badge">Kualitas Premium, Harga Terjangkau</span>
        <h1 className="hero-title">
          Furniture Custom
          <br />
          <span className="hero-highlight">Terbaik untuk Rumahmu</span>
        </h1>
        <p className="hero-desc">
          NSIX Furniture — spesialis pembuatan kitchen set, meja, lemari, laci, dan berbagai furnitur
          kayu custom dengan desain modern, minimalis, dan klasik.
        </p>
        <div className="hero-actions">
          <Link to="/produk" className="btn btn-primary">
            Lihat Produk
          </Link>
          <a href={waUrl("saya tertarik dengan produk NSIX.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}
