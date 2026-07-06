import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Produk" },
  { to: "/galeri", label: "Galeri" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img
            src="/NSIX%20Logo.png"
            alt="NSIX Furniture"
            className="logo-img"
          />
        </Link>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/6281232749579?text=Halo%20NSIX%20Furniture%2C%20saya%20ingin%20konsultasi%20mengenai%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-wa"
          >
            Konsultasi
          </a>
        </div>
      </div>
    </nav>
  );
}
