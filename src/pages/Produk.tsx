import { useState } from "react"
import SectionTitle from "../components/ui/SectionTitle"
import { waUrl } from "../utils/whatsapp"

const products = [
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Minimalis Modern",
    desc: "Desain sleek dengan kabinet solid, cocok untuk dapur mungil maupun besar.",
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Klasik Eropa",
    desc: "Sentuhan Eropa dengan ukiran detail, memberikan kesan mewah pada dapur.",
  },
  {
    img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
    kategori: "Meja",
    nama: "Meja Makan Kayu Solid",
    desc: "Meja makan dari kayu jati pilihan, kuat dan tahan lama untuk keluarga.",
  },
  {
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80",
    kategori: "Meja",
    nama: "Meja Rias Cantik",
    desc: "Meja rias dengan cermin dan laci penyimpanan, desain feminin elegan.",
  },
  {
    img: "https://images.unsplash.com/photo-1597006335771-2bee2977e91a?w=600&q=80",
    kategori: "Lemari",
    nama: "Lemari Pakaian 3 Pintu",
    desc: "Lemari pakaian luas dengan sekat dan gantungan, cocok untuk kamar utama.",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    kategori: "Lemari",
    nama: "Lemari Dapur & Pantry",
    desc: "Lemari penyimpanan dapur dengan rak adjustable, praktis dan rapi.",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    kategori: "Kursi",
    nama: "Kursi Makan Ukir Jepara",
    desc: "Kursi makan kayu dengan sentuhan ukir khas Jepara, kokoh dan artistik.",
  },
  {
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    kategori: "Kursi",
    nama: "Sofa Minimalis 2 Seater",
    desc: "Sofa nyaman dengan rangka kayu kokoh, cocok untuk ruang tamu minimalis.",
  },
  {
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    kategori: "Interior",
    nama: "Tempat Tidur Minimalis",
    desc: "Ranjang kayu dengan headboard empuk, desain simpel dan modern.",
  },
  {
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    kategori: "Interior",
    nama: "Rak Buku Custom",
    desc: "Rak buku sesuai ukuran dinding kamu, bisa kombinasi warna cat.",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    kategori: "Meja",
    nama: "Meja Tamu & Nakas",
    desc: "Set meja tamu dengan nakas serasi, mempercantik ruang keluarga.",
  },
  {
    img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80",
    kategori: "Kitchen Set",
    nama: "Kitchen Set Luxury",
    desc: "Kitchen set premium dengan top table granit, desain modern elegan.",
  },
  {
    img: "https://images.unsplash.com/photo-1594761040030-4e0e2c6e3a7b?w=600&q=80",
    kategori: "Laci",
    nama: "Laci Bawah Meja Dapur",
    desc: "Laci tarik untuk menyimpan peralatan dapur, praktis dan hemat tempat.",
  },
  {
    img: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=600&q=80",
    kategori: "Laci",
    nama: "Laci Bawah Tangga",
    desc: "Manfaatkan space bawah tangga dengan laci custom ukuran pas.",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
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
            Yuk, Konsultasi Gratis!
          </SectionTitle>
          <div className="dash-cta-content">
            <p>
              Punya rencana buat furniture impian? Diskusikan dulu sama tim NSIX Furniture.
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
