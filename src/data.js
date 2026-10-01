// import { infinity } from "./assets/infinite.svg";
import tribalFluxPreview from "./previews/tribalfluximg.png";
import portfolioPreview from "./previews/portfolioimg.png";
import resourceBookmarkerPreview from "./previews/resbookmark.png";
import toDoAppPreview from "./previews/todopic.png";
import blogPreview from "./previews/bkblog.png";

export const stats = [
    { num: "5", label: "Projects Built" },
    { num: "3", label: "Years of Experience" },
    { num: "3", label: "Clients Satisfied" },
    { num: "∞", label: "Curiosity" },
];

export const skills = [
    {
        group: "My Stack",
        items: [
            { name: "HTML5", pct: 90 },
            { name: "CSS3", pct: 82 },
            { name: "JavaScript", pct: 80 },
            { name: "TypeScript", pct: 40 },
            { name: "React", pct: 75 },
            { name: "Node.js", pct: 65 },
            { name: "mySQL", pct: 60 },
        ],
    },
    {
        group: "Tools & Others",
        items: [
            { name: "Git & GitHub", pct: 75 },
            { name: "Firebase", pct: 75 },
            { name: "Vite", pct: 75 },
            { name: "Canva", pct: 60 },
        ],
    },
];

export const projects = [
    {
        name: "TribalFlux Landing Page",
        desc: "A responsive landing page for a startup built with modern web technologies.",
        tags: ["SCSS", "JavaScript"],
        url: "https://tribalflux.com/",
        preview: tribalFluxPreview,
        previewDesc:
            "Tribalflux is a startup that provides solutions to businesses, helping them thrive in the world. This website was built with a component-based architecture using React and TypeScript, ensuring scalability and maintainability. The design is fully responsive, providing an optimal user experience across desktop, tablet, and mobile devices. The website was deployed to Firebase, with performance optimization and accessibility considerations implemented throughout the development process.",
    },
    {
        name: "social media app",
        desc: "A blog like social media app where users can share thoughts and experiences.",
        tags: [
            "ReactJs",
            "Node.js",
            "PostgreSQL",
            "TailwindCSS",
            "JWT",
            "Express",
        ],
        url: "https://bkblog-nodejs.vercel.app/",
        preview: blogPreview,
        previewDesc:
            "A modern, full-stack social media web app built with Node.js and PostgreSQL, featuring secure JWT-based authentication and a clean, responsive UI powered by Tailwind CSS. Users can create and explore posts, engage through a dynamic comments section, and interact with content using like functionality.",
    },
    {
        name: "Portfolio",
        desc: "My personal portfolio website built with ReactJs.",
        tags: ["React", "CSS"],
        url: "https://oklo-portfolio.vercel.app/",
        preview: portfolioPreview,
        previewDesc:
            "This is my personal portfolio website built with ReactJs, showcasing my projects and skills.",
    },
    {
        name: "Resource Bookmarker",
        desc: "A web app that allows users to bookmark and organize their favourite online resources.",
        tags: ["CSS", "JavaScript"],
        url: "https://simple-resource-bookmarker.vercel.app/",
        preview: resourceBookmarkerPreview,
        previewDesc:
            "A web app that allows users to bookmark and organize their favourite online resources.",
    },
    {
        name: "To Do App",
        desc: "A simple web app that helps manage daily tasks and track progress.",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://to-do-list-app-drab-eta.vercel.app/",
        preview: toDoAppPreview,
        previewDesc:
            "A simple to-do list app built with ReactJs, allowing users to manage their daily tasks and track progress.",
    },
];

export const experience = [
    {
        date: "Apr 2023 — Oct 2023",
        company: "Galaxy Backbone Ltd",
        location: "Abuja",
        role: "Data Management Analyst",
        badge: null,
        bullets: [
            "Built automated reporting dashboards using data visualization tools, translating complex requirements into user-friendly interfaces.",
            "Collaborated with cross-functional teams to deliver technical solutions, practicing professional communication with stakeholders.",
            "Maintained structured approach to data systems, ensuring accuracy and reliability through systematic processes.",
            "Demonstrated ownership of deliverables, meeting tight deadlines in a fast-paced environment.",
        ],
    },
    {
        date: "November 2025",
        company: "TribalFluxng",
        location: "Abuja",
        role: "Web Development",
        badge: "Freelance",
        bullets: [
            "Translated client requirements into a scalable React-based component system, building a responsive landing page with reusable components and clean architecture.",
            "Implemented responsive UI system ensuring optimal performance across desktop, tablet, and mobile devices.",
            "Developed component-based architecture using React and TypeScript, demonstrating understanding of modern frontend patterns.",
            "Deployed to Firebase with performance optimization and accessibility considerations.",
        ],
    },
    {
        date: "Apr 2023 — Oct 2023",
        company: "Galaxy Backbone Ltd",
        location: "Abuja",
        role: "Power Systems Engineer",
        badge: "Intern",
        bullets: [
            "Maintained power systems infrastructure, ensuring 99% uptime for critical operations.",
            "Configured and monitored system infrastructure for optimal performance.",
            "Troubleshot and resolved network issues, minimizing downtime.",
        ],
    },
];
