export interface Hackathon {
  id: string
  title: string
  eventDescription?: string
  problemStatement?: string
  projectDetails?: string
  contribution?: string
  technologies?: string[]
  achievements?: string[]
  projectUrl?: string
  certificateUrl?: string
}

export const hackathons: Hackathon[] = [
  {
    id: "browser-check-hackathon",
    title: "Temporary Hackathon Check",
    eventDescription: "Temporary event text used only to verify the hackathon detail view.",
    problemStatement: "Temporary problem field.",
    projectDetails: "Temporary project field.",
    contribution: "Temporary contribution field.",
    technologies: ["TypeScript"],
    projectUrl: "",
    certificateUrl: "",
  },
  // Copy and edit this example. Keep fields empty or omit them when details or links are unavailable.
  // {
  //   id: "hackathon-id",
  //   title: "Event or hackathon title",
  //   eventDescription: "Event description.",
  //   problemStatement: "Problem the team addressed.",
  //   projectDetails: "Project overview and solution.",
  //   contribution: "Your contribution.",
  //   technologies: ["Technology one", "Technology two"],
  //   achievements: ["Verified achievement, if any"],
  //   projectUrl: "",
  //   certificateUrl: "",
  // },
]
