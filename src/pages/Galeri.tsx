import SectionTitle from "../components/ui/SectionTitle";

const allPhotos = [
  {
    src: "/kitchen%20set1.png",
    title: "Kitchen Set Modern",
    cat: "Kitchen Set",
  },
  {
    src: "/kitchen%20set2.webp",
    title: "Kitchen Set Klasik",
    cat: "Kitchen Set",
  },
  {
    src: "/kitchen%20set3.png",
    title: "Kitchen Set Luxury",
    cat: "Kitchen Set",
  },
  { src: "/meja%20laci%20tv.png", title: "Meja & Laci TV", cat: "Meja" },
  { src: "/Backdrof%20tv.webp", title: "Backdrop TV Custom", cat: "Interior" },
  { src: "/pemasangan.png", title: "Proses Pemasangan", cat: "Interior" },
  { src: "/pemasangan2.png", title: "Pemasangan Furniture", cat: "Interior" },
  { src: "/galeri-kirim.png", title: "Pengiriman Produk", cat: "Interior" },

  {
    src: "/kitchen%20set1.png",
    title: "Kitchen Set Minimalis",
    cat: "Kitchen Set",
  },
  { src: "/kitchen-set4.jpeg", title: "Kitchen Set Elemen Terbuka", cat: "Kitchen Set" },
  { src: "/meja-dapur.jpeg", title: "Meja Dapur Minimalis", cat: "Meja" },
  { src: "/nsix-gerbang.jpeg", title: "Gerbang NSIX Furniture", cat: "Interior" },
];

export default function Galeri() {
  return (
    <main className="page-galeri">
      <section className="page-hero">
        <div className="container">
          <SectionTitle subtitle="Portofolio">Galeri</SectionTitle>
          <p className="page-desc">
            Beberapa hasil karya NSIX Furniture yang sudah kami kerjakan untuk
            pelanggan setia kami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galeri-grid full">
            {allPhotos.map((photo, i) => (
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
  );
}
