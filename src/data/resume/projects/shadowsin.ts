import shadowSinImg from "../../../assets/shadowsin.png"
import type { Project } from "../../../schema/ResumeSchema.ts"
import writeup from "./shadowsin.md?raw"

export const shadowSinProject: Project = {
  id: "shadow-sin",
  title: "ShadowSIN",
  startDate: "Aug 2021",
  endDate: "April 2022",
  tools: ["React", "React Router", "React Contexts", "MUI", "FontAwesome"],
  image: shadowSinImg,
  writeup: [writeup],
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
}
