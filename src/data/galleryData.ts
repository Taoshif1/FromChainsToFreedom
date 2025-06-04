// src/data/galleryData.ts

export interface GalleryItem {
  url: string;
  caption: string;
  year: string;
  category: 'language-movement' | 'political' | 'liberation-war' | string; // Allow for more categories if needed
}

export const galleryData: GalleryItem[] = [
  {
    url: "/images/LM1.png", // EXAMPLE: Replace with your actual image path
    caption: "Student protesters during the Language Movement in Dhaka",
    year: "1952",
    category: "language-movement"
  },
  {
    url: "/images/LM2.png", // EXAMPLE: Replace with your actual image path
    caption: "Gathering at the Shaheed Minar commemorating the Language Movement martyrs",
    year: "1956", // Or a relevant year for the ceremony photo
    category: "language-movement"
  },
  {
    url: "/images/SM1.png", // EXAMPLE: Replace with your actual image path
    caption: "Sheikh Mujibur Rahman addressing a political rally during the Six-Point Movement",
    year: "1966",
    category: "political"
  },
  {
    url: "/images/MU1.png", // EXAMPLE: Replace with your actual image path
    caption: "Mass rally during the 1969 uprising against the Ayub Khan regime",
    year: "1969",
    category: "political"
  },
  {
    url: "/images/SM2.png", // EXAMPLE: Replace with your actual image path
    caption: "Voters lining up at polling stations during the historic 1970 general election",
    year: "1970",
    category: "political"
  },
  {
    url: "/images/SM3.png", // EXAMPLE: Replace with your actual image path
    caption: "Crowd gathered at Race Course Ground to hear Sheikh Mujibur Rahman's historic March 7 speech",
    year: "1971",
    category: "political"
  },
  {
    url: "/images/KL1.png", // EXAMPLE: Replace with your actual image path
    caption: "Destruction in Dhaka following Operation Searchlight",
    year: "1971",
    category: "liberation-war"
  },
  {
    url: "/images/MU2.png", // EXAMPLE: Replace with your actual image path
    caption: "Mukti Bahini freedom fighters preparing for guerrilla operations",
    year: "1971",
    category: "liberation-war"
  },
  {
    url: "/images/MU3.png", // EXAMPLE: Replace with your actual image path
    caption: "Bengali refugees crossing into India during the Liberation War",
    year: "1971",
    category: "liberation-war"
  },
  {
    url: "/images/MU4.png", // EXAMPLE: Replace with your actual image path
    caption: "Indian troops advancing with tanks during the December 1971 war",
    year: "1971",
    category: "liberation-war"
  },
  {
    url: "/images/MU5.png", // EXAMPLE: Replace with your actual image path
    caption: "Pakistani General Niazi signing the Instrument of Surrender in Dhaka",
    year: "1971",
    category: "liberation-war"
  },
  {
    url: "/images/MU6.png", // EXAMPLE: Replace with your actual image path
    caption: "Celebrations in Dhaka following the victory in December 1971",
    year: "1971",
    category: "liberation-war"
  }
  // Add more images as needed
];
