export const site = {
  name: "Kimiya Jafarpor",
  role: "Machine Learning Researcher · M.Sc. Candidate",
  location: "Tehran",
  email: "kimiya.tommy@gmail.com",
  github: "https://github.com/kimiya1991",
  instagram: "https://instagram.com/mia_electronic",
  url: "https://kimiya1991.github.io/portfolio",
  affiliation: "Amirkabir University of Technology",
  summary:
    "M.Sc. candidate at Amirkabir University of Technology; the degree has not yet been awarded and is expected in March 2027. The official programme is Digital Electronic Systems. Master's research is hierarchical classification of encrypted and malicious network traffic. Graduate coursework is in artificial intelligence: big-data processing, data analysis, machine learning, numerical optimization, neural networks, and computer vision. Undergraduate training is in electrical engineering (electronics).",
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
    title: "Hierarchical Network Traffic Classification",
    type: "M.Sc. thesis · Amirkabir University of Technology",
    featured: true,
    badge: "Master's thesis",
    problem:
      "Fine-grained labels for mixed network traffic are difficult to recover from packet text: payloads are often encrypted, classes span hundreds of services and threats, and a single flat classifier over all labels is a weak experimental baseline.",
    approach:
      "A hierarchical DistilGPT-2 pipeline on the MERLOT corpus. A nine-class router first predicts a coarse type (application, APT, botnet, DoH, malware, Tor, VPN, web attack, website); a specialist expert then predicts the exact local label. Experts are trained as LoRA adapters on a shared backbone and compared with a flat global-label baseline on a fixed held-out split (45,000 training rows / 4,500 test rows).",
    outcome:
      "Coarse-type routing reaches 97.6% accuracy. Exact-label identification remains the open problem of the thesis (end-to-end accuracy around 55%, with LoRA experts raising macro-F1 relative to the flat baseline). Ongoing work concentrates on the experts, including a communications-oriented subset: VPN, Tor, DoH, malware, and botnet traffic.",
    tags: ["M.Sc. thesis", "MERLOT", "DistilGPT-2", "LoRA", "Network security", "Encrypted traffic"],
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
    blurb: "Ingestion of PDF, Word, and spreadsheet documents into a knowledge-extraction pipeline.",
    tags: ["Document AI", "Python", "Pipelines"],
  },
  {
    number: "07",
    title: "Document Topic Grouping",
    type: "Document AI · Topic grouping",
    blurb: "Grouping related passages from heterogeneous documents under shared topic labels.",
    tags: ["LLMs", "Topic grouping", "NLP"],
  },
  {
    number: "08",
    title: "Embedding Model Evaluation",
    type: "Embeddings · RAG evaluation",
    blurb: "Comparative evaluation of embedding models using retrieval metrics for RAG.",
    tags: ["Embeddings", "RAG", "Evaluation"],
  },
  {
    number: "09",
    title: "Smartphone Price Comparison",
    type: "Web scraping · Price comparison",
    blurb: "Collection and comparison of smartphone prices across multiple online marketplaces.",
    tags: ["Web scraping", "Python", "Data aggregation"],
  },
  {
    number: "10",
    title: "E-commerce Catalog Extraction",
    type: "Web scraping · Catalog extraction",
    blurb: "Extraction of product categories and catalogs from e-commerce websites.",
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
    dates: "2025 — Present",
    title: "AI Researcher",
    location: "Tehran",
    description:
      "Applied research in knowledge management and text-to-speech, including document-to-knowledge pipelines, data preparation, experimental evaluation, and Python-based tooling.",
  },
  {
    dates: "2022 — 2024",
    title: "Electronics Technician",
    company: "PoyeshGaran Sanat Paya",
    location: "Kermanshah",
    description:
      "Progressed from internship to project responsibility, covering schematic and PCB design, Arduino programming, prototype assembly, hardware testing, and technical documentation.",
  },
];

export const education = [
  {
    title: "M.Sc. Electrical Engineering — Digital Electronics",
    school: "Amirkabir University of Technology",
    dates: "2024 — March 2027 (expected)",
    note: "Degree in progress; master's research in hierarchical network traffic classification",
  },
  {
    title: "B.Sc. Electrical Engineering — Electronics",
    school: "Razi University",
    dates: "2019 — 2023",
  },
];

export const graduateCourses = [
  { title: "Big Data Processing", fa: "پردازش داده حجیم" },
  { title: "Data Analysis", fa: "آنالیز داده" },
  { title: "Machine Learning", fa: "یادگیری ماشین" },
  { title: "Numerical Optimization", fa: "بهینه‌سازی عددی" },
  { title: "Neural Networks", fa: "شبکه عصبی" },
  { title: "Computer Vision", fa: "بینایی ماشین" },
];

export const skills = [
  {
    title: "Research areas",
    items: [
      "Network traffic classification",
      "Encrypted traffic analysis",
      "Machine learning",
      "Neural networks",
      "LoRA / PEFT",
      "Computer vision",
      "Numerical optimization",
      "Big data processing",
      "Data analysis",
      "LLM workflows",
      "NLP",
      "Speech & TTS",
      "Knowledge management",
      "Embeddings",
      "RAG",
      "Knowledge extraction",
      "Data preparation",
      "Model evaluation",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "C", "C++", "REST APIs", "Web scraping", "Arduino", "HTML & CSS", "Git"],
  },
  {
    title: "Electronics",
    items: [
      "Altium Designer",
      "PCB & schematic design",
      "Soldering",
      "Sensor integration",
      "Hardware prototyping",
      "Proteus",
      "MATLAB",
    ],
  },
];
