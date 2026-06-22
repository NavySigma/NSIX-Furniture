import { useState } from "react"
import SectionTitle from "../components/ui/SectionTitle"
import { waUrl } from "../utils/whatsapp"

export default function Kontak() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const name = data.get("name") as string
    const email = data.get("email") as string
    const phone = data.get("phone") as string
    const message = data.get("message") as string

    const waMsg = `Nama: ${name}%0AEmail: ${email}%0ATelp: ${phone}%0APesan: ${message}`
    window.open(`https://wa.me/6281232749579?text=${waMsg}`, "_blank")
    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <main className="page-kontak">
      <section className="page-hero">
        <div className="container">
          <SectionTitle subtitle="Hubungi Kami">
            Yuk, Ngobrol Sama Kami!
          </SectionTitle>
          <p className="page-desc">
            Punya pertanyaan atau mau pesan furniture? Isi form di bawah atau chat langsung via WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container kontak-wrap">
          <div className="kontak-form">
            <h3>Kirim Pesan</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" name="name" required placeholder="Nama kamu" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@contoh.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">No. Telepon</label>
                <input type="tel" id="phone" name="phone" required placeholder="0812-xxxx-xxxx" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" name="message" rows={5} required placeholder="Jelaskan kebutuhan furniture kamu..." />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                {sent ? "✓ Terkirim!" : "Kirim Pesan"}
              </button>
            </form>
          </div>

          <div className="kontak-info">
            <h3>Info Kontak</h3>
            <div className="kontak-item">
              <strong>Telepon</strong>
              <a href="tel:+6281232749579">+62 812-3274-9579</a>
            </div>
            <div className="kontak-item">
              <strong>WhatsApp</strong>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                +62 812-3274-9579
              </a>
            </div>
            <div className="kontak-item">
              <strong>Jam Kerja</strong>
              <p>Senin - Sabtu: 08:00 - 17:00</p>
              <p>Minggu: Konsultasi via chat</p>
            </div>
            <div className="kontak-item">
              <strong>Lokasi</strong>
              <p>(Hubungi untuk alamat lengkap)</p>
            </div>

            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-block"
            >
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
