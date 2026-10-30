
export interface Publication {
  id: string
  title: string
  shortDescription: string
  abstract?: string
  venue?: string
  publishedAt?: string
  paperUrl?: string
  certificateUrl?: string
}

export const publications: Publication[] = [
  {
    id: "multimodal-poultry-health-monitoring",
    title:
      "Multimodal Deep Learning Framework for Automated Poultry Disease Detection and Farm Security Monitoring",
    shortDescription:
      "A multimodal deep learning framework for poultry disease detection, posture analysis, audio-based health monitoring, and farm security.",
    abstract:
  "• Visual Disease Classification: Xception CNN achieved 97.8% training accuracy and 94.35% test accuracy, with YOLOv8 providing approximately 30 FPS for bird detection.\n• Posture Analysis: Pose estimation with an MLP classifier achieved 96.5% accuracy.\n• Audio-Based Health Classification: The methodology reports 95% training accuracy and 85% test accuracy, while the results section reports 89.2% accuracy.\n• Multimodal Monitoring: Integrates visual, posture, and audio analysis for poultry health assessment.\n• Farm Security: Supports flock counting, health monitoring, and security alerts for potential threats.",
    venue:
      "Second International Conference on Computational Intelligence and Soft Computing (CISCom 2026)",
    publishedAt: "October 14–16, 2026",
    paperUrl: "",
    certificateUrl: "https://drive.google.com/file/d/1uiO0ujXSCxXH7WzKpfQwkWafiPoj3Gd1/view?usp=drivesdk",
  },
]
