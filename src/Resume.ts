import type { ResumeSchema } from "./schema/ResumeSchema.ts"

export const resume: ResumeSchema = {
  contact: {
    email: "contact@stephenawilson.ca",
    linkedIn: "stephenwilson356",
    gitHub: "CptnFizzbin",
  },
  profile: [
    "I am a passionate web developer who enjoys building tools to help others. I am always\n" +
      "thinking about how a system can be improved and how to best implement a new\n" +
      "feature. I have strong experience with web technologies such as React, and\n" +
      "TypeScript, and experience building RESTful backend systems with NodeJS, Spring\n" +
      "Boot, and PostgresSQL.",
  ],
  experience: [
    {
      title: "Sr. Full Stack Developer",
      organization: "OpenText",
      location: "Waterloo",
      startDate: "2021",
      endDate: "Current",
      description: [
        "Project Manager for long term products, prioritizing and developing new features\n" +
          "while also working on upgrading older systems to newer technologies.",

        "Developed and deployed a centralized developer portal using Backstage. It provided\n" +
          "a unified tasks plugin that allowed for seeing everything assigned to a user from\n" +
          "across multiple systems in one place. Created and maintained multiple automation\n" +
          "templates that allowed developers to spin up new projects, add standardized jobs to\n" +
          "their GitLab pipelines, or update configuration to match best practices.",

        "Created a code signing system that allows for centralized signing of application files\n" +
          "that integrates with release management systems, and provided secure validation\n" +
          "of clients to limit access to the externally valid release certificates.",

        "Created a bridge tool for migrating from Angular 1 to React for our internal projects.\n" +
          "It enabled 2-way communication between the two frameworks to allow us to\n" +
          "migrate parts of a page instead of having to do everything all at once.",
      ],
    },
    {
      title: "Tools Developer",
      organization: "OpenText",
      location: "Waterloo",
      startDate: "2015",
      endDate: "2021",
      description: [
        "Reverse engineered databases and wrote scripts to automate the migration of\n" +
          "acquisitions to the internal test case management system.",
        "Wrote custom applications to manage syncing data between systems",
        "Created an application that provided a front end to a secrets scanning system to help\n" +
          "developers identify and remove sensitive information from code bases.",
        "Worked on maintaining a large Ruby on Rails application that helped manage\n" +
          "manually executed test cases.",
        "Was involved in developing new features, and improving legacy portions of the application.",
      ],
    },
  ],
  projects: [
    {
      title: "ShadowSIN",
      startDate: "Aug 2021",
      endDate: "April 2022",
      tools: ["React", "React Router", "React Contexts"],
      description: [],
      links: [
        {
          title: "Live Site",
          url: "https://shadowsin.stephenawilson.ca/Artemis",
        },
        {
          title: "GitHub",
          url: "https://github.com/CptnFizzbin/shadow-sin",
        },
      ],
    },
    {
      title: "scoreboard-io.ca",
      startDate: "Jan 2017",
      endDate: "March 2017",
      tools: ["React", "Redux", "Bootstrap"],
      description: [
        "A scoreboard app, primarily written for the card game Wizard, I envisioned\n " +
          "as a more generic place to record and track scores in card games and boardgames.",
        "Original version was written with AngularJS using material design. Then\n" +
          "over the course of a 5-hour road trip I rewrote it using React and Redux.",
        "This was the project that I primarily learned React with, and is my most\n" +
          "complete side project. I still use it from time to time when I need to\n" +
          "count up scores in a board game.",
      ],
      links: [
        { title: "Live Site", url: "https://scoreboard-io.ca" },
        {
          title: "GitHub",
          url: "https://github.com/CptnFizzbin/scoreboard-io",
        },
      ],
    },
  ],
  education: [
    {
      title: "Computer Programmer/Analyst",
      organization: "Georgian College",
      startDate: "2012",
      endDate: "2015",
      awards: ["Graduated with Honours", "Dean's List"],
    },
  ],
  skills: [
    { name: "TypeScript", years: 6 },
    { name: "React", years: 6 },
    { name: "Java", years: 2 },
    { name: "PostgresSQL", years: 8 },
  ],
  tools: [
    "Jest | Vitest | JUnit",
    "Vite | Webpack",
    "TanStack Query | React Router",
    "Spring Boot | Maven",
    "Eslint | Prettier",
    "GitLab CI/CD",
  ],
  interests: [
    "Board Games",
    "Table Top RPGs",
    "Video Games",
    "Web Security",
    "UX Design",
  ],
  life: [
    "Outside of work, I am a Game Master for table top RPGs like Dungeons\n" +
      "and Dragons or Pathfinder. I have run two long term campaigns, and\n" +
      "have started a new adventure recently with a new group of players.",
  ],
}
