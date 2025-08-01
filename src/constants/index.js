const navLinks = [
  { name: "About Me",
    link: "#about",
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
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education"
  },
  {
    name: "Licenses & Certifications",
    link: "#certifications"
  },
  {
    name: "Volunteering",
    link: "#volunteering"
  },
  {
    name: "Honors & Awards",
    link: "#awards"
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Languages",
    link: "#languages"
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const counterItems = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 19, suffix: "+", label: "Certifications Earned" },
  { value: 100, suffix: "+", label: "Technologies Used" },
  { value: 10, suffix: "+", label: "Internships & Trainings" },
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
    name: "Full-Stack Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "AI/ML Engineer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Data Analyst",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "DevOps & Deployment",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Full-Stack Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI/ML Engineer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Data Analyst",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "DevOps & Deployment",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    review: "No review yet, soon I will add one.",
    reviewerURL: "",
    imgPath: "/images/vss.png",
    logoPath: "/images/vss.png",
    companyName: "Vigilant Security Systems",
    companyURL: "",
    title: "AI & SOC L1 Engineer",
    date: "July 2025 - Present",
    responsibilities: [
      "Still at beginings and soon I will add good description.",
    ],
  },
  {
    review: "No review yet, soon I will add one.",
    reviewerURL: "",
    imgPath: "/images/gsg.png",
    logoPath: "/images/gsg.png",
    companyName: "Gaza Sky Geeks",
    companyURL: "https://www.linkedin.com/company/gaza-sky-geeks/",
    title: "Mentee – GSG x University of Cambridge Mentorship Program",
    date: "May 2025 - Present",
    responsibilities: [
      "<b>Mentorship Program:</b> Participated in the GSG x University of Cambridge Mentorship Program, focusing on soft skills, career readiness, and personal development..",
      "<b>One-on-One Coaching:</b> Engaged in regular English communication sessions with a Cambridge student mentor, improving fluency and confidence.",
      "<b>Cross-Cultural Skills:</b> Explored topics like academic support and personal growth, building communication, adaptability, and cultural awareness for global career success.",
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
    date: "April 2025 - May 2025",
    responsibilities: [
      "<b>Conversational AI:</b> Developed bilingual chatbots using Fine-Tuning and Retrieval-Augmented Generation (RAG) to boost user engagement and response accuracy.",
      "<b>Reinforcement Learning:</b> Designed and implemented models with Behavioral Cloning, enhancing automated decision-making in dynamic environments.",
      "<b>Client Collaboration:</b> Worked remotely with clients to deliver custom machine learning solutions, ensuring adaptability and high client satisfaction.",
    ],
  },
  {
    review: "I am waiting for the review from Joe Allen – Founder of Launched – but I am sure it will be a good one.",
    reviewerURL: "https://www.linkedin.com/in/joeallen20/",
    imgPath: "/images/launched.png",
    logoPath: "/images/launched.png",
    companyName: "Launched",
    companyURL: "https://www.linkedin.com/company/launchedtech/",
    title: "AI & Full-Stack developer Intern",
    date: "April 2025 - May 2025",
    responsibilities: [
      "<b>Full-Stack Development:</b> Contributed to the company’s main product by identifying and resolving bugs using Next.js and modern web development practices.",
      "<b>AI Integration:</b> Assisted in building AI-driven features to enhance product functionality and user experience.",
      "<b>Data Scraping:</b> Implemented web scraping solutions to gather structured data for use in analytics and product automation.",
    ],
  },
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
    review: "No review, but you can see my internship roadmap, and projects on my internship GitHub organization",
    reviewerURL: "https://github.com/AhdTech-Backend-Intern",
    imgPath: "/images/ahd.png",
    logoPath: "/images/ahd.png",
    companyName: " العهد لتقنيات الكمبيوتر وتطوير المواقع والمتاجر الالكترونية ",
    companyURL: "https://www.linkedin.com/company/alahd-tech/",
    title: "Backend Developer Intern",
    date: "May 2024 - October 2024",
    responsibilities: [
      "<b>Completed a 320-hour Java backend training,</b> building RESTful APIs with Spring Boot, Spring Data JPA, and Spring Security for real-world applications.",
      "<b>Developed microservices</b> for an e-commerce capstone project, including user, product, and order modules with secure JWT-based authentication.",
      "<b>Collaborated in code reviews and pair programming,</b> delivering a fully functional backend system now used as a model for future company projects.",
    ],
  },
  {
    review: "I am waiting for the review from  Suzan Barghouti from Stichting SPARK – Organizer of Palestine Launchpad program – but I am sure it will be a good one.",
    reviewerURL: "https://www.linkedin.com/in/suzan-barghouti-170638286/",
    imgPath: "/images/udacity.png",
    logoPath: "/images/udacity.png",
    companyName: "Udacity",
    companyURL: "https://www.linkedin.com/school/udacity/",
    title: "Machine Learning Intern",
    date: "May 2024 - October 2024",
    responsibilities: [
      "<b>Built supervised and unsupervised ML models</b> using Scikit-learn and TensorFlow, including classification, regression, and clustering techniques.",
      "<b>Developed neural networks</b> and applied hyperparameter tuning to improve model performance and generalization.",
      "<b>Completed hands-on projects</b> involving data cleaning, feature engineering, and model evaluation, strengthening practical machine learning skills.",
    ],
  },
  {
    review: "I am still watining for the review from the Leyan Zahdeh from Gaza Sky Geeks – Which was the supervisor of the internship – but I am sure it will be a good one.",
    reviewerURL: "https://www.linkedin.com/in/leyan-zahdeh-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB%F0%9F%97%AF-736907215/",
    imgPath: "/images/datacamp.png",
    logoPath: "/images/datacamp.png",
    companyName: "DataCamp",
    companyURL: "https://www.linkedin.com/school/datacampinc/",
    title: "Data Science Intern",
    date: "Jan 2024 - October 2024",
    responsibilities: [
      "Completed hands-on training in Python, SQL, PostgreSQL, Excel, and Power BI through a one-year internship with full access to DataCamp’s learning platform.",
      "Built real-world projects and competed in challenges, applying data analysis and visualization techniques across various domains.",
      "Won 1st place in the DataBridge Hackathon, showcasing strong analytical and problem-solving skills, and earned multiple Data Science certifications.",
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
  },
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
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
    name: "Software Engineering Inter",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Jan 2025",
    credentialID: "b0f26f3c728a",
    credentialURL: "https://www.hackerrank.com/certificates/b0f26f3c728a",
    description: "Earned certification by demonstrating advanced SQL skills and problem-solving abilities for relational databases. Tackled real-world scenarios with complex queries, data retrieval, and logical reasoning. Key skills include efficient use of JOINs, sorting and filtering data, solving database problems with critical thinking, and ensuring data integrity. Highlights proficiency in SQL for database management and data-driven decision-making.",
    skills: [
      "MySQL", "SQL", "Problem Solving", "Python (Programming Language)"
    ]
  },
  {
    name: "CSS Basic Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Dec 2024",
    credentialID: "ad7665968ab8",
    credentialURL: "https://www.hackerrank.com/certificates/ad7665968ab8",
    description: "I have earned CSS Basic certificate by solving many problems on HackerRank.",
    skills: [
      "Cascading Style Sheets (CSS)"
    ]
  },
  {
    name: "Java Basic Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Dec 2024",
    credentialID: "d3749873db0e",
    credentialURL: "https://www.hackerrank.com/certificates/d3749873db0e",
    description: "I have earned a java basic certificate on HackerRank, by solving many problems and questions.",
    skills: [
      "Data Structures", "Java"
    ]
  },
  {
    name: "JavaScript Basic Certificate",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "Dec 2024",
    credentialID: "d4e201ee514f",
    credentialURL: "https://www.hackerrank.com/certificates/d4e201ee514f",
    description: "JavaScript certification earned on HackerRank after doing an assessment.",
    skills: [
      "Data Structures", "JavaScript"
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
    name: "Data Analytics Bootcamp",
    issuer: "YouTube",
    issuerURL: "https://www.linkedin.com/company/youtube/",
    logoPath: "/images/youtube.png",
    date: "Aug 2024",
    credentialID: "",
    credentialURL: "https://github.com/Data-Analyst-Bootcamp",
    description: "I have complete the Data Analysis Bootcamp with Alex The Analyst on YouTube, gained many skills, and built many projects.",
    skills: [
      "Datasets",
      "Web Scraping",
      "Data Visualization",
      "Extract, Transform, Load (ETL)",
      "Data Analytics",
      "MySQL", "Microsoft Excel", "Data Manipulation", "Data Science", "Microsoft Power BI",
      "Data Cleaning", "Python"
    ]
  },
  {
    name: "AI Fundamentals Certificate",
    issuer: "DataCamp",
    issuerURL: "https://www.linkedin.com/school/datacampinc/",
    logoPath: "/images/datacamp.png",
    date: "May 2024",
    credentialID: "AIF0022760445620",
    credentialURL: "https://www.datacamp.com/skill-verification/AIF0022760445620",
    description: "I have completed the AI Fundamentals track, performed an exam, and gained a certification.",
    skills: [
      "Artificial Intelligence (AI)",
      "Data Analytics",
      "Data Science",
    ]
  },
  {
    name: "Data Literacy Certificate",
    issuer: "DataCamp",
    issuerURL: "https://www.linkedin.com/school/datacampinc/",
    logoPath: "/images/datacamp.png",
    date: "May 2024",
    credentialID: "DL0036510518177",
    credentialURL: "https://www.datacamp.com/skill-verification/DL0036510518177",
    description: "I have completed the DataCamp track for data literacy, finished the exam, and gained certification.",
    skills: [
      "Data Literacy",
      "Data Analytics",
      "Data Science",
    ]
  },
  {
    name: "Python Basic Certification",
    issuer: "HackerRank",
    issuerURL: "https://www.linkedin.com/company/hackerrank/",
    logoPath: "/images/hackerrank.png",
    date: "May 2024",
    credentialID: "7436060828e3",
    credentialURL: "https://www.hackerrank.com/certificates/7436060828e3",
    description: "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes",
    skills: [
      "Data Analytics",
      "Data Structures",
      "Data Science",
      "Python",
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

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  education,
  licensesAndCertifications,
};
