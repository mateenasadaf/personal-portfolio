
export interface Certification {
  id: string
  title: string
  issuer?: string
  issuedOn?: string
  credentialId?: string
  certificateUrl?: string
  skills?: string[]
}

export const certifications: Certification[] = [
  {
    id: "foundations-data-everywhere",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google - Coursera",
    certificateUrl:
      "https://coursera.org/share/078229d359ac1c6b60cc2f72b059ad57",
    skills: [
      "Data Analytics",
      "Data-Driven Decision Making",
      "Data Collection",
      "Data Ethics",
      "Data Lifecycle",
    ],
  },
  {
    id: "writing-prompts-like-a-pro",
    title: "Start Writing Prompts Like a Pro",
    issuer: "Google - Coursera",
    certificateUrl:
      "https://coursera.org/share/ecb8a65c54dfff6eaecb925fd4407045",
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "LLM Interaction",
      "Instruction Design",
      "Prompt Refinement",
    ],
  },
  {
    id: "data-science-for-engineers",
    title: "Data Science for Engineers",
    issuer: "NPTEL",
    certificateUrl:
      "https://www.linkedin.com/in/mateena-sadaf/overlay/Certifications/2088251412/treasury/?profileId=ACoAAFNL9aoBxG3s6-si7MlNQ5GkhNo9de_YxB0",
    skills: [
      "Data Science",
      "Statistical Analysis",
      "Data Preprocessing",
      "Machine Learning Fundamentals",
      "Data Visualization",
    ],
  },
  {
    id: "introduction-machine-learning",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    certificateUrl:
      "https://www.linkedin.com/in/mateena-sadaf/overlay/Certifications/2088677917/treasury/?profileId=ACoAAFNL9aoBxG3s6-si7MlNQ5GkhNo9de_YxB0",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Predictive Modeling",
    ],
  },
  {
    id: "introduction-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Duke University",
    certificateUrl:
      "https://coursera.org/share/2e192be69590fc0d971f36c46438d030",
    skills: [
      "Generative AI",
      "Large Language Models",
      "AI Applications",
      "Generative AI Fundamentals",
      "Responsible AI",
    ],
  },
  {
    id: "building-rag-apps-mongodb",
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    certificateUrl:
      "https://www.credly.com/badges/ce0275f4-4ae9-4f57-b64b-35c92f283c3b/linked_in_profile",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "MongoDB",
      "Vector Search",
      "Semantic Search",
      "LLM Application Development",
    ],
  },
  {
    id: "building-ai-agents-mongodb",
    title: "Building AI Agents with MongoDB",
    issuer: "MongoDB",
    certificateUrl:
      "https://www.credly.com/badges/352aeae7-8324-4ae0-8f4f-5780172076aa/linked_in_profile",
    skills: [
      "AI Agents",
      "Agentic AI",
      "LLM Integration",
      "Tool Calling",
      "MongoDB Integration",
    ],
  },
  {
    id: "infosys-introduction-r",
    title: "Infosys Certified: Introduction to R",
    issuer: "Infosys Springboard",
    certificateUrl:
      "https://www.linkedin.com/in/mateena-sadaf/overlay/Certifications/358394410/treasury/?profileId=ACoAAFNL9aoBxG3s6-si7MlNQ5GkhNo9de_YxB0",
    skills: [
      "R Programming",
      "Data Analysis",
      "Statistical Computing",
      "Data Manipulation",
      "Data Visualization",
    ],
  },
  {
    id: "docker-training",
    title: "Docker Training",
    issuer: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
    certificateUrl:
      "https://www.linkedin.com/in/mateena-sadaf/overlay/Certifications/358586216/treasury/?profileId=ACoAAFNL9aoBxG3s6-si7MlNQ5GkhNo9de_YxB0",
    skills: [
      "Docker",
      "Containerization",
      "Docker Images",
      "Containers",
      "Container-Based Development",
    ],
  },
  {
    id: "git-training",
    title: "Certificate for the Completion of Git Training",
    issuer: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
    certificateUrl:
      "https://www.linkedin.com/in/mateena-sadaf/overlay/Certifications/1001439053/treasury/?profileId=ACoAAFNL9aoBxG3s6-si7MlNQ5GkhNo9de_YxB0",
    skills: [
      "Git",
      "Version Control",
      "Commits",
      "Branching",
      "Repository Management",
    ],
  },
]
