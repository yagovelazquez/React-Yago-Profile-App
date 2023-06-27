import {
    mobile,
    backend,
    fedeveloper,
    web,
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
    workana,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    coolset,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: fedeveloper,
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
      title: "Ecommerce/Webdeveloper",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2019 - April 2020",
      points: [
        "For a brief period, I had an online store where I sold over 1000 items.",
        "Implemented highly effective copywriting texts for improved conversion rates.",
        "Gained extensive experience working with pure HTML and CSS.",
        "Produced numerous video edits using After Effects.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Workana",
      icon: workana,
      iconBg: "#383E56",
      date: "Jan 2021 - June 2022",
      points: [
        "Developed and deployed responsive websites for diverse clients.",
        "Utilized modern web development frameworks and technologies such as React, Node.js, MongoDb, Mysql, to create dynamic and interactive web applications.",
        "Collaborated closely with clients to understand their specific needs and deliver customized solutions that aligned with their business goals.",
        "Provided ongoing website maintenance, updates, and technical support to ensure optimal performance and user experience.",
      ],
    },
    {
      title: "Fullstack Developer (React + Django)",
      company_name: "Coolset",
      icon: coolset,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Jun 2023",
      points: [
        "Developed a comprehensive web application featuring interactive graphs and dashboards, empowering companies to accurately measure and monitor their carbon footprint.",
        "Collaborated seamlessly with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality and user-centric products.",
        "Implemented multiple Django endpoints, ensuring thorough testing and seamless integration with the frontend components.",
        "Resolved numerous bugs and enhanced the application by implementing React best practices, resulting in improved performance and maintainability.",
        "Actively participated in code reviews, providing valuable feedback and insights to fellow developers, fostering a culture of continuous improvement."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };