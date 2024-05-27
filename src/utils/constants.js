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

export { skillsetIcons, portfolioCards };
