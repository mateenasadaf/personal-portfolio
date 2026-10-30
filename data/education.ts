export interface EducationEntry {
  id: string
  institution: string
  qualification: string
  duration: string
  location?: string
  result?: string
}

export const education: EducationEntry[] = [
  {
    id: "new-horizon-college-of-engineering",
    institution: "New Horizon College of Engineering",
    qualification: "B.E. – Artificial Intelligence and Machine Learning (AIML)",
    duration: "October 2023 – Present",
    location: "Bangalore, India",
    result: "CGPA: 9.17 up to Semester 6",
  },
  {
    id: "st-charles-womens-pu-college",
    institution: "St. Charles Women’s PU College",
    qualification: "2nd year Pre-University Education (2nd PUC)",
    duration: "June 2022 – May 2023",
    location: "Bangalore, India",
    result: "Percentage: 93.67%",
  },
  {
    id: "royal-public-school",
    institution: "Royal Public School",
    qualification: "SSLC",
    duration: "May 2020 – March 2021",
    location: "Bangalore, India",
    result: "Percentage: 91.04%",
  },
]

// The three entries above are the displayed education history. Example shape for an optional future entry:
// { id: "education-id", institution: "Institution name", qualification: "Qualification", duration: "Start – End", location: "City, Country", result: "Grade or CGPA" },
