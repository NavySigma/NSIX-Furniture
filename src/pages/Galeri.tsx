import { useState } from "react"
import SectionTitle from "../components/ui/SectionTitle"

const categories = ["Semua", "Kitchen Set", "Meja", "Lemari", "Kursi", "Interior"]

const allPhotos = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", title: "Kitchen Set Modern", cat: "Kitchen Set" },
  { src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80", title: "Meja Makan Kayu Jati", cat: "Meja" },
  { src: "https://images.unsplash.com/photo-1597006335771-2bee2977e91a?w=600&q=80", title: "Lemari Pakaian 3 Pintu", cat: "Lemari" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", title: "Meja Tamu Minimalis", cat: "Meja" },
  { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80", title: "Kamar Tidur Custom", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", title: "Sofa Minimalis", cat: "Kursi" },
  { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80", title: "Meja Rias Cantik", cat: "Meja" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80", title: "Kitchen Set Klasik", cat: "Kitchen Set" },
  { src: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=600&q=80", title: "Kursi Makan Jepara", cat: "Kursi" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Lemari Dapur", cat: "Lemari" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", title: "Rak Buku Custom", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80", title: "Kitchen Set Luxury", cat: "Kitchen Set" },
]

export default function Galeri() {
  const [active, setActive] = useState("Semua")
  const filtered = active === "Semua" ? allPhotos : allPhotos.filter((p) => p.cat === active)

  return (
    <main className="page-galeri">
      <section className="page-hero">
        <div className="container">
          <SectionTitle subtitle="Portofolio">
            Galeri Hasil Karya
          </SectionTitle>
          <p className="page-desc">
            Beberapa hasil karya NSIX Furniture yang sudah kami kerjakan untuk pelanggan setia kami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galeri-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="galeri-grid full">
            {filtered.map((photo, i) => (
              <div key={i} className="galeri-card">
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="galeri-card-overlay">
                  <span>{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
