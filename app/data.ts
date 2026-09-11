export const site = {
  name: "Kimiya Jafarpor",
  role: "Machine Learning Researcher · M.Sc. Candidate",
  location: "Tehran",
  email: "kimiya.tommy@gmail.com",
  phone: "+98 921 977 5012",
  github: "https://github.com/kimiya1991",
  linkedin: "https://linkedin.com/in/kimia-jafarpor",
  instagram: "https://instagram.com/mia_electronic",
  url: "https://kimiya1991.github.io/portfolio",
  affiliation: "Amirkabir University of Technology",
  summary:
    "M.Sc. candidate in Digital Electronic Systems at Amirkabir University of Technology (degree in progress; expected March 2027). Graduate coursework is in artificial intelligence: big-data processing, data analysis, machine learning, numerical optimization, neural networks, and computer vision. Applied work covers document knowledge management, text-to-speech, and recommendation systems. Master's research is hierarchical network traffic classification, still in progress. Undergraduate training is a B.Sc. in Electrical Engineering (Electronics), with experience in schematic/PCB design and Arduino prototyping.",
};

export type CaseStudy = {
  number: string;
  title: string;
  type: string;
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
    title: "Document Knowledge Management",
    type: "Applied research · Knowledge management",
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
    number: "02",
    title: "Cook With What You Have",
    type: "Applied project · Recommendation systems",
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
    number: "03",
    title: "Network Traffic Classification",
    type: "M.Sc. thesis · Machine learning",
    problem:
      "Fine-grained labels for mixed encrypted and malicious network traffic are difficult to recover from packet text.",
    approach:
      "Ongoing master's research: a hierarchical DistilGPT-2 pipeline on the MERLOT corpus, with a coarse-type router, specialist LoRA experts, and a comparison against a flat classifier on a fixed held-out split.",
    outcome:
      "The thesis is still in progress. Coarse-type routing is strong; exact-label identification remains the open research problem.",
    tags: ["Python", "Machine learning", "Network security", "LoRA"],
  },
  {
    number: "04",
    title: "Applied Text-to-Speech",
    type: "Applied research · Speech processing",
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
    title: "Multi-format Document Extractor",
    type: "Knowledge management · Ingestion pipelines",
    problem:
      "Knowledge systems fail when source files arrive as mixed PDFs, Word documents, and spreadsheets.",
    approach:
      "Ingestion of heterogeneous office documents into a shared knowledge-extraction pipeline.",
    outcome:
      "A reusable extraction stage used by the document knowledge-management work.",
    tags: ["Document AI", "Python", "Pipelines"],
  },
  {
    number: "07",
    title: "Document Topic Grouping",
    type: "Document AI · Topic grouping",
    problem:
      "Related passages from different files are hard to review when they are not grouped.",
    approach:
      "Grouping related passages from heterogeneous documents under shared topic labels.",
    outcome:
      "Topic-level organisation of extracted knowledge for review.",
    tags: ["LLMs", "Topic grouping", "NLP"],
  },
  {
    number: "08",
    title: "Embedding Model Evaluation",
    type: "Embeddings · RAG evaluation",
    problem:
      "Embedding models for retrieval can look strong on one metric and weak on another.",
    approach:
      "Comparative evaluation of embedding models for RAG using cosine similarity, Recall@k, MRR, and nDCG.",
    outcome:
      "A fixed evaluation protocol that shows when retrieval quality and engineering metrics diverge.",
    tags: ["Embeddings", "RAG", "Evaluation"],
  },
  {
    number: "09",
    title: "Smartphone Price Comparison",
    type: "Web scraping · Price comparison",
    problem:
      "The same device is listed at different prices across online marketplaces.",
    approach:
      "Collection and aggregation of smartphone prices from multiple storefronts.",
    outcome:
      "A comparable price table across sources.",
    tags: ["Web scraping", "Python", "Data aggregation"],
  },
  {
    number: "10",
    title: "E-commerce Catalog Extraction",
    type: "Web scraping · Catalog extraction",
    problem:
      "Product catalogues on e-commerce sites are not available as a clean structured list.",
    approach:
      "Extraction of product categories and catalogues from e-commerce websites.",
    outcome:
      "Structured category and product records for downstream use.",
    tags: ["Web scraping", "E-commerce", "Python"],
  },
  {
    number: "11",
    title: "Arduino Nano Paper Cutter",
    type: "Embedded prototype · Electronics",
    problem:
      "A modified printer mechanism needed reliable control as a paper-cutting device.",
    approach:
      "An Arduino Nano prototype with control logic, electronics integration, and consistency tests.",
    outcome:
      "A working hardware prototype from mechanism, firmware, and testing.",
    tags: ["Arduino", "Prototyping", "C/C++"],
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
    title: "Research areas",
    items: [
      "Machine learning",
      "Neural networks",
      "Computer vision",
      "Numerical optimization",
      "Big data processing",
      "Data analysis",
      "NLP",
      "Knowledge management",
      "Speech & TTS",
      "Network traffic classification",
      "Embeddings",
      "RAG",
      "Model evaluation",
      "Data preparation",
    ],
  },
  {
    title: "Programming",
    items: [
      "Python",
      "C",
      "C++",
      "Git",
      "REST APIs",
      "HTML & CSS",
      "Web scraping",
      "MATLAB",
      "PyTorch",
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
