import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, Mail, Globe, ArrowUpRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import "./styles.css";

const data = {
  name: "Giancarlo Salazar",
  company: "Ingeniería Vehicular, S.A.",
  brand: "VIGIA",
  role: "Distribuidor Autorizado, marca Vigia",
  phone1: "+502 5697 9520",
  phone2: "+502 5019 3561",
  website: "https://calibradorvigia.com/",
  email: "ivsa.inf@hotmail.com",
};

const contacts = [
  { label:"LLAMAR", value:data.phone1, href:`tel:${data.phone1.replaceAll(" ","")}`, Icon:Phone, primary:true },
  { label:"WHATSAPP", value:"Escríbenos ahora", href:"https://api.whatsapp.com/send/?phone=50256979520&text=Hola%2C+quisiera+solicitar+m%C3%A1s+informaci%C3%B3n+sobre+los+productos+VIGIA.&type=phone_number&app_absent=0", Icon:MessageCircle },
  { label:"SITIO WEB", value:"calibradorvigia.com", href:data.website, Icon:Globe },
  { label:"CORREO", value:data.email, href:`mailto:${data.email}`, Icon:Mail },
];

function App(){
  const [cursor, setCursor] = React.useState({x:50,y:50});
  return <div className="app" onPointerMove={e=>{
      if(e.pointerType==="mouse") setCursor({x:(e.clientX/innerWidth)*100,y:(e.clientY/innerHeight)*100});
    }}>
    <div className="grid" />
    <div className="glow g1"/><div className="glow g2"/>
    <div className="cursorGlow" style={{left:`${cursor.x}%`,top:`${cursor.y}%`}}/>
    <main className="wrap">
      <section className="card">
        <div className="shine"/>
        <header className="header">
          <div className="live"><span/> DISTRIBUIDOR AUTORIZADO</div>
          <div className="logo">
            <div className="logoBox"><span>V</span></div>
            <div><div className="micro">{data.company}</div><div className="brand">{data.brand}</div></div>
          </div>
        </header>

        <div className="hero">
          <div className="tag"><Sparkles size={13}/> SOLUCIONES PARA EL SECTOR VEHICULAR</div>
          <h1>Tu vehículo.<br/><span>Siempre en control.</span></h1>
          <p>Conecta directamente con <b>{data.company}</b> y conoce nuestros canales de atención.</p>
        </div>

        <div className="accentLine"><i/><i/><i/></div>

        <div className="contacts">
          {contacts.map(({label,value,href,Icon,primary})=>
            <a className={`contact ${primary?"primary":""}`} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" key={label}>
              <span className="icon"><Icon size={19}/></span>
              <span className="copy"><small>{label}</small><strong>{value}</strong></span>
              <ArrowUpRight className="arrow" size={18}/>
            </a>
          )}
        </div>

        <div className="phoneAlt"><Phone size={13}/> También puedes llamarnos al <b>{data.phone2}</b></div>

        <div className="bottom">
          <div className="socialLabel">CONECTA CON NOSOTROS</div>
          <div className="socials">
            <a href="https://www.facebook.com/IVSAAA/" title="Facebook IVSA">f</a>
            <a href="https://www.instagram.com/ingenieriavehicular/" title="Instagram IVSA">◎</a>
            <a href="https://www.tiktok.com/@ivsa2010?lang=es" title="TikTok IVSA">♪</a>
          </div>
        </div>

        <footer><span>{data.name}</span><span><MapPin size={12}/> GUATEMALA</span></footer>
      </section>
      <div className="hint"><span/> Contáctanos para saber más de nosotros.</div>
    </main>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
