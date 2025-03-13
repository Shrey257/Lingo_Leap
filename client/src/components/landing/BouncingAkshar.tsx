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
  language: "hindi" | "marathi" | "punjabi";
  glowIntensity: number;
}

export function BouncingAkshar() {
  const [aksharElements, setAksharElements] = useState<AksharProps[]>([]);
  
  // Hindi characters
  const hindiAkshar = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'
  ];
  
  // Marathi characters (including special characters)
  const marathiAkshar = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'ळ', 'व', 'श', 'ष', 'स', 'ह'
  ];
  
  // Punjabi characters (Gurmukhi)
  const punjabiAkshar = [
    'ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ', 'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ',
    'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ',
    'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ',
    'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ', 'ਸ਼', 'ਖ਼', 'ਗ਼', 'ਜ਼', 'ਫ਼'
  ];
  
  // Language-specific colors
  const languageColors = {
    hindi: ["#FF5722", "#E91E63", "#9C27B0", "#673AB7"],     // Orange to purple spectrum
    marathi: ["#2196F3", "#03A9F4", "#00BCD4", "#009688"],   // Blue to teal spectrum
    punjabi: ["#FFC107", "#FF9800", "#FF5722", "#F44336"]    // Yellow to red spectrum
  };
  
  // Animation patterns
  const animationPatterns = [
    // Wavy pattern
    (x: number, y: number) => ({
      y: [`${y}vh`, `${(y + 15) % 100}vh`, `${y}vh`],
      x: [`${x}vw`, `${(x + 10) % 100}vw`, `${x}vw`],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1]
    }),
    // Spiral pattern
    (x: number, y: number) => ({
      y: [`${y}vh`, `${(y + 20) % 100}vh`, `${(y + 10) % 100}vh`, `${y}vh`],
      x: [`${x}vw`, `${(x + 10) % 100}vw`, `${(x - 10 + 100) % 100}vw`, `${x}vw`],
      rotate: [0, 180, 270, 360],
      scale: [1, 1.4, 1.2, 1]
    }),
    // Pulse pattern
    (x: number, y: number) => ({
      y: [`${y}vh`, `${(y + 5) % 100}vh`, `${y}vh`],
      x: [`${x}vw`, `${x}vw`, `${x}vw`],
      rotate: [0, 15, 0, -15, 0],
      scale: [1, 1.5, 1.3, 1.5, 1]
    })
  ];
  
  useEffect(() => {
    // Generate random positions, sizes, and delays for each akshar
    const elements: AksharProps[] = [];
    const totalElements = 60; // Increased number of floating akshar
    
    // Determine how many of each language to show
    const hindiCount = Math.floor(totalElements * 0.4); // 40%
    const marathiCount = Math.floor(totalElements * 0.3); // 30% 
    const punjabiCount = totalElements - hindiCount - marathiCount; // 30%
    
    // Create Hindi elements
    for (let i = 0; i < hindiCount; i++) {
      const randomAkshar = hindiAkshar[Math.floor(Math.random() * hindiAkshar.length)];
      const randomColor = languageColors.hindi[Math.floor(Math.random() * languageColors.hindi.length)];
      
      elements.push({
        character: randomAkshar,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.floor(Math.random() * 40) + 25, // slightly larger
        delay: Math.random() * 8,
        duration: Math.random() * 15 + 15, // longer animations
        color: randomColor,
        language: "hindi",
        glowIntensity: Math.random() * 10 + 5 // random glow intensity
      });
    }
    
    // Create Marathi elements
    for (let i = 0; i < marathiCount; i++) {
      const randomAkshar = marathiAkshar[Math.floor(Math.random() * marathiAkshar.length)];
      const randomColor = languageColors.marathi[Math.floor(Math.random() * languageColors.marathi.length)];
      
      elements.push({
        character: randomAkshar,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.floor(Math.random() * 35) + 20,
        delay: Math.random() * 8,
        duration: Math.random() * 15 + 15,
        color: randomColor,
        language: "marathi",
        glowIntensity: Math.random() * 10 + 5
      });
    }
    
    // Create Punjabi elements
    for (let i = 0; i < punjabiCount; i++) {
      const randomAkshar = punjabiAkshar[Math.floor(Math.random() * punjabiAkshar.length)];
      const randomColor = languageColors.punjabi[Math.floor(Math.random() * languageColors.punjabi.length)];
      
      elements.push({
        character: randomAkshar,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.floor(Math.random() * 38) + 22,
        delay: Math.random() * 8,
        duration: Math.random() * 15 + 15,
        color: randomColor,
        language: "punjabi",
        glowIntensity: Math.random() * 10 + 5
      });
    }
    
    setAksharElements(elements);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {aksharElements.map((akshar, index) => {
        // Choose a random animation pattern
        const animationPattern = animationPatterns[Math.floor(Math.random() * animationPatterns.length)];
        const animate = animationPattern(akshar.x, akshar.y);
        
        return (
          <motion.div
            key={index}
            className="absolute font-bold"
            initial={{ 
              x: `${akshar.x}vw`, 
              y: `${akshar.y}vh`,
              fontSize: `${akshar.size}px`,
              color: akshar.color,
              textShadow: `0 0 ${akshar.glowIntensity}px ${akshar.color}`
            }}
            animate={animate}
            transition={{
              duration: akshar.duration,
              delay: akshar.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.8,
              textShadow: `0 0 ${akshar.glowIntensity * 2}px ${akshar.color}`,
              transition: { duration: 0.3 }
            }}
          >
            {akshar.character}
          </motion.div>
        );
      })}
      
      {/* Add Language labels */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 bg-black/10 backdrop-blur-sm p-3 rounded-lg z-10 opacity-70 hover:opacity-90 transition-opacity">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: languageColors.hindi[0] }}></span>
          <span className="text-xs font-medium">Hindi</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: languageColors.marathi[0] }}></span>
          <span className="text-xs font-medium">Marathi</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: languageColors.punjabi[0] }}></span>
          <span className="text-xs font-medium">Punjabi</span>
        </div>
      </div>
    </div>
  );
}