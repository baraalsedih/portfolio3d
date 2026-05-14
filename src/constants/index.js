const navLinks = [
  { name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Internships",
    link: "#internship",
  },
  {
    name: "Certifications",
    link: "#certifications"
  },
  {
    name: "Education",
    link: "#education"
  },
  {
    name: "Honors",
    link: "#awards"
  },
  {
    name: "Volunteering",
    link: "#volunteering"
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  }
];

const words = [
  { text: "Models", imgPath: "/images/ideas.svg" },
  { text: "Pipelines", imgPath: "/images/concepts.svg" },
  { text: "Deployments", imgPath: "/images/designs.svg" },
  { text: "Systems", imgPath: "/images/code.svg" },
  { text: "Models", imgPath: "/images/ideas.svg" },
  { text: "Pipelines", imgPath: "/images/concepts.svg" },
  { text: "Deployments", imgPath: "/images/designs.svg" },
  { text: "Systems", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Production ML Systems" },
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "+", label: "Completed Projects" },
  { value: 28, suffix: "", label: "Certifications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "MLOps & Deployment",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "ML & Deep Learning",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Data Engineering",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Model Serving & APIs",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "CI/CD & Automation",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "MLOps & Deployment",
    url: "https://github.com/baraalsedih/AI-ML-Projects",
    modelPath: "/models/computer-optimized-transformed.glb",
    scale: 0.01,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "ML & Deep Learning",
    url: "https://github.com/baraalsedih/AI-ML-Projects",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Data Engineering",
    url: "https://github.com/baraalsedih/AI-ML-Projects",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Model Serving & APIs",
    url: "https://github.com/baraalsedih/AI-ML-Projects",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "CI/CD & Automation",
    url: "https://github.com/baraalsedih/AI-ML-Projects",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "No review yet, soon I will add one.",
    reviewerURL: "",
    imgPath: "/images/io_health.png",
    logoPath: "/images/io_health.png",
    companyName: "iO Health",
    companyURL: "https://www.linkedin.com/company/io-health/",
    title: "Machine Learning Engineer — MLOps Focus",
    date: "Sep 2025 – Present",
    responsibilities: [
      "Core member of a dedicated MLOps team, co-building the engineering infrastructure that takes models from training to reliable production — owning half of the team's scope end-to-end.",
      "Built a model serving system with automated API-level evaluation testing to validate model behavior post-deployment, ensuring consistent and reproducible production rollouts.",
      "Engineered a model packaging pipeline converting trained models into configurable .exe/.bin distribution tools for client-side training — built with Poetry for dependency and version management and Makefile-driven interfaces for complex command workflows.",
      "Implemented CI/CD pipelines for ML model releases using GitHub Actions, including automated integration testing and database migration workflows across development and production environments.",
      "Developed data preprocessing and transformation pipelines using Pandas, NumPy, and Polars; integrated experiment tracking and model performance logging with Weights & Biases (W&B).",
    ],
  },
  {
    review: "No review, but soon I will try to polish excellent reviews from the next clients.",
    reviewerURL: "",
    imgPath: "/images/Freelance.png",
    logoPath: "/images/Freelance.png",
    companyName: "Freelance",
    companyURL: "https://www.linkedin.com/company/s11/",
    title: "AI/ML Freelancer",
    date: "April 2025 - Present",
    responsibilities: [
      "✓ Intrusion Detection – 99.5% accuracy (CNN+LSTM).",
      "✓ Bilingual Mental Health Chatbot (Llama 3.3B).",
      "✓ 3D Pathfinding AI – 100% success rate.",
    ],
  },
  {
    review: "Yazan Faroun: You were an excellent team member — quick to learn, collaborative, and highly adaptable. You picked up NestJS in no time and made significant contributions to both development and problem-solving discussions. I really appreciated your positive attitude and strong sense of responsibility throughout the project.",
    reviewerURL: "https://www.linkedin.com/in/yazan-faroun-94776b205/",
    imgPath: "/images/Freelance.png",
    logoPath: "/images/Freelance.png",
    companyName: "Freelance Team",
    companyURL: "https://www.linkedin.com/company/s11/",
    title: "Backend Developer",
    date: "June 2024 - Augest 2024",
    responsibilities: [
      "<b>Built scalable RESTful APIs</b> using NestJS (Node.js) and TypeScript with a focus on clean architecture and modular design.",
      "<b>Managed MongoDB databases</b> with TypeORM, optimizing schema design and improving query performance.",
      "<b>Collaborated with frontend teams</b> to integrate APIs, implementing secure authentication (JWT, OAuth) and robust error handling.",
    ],
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  }
];

const internshipCards = [
  {
    review: "No review, but you can see my internship roadmap, and projects on my internship GitHub organization",
    reviewerURL: "https://github.com/DeepLearningIntern",
    imgPath: "/images/palsoftco_logo.png",
    logoPath: "/images/palsoftco_logo.png",
    companyName: "PalSoft for AI & Technology Solutions",
    companyURL: "https://www.linkedin.com/company/palsoftco/",
    title: "Deep Learning Intern",
    date: "March 2025 - May 2025",
    responsibilities: [
      "<b>Mathematical Foundations:</b> Applied linear algebra concepts and matrix operations to solve real-world machine learning problems and optimize model performance.",
      "<b>Model Optimization:</b> Worked with tensors and implemented techniques to handle overfitting and underfitting, enhancing model generalization.",
      "<b>Neural Network Development:</b> Built and trained deep learning models using PyTorch, including CNNs and YOLO, for computer vision applications.",
    ],
  },
  {
    review: "I am waiting for the review from  Suzan Barghouti from Stichting SPARK – Organizer of Palestine Launchpad program – but I am sure it will be a good one.",
    reviewerURL: "https://www.linkedin.com/in/suzan-barghouti-170638286/",
    imgPath: "/images/udacity.png",
    logoPath: "/images/udacity.png",
    companyName: "Udacity",
    companyURL: "https://www.linkedin.com/school/udacity/",
    title: "Data Science Intern",
    date: "February 2025 - May 2025",
    responsibilities: [
      "<b>Mastered core SQL concepts</b> such as joins, aggregations, subqueries, window functions, and data cleaning for efficient data querying and analysis.",
      "<b>Applied Python tools</b> like Pandas and NumPy to solve real-world data problems and automate data workflows.",
      "<b>Enhanced data workflow proficiency</b> through Git, GitHub, and command-line tools, while consistently practicing SQL on platforms like HackerRank and LeetCode.",
    ],
  },
  {
    review: "No review, but you can see my internship roadmap, and projects on my internship GitHub organization",
    reviewerURL: "https://github.com/AhdTech-Backend-Intern",
    imgPath: "/images/rydlr.png",
    logoPath: "/images/rydlr.png",
    companyName: "RYDLR CLOUD SERVICES LTD.",
    companyURL: "https://www.linkedin.com/company/rydlr-cloud-services/",
    title: "Machine Learning Intern",
    date: "Januaru 2025 - February 2025",
    responsibilities: [
      "<b>Developed supervised and unsupervised ML models</b> using TensorFlow, Scikit-learn, and PyTorch, applying them to real-world problems with large datasets and SQL-driven pipelines.",
      "<b>Performed advanced data preprocessing and feature engineering,</b> improving model performance on datasets with millions of records.",
      "<b>Collaborated with cross-functional teams,</b> contributed to innovative AI solutions, and participated in global AI sessions and the Google Hustle Academy Business Bootcamp.",
    ],
  },
  {
    review: "I am waiting for the review from  Suzan Barghouti from Stichting SPARK – Organizer of Palestine Launchpad program – but I am sure it will be a good one.",
    reviewerURL: "https://www.linkedin.com/in/suzan-barghouti-170638286/",
    imgPath: "/images/udacity.png",
    logoPath: "/images/udacity.png",
    companyName: "Udacity",
    companyURL: "https://www.linkedin.com/school/udacity/",
    title: "Machine Learning Program",
    date: "May 2024 - October 2024",
    responsibilities: [
      "<b>Built supervised and unsupervised ML models</b> using Scikit-learn and TensorFlow, including classification, regression, and clustering techniques.",
      "<b>Developed neural networks</b> and applied hyperparameter tuning to improve model performance and generalization.",
      "<b>Completed hands-on projects</b> involving data cleaning, feature engineering, and model evaluation, strengthening practical machine learning skills.",
    ],
  },
];

const testimonials = [
  {
    name: "Suzan Barghouti",
    url: "https://www.linkedin.com/in/suzan-barghouti-170638286/",
    review:
      "I’ve had the pleasure of working with Bara throughout his journey in the Palestine Launchpad program first as a participant, then as a committed mentor and event contributor. Bara' completed two Nanodegree programs, won 1st place in our 3rd Hackathon, and mentored two teams who placed 1st and 2nd in the 4th hackathon. He also played a key role in organizing major program events. Bara is driven, collaborative, and deeply committed to making an impact, it’s been inspiring to watch his growth :)",
    // imgPath: "/images/yazan_faroun.png",
  },
  {
    name: "Yazan Faroun",
    url: "https://www.linkedin.com/in/yazan-faroun-94776b205/",
    review:
      "You were an excellent team member — quick to learn, collaborative, and highly adaptable. You picked up NestJS in no time and made significant contributions to both development and problem-solving discussions. I really appreciated your positive attitude and strong sense of responsibility throughout the project.",
    // imgPath: "/images/yazan_faroun.png",
  },
];

const socialImgs = [
  // {
  //   name: "github",
  //   imgPath: "/images/github-1.png",
  //   url: "https://github.com/baraalsedih",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  //   url: "",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  //   url: ""
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/bara-alsedih/"
  },
];

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "An-Najah National University",
    institutionURL: "https://www.najah.edu/en/",
    logoPath: "/images/najah.png",
    date: "2020 - 2024",
    location: "Nablus, Palestine",
    gpa: "3.02/4.0",
    description: "Focused on software engineering, data structures, algorithms, and computer systems. Completed two graduation projects: 1- Tile grout Filling Robot, 2- FreeDevelopersCamp - Learning Platform.",
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "AI",
      "Computer Networks",
      "Operating Systems"
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Jit Secondary School",
    institutionURL: "",
    logoPath: "/images/school.png",
    date: "2018 - 2020",
    location: "Jit, Qalqilya, Palestine",
    gpa: "96.3/100",
    description: "Specialized in Mathematics and Sciences.",
    courses: [
      "Advanced Mathematics",
      "Physics",
      "Information Technology",
      "English"
    ]
  }
];

const licensesAndCertifications = [
  {
    name: "DevOps, DataOps, MLOps Fundamentals",
    issuer: "Duke University",
    issuerURL: "https://www.linkedin.com/school/duke-university/",
    logoPath: "/images/duke_university.jpg",
    date: "Feb 2026",
    credentialID: "R6BR5RX3DHBA",
    credentialURL: "https://www.coursera.org/account/accomplishments/verify/R6BR5RX3DHBA",
    description: "Fundamentals of DevOps, DataOps, and MLOps covering CI/CD pipelines, data operations, and machine learning lifecycle management.",
    skills: [
      "DevOps", "DataOps", "MLOps", "CI/CD", "Machine Learning"
    ]
  },
  {
    name: "Python Essentials for MLOps",
    issuer: "Duke University",
    issuerURL: "https://www.linkedin.com/school/duke-university/",
    logoPath: "/images/duke_university.jpg",
    date: "Jan 2026",
    credentialID: "UCMJI2PBP2Z6",
    credentialURL: "https://www.coursera.org/account/accomplishments/records/UCMJI2PBP2Z6",
    description: "Python programming essentials for MLOps, covering scripting, automation, and tooling for machine learning operations.",
    skills: [
      "Python", "MLOps", "Machine Learning", "DevOps"
    ]
  },
  {
    name: "Building AI Agents and Agentic Workflows",
    issuer: "IBM",
    issuerURL: "https://www.linkedin.com/company/ibm/",
    logoPath: "/images/ibm_logo.jpg",
    date: "Jan 2026",
    credentialID: "23SI7M5FN37R",
    credentialURL: "https://www.coursera.org/account/accomplishments/specialization/certificate/23SI7M5FN37R",
    description: "Specialization covering design and implementation of AI agents and agentic workflows for real-world automation tasks.",
    skills: [
      "Agentic AI", "AI Agents", "LangChain", "Machine Learning", "Python"
    ]
  },
  {
    name: "Agentic AI with LangGraph, CrewAI, and AutoGen",
    issuer: "IBM",
    issuerURL: "https://www.linkedin.com/company/ibm/",
    logoPath: "/images/ibm_logo.jpg",
    date: "Jan 2026",
    credentialID: "5AGT6X5039XH",
    credentialURL: "https://www.coursera.org/account/accomplishments/records/5AGT6X5039XH",
    description: "Building agentic AI applications using LangGraph, CrewAI, and AutoGen frameworks for multi-agent collaboration.",
    skills: [
      "Agentic AI", "LangGraph", "CrewAI", "AutoGen", "AI Agents", "Python"
    ]
  },
  {
    name: "Agentic AI with LangChain, LangGraph, BeeAI, and AG2",
    issuer: "IBM",
    issuerURL: "https://www.linkedin.com/company/ibm/",
    logoPath: "/images/ibm_logo.jpg",
    date: "Jan 2026",
    credentialID: "9FG51GO6Y6EG",
    credentialURL: "https://www.coursera.org/account/accomplishments/verify/9FG51GO6Y6EG",
    description: "Building agentic AI systems using LangChain, LangGraph, BeeAI, and AG2 frameworks for autonomous AI workflows.",
    skills: [
      "Agentic AI", "LangChain", "LangGraph", "AI Agents", "Python"
    ]
  },
  {
    name: "Fundamentals of NestJS",
    issuer: "Board Infinity",
    issuerURL: "https://www.linkedin.com/company/board-infinity/",
    logoPath: "/images/nestjs.jpg",
    date: "Dec 2025",
    credentialID: "R52M5PWTM9P8",
    credentialURL: "https://www.coursera.org/account/accomplishments/verify/R52M5PWTM9P8",
    description: "Fundamentals of NestJS framework for building scalable and maintainable server-side applications with Node.js.",
    skills: [
      "NestJS", "Node.js", "TypeScript", "REST APIs", "Backend Development"
    ]
  },
  {
    name: "Python Data Associate",
    issuer: "DataCamp",
    issuerURL: "https://www.linkedin.com/school/datacampinc/",
    logoPath: "/images/datacamp.png",
    date: "Nov 2025",
    credentialID: "PDA0010251046951",
    credentialURL: "https://www.datacamp.com/certificate/PDA0010251046951",
    description: "Foundation in Python with data manipulation and exploratory data analysis.",
    skills: [
      "Python",
      "Pandas",
      "Numpy",
      "Matplotlib"
    ]
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuerURL: "https://www.linkedin.com/company/amazon-web-services/",
    logoPath: "/images/aws.png",
    date: "Oct 2025",
    credentialID: "d2daaa59-b7a6-47e0-8bc3-298fd1ad68f3",
    credentialURL: "https://www.credly.com/badges/d2daaa59-b7a6-47e0-8bc3-298fd1ad68f3/linked_in_profile",
    description: "Foundations in cloud computing and AWS services.",
    skills: [
      "AWS",
      "Cloud Computing"
    ]
  },
  {
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    issuerURL: "https://www.linkedin.com/company/amazon-web-services/",
    logoPath: "/images/aws.png",
    date: "Jun 2025",
    credentialID: "8ebb47e6-1908-4272-8c49-6d7cdfdbb0b9",
    credentialURL: "https://www.credly.com/earner/earned/share/8ebb47e6-1908-4272-8c49-6d7cdfdbb0b9",
    description: "Earners of this badge have completed the Machine Learning Foundations training and achieved the required scores on the post-course assessment. They have demonstrated the ability to discuss the fundamental concepts of machine learning and how to apply the machine learning pipeline to solve a business problem.",
    skills: [
      "Machine Learning"
    ]
  },
  {
    name: "Introduction to Deep Learning with PyTorch: Theoretical Knowledge and Practical Implementation",
    issuer: "PalSoft for AI & Technology Solutions",
    issuerURL: "https://www.linkedin.com/company/palsoftco/",
    logoPath: "/images/palsoftco_logo.png",
    date: "Jun 2025",
    credentialID: "",
    credentialURL: "https://www.linkedin.com/in/bara-alsedih/details/certifications/1749133425647/single-media-viewer/?profileId=ACoAAEelapkBoIDq5_60n2J0LNtHPl9ugf17cfs",
    description: "Introduction to Deep Learning with PyTorch: Theoretical Knowledge and Practical Implementation.",
    skills: [
      "Deep Learning", "Machine Learning"
    ]
  },
  {
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Udemy",
    issuerURL: "https://www.linkedin.com/company/udemy/",
    logoPath: "/images/udemy.png",
    date: "May 2025",
    credentialID: "UC-c832d240-2211-45fd-963b-909f8baf9a34",
    credentialURL: "https://www.udemy.com/certificate/UC-c832d240-2211-45fd-963b-909f8baf9a34/",
    description: "I have completed this great React course building many projects.",
    skills: [
      "React", "Redux", "Tailwind CSS", "Styled Components", "Next.js"
    ]
  },
  {
    name: "Cloud Computing & Preparation for AWS Practitioner Certificate",
    issuer: "Gaza Sky Geeks",
    issuerURL: "https://www.linkedin.com/company/gaza-sky-geeks/",
    logoPath: "/images/gsg.png",
    date: "Apr 2025",
    credentialID: "",
    credentialURL: "https://drive.google.com/file/d/1_tVF2jCHiFhItTgPI0P8q914dQPvjTKS/view",
    description: "• Understand AWS Fundamentals: Learn core concepts such as cloud computing, AWS global infrastructure, and key AWS services. • Explore AWS Services: Emphasize compute (EC2, Lambda), storage (S3, EBS), databases (RDS, DynamoDB), and networking (VPC, CloudFront). • Other topics include Security & Compliance, Billing & Pricing, AWS Support Plans, Cloud Concepts & Design, Hands-on Practice, and Practice Exams.",
    skills: [
      "AWS"
    ]
  },
  {
    name: "EF SET English Certificate 63/100 (C1 Advanced)",
    issuer: "EF SET",
    issuerURL: "https://www.linkedin.com/company/efset/",
    logoPath: "/images/efset.png",
    date: "Mar 2025",
    credentialID: "tEqDZS",
    credentialURL: "https://cert.efset.org/tEqDZS",
    description: "EF SET English exam in Reading, Listening, Speaking, and Writing.",
    skills: [
      "English"
    ]
  },
  {
    name: "SQL Advanced Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Mar 2025",
    credentialID: "63f94146f75f",
    credentialURL: "https://www.hackerrank.com/certificates/63f94146f75f",
    description: "Applied advanced SQL topics like Window Functions, CTE, and subqueries.",
    skills: [
      "MySQL", "SQL", "Problem Solving"
    ]
  },
  {
    name: "Programming for Data Science with Python",
    issuer: "Udacity",
    issuerURL: "https://www.linkedin.com/school/udacity/",
    logoPath: "/images/udacity.png",
    date: "Mar 2025",
    credentialID: "42360d5a-edf0-11ef-b8c5-7b268bcfc836",
    credentialURL: "https://www.udacity.com/certificate/e/42360d5a-edf0-11ef-b8c5-7b268bcfc836",
    description: "Earned new Nanodegree certificate from Udacity.",
    skills: [
      "Python", "SQL", "GitHub", "Git"
    ]
  },
  {
    name: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Jan 2025",
    credentialID: "9af69f8e1d69",
    credentialURL: "https://www.hackerrank.com/certificates/9af69f8e1d69",
    description: "Successfully earned the SQL (Intermediate) Certification from HackerRank, demonstrating proficiency in advanced SQL concepts. Key competencies include: Writing complex queries involving joins, subqueries, and aggregate functions. Optimizing SQL queries for performance and scalability. Handling scenarios involving data manipulation, data retrieval, and report generation. Working with relational databases to solve real-world problems.",
    skills: [
      "MySQL", "SQL", "Problem Solving"
    ]
  },
  {
    name: "SQL Basic Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Jan 2025",
    credentialID: "d80bfbf3599a",
    credentialURL: "https://www.hackerrank.com/certificates/d80bfbf3599a",
    description: "Earned the SQL Basics certification from HackerRank, demonstrating a strong understanding of fundamental SQL concepts, including writing queries, working with relational databases, filtering, aggregating, and manipulating data efficiently. Proven ability to solve real-world problems using SQL.",
    skills: [
      "MySQL", "SQL", "Problem Solving"
    ]
  },
  {
    name: "Intro to Machine Learning with TensorFlow",
    issuer: "Udacity",
    issuerURL: "https://www.linkedin.com/school/udacity/",
    logoPath: "/images/udacity.png",
    date: "Sep 2024",
    credentialID: "8c3d1b3a-0cbb-11ef-956e-ab7912d968ec",
    credentialURL: "https://www.udacity.com/certificate/e/8c3d1b3a-0cbb-11ef-956e-ab7912d968ec",
    description: "Machine Learning nanodegree program covering supervised and unsupervised learning, neural networks, and deep learning applications.",
    skills: [
      "TensorFlow", "Data Wrangling", "Data Analytics", "Machine Learning", "Data Science", "Data Analysis"
    ]
  },
  {
    name: "Advanced Python with Data Manipulation and RESTful APIs using Flask",
    issuer: "Gaza Sky Geeks",
    issuerURL: "https://www.linkedin.com/company/gaza-sky-geeks/",
    logoPath: "/images/gsg.png",
    date: "Feb 2024",
    credentialID: "",
    credentialURL: "https://drive.google.com/file/d/1ko2x_6-YBE6RnuFR5RdQaCgRmaYtKK97/view?usp=sharing&usp=embed_facebook",
    description: "I have participated with GSG for 60 hours practical training in advanced python with data manipulation and RESTful APIs using Flask and SQLite, built many projects, solved real-world problems, and gained lots of experience.",
    skills: [
      "Python",
      "Flask",
      "Pandas",
      "REST APIs",
      "Extract, Transform, Load (ETL)",
      "SQLite",
      "Datasets",
      "Database",
      "Data Science", "Data Analysis", "Data Strucutres", "Data Manipulation", "Data Cleaning", "Data Visualization"
    ]
  }
];

const volunteering = [
  {
    title: "Program Coordinator",
    organization: "Gaza Sky Geeks",
    organizationURL: "https://www.linkedin.com/company/gaza-sky-geeks/",
    logoPath: "/images/gsg.png",
    date: "Jun 2025 - Present",
    duration: "+1 year",
    category: "Education",
    description: "I am volunteering with Gaza Sky Geeks as DataCamp Team Coordinator, to help An-Najah National University students with their learning journey at the DataCamp learning platform as I have been in the previous version of this scholarship and have excellent experience on the DataCamp learning platform, with a one-year scholarship provided by the Gaza Sky Geeks organization.",
    portfolioURL: "https://www.datacamp.com/portfolio/baraalsedih",
    portfolioTitle: "Bara Al-Sedih's Data Portfolio | DataCamp",
    portfolioDescription: "I've provided my DataCamp Portfolio, which shows the huge amount of experience I gained through my one-year journey at DataCamp via the Gaza Sky Geeks scholarship.",
    responsibilities: [
      "Provide mentorship and guide learners",
      "Support students in their data learning journey",
      "Arrange online and on-ground gathering events",
      "Organize technical and soft-skills awareness sessions"
    ]
  }
];

const honorsAndAwards = [
  {
    title: "Top 2 Winning Teams (Mentor) – Stichting SPARK 4th Hackathon",
    issuer: "Stichting SPARK",
    issuerURL: "https://www.linkedin.com/company/spark/",
    logoPath: "/images/spark.png",
    date: "Jun 2025",
    category: "Hackathon",
    associatedWith: "Udacity",
    associatedWithURL: "https://www.linkedin.com/school/udacity/",
    associatedWithLogo: "/images/udacity.png",
    description: "Udacity Palestine Launchpad 4th Hackathon",
    achievements: [
      "Co-mentored two winning teams out of 24 participating groups",
      "Team 4: 1st 🥇 Place overall – ThemeSolve: Personalized Math Problem Rewriting Using AI",
      "Team 10: 2nd 🥈 Place overall – Hirelyze: AI-Based Resume Ranking for Recruitment",
      "Provided technical guidance in AI, team organization, and project execution"
    ],
    linkedinPostURL: "https://www.linkedin.com/posts/bara-alsedih_ai-hackathon-palestinetech-activity-7339716576918581249-1fzA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEelapkBoIDq5_60n2J0LNtHPl9ugf17cfs",
    githubOrgURL: ""
  },
  {
    title: "Top 1 Winning Team – Stichting SPARK 3rd Hackathon",
    issuer: "Stichting Spark",
    issuerURL: "https://www.linkedin.com/company/spark/",
    logoPath: "/images/spark.png",
    date: "Feb 2025",
    category: "Hackathon",
    associatedWith: "Udacity",
    associatedWithURL: "https://www.linkedin.com/school/udacity/",
    associatedWithLogo: "/images/udacity.png",
    description: "Won 1st place in developing a mental health chatbot web application using Streamlit for the Front-End, and Back-End built using Node.js, Express, MongoDB, and JWT for authentication, and created a server for chatbot model messaging.",
    technicalDetails: [
      "Fine-tuned llama 3.2 1B model using PyTorch and Unsloth on a dataset for mental health conversations from Hugging Face",
      "Preprocessed the dataset to add Arabic conversations and performed data analysis",
      "Deployed our model and dataset on Hugging Face to allow developers to use or enhance it",
      "Deployed our model on Ollama to make it easier for developers to use in their projects"
    ],
    linkedinPostURL: "https://www.linkedin.com/posts/bara-alsedih_exciting-news-my-team-won-1st-place-activity-7299176227221782529-xUly?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEelapkBoIDq5_60n2J0LNtHPl9ugf17cfs",
    githubOrgURL: "https://github.com/Hackathon-TeamP2-5"
  },
  {
    title: "Top 1 Winning Team – Gaza Sky Geeks DataBridge Hackathon",
    issuer: "Gaza Sky Geeks",
    issuerURL: "https://www.linkedin.com/company/gaza-sky-geeks/",
    logoPath: "/images/gsg.png",
    date: "Aug 2024",
    category: "Hackathon",
    associatedWith: "DataCamp",
    associatedWithURL: "https://www.linkedin.com/school/datacampinc/",
    associatedWithLogo: "/images/datacamp.png",
    description: "Excited to Share My First-Place Victory (Legends team) with my teammate (Lina Alama) at the DataBridge Hackathon! 🥇",
    eventDetails: "We recently had the privilege of taking part in a remarkable hackathon at Palestine Techno Park in Ramallah. This event, a collaborative effort between Gaza Sky Geeks and DataCamp brought together talented students from NNU and PPU universities. The focus on Data Analysis made it an incredible opportunity to work with bright and innovative minds from various universities. 🌟",
    achievements: [
      "Worked with large datasets from Kaggle",
      "Performed data manipulation and insights using Pandas and Numpy",
      "Visualized the insights using Matplotlib",
      "Won first place"
    ],
    linkedinPostURL: "https://www.linkedin.com/posts/bara-alsedih_hackathon-datavisualization-technopark-activity-7231873729771831297-25G_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEelapkBoIDq5_60n2J0LNtHPl9ugf17cfs",
    kaggleNotebookURL: "https://www.kaggle.com/code/baraaalsedih/databridge-hackathon",
  }
];

const languages = [
  {
    name: "Arabic",
    level: "Native",
    flag: "🇵🇸",
    description: "Native speaker with full proficiency in reading, writing, listening, and speaking",
    skills: [
      "Native fluency",
      "Academic writing",
      "Technical documentation",
      "Public speaking"
    ]
  },
  {
    name: "English",
    level: "Professional (C1)",
    flag: "🇺🇸",
    description: "C1 Advanced level certified by EF SET with professional proficiency",
    certification: {
      name: "EF SET English Certificate 63/100 (C1 Advanced)",
      issuer: "EF SET",
      date: "Mar 2025",
      credentialID: "tEqDZS",
      credentialURL: "https://cert.efset.org/tEqDZS"
    },
    skills: [
      "Advanced reading and writing",
      "Professional communication",
      "Technical documentation",
      "International collaboration",
      "Academic presentations"
    ]
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  internshipCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  education,
  licensesAndCertifications,
  volunteering,
  honorsAndAwards,
  languages,
};
