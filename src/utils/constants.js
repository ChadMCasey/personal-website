const skillsetIcons = [
  {
    id: 1,
    name: "javascript",
    image: new URL("../assets/skills/javascript.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "HTML",
    image: new URL("../assets/skills/HTML.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "CSS",
    image: new URL("../assets/skills/CSS.png", import.meta.url).href,
  },
  {
    id: 4,
    name: "github",
    image: new URL("../assets/skills/github.png", import.meta.url).href,
  },
  {
    id: 5,
    name: "node",
    image: new URL("../assets/skills/node.png", import.meta.url).href,
  },
  {
    id: 6,
    name: "snowflake",
    image: new URL("../assets/skills/snowflake.png", import.meta.url).href,
  },
  {
    id: 7,
    name: "python",
    image: new URL("../assets/skills/python.png", import.meta.url).href,
  },
  {
    id: 8,
    name: "react",
    image: new URL("../assets/skills/react.png", import.meta.url).href,
  },
  {
    id: 9,
    name: "figma",
    image: new URL("../assets/skills/figma.png", import.meta.url).href,
  },
  {
    id: 10,
    name: "webpack",
    image: new URL("../assets/skills/webpack.png", import.meta.url).href,
  },
  {
    id: 11,
    name: "git",
    image: new URL("../assets/skills/git.png", import.meta.url).href,
  },
  {
    id: 12,
    name: "jest",
    image: new URL("../assets/skills/jest.png", import.meta.url).href,
  },
  {
    id: 13,
    name: "mongoDB",
    image: new URL("../assets/skills/mongoDB.png", import.meta.url).href,
  },
  {
    id: 14,
    name: "java",
    image: new URL("../assets/skills/java.png", import.meta.url).href,
  },
];

const portfolioCards = [
  {
    id: 1,
    date: "2024 - May",
    heading: "News Explorer",
    subheading: "MERN - Google NewsAPI",
    description: `News explorer is a full stack web application that
                  allows users to search news articles and bookmark
                  them to their personal page.`,
    link: "https://newsexplorer.iii.cl/",
    image: new URL("../assets/portfolio/NewsExplorer.png", import.meta.url)
      .href,
  },
  {
    id: 2,
    date: "2024 - Apr",
    heading: "WTWR",
    subheading: "MERN - OpenWeatherAPI ",
    description: `WTWR is a full stack web application that allows users
                  to upload clothing articles and select outfits based on
                  weather conditions.`,
    link: "https://wtwr.pii.at/",
    image: new URL("../assets/portfolio/WTWR.png", import.meta.url).href,
  },
  {
    id: 3,
    date: "2024 - Feb",
    heading: "Around The US",
    subheading: "JS - HTML - CSS",
    description: `Around the US is a frontend application that allows users
                  to upload & share their travel photos from around the United
                  States.`,
    link: "https://chadmcasey.github.io/se_project_aroundtheus",
    image: new URL("../assets/portfolio/AroundTheUS.png", import.meta.url).href,
  },
];

const experienceCards = [
  {
    id: 1,
    date: "2023 June - present",
    heading: "Data Analyst - DriveTime",
    subheading: "Python - SQL - Snowflake - Tableau - Excel",
    description: `As a Performance Marketing Data Analyst, my objective is to
                  produce data driven insights regarding DriveTimes email marketing
                  and web sessions.`,
    bullets: [
      "Developed automated reporting pipelines via Python, SQLalchemy and Excel.",
      "Modeled email data as a directed graph to examine user drop off points.",
      "Utilized statistical testing methods to validate experimentation results.",
    ],
  },
  {
    id: 2,
    date: "June 2022 - September 2022",
    heading: "MP&L Analyst - Gestamp",
    description: `As an intern at Gestamp North America, i had the opportunity to work
                  as a Materials Planning & Logistics Data Analyst. My focus was on exploring
                  logistics inefficiencies & managing communication between regional facilities.`,
    bullets: [
      "Facilitated communication between 4 regional company locations and our HQ in Troy, MI.",
      "Utilized Excel to drive data informed decisions regarding Materials Planning & Logistics.",
      "Explored the application of Graph Theory, Networks, and RFID in warehousing.",
    ],
  },
  {
    id: 3,
    date: "June 2021 - September 2021",
    heading: "Supply Chain Leadership Development - Jaeger Unitek",
    subheading: "Python - SQL - Snowflake - Tableau - Excel",
    description: `As an intern at Jaeger Unitek Sealing Solutions, i had the opportunity to
                  partake in their rotational leadership development program. `,
    bullets: [
      "Rotated through sales, marketing, engineering, R&D and operations.",
      "Explored cost savings initiatives through recycling of scrap material.",
      "Had the opportunity to learn about the rubber and plastics extrusion industry.",
    ],
  },
];

const educationCards = [
  {
    id: 1,
    date: "Feb 2024 - May 2024",
    heading: "Full Stack Web Development Bootcamp - TripleTen",
    description: `In May of 2024, i graduated from TripleTens 10-month 730-hour full stack web
                  development bootcamp. This rigorous program focuses on the MERN stack (MongoDB,
                  ExpressJS, ReactJS, NodeJS).`,
  },
  {
    id: 2,
    date: "Sept 2023 - Jan 2024",
    heading: "DSA - OOP - Georgia Tech on edX (by MIT)",
    description: `Completed Georgia Tech’s 200 hour DSA professional certificate. Completed Georgia
                  Tech’s 120 hour OOP professional certificate.`,
  },
  {
    id: 3,
    date: "September 2019 - May 2023",
    heading: "Bachelors In Supply Chain Management - Michigan State University",
    description: `In May of 2023, i graduated with my bachelors in Supply Chain Management. During my
                  time at MSU, i successfully maintained a 4.0 GPA and was 1 of 206 students to receive
                  the Board of Trustees scholarship. `,
  },
];

const footerLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chadcaseyswe/",
  },
  {
    id: 2,
    name: "Resume",
    url: "https://docs.google.com/document/d/1wkzZOwhGyBNnN_YHL0Fy98u_6eHEuTHIt_VS-fxANsI",
  },
  {
    id: 3,
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCNv_sC_Pn4aE7nVHO_ID_Cg",
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com/ChadMCasey",
  },
];

export {
  skillsetIcons,
  portfolioCards,
  experienceCards,
  educationCards,
  footerLinks,
};
