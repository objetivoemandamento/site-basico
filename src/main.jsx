import { business } from "./config";
import "./styles.css";

const wa = (message = "Olá! Gostaria de saber mais sobre os serviços.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export default function App() {
  return <main>
    <nav className="nav"><a className="brand" href="#inicio">{business.name}</a><a className="nav-link" href="#servicos">Serviços</a></nav>
    <section className="hero" id="inicio">
      <span className="eyebrow">ATENDIMENTO PRÓXIMO • QUALIDADE • CONFIANÇA</span>
      <h1>{business.tagline}</h1><p>{business.description}</p>
      <a className="button" href={wa()} target="_blank" rel="noreferrer">Fale pelo WhatsApp ↗</a>
      <div className="hero-note">Atendimento direto com nossa equipe</div>
    </section>
    <section className="section" id="servicos"><span className="eyebrow">O QUE FAZEMOS</span><h2>Nossos serviços</h2>
      <div className="cards">{business.services.map((s) => <article className="card" key={s.title}><span className="card-mark">✳</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div>
    </section>
    <section className="contact"><div><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Estamos prontos para atender você.</h2><p>{business.hours}</p><p>{business.address}</p></div><a className="button light" href={wa("Olá! Gostaria de falar com o estabelecimento.")} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a></section>
    <footer>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</footer>
  </main>;
}