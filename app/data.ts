export const site = {
  name: "Kimiya Jafarpor",
  role: "M.Sc. Candidate · Applied AI & Electronics",
  location: "Tehran",
  email: "kimiya.tommy@gmail.com",
  phone: "+98 921 977 5012",
  github: "https://github.com/kimiya1991",
  linkedin: "https://linkedin.com/in/kimia-jafarpor",
  instagram: "https://instagram.com/mia_electronic",
  url: "https://kimiya1991.github.io/portfolio",
  affiliation: "Amirkabir University of Technology",
  summary:
    "M.Sc. candidate in Digital Electronic Systems at Amirkabir University of Technology (degree in progress; expected March 2027). Work spans applied AI — document knowledge management, text-to-speech, and a deployed recipe recommender — and electronics: schematic/PCB design, Arduino prototyping, and a B.Sc. irrigation system. Graduate coursework is in artificial intelligence. Master's thesis on hierarchical network traffic classification is still in progress. Undergraduate degree: B.Sc. Electrical Engineering (Electronics), Razi University, 2019–2023.",
};

export type CaseStudy = {
  number: string;
  title: string;
  type: string;
  dates?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  blurb?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  badge?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "Network Traffic Classification",
    type: "M.Sc. thesis · Machine learning",
    dates: "06/2025 — Present",
    featured: true,
    badge: "M.Sc. thesis",
    problem:
      "Investigating whether decomposing a flat classification problem into coarse routing and specialised local experts can improve exact-label classification of encrypted and malicious traffic on MERLOT packet text.",
    approach:
      "A hierarchical architecture using a DistilGPT-2 (~82M) router and nine LoRA experts sharing a frozen backbone, compared with a single flat classifier on one fixed stratified split (45,000 train / 4,500 test), with leakage checks and an oracle-expert condition to isolate router versus expert errors.",
    outcome:
      "The thesis is still in progress. Coarse routing reached 97.6% accuracy (macro-F1 0.975). Exact-label performance remains under investigation.",
    tags: ["Python", "Machine learning", "Network security", "LoRA"],
  },
  {
    number: "02",
    title: "Document Knowledge Management",
    type: "Applied project · Knowledge management",
    dates: "11/2025 — Present",
    featured: true,
    badge: "Primary applied project",
    problem:
      "Institutional documents—reports, guidelines, and technical files—are difficult to retrieve, summarize, or reuse as structured knowledge.",
    approach:
      "A document-to-knowledge pipeline that ingests heterogeneous files and produces summaries, keywords, categories, and question–answer pairs.",
    outcome:
      "A knowledge-management system for converting unstructured documents into reviewable, structured representations.",
    tags: ["Knowledge management", "LLMs", "Document AI", "NLP"],
  },
  {
    number: "03",
    title: "Cook With What You Have",
    type: "Applied project · Recommendation systems",
    dates: "2026",
    featured: true,
    badge: "Deployed system",
    problem:
      "Recipe retrieval is typically query-led, which is poorly matched to cooking from a constrained set of available ingredients.",
    approach:
      "An ingredient-first ranking model that scores recipes by coverage, pantry utilization, and rating, with filters for food group, cuisine, cooking time, and missing items.",
    outcome:
      "A deployed system that maps a pantry list to ranked recipes, including nutrition, quantities, and preparation steps.",
    tags: ["Python", "React", "Recommendation systems", "Data engineering"],
    liveUrl: "https://kimiya1991.github.io/food-recom/",
    repoUrl: "https://github.com/kimiya1991/food-recom",
  },
  {
    number: "04",
    title: "Applied Text-to-Speech",
    type: "Applied project · Speech processing",
    dates: "11/2025 — Present",
    problem:
      "Deployed speech systems require synthesis that is both natural and stable under production constraints.",
    approach:
      "Data preparation, experimental evaluation of synthesised speech, and refinement of Python tooling for a text-to-speech pipeline.",
    outcome:
      "Ongoing applied work on text-to-speech for use in real mobile systems.",
    tags: ["TTS", "Speech processing", "Python", "Evaluation"],
  },
  {
    number: "05",
    title: "Smart Irrigation System",
    type: "B.Sc. project · Embedded systems",
    dates: "08/2022 — 03/2023",
    problem:
      "Irrigation schedules that ignore soil conditions waste water and still fail when moisture is already sufficient.",
    approach:
      "An Arduino prototype that samples soil moisture and temperature and actuates a pump when measured values cross defined thresholds.",
    outcome:
      "An end-to-end hardware system comprising sensors, control logic, electronics, and experimental testing.",
    tags: ["Arduino", "Sensors", "C/C++", "Prototyping"],
  },
  {
    number: "06",
    title: "Arduino Nano Paper Cutter",
    type: "Embedded prototype · Electronics",
    dates: "06/2024 — 08/2024",
    problem:
      "A modified printer mechanism needed reliable control as a paper-cutting device.",
    approach:
      "An Arduino Nano prototype with control logic, electronics integration, and consistency tests.",
    outcome:
      "A working hardware prototype from mechanism, firmware, and testing.",
    tags: ["Arduino", "Prototyping", "C/C++"],
  },
  {
    number: "07",
    title: "Multi-format Document Extractor",
    type: "Knowledge management · Ingestion pipelines",
    dates: "11/2025 — Present",
    problem:
      "Knowledge systems fail when source files arrive as mixed PDFs, Word documents, and spreadsheets.",
    approach:
      "Ingestion of heterogeneous office documents into a shared knowledge-extraction pipeline.",
    outcome:
      "A reusable extraction stage used by the document knowledge-management work.",
    tags: ["Document AI", "Python", "Pipelines"],
  },
  {
    number: "08",
    title: "Document Topic Grouping",
    type: "Document AI · Topic grouping",
    dates: "11/2025 — Present",
    problem:
      "Related passages from different files are hard to review when they are not grouped.",
    approach:
      "Grouping related passages from heterogeneous documents under shared topic labels.",
    outcome:
      "Topic-level organisation of extracted knowledge for review.",
    tags: ["LLMs", "Topic grouping", "NLP"],
  },
  {
    number: "09",
    title: "Embedding Model Evaluation",
    type: "Embeddings · RAG evaluation",
    dates: "2026",
    problem:
      "Embedding models for retrieval can look strong on one metric and weak on another.",
    approach:
      "Comparative evaluation of embedding models for RAG using cosine similarity, Recall@k, MRR, and nDCG.",
    outcome:
      "A fixed evaluation protocol that shows when retrieval quality and engineering metrics diverge.",
    tags: ["Embeddings", "RAG", "Evaluation"],
  },
  {
    number: "10",
    title: "Smartphone Price Comparison",
    type: "Web scraping · Price comparison",
    dates: "2026",
    problem:
      "The same device is listed at different prices across online marketplaces.",
    approach:
      "Collection and aggregation of smartphone prices from multiple storefronts.",
    outcome:
      "A comparable price table across sources.",
    tags: ["Web scraping", "Python", "Data aggregation"],
  },
  {
    number: "11",
    title: "E-commerce Catalog Extraction",
    type: "Web scraping · Catalog extraction",
    dates: "2026",
    problem:
      "Product catalogues on e-commerce sites are not available as a clean structured list.",
    approach:
      "Extraction of product categories and catalogues from e-commerce websites.",
    outcome:
      "Structured category and product records for downstream use.",
    tags: ["Web scraping", "E-commerce", "Python"],
  },
];

export const otherWork = [
  {
    title: "Speech & Sequence Intelligence",
    type: "Coursework · Deep learning",
    summary:
      "Spoken-digit recognition with attention, sentiment analysis with LSTM/BiLSTM models, and traffic forecasting with GRUs.",
    tags: ["Attention", "LSTM", "GRU"],
  },
  {
    title: "NLP News Classification",
    type: "Coursework · Natural language processing",
    summary:
      "Text classification on AG News, comparing recurrent models and learned embeddings with pretrained GloVe representations.",
    tags: ["NLP", "RNN", "GloVe"],
  },
  {
    title: "Generative Vision Models",
    type: "Coursework · Computer vision",
    summary:
      "Comparative study of WGAN-style DCGANs, conditional generation, and Pix2Pix-style reconstruction on Fashion-MNIST, with emphasis on training stability.",
    tags: ["GANs", "PyTorch", "Fashion-MNIST"],
  },
];

export const experience = [
  {
    dates: "11/2025 — Present",
    title: "AI Developer",
    location: "Tehran",
    description:
      "Applied AI work on document knowledge management and text-to-speech.",
    bullets: [
      "Document knowledge-management pipeline: ingest PDFs and Word files and produce summaries, keywords, categories, and question–answer pairs.",
      "Text-to-speech workflow: data preparation, experimental evaluation of synthesised speech, and Python tooling for a production-oriented pipeline.",
    ],
  },
  {
    dates: "08/2022 — 10/2024",
    title: "Electronics Technician",
    company: "PoyeshGaran Sanat Paya",
    location: "Kermanshah",
    description:
      "Progressed from intern to project responsibility in hardware prototyping.",
    bullets: [
      "Altium schematic and PCB design, Arduino firmware, prototyping, hardware testing, and documentation.",
      "Full-time in summers; part-time during semesters.",
    ],
  },
];

export const education = [
  {
    title: "M.Sc. Electrical Engineering — Digital Electronics",
    school: "Amirkabir University of Technology",
    dates: "09/2024 — March 2027 (expected)",
    location: "Tehran",
    note: "Degree not yet awarded. Programme title is Digital Electronic Systems. AI coursework: Big Data Processing; Data Analysis; Machine Learning; Numerical Optimization; Neural Networks; Computer Vision. Thesis in progress: hierarchical network traffic classification.",
  },
  {
    title: "B.Sc. Electrical Engineering — Electronics",
    school: "Razi University",
    dates: "09/2019 — 09/2023",
    location: "Kermanshah",
    note: "Electronics, schematic/PCB design, and microcontroller programming. B.Sc. project: soil-moisture irrigation prototype.",
  },
];

export const graduateCourses = [
  { title: "Big Data Processing" },
  { title: "Data Analysis" },
  { title: "Machine Learning" },
  { title: "Numerical Optimization" },
  { title: "Neural Networks" },
  { title: "Computer Vision" },
];

export const skills = [
  {
    title: "Machine learning",
    items: [
      "Machine learning",
      "Neural networks",
      "Computer vision",
      "NLP",
      "Knowledge management",
      "Speech & TTS",
      "Embeddings",
      "RAG",
      "Numerical optimization",
      "Data analysis",
      "Big data processing",
      "Model evaluation",
      "Network traffic classification",
    ],
  },
  {
    title: "Software",
    items: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "SciPy",
      "Jupyter",
      "C",
      "C++",
      "Git",
      "REST APIs",
      "HTML & CSS",
      "Web scraping",
      "MATLAB",
    ],
  },
  {
    title: "Electronics",
    items: [
      "Altium Designer",
      "Arduino",
      "PCB & schematic design",
      "Soldering",
      "Proteus",
      "CodeVision",
      "Multisim",
      "Atmel Studio",
      "VHDL",
      "ADS",
    ],
  },
];

export const languages = [
  "English — Cambridge English First (FCE), CEFR B2 (2019); studied 2012–2019",
  "Persian — native",
];

export const certificates = [
  "AI Developer Certificate (industry bootcamp)",
  "Cambridge English: First (FCE) — CEFR B2",
  "Arduino programming",
];
