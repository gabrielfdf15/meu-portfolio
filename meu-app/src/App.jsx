import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.titulo}>Bem-vindo ao meu portfólio</h1>
      <p style={styles.texto}>
      Meu nome é Gabriel Fernandes e neste portfólio você encontrará informações sobre mim, meus projetos e minhas habilidades
      </p>
      <Link to="/sobre" style={styles.botao}>
        Saiba mais sobre mim →
      </Link>
    </div>
  );
}


function Sobre() {
  return (
    <div style={styles.page}>
      <h1 style={styles.titulo}>Sobre mim</h1>
      <p style={styles.texto}>
      Tenho 18 anos e sou estudante do IFRJ Campus Niterói, onde curso o Técnico em Infórmatica Integrado ao Ensino Médio
      e atualmente estou no 5º período.
      </p>
      <p style={styles.texto}>
      Ao longo do curso desenvolvi conhecimentos em programação, desenvolvimento web, desenvolvimento de jogos e banco de dados.
      Tenho experiência utilizando React, HTML, CSS e JavaScript e Unity, além de conhecimentos em lógica de programação
      </p>
      <Link to="/projetos" style={styles.botao}>
        Ver meus projetos →
      </Link>
    </div>
  );
}


function Projetos() {
  const lista = [
    {
      id: 1,
      nome: "Audio Player",
      desc: "App de player de áudio",
      github: "https://github.com/gabrielfdf15",
    },
    {
      id: 2,
      nome: "Garbage Collector",
      desc: "Jogo 3D arcade de coleta desenvolvido em Unity.",
      github: "https://github.com/gabrielfdf15/jogo3D-collectCandy",
    },
    {
      id: 3,
      nome: "IFighters (em andamento)",
      desc: "Jogo 2D (pixelart) de luta",
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.titulo}>Meus Projetos</h1>

      <div style={styles.grid}>
       {lista.map((p) => (
  <div key={p.id} style={styles.card}>
    <h2 style={styles.cardTitulo}>{p.nome}</h2>
    <p style={styles.cardTexto}>{p.desc}</p>
    {p.github && ( 
      <a href={p.github} target="_blank" style={styles.linkGithub}>
        🔗 Ver no GitHub
      </a>
    )}
  </div>
))}
      </div>

      <Link to="/" style={styles.botao}>
        ← Voltar para o início
      </Link>
    </div>
  );
}


export default function App() {


  const estiloLink = ({ isActive }) => ({
    padding: "0.5rem 1.2rem",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "1rem",
    textDecoration: "none",
    color:           isActive ? "#fff"     : "#334155",
    backgroundColor: isActive ? "#0891b2" : "#e2e8f0",
  });
  return (
    
    <BrowserRouter>

      <nav style={styles.nav}>
        <span style={styles.logo}>Gabriel Fernandes</span>
        <div style={{ display: "flex", gap: "0.6rem" }}>
          <NavLink to="/"        end    style={estiloLink}>Home</NavLink>
          <NavLink to="/sobre"         style={estiloLink}>Sobre</NavLink>
          <NavLink to="/projetos"      style={estiloLink}>Projetos</NavLink>
        </div>
      </nav>

      
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/sobre"    element={<Sobre />}    />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>

    </BrowserRouter>
  );
}


const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#171f22",
    borderBottom: "1px solid #e2e8f0",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#0891b2",
  },
  page: {
    maxWidth: "700px",
    margin: "4rem auto",
    padding: "0 1.5rem",
  },
  titulo: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0891b2",
    marginBottom: "1rem",
  },
  texto: {
    fontSize: "1rem",
    color: "#475569",
    lineHeight: "1.7",
    marginBottom: "1rem",
  },
  botao: {
    display: "inline-block",
    marginTop: "1.5rem",
    padding: "0.6rem 1.4rem",
    backgroundColor: "#0891b2",
    color: "#fff",
    borderRadius: "6px",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "1rem",
  },
  card: {
    padding: "1.2rem",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
  },
  cardTitulo: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: "0.4rem",
  },
  cardTexto: {
    fontSize: "0.9rem",
    color: "#64748b",
    marginBottom: "0.8rem",
  },
  linkGithub: {
    display: "inline-block",
    fontSize: "0.85rem",
    fontWeight: "bold",
    color: "#0891b2",
    textDecoration: "none",
    border: "1px solid #0891b2",
    borderRadius: "5px",
    padding: "0.3rem 0.75rem",
  },
};