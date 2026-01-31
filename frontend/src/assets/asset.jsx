import jobofind from "./jobofind.png"
import hero from './hero.png'
import applyIcon from './applyIcon.png'
import resumeUploadIcon from './resumeUploadIcon.png'
import searchJobIcon from './searchJobIcon.png'
import createUserIcon from './createUserIcon.png'
import digitalMarketingIcon from './digitalMarketingIcon.png'
import financeIcon from './financeIcon.png'
import graphicIcon from './graphicIcon.png'
import musicIcon from './musicIcon.png'
import videoIcon from './videoIcon.png'
import webDevelopMentIcon from './webDevelopMentIcon.png'
import healthCareIcon from './healthCareIcon.png'
import dataScienceIcon from './dataScienceIcon.png'
import facebook_icon from './metaIcon.png'
import google_icon from './googleIcon.png'
import saveLaterIcon from './saveLater.png'
export const asset = {
  jobofind,
  hero,
  applyIcon,
  resumeUploadIcon,
  searchJobIcon,
  createUserIcon,
  facebook_icon,
  google_icon,
  saveLaterIcon
};

export const vacancies = [
  {
    _id: 1,
    count: "45,600",
    title: "Web Development",
  },
  {
    _id: 2,
    count: "32,800",
    title: "Mobile App Development",
  },
  {
    _id: 3,
    count: "27,400",
    title: "UI/UX Design",
  },
  {
    _id: 4,
    count: "22,900",
    title: "Data Science",
  },
  {
    _id: 5,
    count: "19,700",
    title: "Digital Marketing",
  },
  {
    _id: 6,
    count: "15,200",
    title: "Cybersecurity",
  },
  {
    _id: 7,
    count: "12,500",
    title: "Project Management",
  },
  {
    _id: 8,
    count: "10,300",
    title: "Cloud Computing",
  },
  {
    _id: 9,
    count: "8,900",
    title: "Content Writing",
  },
  {
    _id: 10,
    count: "7,800",
    title: "Accounting & Finance",
  },
];

export const howWorks = [
  {
    _id: 1,
    icon: createUserIcon,
    title: "Create account",
    desc: "Sign up with your email and password",
  },
  {
    _id: 2,
    icon: resumeUploadIcon,
    title: "Upload resume",
    desc: "Upload your resume in PDF format",
  },
  {
    _id: 3,
    icon: searchJobIcon,
    title: "Find job",
    desc: "Search for your dream job",
  },
  {
    _id: 4,
    icon: applyIcon,
    title: "Apply Job",
    desc: "Apply for the job you like",
  },
];

export const categories = [
  {
    _id: 1,
    name: "Digital Marketing",
    icon: digitalMarketingIcon,
    positions: "20",
  },
  { _id: 2, name: "Finance", icon: financeIcon, positions: "30" },
  { _id: 3, name: "Graphic Design", icon: graphicIcon, positions: "20" },
  { _id: 4, name: "Music", icon: musicIcon, positions: "70" },
  { _id: 5, name: "Video", icon: videoIcon, positions: "40" },
  { _id: 6, name: "Web Development", icon: webDevelopMentIcon, positions: "100" },
  { _id: 7, name: "Health & Care", icon: healthCareIcon, positions: "48" },
  { _id: 8, name: "Data Science", icon: dataScienceIcon, positions: "103" },
];

export const jobs = [
  {
    _id: 1,
    title: "Data Scientist",
    company: "ABC Company",
    description:
      "We are looking for a talented data scientist to join our team.",
    location: "New York, USA",
    salary: "$80,000",
    type: "Full-time",
    image: facebook_icon,
    requirements: [
      "Proficiency in Python and R",
      "Experience with machine learning models",
      "Strong analytical skills",
    ],
    benefits: ["Health insurance", "Flexible working hours", "Annual bonus"],
    postedDate: "2 days ago",
    jobLevel: "Senior",
    education: "Bachelor's degree",
    experience: "5 years",
  },
  {
    _id: 2,
    title: "Frontend Developer",
    company: "Tech Solutions",
    description:
      "We are looking for a creative and passionate Frontend Developer skilled in Reactjs You will be responsible for building engaging, responsive, and user-friendly web interfaces. Strong understanding of modern JavaScript, component-based architecture, and UI/UX design is essential. Join our team to create impactful digital experiences that users love",
    location: "San Francisco, USA",
    salary: "$95,000",
    type: "Full-time",
    image: google_icon,
    requirements: [
      "Strong knowledge of React.js",
      "Experience with Tailwind CSS",
      "Familiarity with REST APIs",
    ],
    benefits: [
      "Remote work options",
      "Health and dental insurance",
      "Stock options",
    ],
    postedDate: "1 week ago",
    jobLevel: "Mid-level",
    education: "Bachelor's degree",
    experience: "3 years",
  },
  {
    _id: 3,
    title: "Backend Developer",
    company: "Innovatech",
    description:
      "Looking for a skilled Node.js developer to work on scalable APIs.",
    location: "London, UK",
    salary: "$85,000",
    type: "Full-time",
    image: facebook_icon,
    requirements: [
      "Proficiency in Node.js and Express.js",
      "Experience with MongoDB",
      "Understanding of microservices",
    ],
    benefits: [
      "Flexible schedule",
      "Paid vacations",
      "Professional development",
    ],
    postedDate: "5 days ago",
    jobLevel: "Mid-level",
    education: "Bachelor's degree",
    experience: "4 years",
  },
  {
    _id: 4,
    title: "UI/UX Designer",
    company: "Creative Minds",
    description:
      "We are hiring a UI/UX designer with a passion for modern web design.",
    location: "Toronto, Canada",
    salary: "$70,000",
    type: "Part-time",
    image: google_icon,
    requirements: [
      "Strong portfolio of UI/UX projects",
      "Proficiency in Figma or Adobe XD",
      "Good understanding of user-centered design",
    ],
    benefits: ["Remote flexibility", "Wellness programs", "Team retreats"],
    postedDate: "3 days ago",
    jobLevel: "Junior",
    education: "Bachelor's degree",
    experience: "2 years",
  },
  {
    _id: 5,
    title: "Digital Marketing",
    company: "MarketPro",
    description: "Join our marketing team to boost brand awareness and leads.",
    location: "Berlin, Germany",
    salary: "$60,000",
    type: "Contract",
    image: facebook_icon,
    requirements: [
      "SEO and SEM experience",
      "Content creation skills",
      "Familiarity with Google Analytics",
    ],
    benefits: [
      "Work-from-home allowance",
      "Training programs",
      "Performance incentives",
    ],
    postedDate: "1 day ago",
    jobLevel: "Mid-level",
    education: "Bachelor's degree",
    experience: "3 years",
  },
  {
    _id: 6,
    title: "Project Manager",
    company: "AgileWorks",
    description:
      "Seeking a project manager to lead software development teams.",
    location: "Sydney, Australia",
    salary: "$100,000",
    type: "Full-time",
    image: google_icon,
    requirements: [
      "PMP certification preferred",
      "Agile/Scrum knowledge",
      "Excellent communication skills",
    ],
    benefits: ["Company laptop", "Paid parental leave", "Annual salary review"],
    postedDate: "4 days ago",
    jobLevel: "Senior",
    education: "Master's degree",
    experience: "6 years",
  },
];