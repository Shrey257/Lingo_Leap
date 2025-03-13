import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { HindiQuiz } from "../quiz/HindiQuiz";
import { useToast } from "@/hooks/use-toast";

interface Language {
  name: string;
  nativeName: string;
  color: string;
  character: string;
  backgroundColor: string;
}

export function LanguagePills() {
  const [showHindiQuiz, setShowHindiQuiz] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleLanguageClick = (language: string) => {
    setActiveLanguage(language);
    
    if (language === "Hindi") {
      setShowHindiQuiz(true);
    } else {
      toast({
        title: `${language} Quiz Coming Soon!`,
        description: `The ${language} quiz is currently being developed. Check back soon!`,
        duration: 3000,
      });
    }
  };
  
  const languages: Language[] = [
    { 
      name: "Hindi", 
      nativeName: "हिन्दी", 
      color: "#FF5722", 
      character: "ह", 
      backgroundColor: "from-[#FF5722]/10 to-[#FF5722]/30" 
    },
    { 
      name: "Marathi", 
      nativeName: "मराठी", 
      color: "#2196F3", 
      character: "म", 
      backgroundColor: "from-[#2196F3]/10 to-[#2196F3]/30" 
    },
    { 
      name: "Punjabi", 
      nativeName: "ਪੰਜਾਬੀ", 
      color: "#FFC107", 
      character: "ਪ", 
      backgroundColor: "from-[#FFC107]/10 to-[#FFC107]/30" 
    },
    { 
      name: "Bengali", 
      nativeName: "বাংলা", 
      color: "#9C27B0", 
      character: "ব", 
      backgroundColor: "from-[#9C27B0]/10 to-[#9C27B0]/30" 
    },
    { 
      name: "Gujarati", 
      nativeName: "ગુજરાતી", 
      color: "#4CAF50", 
      character: "ગ", 
      backgroundColor: "from-[#4CAF50]/10 to-[#4CAF50]/30" 
    },
    { 
      name: "Tamil", 
      nativeName: "தமிழ்", 
      color: "#F44336", 
      character: "த", 
      backgroundColor: "from-[#F44336]/10 to-[#F44336]/30" 
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Create Projects in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] via-[#2196F3] to-[#FFC107]">Indian Languages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build your language learning projects in any of these Indian languages and many more. Perfect for students, educators, and language enthusiasts.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className={`bg-gradient-to-br ${language.backgroundColor} px-6 py-4 rounded-xl shadow-lg flex items-center font-accent hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 25px -5px ${language.color}40`
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              variants={fadeIn("up", "tween", 0.05 * index, 0.5)}
              onClick={() => handleLanguageClick(language.name)}
            >
              {/* Character Bubble with hover animation */}
              <div className="relative mr-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-inner transform transition-all group-hover:scale-110 z-10 relative overflow-hidden"
                  style={{ backgroundColor: language.color }}
                >
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: -30 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {language.character}
                  </motion.span>
                  <motion.span
                    className="absolute"
                    initial={{ y: 30 }}
                    whileHover={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {language.nativeName.charAt(0)}
                  </motion.span>
                </div>
                {/* Radiating circles animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ border: `2px solid ${language.color}` }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold group-hover:text-transparent group-hover:bg-clip-text" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${language.color}, ${language.color}aa)`,
                    transition: 'all 0.3s ease'
                  }}>
                  {language.name}
                </span>
                <span className="text-sm">{language.nativeName}</span>
              </div>
              
              {/* Background decoration with animation */}
              <motion.span 
                className="absolute -right-4 -top-4 text-7xl opacity-10 font-bold"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                style={{ color: language.color }}
              >
                {language.character}
              </motion.span>
              
              {/* "Click to start quiz" tooltip on hover */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="bg-white py-2 px-4 rounded-full shadow-md text-xs font-medium">
                  Click to start quiz
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          <motion.div
            className="bg-gradient-to-br from-gray-900/10 to-gray-900/30 p-4 rounded-xl shadow-lg flex items-center font-accent hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group border border-transparent hover:border-gray-400/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px -10px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => toast({
              title: "More Languages Coming Soon!",
              description: "We're adding more Indian languages to our platform. Stay tuned!",
              duration: 3000,
            })}
            variants={fadeIn("up", "tween", 0.05 * languages.length, 0.5)}
          >
            {/* Plus icon with animated effect */}
            <div className="relative mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-white font-bold text-2xl shadow-inner group-hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-110 z-10">
                <motion.span
                  animate={{ 
                    rotateZ: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  +
                </motion.span>
              </div>
              
              {/* Radiating circles */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{ border: "2px solid rgba(0,0,0,0.3)" }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Content with subtle animation */}
            <div className="flex flex-col items-start">
              <motion.span 
                className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                15+ More
              </motion.span>
              <span className="text-sm group-hover:text-gray-700 transition-colors">Indian Languages</span>
            </div>
            
            {/* Background decorations */}
            <div className="absolute right-0 bottom-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
              <motion.div
                className="absolute font-bold text-9xl text-gray-800 right-[-20px] bottom-[-30px]"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -15 }}
                animate={{ 
                  rotate: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                +
              </motion.div>
            </div>
            
            {/* Mini floating characters */}
            <div className="absolute left-20 top-1 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
              <span className="text-xs">অ</span>
            </div>
            <div className="absolute left-24 bottom-2 opacity-0 group-hover:opacity-70 transition-opacity duration-500 delay-100">
              <span className="text-xs">ଓ</span>
            </div>
            <div className="absolute left-28 top-3 opacity-0 group-hover:opacity-70 transition-opacity duration-500 delay-200">
              <span className="text-xs">ಕ</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {showHindiQuiz && <HindiQuiz isOpen={showHindiQuiz} onClose={() => setShowHindiQuiz(false)} />}
    </section>
  );
}