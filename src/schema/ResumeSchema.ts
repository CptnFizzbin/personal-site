export interface ResumeSchema {
  /**
   * Contact information
   */
  contact: {
    email: string
    linkedIn: string
    gitHub: string
  }

  /**
   * General overview of who I am
   */
  profile: string[]

  /**
   * Previous jobs held
   */
  experience: Experience[]

  /**
   * My schooling and education
   */
  education: Education[]

  /**
   * Side projects that I've worked on
   */
  projects: Project[]

  /**
   * list of skills with years of experience
   */
  skills: Skill[]

  /**
   * List of general tools that I have used previously
   */
  tools: string[]

  /**
   * Additional descriptions of what I do outside of work
   */
  life: string[]

  /**
   * Hobbies and interests that I have
   */
  interests: string[]
}

export interface Skill {
  name: string
  years: number
}

export interface Experience {
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Education {
  title: string
  organization: string
  startDate: string
  endDate: string
  awards: string[]
}

export interface Project {
  id: string
  title: string
  startDate: string
  endDate: string
  writeup: string[]
  image: string
  tools: string[]
  links: Array<{
    title: string
    url: string
  }>
}
