export type SkillProficiency = "basic" | "intermediate" | "expert"

export interface Skill {
  id: string
  name: string
  category: string
  proficiency: SkillProficiency
}

export const skills: Skill[] = [
  // Programming languages Languages & Core Concepts
  { id: "java", name: "Java", category: "Programming languages", proficiency: "expert" },
  { id: "sql", name: "SQL", category: "Programming languages", proficiency: "expert" },
  { id: "oops", name: "OOP", category: "Programming languages", proficiency: "expert" },
  { id: "dsa", name: "DSA", category: "Programming languages", proficiency: "intermediate" },
  { id: "python", name: "Python", category: "Programming languages", proficiency: "intermediate" },

  // Artificial Intelligence & Machine Learning
  { id: "machine-learning", name: "Machine Learning", category: "AI/ML", proficiency: "expert" },
  { id: "deep-learning", name: "Deep Learning", category: "AI/ML", proficiency: "expert" },
  { id: "llms", name: "Large Language Models (LLMs)", category: "AI/ML", proficiency: "intermediate" },
  { id: "transformers", name: "Transformers", category: "AI/ML", proficiency: "intermediate" },
  { id: "llm-fine-tuning", name: "LLM Fine-Tuning", category: "AI/ML", proficiency: "intermediate" },
  { id: "rag", name: "Retrieval-Augmented Generation (RAG)", category: "AI/ML", proficiency: "intermediate" },
  { id: "langchain", name: "LangChain", category: "AI/ML", proficiency: "basic" },

  // Data Science & ML Libraries
  { id: "pandas", name: "Pandas", category: "Python libraries", proficiency: "expert" },
  { id: "numpy", name: "NumPy", category: "Python libraries", proficiency: "expert" },
  { id: "matplotlib", name: "Matplotlib", category: "Python libraries", proficiency: "expert" },
  { id: "scikit-learn", name: "Scikit-learn", category: "Python libraries", proficiency: "intermediate" },
  { id: "tensorflow", name: "TensorFlow", category: "Python libraries", proficiency: "intermediate" },

  // Frontend Development
  { id: "html", name: "HTML", category: "Frontend", proficiency: "expert" },
  { id: "css", name: "CSS", category: "Frontend", proficiency: "intermediate" },
  { id: "javascript", name: "JavaScript", category: "Frontend", proficiency: "basic" },

  // Cloud, Tools & Platforms
  { id: "colab", name: "Google Colab", category: "Cloud & Tools", proficiency: "expert" },
  { id: "jupyter", name: "Jupyter Notebook", category: "Cloud & Tools", proficiency: "expert" },
  { id: "vscode", name: "Visual Studio Code", category: "Cloud & Tools", proficiency: "intermediate" },
  { id: "aws-s3", name: "AWS S3", category: "Cloud & Tools", proficiency: "basic" },
  { id: "aws-ec2", name: "AWS EC2", category: "Cloud & Tools", proficiency: "basic" },
  { id: "github", name: "GitHub", category: "Cloud & Tools", proficiency: "intermediate" },

  // Professional Skills
  { id: "leadership", name: "Leadership", category: "Professional", proficiency: "expert" },
  { id: "analytical-thinking", name: "Analytical Thinking", category: "Professional", proficiency: "expert" },
  { id: "time-management", name: "Time Management", category: "Professional", proficiency: "expert" },
  { id: "adaptability", name: "Adaptability", category: "Professional", proficiency: "expert" },
  { id: "communication", name: "Communication", category: "Professional", proficiency: "expert" },
]