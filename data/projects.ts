
export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  technologies: string[]
  liveDemoUrl?: string
  sourceCodeUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: "exolens-ai",
    title: "ExoLens AI",
    shortDescription:
      "An explainable exoplanet classification system with an astronomy assistant powered by an LLM.",
    description: `• Dataset: Used NASA's Kepler Objects of Interest (KOI) dataset containing 7,587 observations.
• Random Forest achieved a recorded accuracy of 91.66%.
• Logistic Regression achieved a recorded accuracy of 79.30%.
• Classified observations into Confirmed Planets and False Positives using planetary and stellar features.
• Integrated SHAP to explain model predictions and identify influential features.
• Built an interactive Streamlit dashboard for predictions and data visualisation.
• Integrated an astronomy chatbot using an LLM through OpenRouter.
• Model accuracy values are from recorded experiments; precision, recall, and F1-score are not included because verified values are not available here.`,
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Logistic Regression",
      "SHAP",
      "Streamlit",
      "LLMs",
      "OpenRouter",
    ],
    liveDemoUrl: "https://exolensai-mateena-sadaf.streamlit.app/",
    sourceCodeUrl: "https://github.com/mateenasadaf/ExoLensAI",
    imageUrl: "",
  },

  {
    id: "bank-fraud-detection",
    title: "SHAP Guard — Bank Fraud Detection",
    shortDescription:
      "An explainable fraud detection system using XGBoost, SHAP, and a transaction-monitoring dashboard.",
    description: `• Trained an XGBoost classifier on the PaySim mobile money transaction dataset, containing approximately 6.36 million transactions and 8,213 recorded fraud cases.
• Used transaction features to classify potentially fraudulent financial activity.
• Applied chronological train/test splitting to evaluate the model on later transaction periods.
• Integrated SHAP to explain predictions and identify features influencing fraud-risk estimates.
• Developed a FastAPI backend with prediction and explanation endpoints.
• Used SQLite to store transaction records and support transaction workflows.
• Built a Streamlit dashboard for interactive fraud checking and model explanations.
• Fraud detection metrics such as precision, recall, and F1-score should be added only from the verified evaluation results.`,
    technologies: [
      "Python",
      "XGBoost",
      "SHAP",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "FastAPI",
      "SQLite",
      "Streamlit",
    ],
    liveDemoUrl:
      "https://shap-guard-bank-fraud-detection-mateena-sadaf.streamlit.app/",
    sourceCodeUrl:
      "https://github.com/mateenasadaf/SHAP-Guard-Bank-Fraud-Detection",
    imageUrl: "",
  },

  {
    id: "poultry-project",
    title: "AI-Based Poultry Health Monitoring System",
    shortDescription:
      "A multimodal deep learning system for poultry disease detection, posture analysis, audio classification, and farm security.",
    description: `• Visual Disease Classification: Used an Xception CNN to classify poultry health conditions, achieving 94.35% test accuracy.
• Posture Analysis: Combined YOLOv8 Pose keypoint extraction with an MLP classifier using 16 geometric features; the paper's results section reports 96.5% accuracy.
• Audio Classification: Used 40 MFCC coefficients and a 2D CNN to classify poultry vocalisations. The methodology reports 85% test accuracy.
• Disease coverage includes Coccidiosis, CRD, Coryza, Newcastle Disease, Salmonellosis, Fowlpox, and Bumblefoot.
• Integrated image, posture, and audio analysis for multimodal poultry health monitoring.
• Added flock monitoring and farm-security alert capabilities.
• Treatment guidance is informational and should be verified by a qualified veterinarian.`,
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Xception CNN",
      "YOLOv8 Pose",
      "MLP",
      "CNN",
      "MFCC",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
    sourceCodeUrl:
      "https://github.com/mateenasadaf/poultry-disease-detection",
    imageUrl: "",
  },

  {
    id: "geo-insight-gpt",
    title: "Geo-Insight GPT",
    shortDescription:
      "An LLM-powered geospatial chatbot for analysing satellite imagery and exploring environmental and urban changes.",
    description: `• Converts natural-language questions into structured geospatial analysis tasks using an LLM.
• Analyses Sentinel-2 satellite imagery for vegetation, water, and urbanisation changes.
• Uses NDVI for vegetation analysis, MNDWI for water analysis, and NDBI for built-up area analysis.
• Retrieves satellite imagery through Microsoft Planetary Computer and filters scenes based on cloud cover and area-of-interest overlap.
• Processes satellite data using Python, Rasterio, NumPy, and scene-classification masking.
• Uses FastAPI for backend APIs and Next.js, React, and TypeScript for the frontend.
• Integrates OpenRouter for query planning and natural-language reporting.
• Presents analysis progress and results through an interactive interface.`,
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "LLMs",
      "OpenRouter",
      "Microsoft Planetary Computer",
      "Sentinel-2",
      "Rasterio",
      "NumPy",
      "NDVI",
      "MNDWI",
      "NDBI",
    ],
    sourceCodeUrl: "https://github.com/mateenasadaf/geo-Insight-GPT",
    imageUrl: "",
  },

  {
    id: "urbaninfra",
    title: "UrbanInfra",
    shortDescription:
      "A geospatial urban-planning application combining population raster data, interactive maps, and location search.",
    description: `• Processed WorldPop population raster data for Bengaluru and prepared a city-specific raster for map-based analysis.
• Developed a Flask backend with health-check, location-autocomplete, and recommendation endpoints.
• Integrated LocationIQ for location search with Nominatim as a fallback.
• Built an interactive Leaflet.js map for exploring geospatial data and location-based insights.
• Used bounding-box filtering to focus analysis on Bengaluru.
• Supports location-aware exploration of population data for urban-planning use cases.`,
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "Leaflet.js",
      "Geospatial Data",
      "Raster Data",
      "WorldPop",
      "LocationIQ",
      "OpenStreetMap",
      "Nominatim",
    ],
    sourceCodeUrl:
      "https://github.com/mateenasadaf/UrbanInfra-Smart_Urban_Infrastructure_Analysis",
    imageUrl: "",
  },
]
