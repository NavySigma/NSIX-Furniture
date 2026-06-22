import SectionTitle from "../components/ui/SectionTitle"
import { waUrl } from "../utils/whatsapp"

const produkList = [
  {
    kategori: "Kitchen Set",
    items: [
      "Kitchen set minimalis modern",
      "Kitchen set klasik Eropa",
      "Kabinet dapur custom",
      "Top table granit / kayu",
      "Island table dapur",
    ],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    kategori: "Meja",
    items: [
      "Meja makan kayu solid",
      "Meja kerja / kantor",
      "Meja tamu & nakas",
      "Meja TV & credenza",
      "Meja rias custom",
    ],
    img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
  },
  {
    kategori: "Lemari & Laci",
    items: [
      "Lemari pakaian 2/3/4 pintu",
      "Lemari dapur & pantry",
      "Laci penyimpanan",
      "Rak serbaguna",
      "Lemari sepatu",
    ],
    img: "https://images.unsplash.com/photo-1597006335771-2bee2977e91a?w=600&q=80",
  },
  {
    kategori: "Kursi & Sofa",
    items: [
      "Kursi makan kayu",
      "Kursi santai",
      "Sofa minimalis",
      "Bench kayu",
      "Kursi bar",
    ],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    kategori: "Furnitur Interior",
    items: [
      "Tempat tidur minimalis",
      "Headboard custom",
      "Rak buku & pajangan",
      "Partisi ruangan",
      "Furnitur kantor",
    ],
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
]

export default function Produk() {
  return (
    <main className="page-produk">
      <section className="page-hero">
        <div className="container">
          <SectionTitle subtitle="Produk & Layanan">
            Semua yang Kami Buat
          </SectionTitle>
          <p className="page-desc">
            NSIX Furniture melayani pembuatan berbagai furnitur kayu custom sesuai keinginanmu.
            Kualitas kayu pilihan, pengerjaan rapi, harga bersahabat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {produkList.map((kat, i) => (
            <div
              key={kat.kategori}
              className={`produk-row ${i % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="produk-img">
                <img src={kat.img} alt={kat.kategori} loading="lazy" />
              </div>
              <div className="produk-info">
                <h3>{kat.kategori}</h3>
                <ul>
                  {kat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={waUrl(`saya tertarik dengan ${kat.kategori} yang dibuat NSIX Furniture.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
