import SectionTitle from "../components/ui/SectionTitle";
import { waUrl } from "../utils/whatsapp";

export default function Tentang() {
  return (
    <main className="page-tentang">
      <section className="page-hero">
        <div className="container">
          <SectionTitle subtitle="Tentang Kami">
            Cerita NSIX Furniture
          </SectionTitle>
        </div>
      </section>

      <section className="section">
        <div className="container tentang-content">
          <div className="tentang-img">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80"
              alt="Workshop NSIX Furniture"
              loading="lazy"
            />
          </div>
          <div className="tentang-text">
            <h3>Spesialis Furniture Kayu Custom</h3>
            <p>
              NSIX Furniture adalah bengkel furniture yang berfokus pada
              pembuatan kitchen set, meja, lemari, laci, dan berbagai furnitur
              kayu custom. Kami mengutamakan kualitas bahan, ketelitian
              pengerjaan, dan kepuasan pelanggan.
            </p>
            <p>
              Setiap produk dikerjakan oleh tenaga berpengalaman dengan kayu
              pilihan. Kami melayani pemesanan untuk rumah tinggal, apartemen,
              kantor, hingga proyek properti.
            </p>

            <div className="tentang-stats">
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">Tahun Pengalaman</span>
              </div>
              <div className="stat">
                <span className="stat-num">500+</span>
                <span className="stat-label">Proyek Selesai</span>
              </div>
              <div className="stat">
                <span className="stat-num">400+</span>
                <span className="stat-label">Pelanggan Puas</span>
              </div>
            </div>

            <a
              href={waUrl("saya ingin tau lebih tentang NSIX Furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat Via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section visi-section">
        <div className="container tentang-visi">
          <div className="visi-card">
            <h4>Visi</h4>
            <p>
              Menjadi bengkel furniture custom terpercaya yang menghadirkan
              produk berkualitas tinggi dengan harga terjangkau untuk setiap
              rumah di Indonesia.
            </p>
          </div>
          <div className="visi-card">
            <h4>Misi</h4>
            <ul>
              <li>Mengutamakan kualitas bahan baku kayu terbaik</li>
              <li>Memberikan pelayanan konsultasi gratis & ramah</li>
              <li>Mengerjakan setiap pesanan dengan penuh ketelitian</li>
              <li>Menjaga kepuasan pelanggan dengan garansi produk</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
