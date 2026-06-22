import SectionTitle from "../ui/SectionTitle"
import type { Layanan } from "../../types"

const layananData: Layanan[] = [
  {
    id: 1,
    title: "Kitchen Set Custom",
    description: "Desain dan pembuatan kitchen set sesuai ukuran & selera kamu. Mulai dari minimalis hingga klasik.",
    icon: "🍳",
  },
  {
    id: 2,
    title: "Meja & Kursi",
    description: "Meja makan, meja kerja, meja tamu, dan kursi dengan bahan kayu pilihan berkualitas tinggi.",
    icon: "🪑",
  },
  {
    id: 3,
    title: "Lemari & Laci",
    description: "Lemari pakaian, lemari dapur, laci penyimpanan, dan rak serbaguna custom.",
    icon: "🗄️",
  },
  {
    id: 4,
    title: "Interior Furniture",
    description: "Furnitur pelengkap interior rumah seperti nakas, credenza, rak TV, dan lainnya.",
    icon: "🏠",
  },
  {
    id: 5,
    title: "Konsultasi Desain",
    description: "Bingung mau desain apa? Tim kami siap bantu konsultasi gratis sesuai kebutuhanmu.",
    icon: "💡",
  },
  {
    id: 6,
    title: "Restorasi & Perbaikan",
    description: "Service perbaikan dan restorasi furnitur kayu lama kamu biar jadi seperti baru lagi.",
    icon: "🔨",
  },
]

export default function Layanan() {
  return (
    <section className="layanan section">
      <div className="container">
        <SectionTitle subtitle="Apa yang Kami Buat?">
          Layanan & Produk Kami
        </SectionTitle>
        <div className="layanan-grid">
          {layananData.map((item) => (
            <div key={item.id} className="layanan-card">
              <span className="layanan-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
