import { useState } from "react"
import SectionTitle from "../components/ui/SectionTitle"
import { waUrl } from "../utils/whatsapp"

const products = [
  {
    img: "/kitchen%20set1.png",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Modern Minimalis",
    desc: "Kabinet solid dengan desain bersih, cocok untuk dapur minimalis.",
  },
  {
    img: "/kitchen%20set2.webp",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Granit",
    desc: "Kitchen set dengan meja granit, desain modern dan elegan.",
    ig: "https://www.instagram.com/tv/C6bLME-g9H2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/kitchen-set4.jpeg",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Elemen Terbuka",
    desc: "Kitchen set dengan rak terbuka, praktis dan stylish.",
    ig: "https://www.instagram.com/reel/DYye3zQzeS5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/Gemini_Generated_Image_63280i63280i6328.png",
    kategori: "Meja",
    nama: "Meja Tamu",
    desc: "Meja tamu elegan, mempercantik ruang keluarga.",
    ig: "https://www.instagram.com/p/Cc5yZmWPJhz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/rak%20buku.png",
    kategori: "Interior",
    nama: "Rak Buku Minimalis",
    desc: "Rak buku sesuai ukuran dinding, bisa dikombinasi dengan warna cat.",
    ig: "https://www.instagram.com/reel/CqasvWUsqEj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/tempat-tidur.png",
    kategori: "Interior",
    nama: "Tempat Tidur Modern",
    desc: "Ranjang dengan sandaran empuk, desain simpel dan modern.",
    ig: "https://www.instagram.com/reel/DQMWaspE1Ww/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/kitchen%20set3.png",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Klasik",
    desc: "Desain klasik dengan ukiran detail, memberi kesan mewah pada dapur.",
    ig: "https://www.instagram.com/reel/CxQItmmSHRN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/Backdrof%20tv.webp",
    kategori: "Meja",
    nama: "Meja TV",
    desc: "Meja TV bahan solid pilihan, kuat dan tahan lama.",
    ig: "https://www.instagram.com/reel/Cp4-GhjAxmL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/meja-dapur.jpeg",
    kategori: "Meja",
    nama: "Meja Dapur Minimalis",
    desc: "Meja dapur dengan desain minimalis, cocok untuk ruang makan keluarga.",
    ig: "https://www.instagram.com/reel/C26dqAlSkWb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/lacibawahmeja.png",
    kategori: "Laci",
    nama: "Laci Bawah Tangga",
    desc: "Manfaatkan ruang bawah tangga dengan laci ukuran presisi.",
    ig: "https://www.instagram.com/reel/CqXaH_kOXvO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
]

const categories = ["Semua", ...new Set(products.map((p) => p.kategori))]

export default function Produk() {
  const [active, setActive] = useState("Semua")
  const [selectedImg, setSelectedImg] = useState<number | null>(null)
  const filtered = active === "Semua" ? products : products.filter((p) => p.kategori === active)

  const igUrl = "https://www.instagram.com/p/DXqnougArS3/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="

  return (
    <main className="page-produk">
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <SectionTitle subtitle="Katalog Produk">
            Pilihan Furniture Kami
          </SectionTitle>

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

          <div className="produk-card-grid">
            {filtered.map((p, i) => {
              const isSelected = selectedImg === i
              return (
              <div key={i} className="produk-card">
                <div className={`produk-card-img ${isSelected ? "selected" : ""}`} onClick={() => setSelectedImg(isSelected ? null : i)}>
                  <img src={p.img} alt={p.nama} loading="lazy" />
                  <div className={`produk-card-overlay ${isSelected ? "visible" : ""}`}>
                    <button className="produk-card-close" onClick={(e) => { e.stopPropagation(); setSelectedImg(null) }}>✕</button>
                    <a href={p.ig || igUrl} target="_blank" rel="noopener noreferrer" className="produk-card-overlay-btn" onClick={(e) => e.stopPropagation()}>
                      Lihat Postingan
                    </a>
                  </div>
                  <span className="produk-card-badge">{p.kategori}</span>
                </div>
                <div className="produk-card-body">
                  <h3>{p.nama}</h3>
                  <p>{p.desc}</p>
                  <a
                    href={waUrl(`saya tertarik dengan produk: ${p.nama}`, window.location.origin + p.img)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="dash-cta section">
        <div className="container">
          <SectionTitle subtitle="Hubungi Kami">
            Konsultasi Gratis
          </SectionTitle>
          <div className="dash-cta-content">
            <p>
            Punya rencana untuk furniture impian? Diskusikan bersama tim NSIX Furniture.
            Gratis, tanpa biaya!
            </p>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
