/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "joel irenge's Portfolio",
  description:
    " software developer and Hankuk University (한국외국어대학교) graduate, passionate about building innovative, scalable, and impactful tech solutions. Always striving to push boundaries in web, app, and AI development..",
  og: {
    title: "irenge joel's Portfolio",
    type: "website",
    url: "https://github.com/joebaga",
  },
};

//Home Page
const greeting = {
  title: "joel irenge ",
  logo_name: "joel irenge",
  nickname: "joe bag",
  subTitle:
    "software developer and Hankuk University (한국외국어대학교) graduate, passionate about building innovative, scalable, and impactful tech solutions. Always striving to push boundaries in web, app, and AI development..",
  resumeLink: "https://drive.google.com/drive/u/0/home",
  portfolio_repository: "https://github.com/joebaga",
  githubProfile: "https://github.com/joebaga",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/joebaga",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/irenge-bahagarhe-joel-210099279/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "https://github.com/joebaga",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/bhgrjoe",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/joelirenge",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hankuk University (한국외국어대학교)",
      subtitle: "Computer Engineering",
      logo_path: "hufs.svg",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://computer.hufs.ac.kr/computer/index.do",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Engineering",
      logo_path: "hufs.svg",
      certificate_link: "https://computer.hufs.ac.kr/computer/index.do",
      alt_name: "hankuk University",
      color_code: "#8C151599",
    },
    {
      title: "Machine Learning",
      subtitle: "Engineering",
      logo_path: "hufs.svg",
      certificate_link: "https://computer.hufs.ac.kr/computer/index.do",
      alt_name: "hankuk University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I am a passionate and self-driven developer with experience working on numerous projects and personal initiatives. Throughout my journey, I have honed my skills in AI, machine learning, and software development by building real-world solutions. Beyond tech, I have also been a basketball coach during my student years, which has strengthened my leadership and teamwork abilities. I actively engage with open-source communities as a representative, organizing events and contributing to collaborative projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "NONE",
          company: "NONE",
          company_url: "NONE",
          logo_path: "NONE",
          duration: "NONE",
          location: "NONE",
          description: "NONE",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "NONE",
          company: "NONE",
          company_url: "NONE",
          logo_path: "NONE",
          duration: "NONE",
          location: "NONE",
          description: "NONE",
          color: "#000000",
        },
      ],
    },
    {
      title: "PART TIME",
      experiences: [
        {
          title: "BASKETBALL COACH",
          company: "IKE Sports Club  ",
          company_url: "https://ikesports.modoo.at/",
          logo_path: "IKE.jpeg",
          duration: "2022 - 2025",
          location: "488-9, B-dong, Geumgok-dong, Hwaseong-si, Gyeonggi-do ",
          description:
            "Coaching kids in basketball was a rewarding part-time role that taught me more than just the game. It was about fostering discipline, teamwork, and resilience in young players. I learned to communicate effectively, adapt to different learning styles, and create a positive, structured environment. This experience sharpened my leadership, problem-solving, and mentoring skills, which have proven invaluable in both my personal and professional life.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I'm always excited to explore new technologies and build interesting projects! I've worked on a variety of personal and open-source projects, especially in AI, deep learning, and software development. I love experimenting with different tools, deploying data science models, and bringing ideas to life on the web using cloud infrastructure. There's still so much to learn, and I'm always eager to take on new challenges and improve my skills!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: ".",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "publications",
      name: "NONE",
      createdAt: "NONE",
      description: "NONE",
      url: "NONE",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prfl1.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "my contact",
    subtitle:
      "Location: Sillim-dong, Gwanak-gu, 1542-14, Seoul, South Korea , Gmail: jlirenge@gmail.com",

    avatar_image_path: "jlb.jpeg",
  },
  addressSection: {
    title: "Address",
    subtitle: "south korea",
    locality: "seoul",
    country: "South Kores",
    region: "gwanak-go",
    postalCode: "0000",
    streetAddress: "Sillim",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://kko.kakao.com/OuCwl4jw-L",
  },
  phoneSection: {
    title: "My phone",
    subtitle: "010-6637-7542",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
