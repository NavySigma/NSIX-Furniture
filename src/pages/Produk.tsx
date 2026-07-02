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
    nama: "Kitchen Set Klasik Eropa",
    desc: "Sentuhan Eropa dengan ukiran detail, memberi kesan mewah pada dapur.",
  },
  {
    img: "/meja%20laci%20tv.png",
    kategori: "Meja",
    nama: "Meja TV",
    desc: "Meja TV bahan solid pilihan, kuat dan tahan lama.",
  },
  {
    img: "/Backdrof%20tv.webp",
    kategori: "Kursi",
    nama: "Sofa Ruang Tamu Minimalis",
    desc: "Sofa nyaman dengan rangka kokoh, cocok untuk ruang tamu.",
  },
  {
    img: "/Backdrof%20tv.webp",
    kategori: "Interior",
    nama: "Tempat Tidur Modern",
    desc: "Ranjang dengan sandaran empuk, desain simpel dan modern.",
  },
  {
    img: "/Backdrof%20tv.webp",
    kategori: "Interior",
    nama: "Rak Buku Minimalis",
    desc: "Rak buku sesuai ukuran dinding, bisa dikombinasi dengan warna cat.",
  },
  {
    img: "/meja%20laci%20tv.png",
    kategori: "Meja",
    nama: "Meja Tamu & Nakas",
    desc: "Set meja tamu dengan nakas serasi, mempercantik ruang keluarga.",
  },
  {
    img: "/kitchen%20set3.png",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Premium Granit",
    desc: "Kitchen set dengan meja granit, desain modern dan elegan.",
  },
  {
    img: "/kitchen-set4.jpeg",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Elemen Terbuka",
    desc: "Kitchen set dengan rak terbuka, praktis dan stylish.",
  },
  {
    img: "/meja-dapur.jpeg",
    kategori: "Meja",
    nama: "Meja Dapur Minimalis",
    desc: "Meja dapur dengan desain minimalis, cocok untuk ruang makan keluarga.",
  },
  {
    img: "/meja%20laci%20tv.png",
    kategori: "Laci",
    nama: "Laci Bawah Meja Dapur",
    desc: "Laci tarik untuk menyimpan peralatan dapur, praktis dan hemat tempat.",
  },
  {
    img: "/meja%20laci%20tv.png",
    kategori: "Laci",
    nama: "Laci Bawah Tangga",
    desc: "Manfaatkan ruang bawah tangga dengan laci ukuran presisi.",
  },
  {
    img: "/meja%20laci%20tv.png",
    kategori: "Laci",
    nama: "Laci Meja Kerja Multifungsi",
    desc: "Laci meja kerja dengan sekat untuk alat tulis dan dokumen.",
  },
]

const categories = ["Semua", ...new Set(products.map((p) => p.kategori))]

export default function Produk() {
  const [active, setActive] = useState("Semua")
  const filtered = active === "Semua" ? products : products.filter((p) => p.kategori === active)

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
            {filtered.map((p, i) => (
              <div key={i} className="produk-card">
                <div className="produk-card-img">
                  <img src={p.img} alt={p.nama} loading="lazy" />
                  <span className="produk-card-badge">{p.kategori}</span>
                </div>
                <div className="produk-card-body">
                  <h3>{p.nama}</h3>
                  <p>{p.desc}</p>
                  <a
                    href={waUrl(`saya tertarik dengan produk: ${p.nama}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            ))}
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
