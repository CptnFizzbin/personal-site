import scoreboardIoImg from "../../../assets/scoreboard-io.png"
import type { Project } from "../../../schema/ResumeSchema.ts"
import writeup from "./scoreboard-io.md?raw"

export const scoreboardIoProject: Project = {
  id: "scoreboard-io",
  title: "scoreboard-io.ca",
  startDate: "Jan 2017",
  endDate: "March 2017",
  tools: ["React", "Redux", "MUI"],
  image: scoreboardIoImg,
  writeup: [writeup],
  links: [
    { title: "Live Site", url: "https://scoreboard-io.ca" },
    {
      title: "GitHub",
      url: "https://github.com/CptnFizzbin/scoreboard-io",
    },
  ],
}
