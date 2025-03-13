import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AksharProps {
  character: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export function BouncingAkshar() {
  const [aksharElements, setAksharElements] = useState<AksharProps[]>([]);
  
  // Hindi and Marathi characters
  const hindiAkshar = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'
  ];
  
  const marathiAkshar = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'ळ', 'व', 'श', 'ष', 'स', 'ह'
  ];
  
  // Combine Hindi and Marathi characters (avoiding duplicates manually)
  const allAkshar: string[] = [];
  
  // Add all Hindi akshar
  hindiAkshar.forEach(char => {
    if (!allAkshar.includes(char)) {
      allAkshar.push(char);
    }
  });
  
  // Add unique Marathi akshar
  marathiAkshar.forEach(char => {
    if (!allAkshar.includes(char)) {
      allAkshar.push(char);
    }
  });
  
  // Colors for the akshar
  const colors = [
    "#4F46E5", // primary
    "#10B981", // green
    "#F59E0B", // amber
    "#EC4899", // pink
    "#8B5CF6", // purple
    "#3B82F6", // blue
  ];
  
  useEffect(() => {
    // Generate random positions, sizes, and delays for each akshar
    const elements: AksharProps[] = [];
    const maxElements = 40; // Number of floating akshar
    
    for (let i = 0; i < maxElements; i++) {
      const randomAkshar = allAkshar[Math.floor(Math.random() * allAkshar.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      elements.push({
        character: randomAkshar,
        x: Math.random() * 100, // random x position (0-100%)
        y: Math.random() * 100, // random y position (0-100%)
        size: Math.floor(Math.random() * 40) + 20, // random size (20-60px)
        delay: Math.random() * 5, // random delay (0-5s)
        duration: Math.random() * 10 + 10, // random duration (10-20s)
        color: randomColor
      });
    }
    
    setAksharElements(elements);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {aksharElements.map((akshar, index) => (
        <motion.div
          key={index}
          className="absolute font-bold opacity-30"
          initial={{ 
            x: `${akshar.x}vw`, 
            y: `${akshar.y}vh`,
            fontSize: `${akshar.size}px`,
            color: akshar.color
          }}
          animate={{ 
            y: [`${akshar.y}vh`, `${Math.random() * 100}vh`, `${akshar.y}vh`],
            x: [`${akshar.x}vw`, `${(akshar.x + 20) % 100}vw`, `${akshar.x}vw`],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: akshar.duration,
            delay: akshar.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {akshar.character}
        </motion.div>
      ))}
    </div>
  );
}