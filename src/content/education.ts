export type EducationEntry = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  logo?: string;
  keyAreas: string[];
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "M.Sc.",
    field: "Data Science and Business Analytics",
    institution: "Rathinam Global University",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2025 – 2027 (Expected)",
    grade: "CGPA: 8.7",
    logo: "/img/RGU.png",
    keyAreas: [
      "Data Science",
      "Business Analytics",
      "Machine Learning",
      "Databricks & Big Data",
      "Statistical Modeling",
    ],
  },
  {
    degree: "B.Sc.",
    field: "Information Technology",
    institution: "Hindustan College of Arts and Science",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2021 – 2024",
    grade: "CGPA: 7.2",
    logo: "/img/Hicas.png",
    keyAreas: [
      "Programming Fundamentals",
      "Database Systems",
      "Web Technologies",
      "Software Engineering",
      "Networking",
    ],
  },
];
