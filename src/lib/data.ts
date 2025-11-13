

export const skills = [
  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & Machine Learning" },
  { name: "Deep Learning", category: "AI & Machine Learning" },
  { name: "Neural Networks", category: "AI & Machine Learning" },
  { name: "Computer Vision", category: "AI & Machine Learning" },
  { name: "RAG", category: "AI & Machine Learning" },
  { name: "Model Fine-Tuning", category: "AI & Machine Learning" },
  { name: "Feature Engineering", category: "AI & Machine Learning" },
  { name: "AI Agent", category: "AI & Machine Learning" },

  // Programming & Frameworks
  { name: "Python", category: "Programming & Frameworks" },
  { name: "TensorFlow", category: "Programming & Frameworks", logoUrl: "https://iili.io/KjVP6Yl.png" },
  { name: "PyTorch", category: "Programming & Frameworks", logoUrl: "https://iili.io/KjW3hmX.png" },
  { name: "Scikit-learn", category: "Programming & Frameworks" },
  { name: "OpenCV", category: "Programming & Frameworks" },
  { name: "Flask/FastAPI", category: "Programming & Frameworks" },
  { name: "React", category: "Programming & Frameworks" },
  { name: "JavaScript", category: "Programming & Frameworks" },
  
  // Data Science & Analytics
  { name: "Data Analysis", category: "Data Science & Analytics" },
  { name: "Pandas & NumPy", category: "Data Science & Analytics" },
  { name: "Vector DB", category: "Data Science & Analytics" },
  { name: "Statistical Analysis", category: "Data Science & Analytics" },
  { name: "SQL", category: "Data Science & Analytics" },
  { name: "Grapg DB", category: "Data Science & Analytics" },
  { name: "Matplotlib/Seaborn", category: "Data Science & Analytics" },
  { name: "Data Preprocessing", category: "Data Science & Analytics" },

  // MLOps & Integration
  { name: "Model Deployment", category: "MLOps & Integration" },
  { name: "API Integration", category: "MLOps & Integration" },
  { name: "Web Service", category: "MLOps & Integration" },
  { name: "CI/CD Pipelines", category: "MLOps & Integration" },
  { name: "Model Monitoring", category: "MLOps & Integration" },
  { name: "Docker", category: "MLOps & Integration", logoUrl: "https://iili.io/KjVscWF.md.png" },
  { name: "Git/GitHub", category: "MLOps & Integration" },
  { name: "Cloud Platforms", category: "MLOps & Integration" },
  
  // Old skills to be filtered out if not in new categories
  { name: "JavaScript", category: "Language and Database", logoUrl: "https://i.ibb.co/QFpQZJxx/images.jpg" },
  { name: "HTML5", category: "Language and Database", logoUrl: "https://i.ibb.co/5gJvmZmw/4844522.png" },
  { name: "CSS3", category: "Language and Database", logoUrl: "https://i.ibb.co/60SG51Dx/images-1.jpg" },
  { name: "MSSQL", category: "Language and Database", logoUrl: "https://iili.io/KjWQj1e.md.jpg" },
  { name: "PostgreSQL", category: "Language and Database", logoUrl: "https://i.ibb.co/qY0QTr74/Postgre-SQL-Logo-wine.png" },
  { name: "Pinecone", category: "Language and Database", logoUrl: "https://i.ibb.co/gFddQC8j/Pinecone-Logo-2327051645.png" },
  { name: "Chroma", category: "Language and Database", logoUrl: "https://i.ibb.co/27rjKr55/0-RTW5byy6e-H-e-SWTP.png" },
  { name: "OpenAI", category: "AI and DevOps", logoUrl: "https://i.ibb.co/W4sLhZNK/1708676283196.jpg" },
  { name: "Claude", category: "AI and DevOps", logoUrl: "https://iili.io/KjW8jQj.md.png" },
  { name: "LangGraph", category: "AI and DevOps", logoUrl: "https://iili.io/KjVQXnt.md.png" },
  { name: "Agent", category: "AI and DevOps", logoUrl: "https://iili.io/KjWTZGI.md.png" },
  { name: "RAG", category: "AI and DevOps", logoUrl: "https://iili.io/KjW5un4.md.png" },
  { name: "Azure", category: "AI and DevOps", logoUrl: "https://iili.io/KjWFQwX.md.png" },
  { name: "AWS", category: "AI and DevOps", logoUrl: "https://iili.io/KjVpx8g.md.png" },
  { name: "DevOps", category: "AI and DevOps", logoUrl: "https://iili.io/KjWvuxj.md.png" },
  { name: "GitLab", category: "Tools & Platforms", logoUrl: "https://iili.io/KjWfR72.md.png" },
  { name: "Figma", category: "Tools & Platforms", logoUrl: "https://iili.io/KjWb5uf.md.png" },
  { name: "Power BI", category: "Tools & Platforms", logoUrl: "https://iili.io/KjWyZKB.md.png" },
  { name: "Selenium", category: "Tools & Platforms", logoUrl: "https://iili.io/KjX2Jet.md.png" },
  { name: "Postman", category: "Tools & Platforms", logoUrl: "https://iili.io/KjWpar7.png" },
];

export const experiences = [
  {
    role: "Innovation Team Manager",
    company: "Dexian Bangladesh",
    companyDetail: "(Multinational IT Consulting & Staffing Company, USA HQ)",
    period: "Aug 2024 - Present",
    companyUrl: "https://dexian.com/locations/bangladesh/",
    logo: "/logos/dexian.png",
    description: "Leading a high-performing AI/ML and software development team focused on building next-generation digital solutions.",
    responsibilities: [
        "Architected and deployed 10+ enterprise-grade AI/ML solutions  using LangGraph, LangChain, and Azure OpenAI improving operational efficiency by 12% & reducing manual workloads.",
        "Built standardized MLOps pipelines using Docker, MLflow, and CI/CD, reducing release cycles from 2 weeks to 5 days while improving deployment reliability.",
        "Developed retrieval-augmented generation (RAG) architecture using vector databases, enhancing model precision and increasing client adoption rate.",
        "Led a cross-functional team of 8 AI engineers and data scientists, driving best practices in experimentation, deployment, and architecture design.",
      ],
    achievements: []
  },
  {
    role: "Senior Executive – Artificial Intelligence",
    company: "Nitol Motors Limited",
    companyDetail: "Software Developer",
    period: "Dec 2021 - Jul 2024",
    companyUrl: "https://www.nitolmotors.com/",
    logo: "https://i.ibb.co/3mXkWxTk/download.jpg",
    description: "Developed and deployed Python-based AI systems to automate business analytics and customer insights, including predictive maintenance and personalized recommendation engines.",
    responsibilities: [
    "Built predictive models using Scikit-learn and XGBoost, saving ~$9,000 annually.",
    "Improved customer segmentation accuracy by 28% through advanced feature engineering and model optimization.",
    "Developed Power BI dashboards for real-time analytics, cutting decision latency by 35% in 2 projects.",
    "Mentored a 5-member AI team, improving code quality, sprint velocity, and ML best-practice adoption by 20%.",
    ],
    achievements: []
  },
  {
    role: "Assistant Programmer",
    company: "Golden Harvest Infotech Limited",
    companyDetail: "",
    period: "Dec 2018 - Dec 2021",
    companyUrl: "https://www.ghitl.com/",
    logo: "https://i.ibb.co/4wzLmx2K/65ffda90d2372028bed532d6-Golden-Harvest.jpg",
    description: "Designed, developed, and deployed scalable software solutions for enterprise clients, primarily utilizing Python for backend services.",
    responsibilities: [
"Developed Python-based automation scripts and APIs that saved over 300 staff hours monthly through workflow optimization.",
"Created ML-powered analytics dashboards with Scikit-learn and Plotly, improving reporting efficiency by 18%.",
"Preprocessed and cleaned 500K+ structured and unstructured data points.",
"Optimized backend logic, reducing server response time by 20% and improving API performance.",    ],
    achievements: []
  }
];

export const education = [
  {
    degree: "Master of Information Technology",
    institution: "University of Dhaka",
    period: "2019–2021",
    logo: "https://i.ibb.co/5y09P2W/Dhaka-University-logo-svg.png",
    thesis: "Handwritten Text Recognition Using Machine Learning Algorithms"
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "BRAC University",
    period: "2013–2018",
    logo: "https://i.ibb.co/qLfMyH1d/BRAC-University-monogram-svg.png",
    thesis: "Voice Signal–Based Gender Prediction Model Using Random Forest Classifier"
  }
];

export const projects = [
  {
    title: "Walled Garden",
    description: "Empowers sales teams with guided technical knowledge and the right questions for meaningful client discussions, reducing dependency on solution engineers.",
    tags: ["AI", "Knowledge Systems", "Sales Enablement"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "RoleplAI",
    description: "AI-driven simulation tool that enables users to practice real-life scenarios with feedback in a gamified environment.",
    tags: ["Generative AI", "NLP", "LLMs", "Simulation Frameworks"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Proposal Writer Assistant",
    description: "Automates proposal generation by leveraging a centralized repository of past responses to extract and rephrase relevant text.",
    tags: ["Generative AI", "LLMs", "RAG", "Document Intelligence"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "RFP Matcher ",
    description: "AI solution that extracts key details from RFPs and generates a structured response outline to accelerate bid preparation.",
    tags: ["AlloyDB", "Document Processing"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Next Gen Call Center",
    description: "Performs real-time transcription and sentiment analysis of customer calls to trigger proactive management alerts.",
    tags: ["AI", "Speech AI", "Sentiment Analysis", "Real-time Processing"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    title: "Code Guard",
    description: "Scans repositories for vulnerabilities, secret leaks, and outdated dependencies; generates SBOM for improved compliance.",
    tags: ["DevSecOps", "SAST", "Software Compliance"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Geo Viz",
    description: "Visualizes GIS-based flight paths to ensure pipeline coverage and optimize drone inspections.",
    tags: ["Geospatial Analytics", "Visualization", "Automation"],
      assignment: ['All', 'Dexian' ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Agent Dexi",
    description: "Proprietary intelligent agent automating web data collection and analysis for accurate, timely company insights.",
    tags: ["Generative AI", "LLMs", "Web Scraping", "Data Analytics"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Comment Classifier",
    description: "Enables non-technical users to train text classification models on their own datasets easily.",
    tags: ["Machine Learning", "AutoML", "Text Classification", "Data Labeling"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "ServiceNow Self-Help LLM",
    description: "Uses generative AI to automatically generate IT troubleshooting guides and empower self-service users.",
    tags: ["Generative AI", "LLM", "ITSM", "Self-Service AI"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Scrum Snapshot",
    description: "Integrates with Azure Boards to automate project status summaries and email reporting.",
    tags: ["DevOps", "Automation", "Agile Reporting"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "ATS Compatibility",
    description: "Analyzes resumes and job descriptions to evaluate candidate-job fit with AI-driven scoring.",
    tags: ["HR Tech", "Semantic Search", "AI Matching"],
      assignment: ['All', 'Github'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Agentic Warehouse Assistant",
    description: "AI agents extract product data online and auto-update Excel inventory sheets, improving accuracy and logistics.",
    tags: ["Generative AI", "Agentic AI", "Data Automation", "Supply Chain"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Knowledge Engine",
    description: "AI-driven knowledge retrieval platform enabling fast, intelligent document search across large repositories.",
    tags: ["Generative AI", "RAG", "Knowledge Graphs", "Enterprise Search"],
      assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "ReTurnVision",
    description: "Automates laptop return inspections using AI-based defect detection and classification.",
    tags: ["Computer Vision", "Predictive Analytics", "Machine Learning"],
    assignment: ['All', 'Dexian'],
    githubUrl: "#",
    liveUrl: "#"
  } 
  ,
  {
    title: "Article Generation Pipeline",
    description: "End-to-end RAG pipeline that selects high-quality sources, generates article drafts with citations, and supports inline editing for editorial control.",
    tags: ["RAG", "NLP", "Article Generation", "LLMs", "Source Selection", "Editing UI"],
    assignment: ['All', 'Github'],
    githubUrl: "#",
    liveUrl: "#"
  }
  ,
  {
    title: "ChatDocs",
    description: "Document assistant enabling semantic Q&A.",
    tags: ["React", "FastAPI", "PostgreSQL", "LangChain", "LLM", "RAG"],
    assignment: ['All', 'Github'],
    githubUrl: "#",
    liveUrl: "#"
  }
  ,
  {
    title: "AgentFlow",
    description: "Natural language to pipeline automation tool for MLOps deployment.",
    tags: ["LangGraph", "Azure AI Foundry", "Docker", "GitHub Actions"],
    assignment: ['All', 'Github'],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const companies = [
  { name: 'Dexian', logo: '/logos/dexian.png' },
  { name: 'Nitol Motors', logo: '/logos/Nitol-Niloy logo.png' },
  { name: 'Golden Harvest', logo: '/logos/golden-harvest.jpeg' },
];
