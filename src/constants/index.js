import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sumharness,
    webprofile,
    jobit,
    threejs,
    ssm,
    sfsu,
    profilep,
    gymapp,
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
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "iOS Application Developer",
      icon: mobile,
    },
    {
      title: "React Native Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
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
      title: "Software Trainee",
      company_name: "SSM Infotech",
      icon: ssm,
      iconBg: "#E6DEDD",
      date: "July 2018 - August 2018",
      points: [
        "Designed and tested client-server network components.",
        "Learned software engineering process improvements and best practices.",
        "Assisted with the design and development of HTML projects. Like Registration form and Login form.",
        "Managed to create more efficient as well as friendly UI for users of the Company's webpage using HTML and Adobe XD.",
      ],
    },
    {
      title: "Student Instructor",
      company_name: "San Francisco State University",
      icon: sfsu,
      iconBg: "#383E56",
      date: "Jan 2020 - Present",
      points: [
        "Mentored students with fair yet specific performance modules, offering support when needed, and providing constructive feedback on a case-by-case basis.",
        "Retained interest and maximized receptive learning by educating students using hands-on instructional techniques.",
        "Supported student learning objectives through personalized and small group assistance.",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
      name: "Bruce Lee",
      designation: "CFO",
      company: "Batman Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEAF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Black Widow",
      designation: "CTO",
      company: "Hulk Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job-Gram",
      description:
        "Worked along with a team of 6 as a FrontEnd Lead to prepare fullstack Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "figma",
          color: "orange-text-gradient",
        },
        {
          name: "javaScript",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "http://ec2-3-101-144-131.us-west-1.compute.amazonaws.com/",  // Web-Link, Source-Code-Link is private
    },
    {
      name: "Rutu's Portfolio",
      description:
        "A comprehensive 3D Portfolio page using recent frameworks to highlight my skills, projects, and experiences, and demonstrate my potential so reach out to connect!",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "three.js",
          color: "orange-text-gradient",
        },
        {
          name: "react-three-fiber",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        }
      ],
      image: profilep,
      source_code_link: "https://github.com/Rutvij-P/3d-portfoliopage",
    },
    {
      name: "LocomotiveScroll Gallery",
      description:
        "Created a very user friendly locomotive scroll gallery with Parallax effect with a very responsive UI and a very smooth scrolling experience.",
      tags: [
        {
          name: "Gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
      ],
      image: webprofile,
      source_code_link: "https://jivtur-portfolio-fg1q3qhyf-rutvij-p.vercel.app",
    },
    {
      name: "Workout Recipe App",
      description:
        "Created an iOS Application from ground-up using SwiftUI and Swift. It is a workout recipe app that allows users to create their own workout recipes and share with other users.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "Swift",
          color: "pink-text-gradient",
        },
      ],
      image: gymapp,
      source_code_link: "https://github.com/Rutvij-P/GymMealApp",
    },
    {
      name: "Cori & PerlMutter",
      description:
        "Using the runtime data from the code, computed some derived performance metrics using OpenMP Parallelism and more then create charts of this data using py-scripts.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CMake",
          color: "pink-text-gradient",
        },
        {
          name: "Makefile",
          color: "orange-text-gradient",
        },
      ],
      image: sumharness,
      source_code_link: "https://github.com/Rutvij-P/sum_harness",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };