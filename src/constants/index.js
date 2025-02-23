import {
  ai,
  nlp,
  hack,
  ml,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sih,
  dpbh,
  enc,
  nasa,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Developer",
    icon: ml,
  },
  {
    title: "AI Developer",
    icon: ai,
  },
  {
    title: "NLP Developer",
    icon: nlp,
  },
  {
    title: "Hackathon Mentor",
    icon: hack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ML Model Developer",
    company_name: "Dark Pattern Buster Hackathon",
    icon: dpbh,
    iconBg: "#383E56",
    date: "February 2024",
    points: [
      "Developed an ML model to detect dark patterns in e-commerce, identifying manipulative design practices like forced continuity and misdirection.",
      "Implemented NLP techniques (SpaCy) for textual analysis, extracting misleading content from product descriptions and checkout flows.",
      "Utilized computer vision (OpenCV, TensorFlow) for visual pattern detection, analyzing UI elements to spot deceptive designs.",
      "Promoted ethical design and transparency in online shopping, helping users make informed decisions by exposing manipulative tactics.",
    ],
  },
  {
    title: "AIML Lead",
    company_name: "Encoders",
    icon: enc,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - May 2025",
    points: [
      "Leading AI/ML initiatives by mentoring members, organizing workshops, and guiding projects in machine learning and deep learning.",
      "Driving research and innovation by exploring cutting-edge AI technologies, including transformers, LLMs, and computer vision applications.",
      "Collaborating on real-world AI projects, helping team members build and deploy intelligent solutions for competitions and industry challenges.",
      "Fostering a learning community by sharing knowledge, conducting hackathons, and encouraging hands-on experimentation in AI/ML.",
    ],
  },
  {
    title: "AI Consultant",
    company_name: "NASA International Space Apps Challenge",
    icon: nasa,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Developed AI/ML-driven solutions to tackle space and Earth-related challenges, leveraging data science and machine learning techniques.",
      "Collaborated with a multidisciplinary team to research, design, and implement innovative projects aligned with NASA’s problem statements.",
      "Presented and defended solutions to judges, demonstrating technical expertise, problem-solving skills, and the real-world impact of the project.",
      "Gained hands-on experience with NASA datasets, applying advanced analytics, AI models, and software tools to extract insights and propose solutions.",
    ],
  },
  {
    title: "ML Developer",
    company_name: "SIH 2024",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "Dec 2024",
    points: [
      "Led the AI/ML development for solving complex problem statements provided by government and industry partners.",
      "Engineered practical, scalable solutions, focusing on real-world implementation and industry applicability.",
      "Worked in a high-pressure, competitive environment, brainstorming, prototyping, and refining ideas within strict deadlines.",
      "Engaged with mentors and domain experts, integrating feedback to enhance solution effectiveness and feasibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rudranil's expertise in machine learning and AI is truly remarkable. His ability to break down complex concepts and develop innovative solutions is outstanding. Working with him was an inspiring experience!",
    name: "Amrita Verma",
    designation: "AI Researcher",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I was amazed by Rudranil's problem-solving skills and technical knowledge. His AI-driven approach to real-world challenges showcases his dedication to the field. A true innovator in machine learning!",
    name: "Ryan Patel",
    designation: "Data Scientist",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Rudranil's passion for AI and ML is unmatched. His work on optimizing models and implementing cutting-edge algorithms proves his deep understanding of the domain. Looking forward to seeing his future projects!",
    name: "James Carter",
    designation: "Tech Lead",
    company: "AI Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: " AI-Driven Customized Time-Slot Delivery",
    description:
      "Developed an AI-driven system to optimize delivery scheduling by predicting customer preferences and operational constraints. The solution enhanced logistics efficiency by intelligently allocating time slots, reducing delivery delays, and improving overall customer satisfaction. By analyzing historical data and real-time inputs, the system ensured better adherence to schedules, making the delivery process more seamless and reliable.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Optimization Algorithm",
        color: "green-text-gradient",
      },
      {
        name: "Data-Driven Decision Making",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Detection of Dark Patterns in E-Commerce",
    description:
      "Developed a machine learning model to detect manipulative design practices in e-commerce platforms, such as deceptive pricing, forced continuity, and misleading navigation. The system analyzed both textual and visual elements to identify dark patterns that trick users into unintended actions. By enhancing transparency and promoting ethical design, the project aimed to create a safer and more user-friendly online shopping experience.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hand Gesture-Based Digital System Control",
    description:
      "Developed an intuitive system that enables users to control digital devices using real-time hand gesture recognition. The solution provides a seamless, touch-free interaction experience, enhancing accessibility and user convenience. This technology has potential applications in touchless interfaces, assistive technology, and AR/VR systems, improving human-computer interaction in various fields.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "Gesture Recognition",
        color: "green-text-gradient",
      },
      {
        name: "Human-Computer Interaction",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
