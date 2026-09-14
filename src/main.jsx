import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, Mail, Globe, ArrowUpRight, MessageCircle, MapPin, Sparkles, UserCheck } from "lucide-react";
import "./styles.css";
import logoIvsa from "./assets/logoivsa.png";
import vigiaImg from "./assets/vigia.png";

const data = {
  name: "Giancarlo Salazar",
  company: "Ingeniería Vehicular, S.A.",
  brand: "VIGIA",
  role: "Distribuidor Autorizado Vigia",
  phone1: "+502 5697 9520",
  phone2: "+502 5019 3561",
  website: "https://calibradorvigia.com/",
  email: "ivsa.inf@hotmail.com",
};

const contacts = [
  { label: "LLAMAR DIRECTO", value: data.phone1, href: `tel:${data.phone1.replaceAll(" ", "")}`, Icon: Phone, primary: true },
  { label: "WHATSAPP", value: "Escríbenos ahora (+502 5697 9520)", href: "https://api.whatsapp.com/send/?phone=50256979520&text=Hola%2C+quisiera+solicitar+m%C3%A1s+informaci%C3%B3n+sobre+los+productos+VIGIA.&type=phone_number&app_absent=0", Icon: MessageCircle },
  { label: "SITIO WEB OFICIAL", value: "calibradorvigia.com", href: data.website, Icon: Globe },
  { label: "CORREO ELECTRÓNICO", value: data.email, href: `mailto:${data.email}`, Icon: Mail },
];

function App() {
  const [cursor, setCursor] = React.useState({ x: 50, y: 50 });

  return (
    <div
      className="app"
      onPointerMove={(e) => {
        if (e.pointerType === "mouse") {
          setCursor({ x: (e.clientX / innerWidth) * 100, y: (e.clientY / innerHeight) * 100 });
        }
      }}
    >
      <div className="grid" />
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="cursorGlow" style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }} />

      <main className="wrap">
        <section className="card">
          <div className="shine" />

          {/* Header & Logo */}
          <header className="header">
            <div className="live">
              <span /> DISTRIBUIDOR AUTORIZADO OFICIAL
            </div>

            <div className="logoRow">
              <div className="logoBox">
                <img src={logoIvsa} alt="Logo IVSA - Ingeniería Vehicular, S.A." className="logoImg" />
              </div>
              <div className="brandBadge">
                <div className="brandMicro">DISTRIBUIDOR OFICIAL</div>
                <div className="brandName">{data.brand}</div>
              </div>
            </div>

            {/* Identificación de Giancarlo Salazar justo debajo de IVSA */}
            <div className="ownerCard">
              <div className="ownerBadge">
                <Sparkles size={15} />
                <span>Conoce a nuestro personal</span>
              </div>
              <h1 className="ownerName">{data.name}</h1>
              <div className="ownerDetails">
                <span className="ownerRole">{data.role}</span>
                <span className="ownerDot">•</span>
                <span className="ownerCompany">{data.company}</span>
              </div>
            </div>
          </header>

          {/* Hero slogan */}
          <div className="hero">
            <div className="tag">
              <Sparkles size={15} /> SOLUCIONES PARA EL SECTOR VEHICULAR
            </div>
            <h2>
              Tu vehículo.<br />
              <span>Siempre en control.</span>
            </h2>
            <p>
              Conecta directamente con <b>{data.name}</b> en <b>{data.company}</b> y conoce nuestros canales de atención y soluciones tecnológicas para tu transporte.
            </p>
          </div>

          {/* Imagen de Vigia mostrada de forma destacada */}
          <div className="productBannerContainer">
            <div className="productBanner">
              <img src={vigiaImg} alt="Vigia y Viesa - Tu camión protegido" className="bannerImg" />
              <div className="bannerPill">
                <Sparkles size={14} /> EQUIPOS Y TECNOLOGÍA VIGIA
              </div>
            </div>
          </div>

          <div className="accentLine">
            <i /><i /><i />
          </div>

          {/* Canales de contacto */}
          <div className="contacts">
            {contacts.map(({ label, value, href, Icon, primary }) => (
              <a
                className={`contact ${primary ? "primary" : ""}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                key={label}
              >
                <span className="icon">
                  <Icon size={22} />
                </span>
                <span className="copy">
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <ArrowUpRight className="arrow" size={22} />
              </a>
            ))}
          </div>

          {/* Teléfono alterno */}
          <div className="phoneAlt">
            <Phone size={16} /> También puedes comunicarte al <b>{data.phone2}</b>
          </div>

          {/* Redes Sociales Prominentes y Visibles */}
          <div className="socialSection">
            <div className="socialHeading">
              <span className="socialLabel">SÍGUENOS EN REDES SOCIALES</span>
              <span className="socialSub">Ingeniería Vehicular, S.A.</span>
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/IVSAAA/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialBtn socialFb"
                title="Facebook IVSA"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/ingenieriavehicular/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialBtn socialIg"
                title="Instagram IVSA"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@ivsa2010?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="socialBtn socialTt"
                title="TikTok IVSA"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.49V8.71a8.21 8.21 0 0 0 4.83 1.55v-3.57h-.01z" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer>
            <span className="footerOwner">{data.name}</span>
            <span className="footerLoc">
              <MapPin size={15} /> GUATEMALA
            </span>
          </footer>
        </section>

        <div className="hint">
          <span /> Contáctanos directamente para asesorarte con los mejores equipos VIGIA.
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
