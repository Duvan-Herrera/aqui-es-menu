import {
  ArrowUp,
  ChevronDown,
  Coffee,
  MessageCircle,
  Phone,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

type MenuItem = { name: string; price?: string; note?: string };

const whatsappUrl = "https://wa.me/50661549266";

const bocas: MenuItem[] = [
  { name: "Chicharrón", price: "₡3.500" },
  { name: "Chifrijo", price: "₡3.500" },
  { name: "Chifrijo grande", price: "₡4.500" },
  { name: "Chifrijo con pollo", price: "₡3.500" },
  { name: "Costilla", price: "₡3.500" },
  { name: "Lengua", price: "₡4.000" },
  { name: "Giba", price: "₡4.000" },
  { name: "Carne mexicana", price: "₡3.500" },
  { name: "Carne en salsa", price: "₡3.500" },
  { name: "Hígado", price: "₡3.000" },
  { name: "Raviol con papas", price: "₡2.500" },
  { name: "Hamburguesa con papas", price: "₡3.800" },
  { name: "Papas fritas", price: "₡2.500" },
  { name: "Chalupa con papas", price: "₡3.500" },
  { name: "Burrito con papas", price: "₡3.800" },
  { name: "Nachos", price: "₡3.500" },
  { name: "Patacones con carne", price: "₡3.500" },
  { name: "Patacones con pollo", price: "₡3.500" },
  { name: "Alitas", price: "₡3.500" },
  { name: "Fajitas pollo", price: "₡3.000" },
  { name: "Prensada de la casa", price: "₡3.500" },
  { name: "Orden de yuca", price: "₡2.500" },
  { name: "Cazuela", price: "₡3.500" },
  { name: "Taco de alambre", price: "₡3.500" },
  { name: "Filet de pescado", price: "₡3.500" },
  { name: "Camarón empanizado", price: "₡3.500" },
  { name: "Morcilla", price: "₡3.000" },
  { name: "Deditos de queso", price: "₡2.500" },
  { name: "Papanachos", price: "₡3.800" },
];

const arrozDelDia: MenuItem[] = [
  { name: "Arroz con pollo", price: "₡3.000" },
  { name: "Arroz con cerdo", price: "₡3.000" },
  { name: "Arroz cantones", price: "₡3.500" },
  { name: "Arroz con camarones", price: "₡3.500" },
];

const sopas: MenuItem[] = [
  { name: "Sopa de mariscos en leche", price: "₡4.000 / ₡6.000", note: "Pequeña / grande" },
  { name: "Sopa de mariscos en agua", price: "₡3.500 / ₡5.500", note: "Pequeña / grande" },
  { name: "Vuelve a la vida", price: "₡5.000" },
  { name: "Consomé", price: "₡3.500" },
  { name: "Consomé con pollo y verduras", price: "₡4.500" },
  { name: "Sopa negra", price: "₡3.000" },
  { name: "Costilla con elote", price: "₡3.500" },
];

const arroces: MenuItem[] = [
  { name: "Pollo", price: "₡4.000 / ₡4.500", note: "Medio / entero" },
  { name: "Camarones", price: "₡4.500 / ₡5.000", note: "Medio / entero" },
  { name: "Camarones con arroz", price: "₡5.000 / ₡5.500", note: "Medio / entero" },
  { name: "Cerdo", price: "₡4.000 / ₡4.500", note: "Medio / entero" },
  { name: "Cantones", price: "₡4.500 / ₡5.000", note: "Medio / entero" },
  { name: "Mar y tierra", price: "₡5.000 / ₡5.500", note: "Medio / entero" },
  { name: "Marinera", price: "₡4.500 / ₡5.000", note: "Medio / entero" },
  { name: "Mixto: camarones y pollo", price: "₡4.500 / ₡5.000", note: "Medio / entero" },
  { name: "De la casa", price: "₡7.000", note: "Entero" },
  { name: "Con pulpo", price: "₡5.000", note: "Entero" },
];

const pastas: MenuItem[] = [
  { name: "Salsa blanca con pollo", price: "₡5.000" },
  { name: "Salsa roja con pollo", price: "₡5.000" },
  { name: "Salsa blanca con camarón", price: "₡5.500" },
  { name: "Salsa roja con camarón", price: "₡5.500" },
  { name: "Salsa blanca con mariscos", price: "₡6.000" },
  { name: "Salsa roja con mariscos", price: "₡6.000" },
];

const casados: MenuItem[] = [
  { name: "Casado con fresco natural", price: "₡3.500" },
  { name: "Fajitas empanizadas" },
  { name: "Fajitas a la plancha" },
  { name: "Bistec" },
  { name: "Chuleta" },
  { name: "Pescado" },
  { name: "Hígado" },
  { name: "Carne en salsa" },
  { name: "Costilla" },
  { name: "Chicharrón" },
  { name: "Lengua", price: "₡4.500" },
  { name: "Giba", price: "₡4.500" },
];

const mariscos: MenuItem[] = [
  { name: "Pescado entero (pargo)", price: "Desde ₡8.000", note: "El precio va ₡8.000 en adelante" },
  { name: "Lenguado", price: "Desde ₡5.000", note: "El precio va ₡5.000 en adelante" },
  { name: "Filet pescado empanizado", price: "₡4.000" },
  { name: "Plato de pescado al ajillo", price: "₡5.000" },
  { name: "Mariscada al ajillo", price: "₡5.500" },
];

const pollo: MenuItem[] = [
  { name: "Fajitas empanizadas", price: "₡4.000" },
  { name: "Fajitas a la plancha", price: "₡4.500" },
  { name: "Pollo en salsa blanca", price: "₡5.000" },
  { name: "Pollo salteado con vegetales", price: "₡5.000" },
  { name: "Pollo suizo", price: "₡4.500" },
];

const camarones: MenuItem[] = [
  { name: "Empanizados", price: "₡4.500" },
  { name: "Al ajillo", price: "₡5.000" },
  { name: "A la diabla", price: "₡5.000" },
  { name: "Canasta de camarón", price: "₡5.000" },
  { name: "Salteado con vegetales", price: "₡5.000" },
];

const carnes: MenuItem[] = [
  { name: "Plato de lengua", price: "₡5.000" },
  { name: "Plato de giba", price: "₡5.000" },
  { name: "Plato taco de alambre", price: "₡4.500" },
  { name: "Lomo suizo", price: "₡6.000" },
  { name: "Lomo encebollado", price: "₡6.000" },
];

const surtida: MenuItem[] = [
  { name: "Personal", price: "₡4.000" },
  { name: "Mediana", price: "₡8.000" },
  { name: "Familiar", price: "₡12.000" },
  { name: "Burbuja", price: "₡19.000" },
];

const tacos: MenuItem[] = [
  { name: "Maíz o harina", price: "₡3.500" },
  { name: "Camarón", price: "₡4.000" },
  { name: "Chicharrón", price: "₡4.000" },
];

const chicharron: MenuItem[] = [
  { name: "Pequeño", price: "₡5.000" },
  { name: "Mediano", price: "₡7.500" },
  { name: "Grande", price: "₡10.000" },
];

const ceviche: MenuItem[] = [
  { name: "Pescado", price: "₡3.000 / ₡4.000", note: "Boca / fuente" },
  { name: "Costeño", price: "₡3.500 / ₡4.500", note: "Boca / fuente" },
  { name: "Camarón", price: "₡3.500 / ₡4.500", note: "Boca / fuente" },
  { name: "Vuelve a la vida", price: "₡4.000 / ₡5.000", note: "Boca / fuente" },
  { name: "Coctel de camarón", price: "₡5.000" },
  { name: "Coctel camarón con aguacate", price: "₡5.000" },
];

const categoryNav = [
  ["bocas", "Bocas"], ["especiales", "Especiales"], ["sopas", "Sopas"], ["arroces", "Arroces"],
  ["pastas", "Pastas"], ["casados", "Casados"], ["mariscos", "Mariscos"], ["pollo", "Pollo"],
  ["camarones", "Camarones"], ["carnes", "Carnes"], ["surtida", "Surtida"], ["tacos", "Tacos"],
  ["chicharron", "Chicharrón"], ["ceviche", "Ceviche"],
] as const;

function MenuRows({ items }: { items: MenuItem[] }) {
  return <div className="menu-rows">{items.map((item) => <div className="menu-entry" key={`${item.name}-${item.price}`}>
    <div><p className="item-name">{item.name}</p>{item.note && <p className="item-note">{item.note}</p>}</div>
    {item.price && <p className="item-price">{item.price}</p>}
  </div>)}</div>;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <header className="section-heading"><span>{eyebrow}</span><h2>{title}</h2><div className="heading-rule" aria-hidden="true"><i /><Coffee size={18} /><i /></div></header>;
}

function MenuSection({ id, eyebrow, title, children, variant = "lime" }: { id: string; eyebrow: string; title: string; children: React.ReactNode; variant?: "lime" | "paper" }) {
  return <section className={`menu-section ${variant}`} id={id}><div className="section-wrap"><SectionHeading eyebrow={eyebrow} title={title} />{children}</div></section>;
}

export default function Home() {
  const scrollToMenu = () => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  return <main className="site-shell" id="top">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Ir al inicio"><UtensilsCrossed size={18} /><span>Bar y Restaurante <b>Aquí Es</b></span></a>
      <a className="header-call" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> <span>6154-9266</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-content">
        <p className="kicker"><Sparkles size={17} /> Menú digital</p>
        <h1 id="hero-title">Bar y<br /><em>Restaurante</em><br /><strong>Aquí Es</strong></h1>
        <div className="hero-rule"><span /><Coffee size={21} /><span /></div>
        <p className="hero-copy">Comida casera, sabor tico y un menú para disfrutar.</p>
        <button type="button" className="menu-cta" onClick={scrollToMenu}>Ver el menú <ChevronDown size={17} /></button>
      </div>
      <figure className="hero-card"><img src="/assets/aqui-es-cover.png" alt="Portada original del menú de Bar y Restaurante Aquí Es" /></figure>
    </section>

    <nav className="category-nav" aria-label="Categorías del menú" id="menu"><div className="nav-label"><UtensilsCrossed size={16} /> Menú</div><div className="nav-scroller">{categoryNav.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></nav>
    <section className="menu-intro"><Sparkles size={18} /><p>Precios en <strong>colones costarricenses</strong>. También contamos con empaque para llevar por <strong>₡200</strong>.</p></section>

    <MenuSection id="bocas" eyebrow="Para comenzar" title="Bocas"><MenuRows items={bocas} /></MenuSection>
    <MenuSection id="especiales" eyebrow="Sabor de la semana" title="Especiales" variant="paper"><div className="special-banner"><span>Lunes especial</span><b>Olla carne <strong>₡4.000</strong></b></div><MenuRows items={arrozDelDia} /></MenuSection>
    <MenuSection id="sopas" eyebrow="Calientitas y caseras" title="Sopas"><MenuRows items={sopas} /></MenuSection>
    <MenuSection id="arroces" eyebrow="Medio o entero" title="Arroces" variant="paper"><div className="table-hint"><span>Todos los precios muestran</span><b>medio / entero</b></div><MenuRows items={arroces} /></MenuSection>
    <MenuSection id="pastas" eyebrow="Salsas para elegir" title="Pastas"><MenuRows items={pastas} /></MenuSection>
    <MenuSection id="casados" eyebrow="Almuerzo tradicional" title="Casados" variant="paper"><MenuRows items={casados} /></MenuSection>
    <MenuSection id="mariscos" eyebrow="Del mar a la mesa" title="Mariscos"><MenuRows items={mariscos} /></MenuSection>

    <div className="split-sections">
      <MenuSection id="pollo" eyebrow="Especialidades" title="Pollo" variant="paper"><MenuRows items={pollo} /></MenuSection>
      <MenuSection id="camarones" eyebrow="Favoritos del mar" title="Camarones"><MenuRows items={camarones} /></MenuSection>
      <MenuSection id="carnes" eyebrow="Platos fuertes" title="Carnes" variant="paper"><MenuRows items={carnes} /></MenuSection>
    </div>

    <MenuSection id="surtida" eyebrow="Para compartir" title="Surtida"><MenuRows items={surtida} /></MenuSection>
    <MenuSection id="tacos" eyebrow="Maíz o harina" title="Tacos" variant="paper"><MenuRows items={tacos} /></MenuSection>
    <MenuSection id="chicharron" eyebrow="Crujiente y sabroso" title="Chicharrón"><MenuRows items={chicharron} /></MenuSection>
    <MenuSection id="ceviche" eyebrow="Fresco al momento" title="Ceviche" variant="paper"><MenuRows items={ceviche} /></MenuSection>

    <section className="contact-band"><div className="contact-inner"><p className="kicker"><Coffee size={17} /> Muchas gracias por su visita</p><h2>Bar y Restaurante Aquí Es</h2><p>También podés seguirnos en nuestras redes sociales.</p><div className="contact-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> 6154-9266</a><a href="tel:+50661549266"><Phone size={18} /> Llamar</a></div></div></section>
    <footer className="site-footer"><div className="footer-brand"><UtensilsCrossed size={20} /><span>Bar y Restaurante <b>Aquí Es</b></span></div><p>Menú digital · Todos los precios están expresados en colones costarricenses.</p><a href="#top" className="back-top">Volver arriba <ArrowUp size={15} /></a></footer>
  </main>;
}
