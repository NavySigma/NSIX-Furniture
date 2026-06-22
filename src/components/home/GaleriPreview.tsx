import { Link } from "react-router-dom"
import SectionTitle from "../ui/SectionTitle"

const previews = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    title: "Kitchen Set Minimalis",
  },
  {
    src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
    title: "Meja Makan Kayu Jati",
  },
  {
    src: "https://images.unsplash.com/photo-1597006335771-2bee2977e91a?w=600&q=80",
    title: "Lemari Pakaian 3 Pintu",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    title: "Meja Tamu & Nakas",
  },
]

export default function GaleriPreview() {
  return (
    <section className="galeri-preview section">
      <div className="container">
        <SectionTitle subtitle="Portofolio Kami" light>
          Hasil Karya Terbaru
        </SectionTitle>
        <div className="galeri-grid">
          {previews.map((item, i) => (
            <div key={i} className="galeri-card">
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="galeri-card-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="galeri-cta">
          <Link to="/galeri" className="btn btn-outline btn-light">
            Lihat Semua Karya
          </Link>
        </div>
      </div>
    </section>
  )
}
