const projects = [
  {
    number: "01",
    title: "Cook With What You Have",
    type: "Live ML product / Recommendation System",
    description:
      "An ingredient-first recipe recommender that turns pantry items into ranked, practical meal ideas. It scores real recipes by ingredient coverage, pantry utilization, and rating, then lets users refine results by food group, cuisine region, cooking time, and missing ingredients before viewing nutrition, quantities, and step-by-step instructions.",
    tags: ["Python", "React", "Recommendation Systems", "Data Engineering"],
    liveUrl: "https://kimiya1991.github.io/food-recom/",
    repoUrl: "https://github.com/kimiya1991/food-recom",
  },
  {
    number: "02",
    title: "Network Traffic Classification",
    type: "Master's research / Machine Learning",
    description:
      "Security-focused research exploring machine-learning and language-model-based methods for classifying network traffic. The work covers data preparation, experimental design, model comparison, and evaluation in Python.",
    tags: ["Python", "Machine Learning", "Network Security", "LLMs"],
  },
  {
    number: "03",
    title: "Applied Text-to-Speech",
    type: "Industry work / Speech AI",
    description:
      "Contributing to a production-oriented TTS workflow for mobile experiences—from preparing data and running experiments to evaluating synthesized speech and improving the pipeline for practical use.",
    tags: ["TTS", "Speech Processing", "Python", "Evaluation"],
  },
  {
    number: "04",
    title: "Speech & Sequence Intelligence",
    type: "University project / Deep Learning",
    description:
      "Designed neural-network experiments for spoken-digit recognition using attention and positional encoding, noise-robust evaluation, sentiment score prediction with LSTM/BiLSTM models, and traffic forecasting with GRU networks.",
    tags: ["Attention", "LSTM", "GRU", "Signal Processing"],
  },
  {
    number: "05",
    title: "NLP News Classification",
    type: "University project / Natural Language Processing",
    description:
      "Built text-classification pipelines for the AG News dataset, comparing recurrent architectures and learned embeddings with pretrained GloVe representations. Evaluated behavior using accuracy, loss curves, and confusion matrices.",
    tags: ["NLP", "RNN", "GloVe", "Text Classification"],
  },
  {
    number: "06",
    title: "Generative Vision Models",
    type: "University project / Computer Vision",
    description:
      "Implemented and compared generative image models on Fashion-MNIST, including WGAN-style DCGANs, conditional generation, and Pix2Pix-style reconstruction, with attention to training stability and output quality.",
    tags: ["GANs", "Computer Vision", "PyTorch", "Fashion-MNIST"],
  },
  {
    number: "07",
    title: "Smart Irrigation System",
    type: "Bachelor's project / Embedded Systems",
    description:
      "Created a working irrigation prototype that reads soil moisture and temperature, then activates a water pump when conditions require it. Integrated sensors, control logic, electronics, and real-world testing.",
    tags: ["Arduino", "Sensors", "C/C++", "Prototyping"],
  },
];

const skills = [
  ["AI & data", "Machine Learning, Neural Networks, LLM workflows, NLP, Computer Vision, Speech & TTS, Data Preparation, Model Evaluation"],
  ["Development", "Python, C, C++, REST APIs, Arduino Programming, HTML & CSS, Git"],
  ["Electronics", "Altium Designer, PCB & Schematic Design, Soldering, Sensor Integration, Hardware Prototyping, Proteus, MATLAB"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Kimiya Jafarpor, home">KJ<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a>
        </div>
        <a className="navCta" href="mailto:kimiya.tommy@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> AI &amp; MACHINE LEARNING DEVELOPER</p>
          <h1>I turn data into<br/><em>intelligent systems.</em></h1>
          <p className="intro">I&apos;m Kimiya, an AI developer with an electrical-engineering foundation—building practical systems across speech, language, vision, and embedded hardware.</p>
          <div className="heroActions">
            <a className="primary" href="#work">Explore my work <span>↓</span></a>
            <a className="textLink" href="https://github.com/kimiya1991" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="portraitWrap">
          <div className="portraitFrame"><img src="./kimiya.jpg" alt="Kimiya Jafarpor" /></div>
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <div className="status"><i /> Based in Tehran<br/><span>Building with AI</span></div>
          <div className="codeChip">01 / PYTHON<br/>02 / INTELLIGENCE<br/>03 / HARDWARE</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>PYTHON <b>✦</b> MACHINE LEARNING <b>✦</b> LLMS <b>✦</b> SPEECH AI <b>✦</b> COMPUTER VISION <b>✦</b> EMBEDDED SYSTEMS <b>✦</b></div></div>

      <section className="work shell section" id="work">
        <div className="sectionHead"><div><p className="eyebrow"><span /> SELECTED WORK</p><h2>Projects that connect<br/><em>research with reality.</em></h2></div><p>A selection of industry, research, and university work across intelligent software and physical systems.</p></div>
        <div className="projectGrid">
          {projects.map((project) => <article className={`project ${project.number === "01" ? "featured" : ""}`} key={project.number}>
            <div className="projectTop"><span>{project.number}</span><small>{project.type}</small></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {"liveUrl" in project && project.liveUrl && <div className="projectActions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">Live dashboard <span>↗</span></a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">Source code <span>↗</span></a>
            </div>}
          </article>)}
        </div>
      </section>

      <section className="about section" id="about"><div className="shell aboutGrid">
        <div><p className="eyebrow light"><span /> ABOUT ME</p><h2>Engineering roots.<br/><em>AI direction.</em></h2></div>
        <div className="aboutCopy"><p className="lead">I&apos;m an AI developer who enjoys understanding how systems work—from the circuit board all the way to the model.</p><p>After earning my bachelor&apos;s degree in Electrical Engineering, I moved deeper into artificial intelligence through graduate study and hands-on industry work. For the past two years, I&apos;ve built experience across machine learning, language models, speech, computer vision, and data analysis.</p><p>Today, I work at Daria Hamrah on applied AI projects while pursuing an M.Sc. in Digital Electronic Systems at Amirkabir University of Technology. I&apos;m especially interested in work where research becomes something useful, reliable, and real.</p>
          <div className="facts"><div><b>2+</b><span>Years in AI</span></div><div><b>2</b><span>Engineering degrees*</span></div><div><b>B2</b><span>Cambridge English</span></div></div><small className="note">*M.Sc. currently in progress</small>
        </div>
      </div></section>

      <section className="section shell" id="experience">
        <div className="sectionHead compact"><div><p className="eyebrow"><span /> EXPERIENCE</p><h2>Where I&apos;ve<br/><em>made things work.</em></h2></div></div>
        <div className="timeline">
          <article><time>2025 — PRESENT</time><div><h3>AI Developer</h3><p className="company">Daria Hamrah Paytakht · Tehran</p><p>Supporting real-world AI initiatives with a focus on Text-to-Speech: preparing data, running experiments, evaluating results, and improving practical Python-based workflows.</p></div><span className="num">01</span></article>
          <article><time>2022 — 2024</time><div><h3>Electronics Technician</h3><p className="company">PoyeshGaran Sanat Paya · Kermanshah</p><p>Progressed from intern to hands-on project responsibility, designing schematics and PCBs, programming Arduino systems, soldering prototypes, testing hardware, and documenting results.</p></div><span className="num">02</span></article>
        </div>
        <div className="education"><p className="eyebrow"><span /> EDUCATION</p><div><b>M.Sc. Electrical Engineering — Digital Electronics</b><span>Amirkabir University of Technology · 2024–Present</span></div><div><b>B.Sc. Electrical Engineering — Electronics</b><span>Razi University · 2019–2023</span></div></div>
      </section>

      <section className="skills section"><div className="shell"><p className="eyebrow"><span /> TOOLKIT</p><div className="skillRows">{skills.map(([title, body], i) => <div key={title}><b>0{i+1}</b><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>

      <footer><div className="shell footerGrid"><div><p className="eyebrow light"><span /> GET IN TOUCH</p><h2>Have an interesting<br/>problem? <em>Let&apos;s talk.</em></h2><a className="email" href="mailto:kimiya.tommy@gmail.com">kimiya.tommy@gmail.com <span>↗</span></a></div><div className="socials"><a href="https://github.com/kimiya1991" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://instagram.com/mia_electronic" target="_blank" rel="noreferrer">Instagram ↗</a><span>LinkedIn · coming soon</span></div></div><div className="shell copyright"><span>© 2026 Kimiya Jafarpor</span><span>Designed with curiosity · Built with purpose</span></div></footer>
    </main>
  );
}
