export const site = {
  name: "Kimiya Jafarpor",
  role: "AI & Machine Learning Developer",
  location: "Tehran",
  email: "kimiya.tommy@gmail.com",
  github: "https://github.com/kimiya1991",
  instagram: "https://instagram.com/mia_electronic",
  url: "https://kimiya1991.github.io/portfolio",
  summary:
    "I build applied systems across knowledge management, speech, language, vision, and embedded hardware. Currently focused on KM and production text-to-speech while completing an M.Sc. in Digital Electronic Systems at Amirkabir University of Technology.",
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
    title: "Cook With What You Have",
    type: "Live product · Recommendation system",
    featured: true,
    problem:
      "People often cook from a limited pantry and cannot easily match those ingredients to recipes that are actually feasible.",
    approach:
      "An ingredient-first recommender that scores real recipes by coverage, pantry utilization, and rating, then lets users refine results by food group, cuisine, cooking time, and missing items.",
    outcome:
      "A live dashboard that turns a pantry list into ranked meal ideas, with nutrition, quantities, and step-by-step instructions.",
    tags: ["Python", "React", "Recommendation systems", "Data engineering"],
    liveUrl: "https://kimiya1991.github.io/food-recom/",
    repoUrl: "https://github.com/kimiya1991/food-recom",
  },
  {
    number: "02",
    title: "KM",
    type: "Industry work · Knowledge management",
    featured: true,
    badge: "Core product",
    problem:
      "Teams sit on PDFs, Word files, and guidelines that are hard to search, summarize, or reuse as structured knowledge.",
    approach:
      "A document-to-knowledge pipeline: ingest files, extract usable knowledge, and return summaries, keywords, categories, and FAQs.",
    outcome:
      "A knowledge-management product used to turn documents into reviewable, structured knowledge—not just another file dump.",
    tags: ["Knowledge management", "LLMs", "Document AI", "NLP"],
  },
  {
    number: "03",
    title: "Network Traffic Classification",
    type: "Master's research · Machine learning",
    problem:
      "Network traffic is high-volume and difficult to label with static rules, especially when patterns shift across protocols and conditions.",
    approach:
      "Compared machine-learning and language-model methods for traffic classification, with an emphasis on data preparation, experimental design, and evaluation in Python.",
    outcome:
      "A research workflow for testing and comparing classifiers—part of ongoing master's work in digital electronic systems.",
    tags: ["Python", "Machine learning", "Network security", "LLMs"],
  },
  {
    number: "04",
    title: "Applied Text-to-Speech",
    type: "Industry work · Speech AI",
    problem:
      "Mobile products need speech that sounds natural and can be produced through a pipeline that holds up in real use.",
    approach:
      "Work on a production-oriented TTS workflow: preparing data, running experiments, evaluating synthesized speech, and tightening practical Python tooling.",
    outcome:
      "Ongoing contributions to applied TTS, focused on making the pipeline usable in real mobile experiences.",
    tags: ["TTS", "Speech processing", "Python", "Evaluation"],
  },
  {
    number: "05",
    title: "Smart Irrigation System",
    type: "Bachelor's project · Embedded systems",
    problem:
      "Irrigation that ignores soil conditions wastes water and still fails when moisture is already sufficient.",
    approach:
      "Built an Arduino prototype that reads soil moisture and temperature, then drives a pump when thresholds require it.",
    outcome:
      "A working end-to-end hardware system—sensors, control logic, electronics, and real-world testing.",
    tags: ["Arduino", "Sensors", "C/C++", "Prototyping"],
  },
  {
    number: "06",
    title: "Extractor",
    type: "KM · Ingestion pipelines",
    blurb: "Ingest PDFs, Word, and spreadsheets into a knowledge pipeline.",
    tags: ["Document AI", "Python", "Pipelines"],
  },
  {
    number: "07",
    title: "Topic Organizer",
    type: "Document AI · Topic grouping",
    blurb: "Group related passages from mixed files under shared topics.",
    tags: ["LLMs", "Topic grouping", "NLP"],
  },
  {
    number: "08",
    title: "Embedder Lab",
    type: "Embeddings · RAG evaluation",
    blurb: "Compare embedding models with retrieval metrics for RAG.",
    tags: ["Embeddings", "RAG", "Evaluation"],
  },
  {
    number: "09",
    title: "Marketplace Crawler",
    type: "Web scraping · Price comparison",
    blurb: "Collect and compare smartphone prices across online marketplaces.",
    tags: ["Web scraping", "Python", "Data aggregation"],
  },
  {
    number: "10",
    title: "Black Everyday",
    type: "Web scraping · Catalog extraction",
    blurb: "Extract e-commerce categories and product catalogs from the web.",
    tags: ["Web scraping", "E-commerce", "Python"],
  },
];

export const otherWork = [
  {
    title: "Speech & Sequence Intelligence",
    type: "University · Deep learning",
    summary:
      "Spoken-digit recognition with attention, sentiment scoring with LSTM/BiLSTM models, and traffic forecasting with GRUs.",
    tags: ["Attention", "LSTM", "GRU"],
  },
  {
    title: "NLP News Classification",
    type: "University · NLP",
    summary:
      "Text-classification pipelines on AG News, comparing recurrent models and learned embeddings with pretrained GloVe representations.",
    tags: ["NLP", "RNN", "GloVe"],
  },
  {
    title: "Generative Vision Models",
    type: "University · Computer vision",
    summary:
      "Compared WGAN-style DCGANs, conditional generation, and Pix2Pix-style reconstruction on Fashion-MNIST, with attention to training stability.",
    tags: ["GANs", "PyTorch", "Fashion-MNIST"],
  },
];

export const experience = [
  {
    dates: "2025 — Present",
    title: "AI Developer",
    location: "Tehran",
    description:
      "Applied AI across knowledge management and text-to-speech: document-to-knowledge pipelines, data preparation, experiments, and practical Python workflows.",
  },
  {
    dates: "2022 — 2024",
    title: "Electronics Technician",
    company: "PoyeshGaran Sanat Paya",
    location: "Kermanshah",
    description:
      "Grew from intern to project responsibility: schematic and PCB design, Arduino programming, prototype soldering, hardware testing, and documentation.",
  },
];

export const education = [
  {
    title: "M.Sc. Electrical Engineering — Digital Electronics",
    school: "Amirkabir University of Technology",
    dates: "2024 — Present",
  },
  {
    title: "B.Sc. Electrical Engineering — Electronics",
    school: "Razi University",
    dates: "2019 — 2023",
  },
];

export const skills = [
  {
    title: "AI & data",
    items: [
      "Machine learning",
      "Neural networks",
      "LLM workflows",
      "NLP",
      "Computer vision",
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
    title: "Development",
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
