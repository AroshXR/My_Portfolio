import shopX from '/src/assets/shopX.png';
import examcore from '/src/assets/examcore.jpeg';
import HTML5 from '/src/assets/Logos/Tech/HTML5.png';
import CSS3 from '/src/assets/Logos/Tech/CSS3.png';
import javascript from '/src/assets/Logos/Tech/javascript.png';
import PHP from '/src/assets/Logos/Tech/PHP.png';
import MySQL from '/src/assets/Logos/Tech/MySQL.png';
import java from '/src/assets/Logos/Tech/java.png';


export const myProjects = [
  {
    id: 1,
    title: "ShopX(Online E-Shopping Management System) - Group Project",
    description:
      "ShopX is a dynamic and user-friendly online shopping web application built using Java Servlets, JSP, JDBC, and a relational database. It follows the MVC (Model-View-Controller) architectural pattern to ensure modularity, maintainability, and scalability.",
    subDescription: [
      "User-friendly Interface: Clean JSP-based front end for browsing products and managing the shopping experience.",
      "Product Catalog: Display of available products with details such as name, price, and description.",
      "Shopping Cart: Add, update, or remove items from the cart with real-time price updates.",
      "Vendor Operations: Vendors can manage their profiles, manage products' information, and track sales performance",
    ],
    href: "https://github.com/AroshXR/ShopX_Online_E_Shopping_Management_System",
    logo: "",
    image: shopX,
    tags: [
      {
        id: 1,
        name: "JSP Servlets",
        path: "#",
      },
      {
        id: 2,
        name: "java",
        path: java,
      },
      {
        id: 3,
        name: "MySQL",
        path: MySQL,
      },
      {
        id: 3,
        name: "MVC Architecture",
        path: "#",
      },
    ],
  },
  {
    id: 2,
    title: "ExamCore (Online Examination Management System) - Group Project",
    description:
      "A exam management system for conducting online examinations.",
    subDescription: [
      "We created a website named \"ExamCore\" as our 1st year 2nd semester IWT module group project in SLIIT. We used HTML, CSS, JS, PHP and MySQL to create this web site and five of our group members contributed to this project via GITHUB.",
      "This website is created to manage examinations. There are three main actors emerge in this website namely Examiner, Student, Administrator.",
      "User can create exams, manage examiners, manage students, send notifications, answer to the papers ......",
      "We were well planned this project by gathering requirements, drawing diagrams and creating reports before implementation.",
      "We successfully tested, finalized, and finished the project with the hard work of five of us.",
    ],
  href: "https://github.com/AroshXR/ExamCore_Online_Examination_Management_System",
  logo: "",
  image: examcore,
  tags: [
    {
      id: 1,
      name: "HTML",
      path: HTML5,
    },
    {
      id: 2,
      name: "CSS",
      path: CSS3,
    },
    {
      id: 3,
      name: "JavaScript",
      path: javascript,
    },
    {
      id: 4,
      name: "PHP",
      path: PHP,
    },
    {
      id: 5,
      name: "MySQL",
      path: MySQL,
    },
  ],
  },
];

// export const mySocials = [
//   {
//     name: "WhatsApp",
//     href: "",
//     icon: "/assets/socials/whatsApp.svg",
//   },
//   {
//     name: "Linkedin",
//     href: "https://www.linkedin.com/in/ali-sanati/",
//     icon: "/assets/socials/linkedIn.svg",
//   },
//   {
//     name: "Instagram",
//     href: "https://www.instagram.com/ali.sanatidev/reels/",
//     icon: "/assets/socials/instagram.svg",
//   },
// ];

// export const experiences = [
//   {
//     title: "Software Developer",
//     job: "Security & Defense Projects",
//     date: "2021-2023",
//     contents: [
//       "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
//       "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
//       "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
//       "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
//       "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
//     ],
//   },
//   {
//     title: "Back-End Developer",
//     job: "Car Manufacture",
//     date: "2023-2024",
//     contents: [
//       "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
//       "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
//       "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
//       "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
//       "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
//     ],
//   },
//   {
//     title: "Freelance Developer",
//     job: "Self-Employed",
//     date: "2025-Present",
//     contents: [
//       "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
//       "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
//     ],
//   },
// ];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
// ];
